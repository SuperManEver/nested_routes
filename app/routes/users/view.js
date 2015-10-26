import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    
    return Ember.RSVP.hash({
      person: this.store.find('user', params.id)
    });
  },
  afterModel: function(model, transition) {
    // debugger;
  }
});