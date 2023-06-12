import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import  styles from '@/styles/NotFound.module.scss' ;

const NotFound = () => {
    return (
    <div className={styles['main-container-error']}>
        <div className={styles['error-container']}>
            <h1>¡Oops!</h1>
            <p>It seems like we couldn&apos;t find the page you were looking for</p>
            <Image src="https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.png" alt="Error 404" />
            <Link href="/" className={styles['back-link']}>Go back</Link>
        </div>
    </div>

    );
};

export  {NotFound};