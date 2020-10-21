<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-success">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ stock.name }}
					<small>(Price: {{ stock.price }})</small>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
					<input 
						type="number" 
						class="form-control" 
						placeholder="Quantity" 
						v-model.number="quantity"
						:class="{gareeb: insufficientFunds}" 
					>
				</div>
				<div class="pull-right">
					<button 
						class="btn btn-success" 
						@click="buyStock"
						:disabled="!Number.isInteger(quantity) || quantity <= 0 || insufficientFunds"
					>
						<!-- {{ insufficientFunds ? "Insufficient Funds" : "Buy"}} -->
						{{ insufficientFunds ? "NA" : "Buy"}}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['stock'],
		data() {
			return {
				quantity: 0
			};
		},
		computed: {
			funds() {
				return this.$store.getters.funds;
			},
			insufficientFunds() {
				return this.quantity * this.stock.price > this.funds;
			}
		},
		methods: {
			buyStock() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				};
				this.$store.dispatch('buyStock', order);
				this.quantity = 0;
			}
		}
	}
</script>

<style scoped>
	.width50 {
		width: 100px;
		text-align: center;
	}
	.width50::-webkit-inner-spin-button, 
	.width50::-webkit-outer-spin-button { 
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		margin: 0; 
	}
	.gareeb:focus {
		border-color: #e99;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
	}
</style>