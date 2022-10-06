import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import CoinDetails from '../components/CoinDetails';

describe('Test Compenent that renders all the lists of coins', () => {
  it('get the list of coins from store and display', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <CoinDetails />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
