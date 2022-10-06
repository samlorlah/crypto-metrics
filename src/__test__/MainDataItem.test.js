import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MainDataItem from '../components/MainData';

describe('Test Compenent that renders single list of coin', () => {
  it('Return a single card of of coin', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MainDataItem />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
