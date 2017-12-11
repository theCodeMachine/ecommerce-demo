import Marionette from 'backbone.marionette'

import template from './ShippingPage.hbs'

export default Marionette.View.extend({
  template,

  serializeData() {
    return {
      name: 'Online Fashion Store'
    }
  }
})
