<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ stock.name }}
					<small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
					<input 
						type="number" 
						class="form-control width50" 
						placeholder="Quantity" 
						v-model.number="quantity"
						:class="{lukha: insufficientQuantity}"
					>
				</div>
				<div class="pull-right">
					<button 
						class="btn btn-success" 
						@click="sellStock"
						:disabled="!Number.isInteger(quantity) || quantity <= 0 || insufficientQuantity"
					>{{ insufficientQuantity ? "NA" : "Sell" }}</button>
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
			insufficientQuantity() {
				return this.quantity > this.stock.quantity;
			}
		},
		methods: {
			sellStock() {
				this.$store.dispatch('sellStock', {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				});
				this.quantity = 0;
			}
		}
	}
</script>

<style scoped>
	.width50 {
		width: 150px;
		text-align: right;
	}
	.width50::-webkit-inner-spin-button, 
	.width50::-webkit-outer-spin-button { 
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		margin: 0; 
	}
	.lukha:focus {
		border-color: #e99;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
	}
</style>