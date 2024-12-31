<script>
	let firstName = 'Petrus';
	let lastName = 'Handika';
	let colour = 'Black';

	$: fullName = `${firstName} ${lastName}`
	$: {
		console.log(colour);
		console.log(fullName);
	}

	const handleClick = () => {
		colour = 'Orange';
	};

	const handleInput = (e) => {
		colour = e.target.value;
	}
</script>

<main>
	<p>{fullName} - {colour} Belt</p>
	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}>
	<input type="text" bind:value={colour}>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>