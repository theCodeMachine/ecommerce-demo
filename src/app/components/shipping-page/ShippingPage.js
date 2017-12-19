import Marionette from 'backbone.marionette'
import template from './ShippingPage.hbs'
var shipping = {};
export default Marionette.View.extend({
    template, ui: {
        input: 'input'
        , button: 'button'
    }, 
    
    events: {
        'keyup @ui.input': 'InputChange'
        , 'blur @ui.input': 'InputChange'
        , 'click @ui.button': 'Finish'
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
            storename: 'Online Fashion Store'
            , pname: pname
            , poffer: (poffer * sqty)
            , ssize: ssize
            , sqty: sqty
            , color: scolor
        }
    }, 
    
    Finish: function (e) {
        if (this.Validate()) {
            this.model.set("shipping", shipping);
            Backbone.history.navigate('/summary', true);
            return false;
        }
        else {
            document.getElementById("finish").setAttribute("disabled", "disabled");
        }
    }, 
    
    InputChange: function (e) {
        if (e.target.value.trim() != "") {
            console.log(e.target.id);
            document.getElementById(e.target.id).className = "dirty";
            if (e.target.id == "addr1") {
                shipping.addr1 = e.target.value;
            }
            if (e.target.id == "addr2") {
                shipping.addr2 = e.target.value;
            }
            if (e.target.id == "city") {
                shipping.city = e.target.value;
            }
            if (e.target.id == "state") {
                shipping.state = e.target.value;
            }
            if (e.target.id == "zip") {
                shipping.zip = e.target.value;
            }
            if (e.target.id != "addr2") {
                if (this.Validate()) {
                    document.getElementById("finish").removeAttribute("disabled");
                }
            }
        }
        else {
            if (e.target.id != "addr2") {
                document.getElementById(e.target.id).className = "dirty invalid";
                document.getElementById("finish").setAttribute("disabled", "disabled");
            }
        }
    }, Validate: function (e) {
        var inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].className.indexOf("dirty") != -1) {
                if (inputs[i].id != "addr2" && inputs[i].value == "") {
                    inputs[i].className = "dirty invalid";
                    document.getElementById("finish").setAttribute("disabled", "disabled");
                    return false;
                    break;
                }
            }
            else {
                return false;
                break;
            }
        }
        return true;
    }
})