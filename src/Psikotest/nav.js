import {Link} from "react-router-dom";

function Nav (props) {
    const Navs = ["Dashboard", "Cashier", "Transaction", "Product", "Voucher"]

    const NavsOut = ["Settings", "Logout"];

    return (
        <div className="containerNav">
            <div className="Navs">
                {Navs.map((value, index) => {
                    return (
                        <Link to="/" key={index} className="navLink">
                            {value}
                        </Link>
                    )
                })}
            </div>

            <div className="Navs">
                {NavsOut.map((value, index) => {
                    return (
                        <Link to="/" key={index} className="navLink">
                            {value}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Nav;