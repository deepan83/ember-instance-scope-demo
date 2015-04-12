import Ember from 'ember';
import instanceScope from '../mixins/instance-scope';

export default Ember.Component.extend(instanceScope,{
	title: "Mr",
	instanceScope: {
	  firstName: "Deepan",
	  lastName: "Aiyasamy",
	  testArray: [1,2,3],
	  testObj: {
	  	prop1: "hello",
	  	testObjArray: ["a","b","c"]
	  }
	},
	fullName: function(){
		return this.get("firstName") + " " + this.get("lastName")
	}.property("firstName", "lastName"),
	actions: {
		addToArray: function(){
			this.get('testArray').pushObject(1);
			this.get('testObj.testObjArray').pushObject("c");
			console.log(this.get('testArray'));
			console.log(this.get('testObj.testObjArray'));
		}
	}
});
