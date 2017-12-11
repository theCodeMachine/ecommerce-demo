import 'babel-polyfill'
import 'isomorphic-fetch'
import 'normalize.css'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import 'jquery'
import Backbone from 'backbone'

import '../styles/index.css'

import Router from './router'

// eslint-disable-next-line
new Router()

Backbone.history.start()

const Product = Backbone.Model.extend({
    Name: function () {},
    Description: function () {},
    Price: function () {},
    Colors: function () {}
})

const Products = Backbone.Collections.extend({
    model: Product
});

const Order = Backbone.Model.extend({
    products:function(){
        
    },
    shipping:function(){
        
    }
})