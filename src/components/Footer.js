import {Link} from "react-router-dom";

const Footer = ()=>{
    return (
        <>
            <div className="fixed left-0 bottom-0 mt-2 w-full bg-slate-100 flex justify-between flex-wrap items-center mt-3 text-md font-medium text-gray-500">
                <h1 className="p-2">Thanks for visiting Vizag Restaurants !!</h1>
                <ul className="flex py-2 mr-10 font-mono">
                    <li className="px-2 mx-2">
                        <Link className="hover:text-black" to="https://github.com/Asrk03" target="_blank">
                            <button>GitHub</button>
                        </Link >
                    </li>
                    <li className="px-2 mx-2">        
                        <Link className="hover:text-black" to="https://www.linkedin.com/in/asrk06/" target="_blank">
                            <button>LinkedIn</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Footer;