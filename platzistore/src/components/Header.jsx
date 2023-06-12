import React  from 'react';
import Image from 'next/image';
import {Menu} from '@components/Menu';
import {AppContext}  from '@context/AppContext';
import {MyOrder} from '@containers/MyOrder';
import Link from 'next/link';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';
const Header = () => {
	const [toggle, setToggle] = React.useState(false);
	const [toggleOrders,setToggleOrders]= React.useState(false);
	const { state } = React.useContext(AppContext);

	const handleToggle = () => {
		setToggleOrders(false);
		setToggle(!toggle);
	};
	const handleToggleOrders = ()=>{
		setToggle(false);
		setToggleOrders(!toggleOrders);
	};
	return (
		<nav className={styles.Nav}>
			<Image src={menu} alt="menu" className={styles.menu}  />
			<div className={styles['navbar-left']}>
				<Link href='/'>
					<Image src={logo} alt="logo" className={styles['nav-logo']} />
				</Link>
				
				<ul>
					<li>
						<Link href="/">All</Link>
					</li>
					<li>
						<Link href="/">Clothes</Link>
					</li>
					<li>
						<Link href="/">Electronics</Link>
					</li>
					<li>
						<Link href="/">Furnitures</Link>
					</li>
					<li>
						<Link href="/">Toys</Link>
					</li>
					<li>
						<Link href="/">Others</Link>
					</li>
				</ul>
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<button  className={styles['navbar-email']} onClick={handleToggle}  >
						platzi@example.com
					</button>
					<button className={styles['navbar-shopping-cart']} onClick={handleToggleOrders}  >
						<Image src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</button>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder handleToggleOrders={handleToggleOrders}/>}
		</nav>
	);
};

export {Header};

