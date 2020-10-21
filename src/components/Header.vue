<template>
	<nav class="navbar navbar-default">

		<div class="navbar-header">
			<router-link class="navbar-brand" to="/">
				Stock Trader
			</router-link>
		</div>

		<div class="collapse navbar-collapse">

			<ul class="nav navbar-nav mr-auto">
				<router-link tag="li" to="/portfolio" class="nav-item" activeClass="active">
					<a class="nav-link">Portfolio</a>
				</router-link>
				<router-link tag="li" to="/stocks" class="nav-item" activeClass="active">
					<a class="nav-link">Stocks</a>
				</router-link>
			</ul>

			<strong class="nav navbar-text mrf">Funds: {{ funds | currency }}</strong>

			<ul class="nav navbar-nav mr-auto navbar-right">
				<li><a href="#" @click="endDay">End Day</a></li>
				<li class="dropdown" :class="{ open: dropDown }" @click="dropDown ^= true">
					<a 
						class="dropdown-toggle" 
						href="#" 
						role="button" 
						data-toggle="dropdown" 
						aria-haspopup="true" 
						aria-expanded="false"> Save & Load </a>
					<ul class="dropdown-menu">
						<li><a href="#" @click="saveData">Save Data</a></li>
						<li><a href="#" @click="loadData">Load Data</a></li>
					</ul>
				</li>
			</ul>

		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				dropDown: false
			};
		},
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		},
		methods: {
			endDay() {
				this.$store.dispatch('randomizeStocks');
			},
			saveData() {
				const data = {
					funds: this.$store.getters.funds,
					stockPortfolio: this.$store.getters.stockPortfolio,
					stocks: this.$store.getters.getStocks
				};
				this.$http.put('data.json', data);
			},
			loadData() {
				this.$store.dispatch('loadData');
			}
		}
	}
</script>

<style>
	body {
		padding: 30px;
	}
	mrf {
		margin-right: 15px;
	}

	dropdown:hover {

	}
</style>