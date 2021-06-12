/*
 * @Author: shiliangL
 * @Date: 2021-06-11 20:40:04
 * @LastEditTime: 2021-06-11 20:41:32
 * @LastEditors: Do not edit
 * @Description:
 */

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone');
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}
