import React from 'react';

import './assets/css/styles.css'
import Header from './components/Header/Header';
import SecFeatures from './components/SecFeatures/SecFeatures';
import SecHighlight from './components/SecHighlight/SecHighlight';
import SecInfo from './components/SecInfo/SecInfo';
import SecTestemonials from './components/SecTestemonials/SecTestemonials'

const HomePage = () => {
    return (
        <>
            <Header />
            <SecInfo />
            <SecFeatures />
            <SecHighlight />
            <SecTestemonials />  
        </>
    );
}

export default HomePage;