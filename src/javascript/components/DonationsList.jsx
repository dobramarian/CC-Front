import React, { useEffect, useState } from 'react';
import { CashIcon } from '@heroicons/react/solid'
import axios from 'axios';

// const donations = [
//     {
//         ID: 1,
//         senderName: 'John Doe',
//         amount: 3,
//         currency: 'EUR',
//     },
// ];


function DonationsList() {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `http://localhost:8082/messages`,
            );

            if (result.data.data) {
                let donationsArray = result.data.data;
                donationsArray.reverse();
                setDonations(result.data.data);
            }
        };

        fetchData();
    }, []);

    return (
        <div id="donationsList">
            <div className='text-2xl font-bold mb-4 '>Latest donations</div>
            <ul className="ml-15 -mb-8 max-h-96 overflow-auto content-between">
                {donations.length ? donations.map((donation, donationIdx) => (
                    <li key={donation.ID}>
                        <div className="relative pb-8 content-center">
                            {donationIdx !== donations.length - 1 ? (
                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-6 content-center">
                                <span
                                    className={'h-12 w-12 rounded-full flex items-center justify-center ring-8 ring-white bg-green-500'}>
                                    <CashIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                </span>
                                <div className="min-w-0 flex-1 flex justify-between space-x-4">
                                    <p className="text-sm text-gray-500">
                                        <span className="text-lg text-gray-900 font-medium">THANK YOU</span>
                                        <br></br>
                                        <span className="font-medium">
                                            {`${donation.senderName} have donated ${donation.amount} ${donation.currency}`}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                )) :
                    <span>No donations yet</span>
                }
            </ul>
        </div>
        
        
    );
}

export default DonationsList;