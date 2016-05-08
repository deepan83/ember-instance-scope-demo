import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
	  debugger;
	  if (1 == true) {return 1;}
		return [{id:"374673737",address:"2,Kington road, Staines"},{id:"374673787",address:"13,Kington road, Staines"}];
	}
});
