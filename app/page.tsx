import ProductCard from "@/components/product-card";

const products = [
	{
		title: 'Product 1',
		description: 'Description',
		price: 4000,
	},
];
export default function Home() {
	return (
		<div>
			{products.map((product, i) => (
				<ProductCard key={i}></ProductCard>
			))}
		</div>
	);
}
