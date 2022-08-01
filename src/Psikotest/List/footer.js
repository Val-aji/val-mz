

function Footer() {
  let angka = []
  for(let i = 1; i <= 100; i++) {
    angka.push(i)
  }
  return (
      <div className="footerList">
           <div className="infoList">
             <p>Subtotal</p>
             <p>RM 299.00</p>
           </div>
           
           <div className="infoList">
             <p>Discount</p>
             <p>RM 00</p>
           </div>
           
           <div className="infoList">
            {angka.map((value, index) => {
             return (
             <span key={index}> - </span>
              )
            })}
            </div>
            
            <div className="infoList">
              <b>Total Amount </b>
              <b>RM 29.00</b>
            </div>
            
           <button className="paymentButton">
             CONTINUE TO PAYMENT
           </button>
      </div>
    )
}

export default Footer;
