import Marionette from 'backbone.marionette'

import template from './ProductPage.hbs'

import product from '../../models/products'

export default Marionette.View.extend({
  template,

  ui:{
    button:'#next',
    select:'select'
  },

  events:{
    'click @ui.button': 'Navigate',
    'change @ui.select':'ColorChange'
  },
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
      pname:pname,
      pdesc:pdesc,
      poffer:poffer,
      poriginal:poriginal,
      color:scolor
    }
  },

  Navigate:function(e){
    console.log(e);
  },

  ColorChange:function(e){
    if(e.target.id == "dcolor"){
      this.model.set("selectedColor",e.target.value);
    }
    
  }
})
