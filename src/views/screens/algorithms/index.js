import React from 'react';

import BinarySearch from '../../components/binarySearch/BinarySearch';

const ScreenAlgorithms = () => {
    const value = 4;
    const list  = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];

    return (
        <div className="min-h-screen bg-purple-500 text-white py-5 px-20 w-4/5 mx-auto">
            <BinarySearch value={value} list={list}/>
        </div>
    );
} 
export default ScreenAlgorithms;
    