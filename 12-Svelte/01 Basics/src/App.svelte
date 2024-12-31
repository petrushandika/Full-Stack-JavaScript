<script>
	let firstName = 'Petrus';
	let lastName = 'Handika';
	let colour = 'Black';

	$: fullName = `${firstName} ${lastName}`
	$: {
		console.log(colour);
		console.log(fullName);
	}

	const handleInput = (e) => {
		colour = e.target.value;
	}

	let people = [
		{name: 'Petrus', colour: 'Black', age: 22, id: 1},
		{name: 'Mutiara', colour: 'Orange', age: 18, id: 2},
		{name: 'Isah', colour: 'Pink', age: 20, id: 3},
	]

	const handleClick = (id) => {
		people = people.filter((person) => person.id != id)
	}
	
</script>

<main>
	<!-- User Input and Data Binding -->
	<div>
		<p>{fullName} - {colour} Belt</p>
		<input type="text" bind:value={firstName}>
		<input type="text" bind:value={lastName}>
		<input type="text" bind:value={colour}>
	</div>

	<!-- Loop -->
	{#each people as person (person.id)}
		<div>
			<h3>{person.name}</h3>
			<p>{person.age} Years Old, {person.colour} Belt.</p>
			<button on:click={(e) => {handleClick(person.id)}}>Delete</button>
		</div>
	{:else}
		<p>There are no people to show...</p>
	{/each}

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