import React from 'react';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import { AppContext } from '../context/AppContext';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem =({product})=> {
	const {addToCart}= React.useContext(AppContext);
	const handleClick=item=>{
		addToCart(item);
	};
	
	return (
		<div className={styles.ProductItem}>
			<Image  loader={() => product.images[0]} src={product.images[0]} alt={product.title}  width={100}
        height={100}
        layout="responsive" />
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p> 
					<p>{product.title}</p>
				</div>
				<button className={styles.button} onClick={()=>handleClick(product)} >
					<Image src={addToCartIcon} alt="" />
				</button>
				
			</div>
		</div>
	);
};

export {ProductItem};
