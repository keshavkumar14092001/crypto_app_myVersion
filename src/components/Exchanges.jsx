import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`https://api.coingecko.com/api/v3/exchanges`);
                setExchanges(data);
                console.log(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        fetchExchanges();
    }, [])

    if (error) return <ErrorComponent message={"Error while fetching response from API"} />

    return (
        <section className='w-full my-8'>
            {
                loading ? <Loader /> : <>
                    <div className='max-w-7xl mx-auto flex flex-wrap justify-evenly items-center'>
                        {
                            exchanges.map((exchange) => (
                                <Link key={exchange.id} to={exchange.url} target="blank">
                                    <div
                                        className='w-[250px] h-[200px] bg-gray-200 shadow-md rounded-lg flex flex-col items-center justify-evenly m-8 hover:cursor-pointer hover:bg-gray-100 hover:shadow-xl transition'
                                    >
                                        <img src={exchange.image} alt="loading" className='w-[40px] h-[40px]' />
                                        <h1 className='text-3xl font-bold text-purple-900'>{exchange.trust_score_rank}</h1>
                                        <h3 className='text-lg font-semibold text-purple-800'>{exchange.name}</h3>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </>
            }
        </section>
    )
}

export default Exchanges;