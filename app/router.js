import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orders');
  this.route('carts', function(){
    this.route('cart', { path: '/:cart_id' });
  });
});

export default Router;
