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

	let num = 3;
</script>

<!-- Conditionals -->
{#if num > 20}
	<p>Greater Than 20</p>
{:else if num > 5}
	<p>Greater Than 5</p>
{:else}
	<p>Not Greater Than 5</p>
{/if}

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
			{#if person.colour === 'Black'}
				<p><strong>FULLSTACK JAVASCRIPT</strong></p>
			{/if}
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