import { FC } from "react";
import React, { useState } from 'react';
import { useAccount } from 'wagmi'

const Bank: FC = () => {
    const [inputName, setInputName] = useState('')
    const [inputCVV, setInputCVV] = useState('')
    const [inputCardNumber, setInputCardNumber] = useState('')
    const [inputExpDate, setInputExpDate] = useState('')

    const { address, isConnected } = useAccount();

    const handleChangeName = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputName(event.target.value);
        console.log('name: ', inputName);
    };

    const handleChangeCardNumber = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputCardNumber(event.target.value);
        console.log('card number: ', inputCardNumber);
    };

    const handleChangeCVV = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputCVV(event.target.value);
        console.log('cvv: ', inputCVV);
    };

    const handleChangeExpDate = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputExpDate(event.target.value);
        console.log('expdate: ', inputExpDate);
    };

    const handleTransfer = async () => {
        await fetch('localhost:3001/transfer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                cardDetails: {
                    cardNumber: inputCardNumber,
                    expiryDate: inputExpDate,
                    cardNumber: inputCVV, 
                },
                amount: 100,
                currency: 'myr',
                coin: 'ethereum',
                walletAddr: address,
            }
        }).then((resp) => resp.json()
        .then(() => {
            console.log('do stuff here')
        })
    }

    return (
        <div className="bg-[#F3EFE0] h-[1000px] items-center justify-center flex">
            <div className="block p-6 rounded-lg shadow-lg bg-white w-max">
                <h5 className="m-[20px] text-[#FB2576] text-4xl font-Volkhov">Enter Card Information</h5>
                <p className="text-[#6D67E4] font-Poppins">Card Owner</p>
                <input
                    onChange={handleChangeName}
                    type="text"
                    className="
                        form-control block w-full px-3 py-1.5 my-1.5
                        text-base font-normal text-gray-700 bg-white bg-clip-padding
                        border border-solid border-gray-300 rounded transition ease-in-out
                        m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="owner_name"
                    required />

                <p className="text-[#6D67E4] font-Poppins">Card Number</p>
                <input
                    onChange={handleChangeCardNumber}
                    type="number"
                    className="
                        form-control block w-full px-3 py-1.5 my-1.5
                        text-base font-normal text-gray-700 bg-white bg-clip-padding
                        border border-solid border-gray-300 rounded transition ease-in-out
                        m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="card_number"
                    required />

                <p className="text-[#6D67E4] font-Poppins">CVV</p>
                <input
                    onChange={handleChangeCVV}
                    type="number"
                    className="
                        form-control block w-full px-3 py-1.5 my-1.5
                        text-base font-normal text-gray-700 bg-white bg-clip-padding
                        border border-solid border-gray-300 rounded transition ease-in-out
                        m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="cvv"
                    required />

                <p className="text-[#6D67E4] font-Poppins">Expiration Date</p>
                <input
                    onChange={handleChangeExpDate}
                    type="date"
                    className="
                        form-control block w-full px-3 py-1.5 my-1.5
                        text-base font-normal text-gray-700 bg-white bg-clip-padding
                        border border-solid border-gray-300 rounded transition ease-in-out
                        m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="expiration_date"
                    required />
                <div className="flex flex-col items-center m-[20px]">
                    <button type="button"//function yg nge call resghiter
                        onClick={handleTransfer}
                        className="hover:bg-blue-700 hover:shadow-lg bg-[#5F9DF7] text-1xl text-[#fff] font-Poppins font-bold px-6 py-4 border border-solid rounded-[50px]">Buy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Bank;
