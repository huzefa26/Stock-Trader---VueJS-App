<template>
	<div>
		<h1>Welcome</h1>
		<p>Your current balance is {{ funds | currency }}.</p>
	</div>
</template>

<script>
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		}
	}
</script>