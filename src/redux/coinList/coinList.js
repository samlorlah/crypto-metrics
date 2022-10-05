import axios from 'axios';

const GET_COINS = 'coinList/GET_COINS';
const GET_SINGLE_COIN = 'coinList/GET_SINGLE_COIN';
const initialState = {
  coins: [],
  coinDetails: {},
};

export const fetchCoins = () => (
  async (dispatch) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
    const { data } = response.data;
    const newCoins = data.map((coin) => ({
      id: coin.id,
      coinName: coin.name,
      symbol: coin.symbol,
      price: coin.priceUsd,
    }));
    return dispatch({
      type: GET_COINS,
      payload: newCoins,
    });
  }
);

export const fetchSingleCoin = (id) => (
  async (dispatch) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${id}`);
    const { data } = response.data;
    return dispatch({
      type: GET_SINGLE_COIN,
      payload: data,
    });
  }
);

const coinListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return { ...state, coins: action.payload };
    case GET_SINGLE_COIN:
      return { ...state, coinDetails: action.payload };
    default:
      return state;
  }
};

export default coinListReducer;
