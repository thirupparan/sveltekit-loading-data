<script>
	import { people } from '../store';
	export let data;
	const { products, userData } = data;
</script>

{JSON.stringify($people)}

<h1>Shop DATA COME FROM API CALL</h1>
{#each products as product}
	<h2>{product.title}</h2>
	<p>{product.description}</p>
{/each}

<h1>DATA come json file</h1>

{#each userData as user}
	<h2>{user.firstName}</h2>
	<p>{user.lastName}</p>
{/each}

<h1>DATA COME FROM STORE</h1>
{#each $people as user}
	<h1>{user.firstName}</h1>
{/each}
