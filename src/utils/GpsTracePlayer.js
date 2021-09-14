import request from '@/utils/request';

const { BMapGL } = window;

const getRotation = function (map, curPos, targetPos) {
  let deg = 0;
  const curPosPx = map.pointToPixel(curPos);
  const targetPosPx = map.pointToPixel(targetPos);
  if (targetPosPx.x !== curPosPx.x) {
    const tan = (targetPosPx.y - curPosPx.y) / (targetPosPx.x - curPosPx.x);
    const atan = Math.atan(tan);
    deg = (atan * 360) / (2 * Math.PI);
    if (targetPosPx.x < curPosPx.x) {
      deg = -deg + 90 + 90;
    } else {
      deg = -deg;
    }
    return -deg;
  }
  const disy = targetPosPx.y - curPosPx.y;
  let bias = 0;
  if (disy > 0) bias = -1;
  else bias = 1;
  return -bias * 90;
};

const groupItemsToDate = function (data, __k) {
  const result = { start: null, end: null };
  const array = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].__k === __k) {
      array.push(data[i]);
    }
  }
  result.start = array[0].gpsTimeStr;
  result.end = array[array.length - 1].gpsTimeStr;
  return result;
};

/**
 * GPS轨迹回放类
 *
 * @param map
 * @param options
 * options 主要参数有 requestUrl 请求数据的后台URL
 * playingHandler    正在播放时的处理函数，由调用者回调；用于处理开始播放后的一些逻辑；
 * playPauseHandler  暂停播放时的处理函数，由调用者回调；用于处理暂停播放后的一些逻辑；
 * playStopHandler   停止播放时的处理函数，由调用者回调；用于处理结束播放后的一些逻辑；
 */
const GpsTracePlayer = function (map, options) {
  this.__map = map;
  this.__requestUrl = options.requestUrl;
  this.__playingHandler = options.playingHandler;
  this.__playPauseHandler = options.playPauseHandler;
  this.__playStopHandler = options.playStopHandler;
  this.__waittingHandler = options.waitingHandler;
  this.__errorHandler = options.errorHandler;
  this.__noPointHandler = options.noPointHandler;
  this.__requestDataSuccessHandler = options.requestDataSuccessHandler;
  this.__afterMovePositionHandler = options.afterMovePositionHandler;
  this.__from = null;
  this.__to = null;
  this.__type = 2;
  this.__freq = 60;
  this.__uuid = null;
  this.__requestResultPoints = [];
  this.__polyLine = [];
  // this.__lastReqestResultPoint = null;
  this.__lastPolyLinePoint = null;
  this.__needRequest = false;
  this.__requestDataTimes = 0;
  this.__originPoint = null;
  this.__playMarker = null;
  this.__playMarkerLabel = null;
  this.__state = 'none'; // none playing pause stop;
  this.__stopMarkerClikeHandler = options.stopMarkerClikeHandler;
  this.__totalHandler = options.totalHandler;
  this.__playLineClikeHandler = options.playLineClikeHandler;
  this.__playLine = [];
  // 途径点信息
  this.__workPlace = [];
  // 作业信息
  this.__workInfo = [];

  // 新增
  this.__gId = null;
  this.__transportType = null;
  this.__Timer = null;
  this.__carInPlantLabel = null;
  this.__stopShowCarMarkerLabelTime = 3000;
  // 暂停播放提示信息弹窗
  this.__stopPlayTips = options.stopPlayTips;
};

/**
 * 开始播放；
 * @param from  起始时间；
 * @param to    结束时间；
 * @param freq  播放频率；
 */
GpsTracePlayer.prototype.start = function (code, from, to, freq, type, name, uuid, gId, transportType) {
  // if (from === '' || to === '') {
  //   return this.onError('开始和结束时间不能为空');
  // }
  // const timeDiff = (to - from) / 1000; // 起始时间与结束时间的间隔秒；
  // if (timeDiff <= 0) {
  //   return this.onError('结束时间不能小于或等于开始时间');
  // }
  // // this.__entity = entity;
  // this.__code = code;
  // this.__name = name;
  // this.__from = from;
  // this.__to = to;
  // this.__type = type;
  // this.__freq = freq;
  // this.__uuid = uuid;
  // this.__gId = gId;
  // this.__transportType = transportType;
  this.clear();
  this.requestData(this);
};

GpsTracePlayer.prototype.clear = function () {
  if (this.__playMarker != null) {
    this.__map.removeOverlay(this.__playMarker);
    this.__map.removeOverlay(this.__playMarkerLabel);
  }
  if (this.__polyLine != null && this.__polyLine.length > 0) {
    this.__polyLine.forEach((val, index) => {
      this.__map.removeOverlay(val);
    });
    this.__polyLine = [];
  }

  const ovs = this.__map.getOverlays();
  for (let i = 0; i < ovs.length; i++) {
    if (ovs[i].__marker && ovs[i].__marker === 'true') {
      this.__map.removeOverlay(ovs[i]);
    }
  }

  if (this.__playLine != null && this.__playLine.length > 0) {
    this.__playLine.forEach((val, index) => {
      this.__map.removeOverlay(val);
    });
    this.__playLine = [];
  }

  // 2020年08月19日 add 清空定时器
  // eslint-disable-next-line no-console
  // console.log(this.__Timer, 'this.__Timer 清空定时器')
  this.__Timer && clearTimeout(this.__Timer);
};

/**
 *
 * @param player 因为闭包的原因，需要此类的实例(this)作为参数；
 */
GpsTracePlayer.prototype.requestData = function (player) {
  const me = this;
  const from = me.__from;
  const to = me.__to;
  const type = me.__type;
  const uuid = me.__uuid || null;
  const gid = me.__gId || null;
  const transportType = me.__transportType || null;
  let param = {};

  if (type === 1) {
    param = {
      beginDate: from,
      endDate: to,
      objType: type,
      objId: uuid,
    };
  } else {
    param = {
      beginDate: from,
      endDate: to,
      objType: type,
      objId: uuid,
      subObjType: 1,
      garbageTypeId: gid,
      transportType,
    };
  }
  this.onWaitting();
  request({
    url: this.__requestUrl,
    method: 'post',
    data: param,
  }).then((a) => {
    const result = a.data;
    if (me.__totalHandler) {
      me.__totalHandler(result.total);
    }
    // console.log(result);
    player.__needRequest = result.needRequest;
    player.__from = result.from;
    player.__to = result.to;
    player.__type = type;
    player.__workPlace = result.workPlace;
    player.__workInfo = result.workInfo;

    if (result.gpsPoints && result.gpsPoints.length > 0) {
      const poly = [];
      for (let i = 0; i < result.gpsPoints.length; i++) {
        poly.push(
          new BMapGL.Point(result.gpsPoints[i].lng, result.gpsPoints[i].lat),
        );
      }

      this.__map.setViewport(poly);

      // 绘制起点overlay;
      player.__polyLine = poly;
      player.__requestResultPoints = result.gpsPoints;
      player.__index = 0;
      player.__originPoint = poly[player.__index];
      player.__lastPolyLinePoint = poly[poly.length - 1];
      if (player.__requestDataTimes === 0) {
        // 第一次请求数据时创建标注；第2次则不必创建
        let carIcon;
        if (player.__type === 2) {
          carIcon = new BMapGL.Icon(
            require('@/assets/map/car_play.png'),
            new BMapGL.Size(52, 26),
          );
        } else {
          carIcon = new BMapGL.Icon(
            require('@/assets/map/people_play.gif'),
            new BMapGL.Size(52, 40),
          );
        }

        player.__playMarker = new BMapGL.Marker(player.__originPoint, {
          icon: carIcon,
        });

        player.__playMarkerLabel = new BMapGL.Label(
          player.createMarkerLabel(
            result.gpsPoints[player.__index],
            player.__type,
          ),
          {
            offset: new BMapGL.Size(43, -50),
          },
        );
        // new 设置信息框内容
        player.__playMarkerLabel.setStyle({
          zIndex: 99999,
          border: '1px solid rgb(19 169 106)',
          padding: '6px',
          borderRadius: '4px',
        });

        player.__playMarker.setLabel(player.__playMarkerLabel);
        this.__map.addOverlay(player.__playMarker);
        let startPoint;
        if (player.__type === 2) {
          startPoint = new BMapGL.Marker(player.__originPoint, {
            icon: new BMapGL.Icon(
              require('@/assets/map/start_point.png'),
              new BMapGL.Size(26, 38),
            ),
          }); // 38
        } else {
          startPoint = new BMapGL.Marker(player.__originPoint, {
            icon: new BMapGL.Icon(
              require('@/assets/map/start_point.png'),
              new BMapGL.Size(26, 38),
            ),
          });
        }
        startPoint.__marker = 'true';
        this.__map.addOverlay(startPoint);
      }
      player.__requestDataTimes++; // 标记请求服务端的次数，用于第2次请求服务端时的逻辑处理；

      player.playTrace(player);

      me.onPlaying();
      const gpsPoints = result.gpsPoints && JSON.parse(JSON.stringify(result.gpsPoints));
      const workPlace = result.workPlace && JSON.parse(JSON.stringify(result.workPlace));
      const workInfo = result.workInfo && JSON.parse(JSON.stringify(result.workInfo));
      me.requestDataSuccess(gpsPoints, workPlace, workInfo);
    } else if (me.__noPointHandler) {
      me.__noPointHandler();
    }
  });
};

GpsTracePlayer.prototype.createMarkerLabel = function (gpsPoint, type) {
  if (gpsPoint) {
    let text = '';
    let speed2 = gpsPoint.speed.toString();
    const last = speed2.indexOf('.');
    if (last > 0) {
      speed2 = speed2.substring(0, last + 2);
    }
    if (type === 2) {
      text = `车牌：${
        this.__name
      }<br>`
        + `时间：${
          gpsPoint.gpsDate
        }<br>`
        + `速度：${
          speed2
        }公里/小时<br>`;
    } else {
      text = `姓名：${
        this.__name
      }<br>`
        + `时间：${
          gpsPoint.gpsDate
        }<br>`
        + `速度：${
          speed2
        }公里/小时<br>`;
    }
    return text;
  }
  return null;
};

GpsTracePlayer.prototype.createCarMarkerLabel = function (item) {
  if (item) {
    let text = '';
    if (item.type === '前端') {
      text = `
      <div class="car_markerLabel_on_gps">
      <div class="title"> ${item.objName || ''} </div>
      <div class="time"> 对象类型： ${item.objType === 1 ? '投放点' : '中转站'} </div>
      <div class="time"> 垃圾类型： ${item.wasteType || ''} </div>
      <div class="weight"> ${item.objType === 1 ? '转运时间' : '出转运站时间'}： ${item.transportTime || 0} </div>
      <div class="weight"> ${item.objType === 1 ? '投放点收集重量' : '中转站卸到重量'}： ${item.transWeight || 0} 吨  </div>
     </div>
      `;
    } else {
      text = `
       <div class="car_markerLabel_on_gps">
        <div class="title"> ${item.objName || ''} </div>
        <div class="time"> 出站时间： ${item.beginTime || '无记录'} </div>
        <div class="time"> 进场时间： ${item.carInPlantTime || '无记录'} </div>
        <div class="weight"> 进厂重量： ${item.inPlantWeight || 0} 吨 </div>
        <div class="weight"> 出站重量： ${item.outPlantWeight || 0} 吨  </div>
       </div>
      `;
    }
    return text;
  }
  return null;
};

GpsTracePlayer.prototype.playTrace = function (player) {
  const me = this;
  let index = player.__index;
  const poly = player.__polyLine;
  const resultGpsPoints = player.__requestResultPoints;

  let originPoint = player.__originPoint;
  const gpsPlayMarker = player.__playMarker;
  const label = player.__playMarkerLabel;
  const gpsPlayPolyLine = player.__playLine;

  const playTrace = function (pointArray) {
    if (index < pointArray.length && player.__state === 'playing') {
      index = ++player.__index;
      const nextPoint = pointArray[index];
      const gpsPoint = resultGpsPoints[index - 1];
      let curResultGpsPoints = resultGpsPoints[index - 1];
      if (
        resultGpsPoints[index] !== null
        && resultGpsPoints[index] !== undefined
      ) {
        curResultGpsPoints = resultGpsPoints[index];
      }

      // 是否弹窗显示 过分依赖数据的时间 - 需要gps轨迹的时候 和进站时间相同判断 是否在点上 宝哥说大于当前节点的第一个时间
      if (player.__workPlace && Array.isArray(player.__workPlace.transportList)) {
        // eslint-disable-next-line no-console
        console.log(player.__workPlace.transportList.length, '站点总数');
        for (
          let index = 0;
          index < player.__workPlace.transportList.length;
          index++
        ) {
          const element = player.__workPlace.transportList[index];
          const time = element.type === '前端' ? 'transportTime' : 'carInPlantTime';
          // eslint-disable-next-line no-console
          if (element[time] <= gpsPoint.gpsDate) {
            // 第一个时间大于站点时间 尽来后删除站点
            player.__workPlace.transportList.splice(index, 1);
            // eslint-disable-next-line no-console
            console.log(player.__workPlace.transportList.length, '站点剩余');
            // eslint-disable-next-line no-console
            if (element.type === '前端') {
              label.hide();
              this.stopPlayTips(element, gpsPoint);
            } else {
              if (player.__carInPlantLabel) { player.__map.removeOverlay(player.__carInPlantLabel); }
              player.__carInPlantLabel = new BMapGL.Label(
                player.createCarMarkerLabel(element),
                {
                  position: new BMapGL.Point(gpsPoint.lng, gpsPoint.lat),
                  offset: new BMapGL.Size(16, -10),
                },
              );
              player.__carInPlantLabel.setStyle({
                border: '1px solid rgb(19 169 106);',
              });
              player.__map.addOverlay(player.__carInPlantLabel);

              // eslint-disable-next-line no-console
              console.log(element, `进站${player.__stopShowCarMarkerLabelTime}ms后继续运动`);

              label.hide();
              this.onPlayPause();

              setTimeout(() => {
                this.playContinue();
                label.show();
                player.__carInPlantLabel && player.__carInPlantLabel.hide();
              }, 4000);
            }
          }
        }
      }
      // 是否停车点
      if (
        curResultGpsPoints.type === 1
        && gpsPoint.pointType === 1
        && gpsPoint.second > 60 * 3
      ) {
        const carIcon = new BMapGL.Icon(
          require('@/assets/map/stop_point.png'),
          new BMapGL.Size(18, 30),
        );
        const stopMarker = new BMapGL.Marker(player.__originPoint, {
          icon: carIcon,
        });
        stopMarker.setEntity({
          lng: gpsPoint.lng,
          lat: gpsPoint.lat,
          stopTimes: gpsPoint.stopTimes,
          stopDateTime: gpsPoint.gpsTimeStr,
          startDateTime: curResultGpsPoints.gpsTimeStr,
        });
        this.__map.addOverlay(stopMarker);
        if (me.__stopMarkerClikeHandler) {
          me.__stopMarkerClikeHandler(stopMarker);
        }
      }
      if (curResultGpsPoints.carRunType > 0) {
        const carIcon = new BMapGL.Icon(
          require(`@/assets/map/${
            curResultGpsPoints.carRunType === 1
              ? 'stop_point_out'
              : 'stop_point_in'
          }.png`),
          new BMapGL.Size(18, 30),
        );
        const marker = new BMapGL.Marker(player.__originPoint, {
          icon: carIcon,
        });
        this.__map.addOverlay(marker);
      }
      if (
        !originPoint.equals(nextPoint)
        && this.__map.getDistance(originPoint, nextPoint) > 0
      ) {
        const pVal = resultGpsPoints[index];
        const lineType = me.getLineType(pVal);

        let color;
        switch (lineType) {
          case 1:
            color = 'green';
            break;
          case 2:
            color = '#FFFF00';
            break;
          default:
            color = '#0000ff';
            break;
        }

        let playPolyLine = null;
        let drawNewLine = true;
        if (gpsPlayPolyLine.length > 0) {
          playPolyLine = gpsPlayPolyLine[gpsPlayPolyLine.length - 1];
          const oldLineType = playPolyLine.cusTag.lineType;
          drawNewLine = oldLineType !== lineType;
        }
        if (drawNewLine) {
          const newPlayPolyLine = new BMapGL.Polyline([originPoint, nextPoint], {
            strokeColor: color,
            strokeOpacity: 0.5,
            strokeWeight: 4,
          });
          const whereDate = groupItemsToDate(
            resultGpsPoints,
            resultGpsPoints[index].__k,
          );
          newPlayPolyLine.cusTag = {
            code: player.__code,
            sDate: whereDate.start,
            eDate: whereDate.end,
            lineType,
          };

          newPlayPolyLine.addEventListener('click', (e) => {
            const obj = e.target.cusTag;
            const polygon = e.target;
            let delay = 0;
            for (let flashTimes = 0; flashTimes < 3; flashTimes++) {
              delay += 200;
              setTimeout(() => {
                polygon.setStrokeOpacity(1);
              }, delay);

              delay += 200;
              setTimeout(() => {
                polygon.setStrokeOpacity(0.5);
              }, delay);
            }
            if (
              player.__playLineClikeHandler
              && typeof player.__playLineClikeHandler === 'function'
            ) {
              player.__playLineClikeHandler(obj);
            }
          });
          gpsPlayPolyLine.push(newPlayPolyLine);
          newPlayPolyLine.__marker = 'true';
          this.__map.addOverlay(newPlayPolyLine);
        } else {
          const polyLinePoint = playPolyLine.getPath();
          polyLinePoint.push(nextPoint);
          playPolyLine.setPath(polyLinePoint);
        }

        if (player.__type === 2) {
          // 设置轨迹播放的图片角度
          gpsPlayMarker.setRotation(
            getRotation(this.__map, originPoint, nextPoint),
          );
        }
        gpsPlayMarker.setPosition(nextPoint);

        label.setContent(
          player.createMarkerLabel(curResultGpsPoints, player.__type),
        );
        label.setPosition(nextPoint);

        const bound = this.__map.getBounds();
        const southWest = bound.getSouthWest(); // 西南最小
        const northEast = bound.getNorthEast(); // 东北最大
        if (
          nextPoint.lng <= southWest.lng
          || nextPoint.lat <= southWest.lat
          || nextPoint.lng >= northEast.lng
          || nextPoint.lat >= northEast.lat
        ) {
          this.__map.panTo(nextPoint);
        }

        originPoint = player.__originPoint = nextPoint;
      }
      player.afterMovePosition(index, pointArray.length);

      if (index === pointArray.length - 1) {
        // 已播放完毕；
        if (!player.__needRequest) {
          // 不需要请求数据；
          // 标记结束；
          player.stop();
          const endPoint = new BMapGL.Marker(nextPoint, {
            icon: new BMapGL.Icon(
              require('@/assets/map/end_point.png'),
              new BMapGL.Size(26, 38),
            ),
          });
          endPoint.__marker = 'true';
          this.__map.addOverlay(endPoint);
        } else {
          // 继续请求数据；
          player.requestData(player);
        }
      } else {
        player.__Timer = setTimeout(() => {
          playTrace.call(player, poly);
        }, player.__freq);
      }
    }
  };
  player.__Timer = setTimeout(() => {
    playTrace.call(player, poly);
  }, player.__freq);
};

GpsTracePlayer.prototype.getLineType = function (pVal) {
  let lineType = 0;
  if (pVal.type) {
    if (
      pVal.carWorkStatus === 1
      && pVal.carWorkValid === 1
      && pVal.isWorkLine === 1
    ) {
      lineType = 1;
    } else if (pVal.carWorkStatus === 0 && pVal.isWorkLine === 1) {
      lineType = 2;
    }
  }
  // console.log(pVal.carWorkStatus + '_' + pVal.carWorkValid + '_' + pVal.isWorkLine)
  return lineType;
};

// 继续上一次播放；
GpsTracePlayer.prototype.playContinue = function () {
  if (this.__state === 'pause') {
    this.onPlaying();
    this.playTrace(this);
    if (this.__playMarkerLabel) {
      this.__playMarkerLabel.show();
    }
  }
};

// 暂停播放；
GpsTracePlayer.prototype.pause = function () {
  if (this.__state === 'playing') this.onPlayPause();
};

// 结束播放；
GpsTracePlayer.prototype.stop = function () {
  this.onPlayStop();
  this.__requestDataTimes = 0;
  this.__index = 0;
  this.__from = null;
  this.__to = null;
  this.__freq = undefined;
  this.__needRequest = false;
};

GpsTracePlayer.prototype.isPlaying = function () {
  return this.__state === 'playing';
};

GpsTracePlayer.prototype.onPlaying = function () {
  this.__state = 'playing';
  if (this.__playingHandler) {
    this.__playingHandler();
  }
};

GpsTracePlayer.prototype.onPlayPause = function () {
  this.__state = 'pause';
  if (this.__playPauseHandler) {
    this.__playPauseHandler();
  }
};

GpsTracePlayer.prototype.onPlayStop = function () {
  this.__state = 'stop';
  if (this.__playStopHandler) {
    this.__playStopHandler();
  }
};

GpsTracePlayer.prototype.onWaitting = function () {
  if (this.__waittingHandler) {
    this.__waittingHandler();
  }
};

GpsTracePlayer.prototype.onError = function (error) {
  if (this.__errorHandler) {
    this.__errorHandler(error);
  }
};

GpsTracePlayer.prototype.requestDataSuccess = function (data, workPlace, workInfo) {
  if (this.__requestDataSuccessHandler) this.__requestDataSuccessHandler(data, workPlace, workInfo);
};

GpsTracePlayer.prototype.afterMovePosition = function (index, total) {
  if (this.__afterMovePositionHandler) this.__afterMovePositionHandler(index, total);
};

GpsTracePlayer.prototype.setFreq = function (freq) {
  if (freq > 0) this.__freq = freq;
};

GpsTracePlayer.prototype.stopPlayTips = function (itmeTips, gps) {
  if (this.__stopPlayTips) this.__stopPlayTips(itmeTips, gps);
};

export default GpsTracePlayer;
