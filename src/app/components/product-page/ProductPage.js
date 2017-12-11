import Marionette from 'backbone.marionette'

import template from './ProductPage.hbs'

export default Marionette.View.extend({
  template,

  serializeData() {
    return {
      name: 'Online Fashion Store'
    }
  }
})
