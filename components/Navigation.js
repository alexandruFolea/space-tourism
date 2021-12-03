import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Navigation = () => {
	let windowSize = 720;

	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);
	const closeMobileMenu = () => setOpen(false);

	// if (window.innerWidth > 720) {
	// 	closeMobileMenu();
	// }

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 719) {
				closeMobileMenu();
			}
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<nav className='navbar'>
			<div
				className={open ? 'navbar__logo active' : 'navbar__logo'}
				onClick={closeMobileMenu}
			>
				<Link href='/'>
					<a>
						<Image
							src='/assets/shared/logo.svg'
							width='50'
							height='50'
							alt='logo'
						/>
					</a>
				</Link>
				{/* <h1>Logo</h1> */}
			</div>

			<ul className={open ? 'navbar__list active' : 'navbar__list'}>
				<li onClick={closeMobileMenu}>
					{/* {open ? <SiHomeassistant /> : ''} */}
					<span>00</span>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li onClick={closeMobileMenu}>
					{/* {open ? <SiCapacitor /> : ''} */}
					<span>01</span>
					<Link href='/destination'>
						<a>Destination</a>
					</Link>
				</li>
				<li onClick={closeMobileMenu}>
					{/* {open ? <SiHarbor /> : ''} */}
					<span>02</span>
					<Link href='/crew'>
						<a>crew</a>
					</Link>
				</li>
				<li onClick={closeMobileMenu}>
					{/* {open ? <SiOpenid /> : ''} */}
					<span>03</span>
					<Link href='/technology'>
						<a>technology</a>
					</Link>
				</li>
			</ul>

			<div
				className={open ? 'navbar__burger active' : 'navbar__burger'}
				onClick={handleClick}
			>
				<FaBars />
			</div>
		</nav>
	);
};

export default Navigation;
