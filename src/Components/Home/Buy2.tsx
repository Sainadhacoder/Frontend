function Buy2(){
    return(
        <div>
            <h2 className="text-white bg-dark text-center">Products Details</h2><br/><br/>
            <center>
            <div className="row container text-center row row-cols-9">
            <div className="card col">
            <p className="text-center "><b>Iphone 14</b> </p>
            <img src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG19.png" className="card-img-top p-3 " alt="..."/>
            <div className="card-body">
            <h5 className="card-title"> 14 Pro Max </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div></div>
            <div className="card col m-12 p-12">
            <p className="text-center ">Iphone 14 </p><br/><br/><hr/>
            <label className="text-center">Product Name:</label>
            <p className="text-centert">Iphone 14</p>
            <br/><hr/>
            <label className="text-center">Price:</label><br/>
            <p style={{height:"50px"}}>1,20,000/-</p>
            <br/>
            <hr/>
            <label className="text-center ">About the Product</label>
            <p>
128 GB ROM<br/>
15.49 cm (6.1 inch) Super Retina XDR Display<br/>
12MP + 12MP | 12MP Front Camera<br/>
A15 Bionic Chip, 6 Core Processor Processor</p>
<hr/>




            </div>
            
            </div>
            </center>
        </div>
    );
}
export default Buy2;