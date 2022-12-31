import axios from "axios";
import { React, useState } from 'react';

function Card() {

    const [price, setPrice] = useState("");

    const getPrice = () => {
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((res) => {
                setPrice(res.data.bpi.USD.rate);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className="flex justify-start w-72 p-10">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJpdGNvaW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
                    </a>
                    <div className="p-2">
                        <h5 className="text-gray-900 text-xl font-bold mb-2 text-center">Bitcoin Price</h5>
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

export default Card
{/* <button onClick={getPrice}>Click me</button>
<p>
    {price ? <h1 className="font-bold italic">hello {price}</h1> : null}
</p> */}