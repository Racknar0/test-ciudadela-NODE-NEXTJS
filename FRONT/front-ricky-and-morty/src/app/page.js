
'use client';

import { useContext } from 'react';
import { AppContext } from './context/AppProvider';

import Header from './components/Header';
import styles from './page.module.css';
import Main from './components/Main';
import Footer from './components/Footer';

export default function Home() {

    const { name } = useContext(AppContext);

    console.log(name);

    return (
        <main className={styles.main} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
           <Header />
           <Main />
           <Footer />
        </main>
    );
}
