// Model classes

export default Backbone.Model.extend({
    defaults:{
        name:'INC International Concepts',
        desc:'Bell-Sleeve Dress',
        promotionPrice:47.99,
        originalPrice:79.50,
        colors:['Black','Blue','Green','Red'],
        size:['XS','S','M','L', 'XL'],
        selectedColor:'black',
        selectedSize: 'M',
        selectedQty:1,
        itemCount:10
    },

    initialize: function () {
        if (this.isNew()) {
            this.set('created', Date.now());
        }
    }
})