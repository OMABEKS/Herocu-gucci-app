import React from 'react';
import './Home.css'
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import video from "../../assets/videos/gucci.mp4"

const { Meta } = Card;
const Home = () => {
    return (
        <div>
            <a><img style={{width: '100%' , height:"50%"}} src="https://cdn.wallpapersafari.com/33/52/r7OQmH.jpg" alt="" /></a>

            <div className='img'>
           
            </div>
            <div className="link">
                <a href='' style={{display: 'flex', justifyContent: 'center', color: 'black'}}>НОВИНКИ</a>
            </div>
            <div className='cards'>
            <Card
            hoverable
            style={{ width: 500 }}
            cover={<img alt="example" src="https://media.gucci.com/content/BestOfEditsFeatured_Standard_432x364/1636986605/BestOfEditsFeatured_GiftGiving21-Palio-012_001_Default.jpg" />}>
            <Meta title="MEN" description="" />
            <div style={{marginTop:"15px", fontSize:"15px", display:"flex" , justifyContent:"center"}}> 
            <Link style={{color:"black"}} to="/products">ПОДРОБНЕЕ</Link>
            </div>
            </Card>
            <Card
            hoverable
            style={{ width: 500 }}
            cover={<img alt="example" src="https://media.gucci.com/content/BestOfEditsFeatured_Standard_432x364/1636986604/BestOfEditsFeatured_GiftGiving21-Palio-001_001_Default.jpg" />}>
            <Meta title="WOMEN" description="" />
            <div style={{marginTop:"15px", fontSize:"15px" , display:"flex" , justifyContent:"center"}}> 
            <Link style={{color:"black"}} to="/products">ПОДРОБНЕЕ</Link>
            </div>
            </Card>
            </div>

             <div> 
              <Link to={"/"}>
             <img style={{display:'flex', maxWidth:"1500px", width:"100%", margin:"10% auto", }} src="https://media.gucci.com/content/HeroRegularStandard_3200x1350/1631106003/HeroRegularStandard_Gucci-100-Pattern-01_001_Default.jpg" alt=''/>
             </Link>
             </div>

             <div className="video-mp4">
                 <video autoPlay muted loop style={{display:'flex', maxWidth:"1400px", width:"100%", margin:"10% auto", }}>
                     <source src={video} type="video/mp4"/>
                 </video>

             </div>
        </div>

    );
};

export default Home;