import axios from 'axios';
import { fetchCoins, fetchSingleCoin } from '../redux/coinList/coinList';

describe('Fetch all crytocurrency coins', () => {
  it('should fetch all crytocurrency coins', async () => {
    axios.post = jest.fn(() => Promise.resolve());

    const dispatch = jest.fn();

    await fetchCoins()(dispatch);

    expect(dispatch.mock.calls[0][0]).toHaveProperty('payload');
  });
  it('should fetch a crytocurrency coin', async () => {
    axios.post = jest.fn(() => Promise.resolve());

    const dispatch = jest.fn();

    await fetchSingleCoin('bitcoin')(dispatch);

    expect(dispatch.mock.calls[0][0]).toHaveProperty('payload');
  });
});
