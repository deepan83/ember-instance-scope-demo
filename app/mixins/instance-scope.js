import Ember from 'ember';

export default Ember.Mixin.create({
  init: function(){
    this._super();
    var instanceScope = this.get("instanceScope"),
      newEmObj,
      newEmObjPrototype,
      key;
    if (instanceScope) {
      newEmObj = Ember.Object.extend(instanceScope).create();
      newEmObjPrototype = Object.getPrototypeOf(newEmObj);
      for (key in newEmObjPrototype) {
        if (newEmObjPrototype.hasOwnProperty(key)) {
          if (key.indexOf("_") === -1 && key !== "constructor") {
            this.set(key, Ember.copy(newEmObjPrototype[key], true));
          }
        }
        this.set("localScope", null);
      }
    }
  }
});
