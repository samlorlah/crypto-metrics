import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MainData from '../components/MainData';

describe('Test Compenent that renders all the lists of coins', () => {
  it('get the list of coins from store and display', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MainData />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});