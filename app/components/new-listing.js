import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    newListingShow() {
      this.set('addNewListing', true);
    },

    save(category) {
      var params = {
        name: this.get('name'),
        email: this.get('email'),
        phone: this.get('phone'),
        title: this.get('title'),
        body: this.get('body'),
        location: this.get('location'),
        price: this.get('price'),
        date_added: Date.now()
      };
      this.set('addNewListing', false),
      this.sendAction('save', params, category);
    }
  }
});
