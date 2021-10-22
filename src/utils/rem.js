/*
 * @Author: shiliangL
 * @Date: 2021-06-10 17:30:42
 * @LastEditTime: 2021-10-10 08:45:57
 * @LastEditors: Do not edit
 * @Description:
 */
// rem（font size of the root element）是指相对于根元素的字体大小的单位
// 相对于根元素上font-size的计算值。 在根元素的font-size属性中指定时，rem单位是指属性的初始值
// 这意味着1rem等于html元素的字体大小（对于大多数浏览器而言，其默认值为16px）

import { baseSize } from '@/setting';
// 设置 rem 函数
export function setRem() {
  // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / (baseSize * 10);
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = `${baseSize * Math.min(scale, 2)}px`;
}

// 修正rem比例
// 1 rem = baseSize
export function px2rem(size) {
  const scale = document.documentElement.clientWidth / (baseSize * 10);
  return Number((size * scale).toFixed(2));
}

// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = () => {
  setRem();
};
