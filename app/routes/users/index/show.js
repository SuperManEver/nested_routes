import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render({
      outlet: 'detail'
    });
  },
  model: function(params) {
    console.log('model is reached');
    return this.store.find('user', params.id);
  } 
});