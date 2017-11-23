

import underscore from 'underscore';

export default {
  install: function(Vue, options) {
    Vue.prototype.$_ = underscore;
  }
};


export const _= underscore;