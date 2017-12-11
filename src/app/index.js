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

var Product = Backbone.Model.extend({
    default:function(){
        return {
            "name":"INC International Concepts",
            "desc":"Bell-Sleeve Dress, Created for Macy's"
        }
    }
})

const Products = Backbone.Collections.extend({
    model: Product
})

const Order = Backbone.Model.extend({})
