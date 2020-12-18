new Vue({
	el: '#app',
  data: {
    counter: 1,
    firstName: 'Bo',
    lastName: 'Andersen'
  },
  methods: {
  	changeName: function() {
    	this.firstName = 'Mark';
      this.lastName = 'Gonzales';
    },
    changeNameSetter: function() {
    	this.fullName = 'Mark Gonzales';
    }
  },
  computed: {
  	fullName: {
    	get: function() {
      	alert("Assembling full name...");
    		return this.firstName + ' ' + this.lastName;
      },
      set: function(newValue) {
      	alert("Setting new name: " + newValue);
        var parts = newValue.split(' ');
	      this.firstName = parts[0];
  	    this.lastName = parts[parts.length - 1];
      }
    }
  }
});