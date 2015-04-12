import Ember from 'ember';

export default Ember.Component.extend({
	title: "Mr",
	init: function(){
	  this._super();
	  console.log("isolated-component");
	}
});
