import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Packages from '../Packages/Packages/Packages';
import UpCommingPackage from '../UpcommingPackages/UpCommingPackage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <UpCommingPackage></UpCommingPackage>
            <Discount></Discount>
        </div>
    );
};

export default Home;