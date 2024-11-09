import ProductCard from '@/components/product-card';

export default function Home() {
	return (
		<div className='grid grid-cols-3 gap-4'>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, i) => (
				<ProductCard key={i}></ProductCard>
			))}
		</div>
	);
}
