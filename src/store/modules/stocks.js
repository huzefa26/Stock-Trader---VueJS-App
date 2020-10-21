import stocks from '../../data/stocks';

const state = {
	stocks: []
};

const mutations = {
	'SET_STOCKS'(state, stocks) {
		state.stocks = stocks;
	},
	'RANDOMIZE_STOCKS'(state) {
		state.stocks.forEach(stock => {
			stock.price += (1 - 2*(Math.random()<0.5)) * (Math.random() / 10);
			stock.price = parseFloat(stock.price.toFixed(2));
		});
	}
};

const actions = {
	buyStock: ({ commit }, order) => {
		commit('BUY_STOCK', order);
	},
	initStocks: ({commit}) => {
		commit('SET_STOCKS', stocks);
	},
	randomizeStocks: ({commit}) => {
		commit('RANDOMIZE_STOCKS');
	}
};

const getters = {
	getStocks: state => {
		return state.stocks;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}