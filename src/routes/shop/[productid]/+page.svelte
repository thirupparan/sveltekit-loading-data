<script>
	export let data;
	const { product } = data;
</script>

<p>{product.title}</p>
<p>{product.description}</p>
<p>${product.price.toFixed(2)}</p>
{#each product.images as image, i}
	<img src={image} alt={i} srcset="" />
{/each}
