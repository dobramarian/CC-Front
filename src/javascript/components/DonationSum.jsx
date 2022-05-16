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


function DonationSum() {


        const [donation, setDonation] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                const result = await axios.get(
                    `${process.env.REACT_APP_API_URL}/messages/totalUAH`,
                );
    
                if (result.data.data) {
                    setDonation(Math.round((result.data.data[0].total + Number.EPSILON) * 100) / 100);
                } else {
                    setDonation(Math.round(0));
                }
            };
    
            fetchData();
        }, []);



    return (
            <footer className='h-14 bg-yellow-500 flex justify-center'>
                <p className="text-sm ">
                    <span className='self-center text-blue-500 text-bold text-xl'>SO FAR </span>
                    <span className='self-center font-black text-blue-500 text-bold text-xl'>{donation} UAH</span>
                    <span className='self-center text-blue-500 text-bold text-xl'> HAD BEEN DONATED! ДЯКУЮ!</span>
                </p>
            </footer>
    );
}

export default DonationSum;