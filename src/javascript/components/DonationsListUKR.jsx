import React, { useEffect, useState } from 'react';
import { CashIcon } from '@heroicons/react/solid'
import axios from 'axios';


function DonationsList() {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `${process.env.REACT_APP_API_URL}/messages`,
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
            <div className='text-2xl font-bold mb-4'>Останні пожертвування</div>
            <ul className="-mb-8 max-h-96 overflow-auto">
                {donations.length ? donations.map((donation, donationIdx) => (
                    <li key={donation.ID}>
                        <div className="relative pb-8">
                            {donationIdx !== donations.length - 1 ? (
                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-6">
                                <span
                                    className={'h-12 w-12 rounded-full flex items-center justify-center bg-yellow-500'}>
                                    <CashIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                </span>
                                <div className="min-w-0 flex-1 flex justify-between space-x-4">
                                    <p className="text-sm text-white-500">
                                        <span className="text-lg text-black-900 font-medium">Дякую</span>
                                        <br></br>
                                        <span className="font-medium text-black-200 ">
                                            {`${donation.senderName} пожертвували ${donation.amountUKR} UAH`}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                )) :
                    <span>Ще немає пожертв</span>
                }
            </ul>
        </div>

        
    );
}

export default DonationsList;