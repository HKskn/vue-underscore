

import underscore from 'underscore';

export default {
  install(Vue, options) {
    Vue.prototype.$_ = underscore;
  }
};


export const _= underscore;