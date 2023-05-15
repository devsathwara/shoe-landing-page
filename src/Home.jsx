import Img from './assets/shoe_image.jpg'
import './assets/css/Home.css'
import FlipKart from './assets/flipkart.svg'
import amazon from './assets/amazon.svg'
function Home() {
 
    return (
      <>
      <main className='home-page'>
        <div className="content">
            <div className="desc">
            <h1 className='heading'>YOUR FEET DESERVE THE BEST</h1>
        <p className='description'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>
        
        <div className="btn">
            <button className="shop">Shop Now</button>
            <button className="Category">Category</button>
        </div>
        <div className="shop-on">
            <p className='parashop'>Also Available On</p>
            <div className="imglogo">
            <img src={FlipKart} alt="Your SVG" height="32px" width="32px"></img>
            <img src={amazon} height="32px" width="32px"/>
            </div>
        </div>
        </div>
        <div className="img-shoe">
            <img src={Img} alt="" className='imgshoe'/>
        </div>
      </main>
      </>
      
    )
  }
  
  export default Home