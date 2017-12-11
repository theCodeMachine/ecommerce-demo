import Marionette from 'backbone.marionette'

import template from './OrdersumPage.hbs'

export default Marionette.View.extend({
  template,

  serializeData() {
    return {
      name: 'Online Fashion Store'
    }
  }
})
