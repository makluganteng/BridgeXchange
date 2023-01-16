import { NextPage } from "next"
import { useRouter } from "next/router"
import Image from "next/image";
import { useEffect, useState } from "react";
import { runMain } from "../../../function/mynft";
import * as ethers from 'ethers';
import ABI from "../../../assets/message.json";
import nftABI from '../../../assets/ERC721.json'
import { FC } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
} from "@chakra-ui/react";

const NFTPage: NextPage = () => {
    const router = useRouter();
    //const { nftAddress, tokenId } = router.query
    const nftAddress = "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5"
    const tokenId = "2700"
    const [image, setImage] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [condition, setConditon] = useState<boolean>()
    const walletAddress = sessionStorage.getItem("MetamaskAddress")

    const contractAddress = "0x7136c7ecdb01f815fd151a01d8fd17e34d1e3b2e"; // address of the deployed contract
    const abi = ABI// ABI of the contract
    //0x0000000000000000000000000000000000000000
    const walletProvider = new ethers.providers.Web3Provider(window.ethereum as any);

    const [inputName, setInputName] = useState('')
    const [inputCVV, setInputCVV] = useState('')
    const [inputCardNumber, setInputCardNumber] = useState('')
    const [inputExpDate, setInputExpDate] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure();

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

    const pandaBuy = async () => {
        const res = await fetch('localhost:3001/transfer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                cardDetails: {
                    cardNumber: inputCardNumber,
                    expiryDate: inputExpDate,
                    cvv: inputCVV,
                },
                amount: 100,
                currency: 'myr',
                coin: 'ethereum',
                walletAddress: walletAddress,
            }
        })
        return await res.json()
    }

    const handleBuy = async () => {
        const accounts = walletProvider.getSigner()
        console.log(accounts)
        const smartContractNFT = new ethers.Contract(contractAddress, abi, accounts)
        console.log(smartContractNFT)
        try {
            console.log(nftAddress)
            const nft = new ethers.Contract(nftAddress, nftABI, accounts)
            console.log(nft)
            const options = { gasLimit: 30000000, value: ethers.utils.parseEther("0.1") }
            // await nft.approve(contractAddress, tokenId)
            const list = await smartContractNFT.buyItem(nftAddress, tokenId, options)
            const receipt = await list.wait(1)
            console.log(receipt)
            console.log("buy success, check your wallet now")
        } catch (e) {
            console.log(e)
        }
        //router.push('../../bank')
    };

    const handleBuyNew = () => {
        const receipt = pandaBuy()
        // check transaction status,
        handleBuy()
    }

    const handleNoBuy = async () => {
        alert("This is your own listing")
    };

    useEffect(() => {
        const fetchData = async () => {

            const nft = await runMain();
            const resp = nft?.filter(value => value.tokenId === tokenId && value.contract.address === nftAddress)
            console.log(resp)
            if (resp) {
                setImage("https://testing-data.reddio.com/images/2700.png")
                setTitle("REDDIO")
            }
        };
        fetchData()

        //snmartcontract conditional rendering
        const conditionalRendering = async () => {
            const accounts = walletProvider.getSigner()
            console.log(accounts)
            const smartContractNFT = new ethers.Contract(contractAddress, abi, accounts)
            console.log(smartContractNFT)
            try {
                console.log(nftAddress)
                const nft = new ethers.Contract(nftAddress, nftABI, accounts)
                console.log(nft)
                //await nft.approve(contractAddress, tokenId)
                const list = await smartContractNFT.getListing(nftAddress, tokenId)
                console.log(list)
                console.log(list[1])
                if (list[1] == walletAddress) {
                    setConditon(true)
                } else {
                    setConditon(false)
                }
            } catch (e) {
                console.log(e)
            }
        };
        conditionalRendering()
        console.log(condition)
    },);


    return (
        condition ? <>
            <div className="bg-[#F3EFE0] h-[960px] flex items-center justify-center">
                <div className=" w-[1300px] h-[700px] border-solid border border-8 rounded-[50px]
        border-[#E8C4C4] flex items-center justify-around ">
                    <div className="pl-20">
                        <Image
                            src={image}
                            width={500}
                            height={500}
                            alt=""
                            unoptimized={true}
                            className="rounded-lg border border-solid border-8"
                        />
                    </div>
                    <div className="my-2 pr-32">
                        <h1 className="my-2 py-4 font-Poppins font-bold text-6xl text-[#86C8BC]"> {title}</h1>
                        <h1 className="my-2 py-4 font-Poppins font-bold text-5xl text-[#FEA1BF]"> {tokenId}</h1>
                        <button className="my-2 py-4 font-Poppins font-bold text-4xl
            border border-solid px-[100px] rounded-full bg-[#C780FA] text-[#ECE8DD]"
                            onClick={handleNoBuy}>No Buy NFT</button>
                        <br />
                    </div>
                </div>
            </div>
        </> : <>
            <div className="bg-[#F3EFE0] h-[960px] flex items-center justify-center">
                <div className=" w-[1300px] h-[700px] border-solid border border-8 rounded-[50px]
    border-[#E8C4C4] flex items-center justify-around ">
                    <div className="pl-20">
                        <Image
                            src={image}
                            width={500}
                            height={500}
                            alt=""
                            unoptimized={true}
                            className="rounded-lg border border-solid border-8"
                        />
                    </div>
                    <div className="my-2 pr-32">
                        <h1 className="my-2 py-4 font-Poppins font-bold text-6xl text-[#86C8BC]"> {title}</h1>
                        <h1 className="my-2 py-4 font-Poppins font-bold text-5xl text-[#FEA1BF]"> {tokenId}</h1>
                        <button className="my-2 py-4 font-Poppins font-bold text-4xl
        border border-solid px-[100px] rounded-full bg-[#C780FA] text-[#ECE8DD]"
                            onClick={onOpen}>Buy NFT With PandaBank</button>
                        <br />
                    </div>
                </div>
            </div>


            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

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
                                    <button type="button"
                                        onClick={handleBuyNew}//function yg nge call resghiter
                                        className="hover:bg-blue-700 hover:shadow-lg bg-[#5F9DF7] text-1xl text-[#fff] font-Poppins font-bold px-6 py-4 border border-solid rounded-[50px]">Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NFTPage