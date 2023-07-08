// eslint-disable-next-line strict
const vm = new Vue({
  el: '.header',
  data: {
    keywords: '',
  },
  methods: {
    search() {
      location.href = `/search?keywords=${this.keywords}`;
    },
  },
  created() {
  },
  mounted() {
  },
  updated() {
  },
});


window.getParams = function(name, url) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = url ? url.substring(url.indexOf('?') + 1).match(reg) : window.location.search.substr(1).match(reg);
  if (r != null) return r[2];
  return null;
};
