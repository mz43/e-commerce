import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='p-4'>
			<div className='flex justify-between'>
				<ul className='flex gap-4'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='#'>Products</Link>
					</li>
					<li>
						<Link href='#'>About Us</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link href='/auth/sign-in'>Sign In</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
