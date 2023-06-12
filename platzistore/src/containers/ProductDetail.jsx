import React from 'react';
import {ProductInfo} from '../components/ProductInfo';
import Image from 'next/image';
import styles from '@styles/ProductDetail.module.scss';
const ProductDetail = () => {
	return (
		<aside className={styles.ProductDetail}>
			<div className={styles['ProductDetail-close']}>
				<Image src="../assets/icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
};

export {ProductDetail};