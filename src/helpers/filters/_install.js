import * as filters from './index';

export default {
  install(Vue) {
    Object.keys(filters).forEach((filter) => {
      Vue.filter(filter, filters[filter]);
    });
  },
};
