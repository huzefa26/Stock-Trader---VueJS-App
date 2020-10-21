import Vue from 'vue';

export const loadData = ({commit}) => {
	Vue.http.get('data.json')
		.then(response => response.json())
		.then(data => {
			if (data) {
				const funds = data.funds, stocks = data.stocks, stockPortfolio = data.stockPortfolio;

				const portfolio = {
					stockPortfolio,
					funds
				};

				commit('SET_STOCKS', stocks);
				commit('SET_PORTFOLIO', portfolio);
			}
		});
};