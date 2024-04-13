import "./Home.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Home(){
    return (
        <body>
        <div><br/>
            <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
            <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.pinimg.com/originals/62/21/c4/6221c42299de6b0b835e8d7c00d56a00.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src="https://ezmakaan.com/wp-content/uploads/2019/05/Banner-Appliances.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://mobicred.co.za/images/merchants/banners/banner_expert-stores.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
<br/>
<div className="text-center text-white">
    <h1>Festival Special Offer</h1>
</div>
<div>
    
    <div className="d-flex flex-row mb-3 justify-content-center">
  <div className="p-2"><a><img src="https://assets.tatacliq.com/medias/sys_master/images/44583182565406.jpg" alt=""/></a> </div>
  <div className="p-2"><a><img src="https://assets.tatacliq.com/medias/sys_master/images/44583182630942.jpg" alt=""/></a></div>
  <div className="p-2"><a><img src="https://assets.tatacliq.com/medias/sys_master/images/45331207880734.jpg" alt=""/></a></div>
  <div className="p-2"><a><img src="https://assets.tatacliq.com/medias/sys_master/images/44583182762014.jpg" alt=""/></a></div>
  <div className="p-2"><a><img src="https://assets.tatacliq.com/medias/sys_master/images/45331207946270.jpg" alt=""/></a></div>
</div></div>

      </div>  
</body>
        
    )
}
export default Home;