

function Card() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    return (
        <div id="containerCardProduk">

            {arr.map((value, index) => {
                return (

                <div className="cardProduk" key={index}>

                    <img src="gambar.jpg" className="gambarProduk" />

                    <div class="infoProduk" 
                    >
                        <p className="namaProduk">
                            KAOS POLOS (BLACK)
                        </p>
                        <p className="hargaProduk f-roboto">
                            RM 200.00
                        </p>
                        <p className="kodeProduk">
                            KR.11223344
                        </p>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Card;