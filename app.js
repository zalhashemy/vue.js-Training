new Vue({
	el: '#app',
  data: {
    searchQuery: '',
    results: [],
    isSearching: false
  },
  watch: {
  	searchQuery: function(query) {
      this.isSearching = true;
      var vm = this;
      
      setTimeout(function() {
      	vm.results = ['JavaScript', 'PHP', 'MySQL'];
				vm.isSearching = false;
      }, 500);
    }
  }
});