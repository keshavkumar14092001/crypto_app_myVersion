import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="w-full bg-transparent/90 text-purple-700 flex justify-center items-center sticky top-0">
            <div className="flex justify-between items-center w-[90%] md:w-[50%] lg:w-[40%] xl:w-[25%] py-4">
                <div className="border-2 px-3 py-2 border-purple-700 rounded-md text-lg md:text-xl md:font-semibold hover:cursor-pointer hover:bg-white transition">
                    <Link to={"/"}>
                        Home
                    </Link>
                </div>
                <div className="border-2 px-3 py-2 border-purple-700 rounded-md text-lg md:text-xl md:font-semibold hover:cursor-pointer hover:bg-white transition">
                    <Link to={"/exchanges"}>
                        Exchanges
                    </Link>
                </div>
                <div className="border-2 px-3 py-2 border-purple-700 rounded-md text-lg md:text-xl md:font-semibold hover:cursor-pointer hover:bg-white transition">
                    <Link to={"/crypto"}>
                        Coins
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;