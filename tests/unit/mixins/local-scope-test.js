import Ember from 'ember';
import LocalScopeMixin from 'demo-app/mixins/local-scope';

module('LocalScopeMixin');

// Replace this with your real tests.
test('it works', function() {
  var LocalScopeObject = Ember.Object.extend(LocalScopeMixin);
  var subject = LocalScopeObject.create();
  ok(subject);
});
