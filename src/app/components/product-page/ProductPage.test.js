import ProductPage from './ProductPage'

it('renders without crashing', () => {
  const productPage = new ProductPage().render()
  expect(productPage.$el.html()).toBeTruthy()
})

