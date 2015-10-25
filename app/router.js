import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', { path: '/users'}, function() {
    this.route('index', { path: ''}, function() {
      this.route('show', { path: '/:id' });
    });
  });
});

export default Router;
