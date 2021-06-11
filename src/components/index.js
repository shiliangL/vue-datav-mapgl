/*
 * @Author: shiliangL
 * @Date: 2021-06-11 09:26:07
 * @LastEditTime: 2021-06-11 09:52:46
 * @LastEditors: Do not edit
 * @Description:
 */

const modules = {};
const components = require.context('./', true, /index.vue$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
// eslint-disable-next-line no-restricted-syntax
for (const item of requireAll(components)) {
  if (item.default.name) {
    modules[item.default.name] = item.default;
  }
}
export default modules;
