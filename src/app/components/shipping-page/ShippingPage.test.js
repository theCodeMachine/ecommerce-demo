import ShippingPage from './ShippingPage'

it('renders without crashing', () => {
  const shippingPage = new ShippingPage().render()
  expect(shippingPage.$el.html()).toBeTruthy()
})
