import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return [
      {id:'1', name: 'Abhinav Garg'},
      {id:'2', name: 'Hitesh Garg'}
    ]
  }
});
