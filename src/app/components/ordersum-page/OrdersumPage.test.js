import OrdersumPage from './OrdersumPage'

it('renders without crashing', () => {
  const osummaryPage = new OrdersumPage().render()
  expect(osummaryPage.$el.html()).toBeTruthy()
})
