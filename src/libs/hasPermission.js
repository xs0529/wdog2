import store from '@/store'
console.log(store.state.user.access)
const hasPermission = {
  install (Vue, options) {
    Vue.directive('has', {
      bind (el, binding, vnode) {
        let access = store.state.user.access;
        if (!access.includes(binding.value)) {
          el.parentNode.removeChild(el);
        }
      }
    });
  }
};

export default hasPermission;
