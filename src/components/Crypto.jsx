import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);

    const changePage = (pageNumber) => {
        setPage(pageNumber);
        setLoading(true);
    }

    const btns = new Array(132).fill(1);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const { data } = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&page=${page}`
                );
                setCoins(data);
                console.log(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        fetchCoins();
    }, [page])

    if (error) return <ErrorComponent message={"Error while fetching response from API"} />

    return (
        <section className='w-full my-8'>
            {
                loading ? <Loader /> : <>
                    <div className='max-w-7xl mx-auto flex flex-wrap justify-evenly items-center'>
                        {
                            coins.map((coin) => (
                                <div
                                    className='w-[250px] h-[220px] bg-gray-200 shadow-md rounded-lg flex flex-col items-center justify-evenly m-8 hover:cursor-pointer hover:bg-gray-100 hover:shadow-xl transition'
                                    key={coin.id}
                                >
                                    <img src={coin.image} alt="loading" className='w-[40px] h-[40px]' />
                                    <h1 className='text-xl font-semibold text-purple-600'>{coin.market_cap_rank}</h1>
                                    <h1 className='text-2xl font-bold text-purple-900 tracking-wide'>{coin.symbol}</h1>
                                    <h2 className='text-xl font-semibold tracking-wider text-purple-700'>₹{" "}{coin.current_price}</h2>
                                    <h3 className='text-lg font-semibold text-purple-800 tracking-wide'>{coin.name}</h3>
                                </div>
                            ))
                        }
                    </div>
                    <div className='max-w-7xl mx-auto flex overflow-auto p-8'>
                        {
                            btns.map((btn, index) => (
                                <button
                                    onClick={() => changePage(index + 1)}
                                    key={index}
                                    className="p-3 border-2 border-purple-500 mx-2 rounded-md shadow-md hover:border-purple-800 hover:bg-gray-100 transition hover:shadow-xl"
                                >
                                    {index + 1}
                                </button>
                            ))
                        }
                    </div>
                </>
            }
        </section>
    )
}

export default Exchanges;