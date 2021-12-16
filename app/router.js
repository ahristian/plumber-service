import EmberRouter from '@ember/routing/router';
import config from 'plumber-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('/');
  this.route('contact');

  this.route('services', function() {
    this.route('heater');
    this.route('plumbing');
    this.route('pipes');
    this.route('solar');
  });
});
