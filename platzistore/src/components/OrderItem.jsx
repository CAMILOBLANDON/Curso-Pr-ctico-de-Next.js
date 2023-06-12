import React, { useContext } from 'react';
import iconClose from '@icons/icon_close.png';
import Image from 'next/image';
import { AppContext } from '@context/AppContext';
import styles from '@styles/OrderItem.module.scss';
const OrderItem = ({product}) => {
	const {removeFromCart}=useContext(AppContext);
	const handleRemove= product =>{
		removeFromCart(product);
	};
	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} alt={product?.title} width={640} height={640} />
			</figure>
			<p>{product?.title}</p>
			<p>{product?.price}</p>
			<Image src={iconClose}  alt="close" onClick={()=>handleRemove(product)} />
		</div>
	);
};

export {OrderItem};;