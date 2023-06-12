import React from 'react';
import Link from 'next/link';
import logoLogin from '@logos/logo_yard_sale.svg';
import Image from 'next/image';
import styles from '@styles/Login.module.scss';
const Login = ()=>{
    const form = React.useRef(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        // const formData = new FormData(form.current);
        // const data = {
        //     username:formData.get('email'),
        //     password: formData.get('password')
        // };
    
    };

    return(
<div className={styles.login}>
    <div className={styles['form-container']}>
        <Image src={logoLogin} alt="logo" className={styles.logo} />
        <form onSubmit={handleSubmit} action="/" className={styles.form} ref={form}>
            <label htmlFor="email" className={styles.label}>Email address</label>
            <input type="text" name="email" placeholder="platzi@example.com" className={`${styles.input} ${styles['input-email']}`} />
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" name="password" placeholder="*********" className={`${styles.input} ${styles['input-password']}`} />
            <button type="submit" className={`${styles['primary-button']} ${styles['login-button']}`}>Log in</button>
            <Link href="/">Forgot my password</Link>
        </form>

        <button className={`${styles['secondary-button']} ${styles['signup-button']}`}>Sign up</button>
    </div>
</div>
    );
};
export {Login};