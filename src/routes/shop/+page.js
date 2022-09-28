import { people } from '../store';
export async function load({ fetch }) {
	const fetchProducts = async () => {
		const productRes = await fetch('https://dummyjson.com/products?limit=10');
		const productData = await productRes.json();
		return productData.products;
	};

	const fetchProducts1 = async () => {
		const url = `/src/data/people.json`;
		const userRes = await fetch(url);
		const userData = await userRes.json();
		people.update(() => userData);
		return userData;
	};

	return {
		userData: fetchProducts1(),
		products: fetchProducts()
	};
}
