import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const Show = () => {
    return (
        <div>
            <a><img style={{width: '100%' , height:"50%"}} src="https://media.gucci.com/content/DiaryHeroArticle_Standard_3200x1624/1635925503/DiaryHeroArticle_Love-Parade-lineup-placeholder_001_Default.jpg" alt="" /></a>

            <div className='img'>
           
            </div>
            <div className="link">
                <a href='' style={{display: 'flex', justifyContent: 'center', color: 'black'}}>Гости модного показа коллекции Love Parade в образах от Gucci. Показ состоялся на 
                Голливудском бульваре в Лос-Анджелесе, Калифорния.</a>
            </div>
            <div className='cards'>
            <Card
            hoverable
            style={{ width: 500 }}
            cover={<img alt="example" src="https://media.gucci.com/content/DiaryHeroArticle_Standard_950x680/1618296303/DiaryHeroArticle_S21-Aria-ShowSpace-Runway_001_Default.jpg" />}>
            <Meta title="" description="" />
            <div style={{marginTop:"15px", fontSize:"15px", display:"flex" , justifyContent:"center"}}> 
            <Link style={{color:"black"}} to="/products">Aria: образы</Link>
            </div>
            </Card>
            <Card
            hoverable
            style={{ width: 500 }}
            cover={<img alt="example" src="https://media.gucci.com/content/DiaryHeroArticle_Standard_950x680/1636100104/DiaryHeroArticle_Love-Parade-showspace-01_001_Default.jpg" />}>
            <Meta title="" description="" />
            <div style={{marginTop:"15px", fontSize:"15px" , display:"flex" , justifyContent:"center"}}> 
            <Link style={{color:"black"}} to="/products">Открытие Gucci Love Parade</Link>
            </div>
            </Card>
            </div>

             <div> 
              <Link to={"/"}>
             <img style={{display:'flex', maxWidth:"1500px", width:"100%", margin:"10% auto", }} src="https://media.gucci.com/content/DiaryHeroArticle_Standard_3200x1624/1636120805/DiaryHeroArticle_Love-Parade-gallery-guests_001_Default.jpg" alt=''/>
             </Link>
             </div>
        </div>

    );
};

export default Show;