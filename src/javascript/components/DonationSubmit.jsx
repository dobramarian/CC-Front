import React from 'react';
import axios from 'axios';

function DonationsSubmit() {

    const handleDonationSend = async (e) => {
        const senderName = document.getElementById('senderName').value;
        const amount = document.getElementById('amount').value;
        const currency = document.getElementById('currency').value;
        const messageContent = document.getElementById('messageContent').value;

        try {
            let response = await axios.post(
                `${process.env.REACT_APP_API_URL}/message/foreign`,
                {
                    senderName,
                    amount,
                    currency,
                    messageContent
                });

                // if(response.status === 200) {
                //     alert(`Your original donations was in ${response.data.translationData.originalLanguage}. \nDonation sent: ${response.data.translationData.translatedText}`);
                // }
        }
        catch (error) {
            alert('Something went wrong');
            console.log(error);
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
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 capitalize"
                        onClick={handleDonationSend}>
                        SUBMIT
                    </button>
        </div>
    );
}

export default DonationsSubmit;