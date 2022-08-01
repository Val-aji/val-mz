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
                <div style={{width: "50%", margin: "0 10px"}}>
                  <button style={{width: "100%", border: "0px solid", height: "50px", borderRadius: "100%"}}>
                   
                  </button>
                  <p style={{textAlign: "center"}}> Nouval </p>
               </div>
            </div>
        </div>
    )
}

export default Nav;