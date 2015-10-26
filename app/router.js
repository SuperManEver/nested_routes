import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() {
    this.route('index', { path: '/'});
    this.route('view', { path: 'view/:id' });
  });
});

export default Router;
