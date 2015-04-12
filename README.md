
# Demo-app

A mixin that allows definition of instance specific properties within extend (which adds to the prototype by default)

Useful for properties that wouldnt be passed to the component instances in the template directly but may still need to be instance specific. 

This can be done currently by setting these properties up in the init method but this provides a more declarative approach.

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

Quick demo at http://development.instance-scope-demo.divshot.io/

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

