/*
 * @Author: shiliangL
 * @Date: 2021-09-11 23:03:39
 * @LastEditTime: 2021-09-11 23:17:43
 * @LastEditors: Do not edit
 * @Description:
 */

import data from '@/mock/track.json'

const request = ()=>{
   return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 800);
  })
}
export default request
