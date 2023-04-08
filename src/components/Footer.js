import {Link} from "react-router-dom";

const Footer = ()=>{
    return (
        <>
            <div className="flex justify-between">
                <h1>Thanks for visiting Food Clone !!</h1>
                <Link to="https://github.com/Asrk03">
                    <button>GitHub</button>
                </Link >
                <Link to="https://www.linkedin.com/in/asrk06/">
                    <button>LinkedIn</button>
                </Link>
            </div>
        </>
    )
}

export default Footer;