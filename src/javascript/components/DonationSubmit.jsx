import React from 'react';
import axios from 'axios';
const { CURRENCY_ISO_CODE} = require('../utils/constant.js');

function DonationsSubmit() {

    const handleDonationSend = async (e) => {
        const senderName = document.getElementById('senderName').value;
        const amount = document.getElementById('amount').value;
        const currency = document.getElementById('currency').value.toUpperCase();
        const messageContent = document.getElementById('messageContent').value;

        if(!CURRENCY_ISO_CODE[currency]){
            alert('Invalid currency!');
        } else {
            try {
                let response = await axios.post(
                    `${process.env.REACT_APP_API_URL}/messages/donate`,
                    {
                        senderName,
                        amount,
                        currency,
                        messageContent
                    });
    
                    if(response.status === 200) {
                        alert(`Thank you for donating ${response.data.donateData.amountUKR} UAH!`);
                        window.location.reload();
                    }
            }
            catch (error) {
                alert('Something went wrong');
                console.log(error);
            }
        }
    }

    return (
        <div id="DonationsSubmit">
            <div className='text-2xl font-bold mb-4'>Submit your donation</div>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="senderName">
                            Your name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="senderName" type="text" placeholder="John" />
                    </div>
                    <div className="w-full md:w-1/4 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="amount">
                            Amount
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="amount" type="text" placeholder="5" />
                    </div>
                    <div className="w-full md:w-1/4 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="currency">
                            Currency
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="currency" type="text" placeholder="EUR" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="messageContent">
                            Your donation
                        </label>
                        <textarea
                            rows={4}
                            name="comment"
                            id="messageContent"
                            className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-800 rounded-md p-5"
                            placeholder={'Say hello!'} />
                    </div>
                </div>
            </form>

            <button
                        className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 capitalize"
                        onClick={handleDonationSend}>
                        SUBMIT
                    </button>
        </div>
    );
}

export default DonationsSubmit;