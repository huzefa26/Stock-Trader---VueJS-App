const state = {
	funds: 10000,
	stocks: []
};

const mutations = {
	'BUY_STOCK'(state, {stockId, stockPrice, quantity}) {
		const record = state.stocks.find(el => el.id==stockId);
		if (record) {
			record.quantity += quantity;
		} else {
			state.stocks.push({
				id: stockId,
				quantity
			});
		}
		state.funds -= stockPrice * quantity;
	},

	'SELL_STOCK'(state, {stockId, stockPrice, quantity}) {
		const record = state.stocks.find(el => el.id==stockId);
		if (record.quantity > quantity) {
			record.quantity -= quantity;
		} else {
			state.stocks.splice(state.stocks.indexOf(record), 1);
		}
		state.funds += stockPrice * quantity;
	},

	'SET_PORTFOLIO'(state, portfolio) {
		state.funds = portfolio.funds;
		state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
	}
};

const actions = {
	sellStock({commit}, order) {
		commit('SELL_STOCK', order);
	}
};

const getters = {
	stockPortfolio(state, getters) {
		return state.stocks.map(stock => {
			const record = getters.getStocks.find(el => el.id==stock.id);
			return {
				id: stock.id,
				name: record.name,
				price: record.price,
				quantity: stock.quantity
			};
		});
	},
	funds(state) {
		return state.funds;
	}
};

export default { state, mutations, actions, getters };