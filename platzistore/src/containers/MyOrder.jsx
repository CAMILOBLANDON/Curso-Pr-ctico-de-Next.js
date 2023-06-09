import React, { useContext } from 'react';
import {OrderItem} from '@components/OrderItem';
import Link from 'next/link';
import Image from 'next/image';
import flechita from '@icons/flechita.svg';
import { AppContext } from '@context/AppContext';
import styles from '@styles/MyOrder.module.scss';


const MyOrder = ({handleToggleOrders}) => {
	const {state}=useContext(AppContext);
	
	const sumTotal =()=>{
		const reducer = (accumalator,currentValue)=>accumalator + currentValue.price;
		const sum = state?.cart.reduce(reducer,0);
		return sum;
	};
	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image src={flechita} alt="arrow" onClick={handleToggleOrders}/>
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state?.cart.map(product =>(
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link className={['primary-button']} href='/checkout'>
					Checkout
				</Link>
			</div>
		</aside>
	);
};

export {MyOrder};