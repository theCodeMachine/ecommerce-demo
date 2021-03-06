import $ from 'jquery'
import Backbone from 'backbone'

import HomePage from 'app/components/home-page/HomePage'

import ProductPage from 'app/components/product-page/ProductPage'

import ShippingPage from 'app/components/shipping-page/ShippingPage'

import OrdersumPage from 'app/components/ordersum-page/OrdersumPage'

import Model from './models/products'

var product = new Model();

export default Backbone.Router.extend({
    routes: {
        '': 'product',
        'product': 'product',
        'ship': 'shipping',
        'summary':'osummary'
    },
    product() {
        const productPage = new ProductPage({model:product}).render()
        $("#root").empty().append(productPage.$el)
    },
    home() {
        const homePage = new HomePage().render()
        $("#root").empty().append(homePage.$el)
    },
    shipping() {
        const shippingPage = new ShippingPage({model: product}).render()
        $("#root").empty().append(shippingPage.$el)
    },
    osummary() {
        const osummaryPage = new OrdersumPage({model:product}).render()
        $("#root").empty().append(osummaryPage.$el)
    }
})