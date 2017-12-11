# Ecommerce-Demo

Ecommerce Demo Description:

The application starts with lauching a product details page assuming the customer has selected a dress to buy with following details:
		i) Product image - this can be anything. Please keep it family friendly.
		ii) Size 
		iii Color
		iV) Quantity

After selecting above parameters, Customer can enter a shipping address and clicks on finish button to show the summary of the selected data.
	
Libraries Used:
	1. Backbone
	2. Marionette
	3. Handlebars
	4. jQuery
	5. Flexboxgrid CSS 
	
Key Features:
	1. Validations.
	2. View management
	3. Data management
	4. Should be able to explain design decisions.

This project is created using modern backbone development Tools.

### Getting Started

Just [clone](https://github.com/theCodeMachine/ecommerce-demo.git) the repo and follow the steps:

```shell
$ git clone https://github.com/theCodeMachine/ecommerce-demo.git ecommd && cd $_
$ yarn install
```

### Development
Uses webpack-dev-server with HMR to serve your app:

```shell
$ yarn dev
```

### Production build
This will build a minified version of the app and will output everything into
the `public/` folder:

```shell
$ yarn build
```

If you wanna serve the production app you can do so by running:

```shell
$ yarn start
```

### How to run tests

You can easily run the unit tests by doing:

```shell
$ yarn test
```

Or check your code coverage with:

```shell
$ yarn coverage
```

### Linter
Currently using airbnb's presets, you can run it with:

```shell
$ yarn lint
```