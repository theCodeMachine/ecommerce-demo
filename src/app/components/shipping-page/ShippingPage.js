import Marionette from 'backbone.marionette'

import template from './ShippingPage.hbs'

export default Marionette.View.extend({
    template,

    modelEvents: {
        change: 'render'
    },

    serializeData() {
        var pname = this.model.get('name');
        var pdesc = this.model.get('desc');
        var poffer = this.model.get('promotionPrice');
        var poriginal = this.model.get('originalPrice');
        var scolor = this.model.get('selectedColor');
        var ssize = this.model.get('selectedSize');
        var sqty = this.model.get('selectedQty');
        return {
            storename: 'Online Fashion Store',
            pname: pname,
            poffer: (poffer * sqty),
            ssize: ssize,
            sqty: sqty,
            color: scolor
        }
    }
})