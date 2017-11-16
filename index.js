

import _ from 'underscore';

export default {
  install(Vue, options) {
    Vue.prototype.$_ = _;
  }
};
