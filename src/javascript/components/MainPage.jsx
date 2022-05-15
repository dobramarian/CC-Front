import React from 'react';

import Header from './Header';
import DonationsList from './DonationsList';
import DonationsListUKR from './DonationsListUKR';
import DonationSubmit from './DonationSubmit';

function MainPage() {
    return (
        <div id="MainPage">
            <Header />
                <div className="flex max-w-8xl m-auto px-14 py-24">
                    <div className='w-1/3 pr-5'>
                        <DonationsList />
                    </div>
                    <div className='w-1/3 pl-5 pr-5 mr-10'>
                        <DonationSubmit />
                    </div>
                    <div className='w-1/3 pr-5'>
                        <DonationsListUKR />
                    </div>
                </div>
        </div>
    );
}

export default MainPage;