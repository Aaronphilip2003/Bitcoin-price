import axios from "axios";
import { React, useState } from 'react';


function CardDoge() {

    const [price, setPrice] = useState("");

    const getPrice = () => {
        axios
            .get(`http://api.coinlayer.com/api/live?access_key=420dc772ab8fe5cfdde071351ec5459d&symbols=DOGE`)
            .then((res) => {
                setPrice(res.data.rates.DOGE);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className="flex justify-start w-72 p-10 ">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img className="rounded-t-lg" src="https://documents.capex.com/articles/1643187541.jpeg" alt="" />
                    </a>
                    <div className="p-5">
                        <h5 className="text-gray-900 text-xl font-bold mb-2 text-center">DOGE Price</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {price ? <h1 className="text-center font-bold italic">$  {price}</h1> : null}
                        </p>
                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-12" onClick={getPrice}>Update</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardDoge
{/* <button onClick={getPrice}>Click me</button>
<p>
    {price ? <h1 className="font-bold italic">hello {price}</h1> : null}
</p> */}