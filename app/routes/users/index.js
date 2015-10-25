import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // user Ember Data to make an AJAX call to grab all available users
    return this.store.find('user');
  },
  renderTemplate: function() {
    this.render({
      outlet: 'master'
    });
  }
});