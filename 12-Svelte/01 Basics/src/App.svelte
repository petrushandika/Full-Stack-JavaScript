<script>
	let name = 'Petrus';
	let colour = 'Black';
	const handleClick = () => {
		colour = 'Orange';
	};

	const handleInput = (e) => {
		colour = e.target.value;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p style="color: {colour}">{colour} Belt</p>
	<button on:click={handleClick}>Update</button>
	<!-- <input type="text" on:input={handleInput} value={colour}> -->
	 <input type="text" bind:value={colour}>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>