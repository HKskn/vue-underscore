

import _ from 'underscore';

export default {
  install(Vue, options) {
    Vue.prototype.$_ = _;
  },
  _
};


export const _=_;