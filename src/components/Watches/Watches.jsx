import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './Watches.css'

const Watches = () => {
 const { Meta } = Card;

    return (
        <div>
        <div className='card-watches'>
             <Card
            hoverable
            style={{ width: 500 }}
            cover={<img alt="example" src="https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1564145104/584272_I8600_8740_008_100_0000_Light--35.jpg" />}>
            <Meta title="Наручные часы, 35 мм" description="" />
            <div style={{marginTop:"15px", fontSize:"15px", display:"flex" , justifyContent:"center"}}> 
            <Link style={{color:"black"}} to="/products">ПОДРОБНЕЕ</Link>
            </div>
            </Card>
            <Card
            hoverable
            style={{ width: 500 }}
            cover={<img alt="example" src="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1567584904/584272_I8600_8740_001_100_0000_Light--35.jpg" />}>
            <Meta title="Наручные часы, 35 мм" description="" />
            <div style={{marginTop:"15px", fontSize:"15px" , display:"flex" , justifyContent:"center"}}> 
            <Link style={{color:"black"}} to="/products">ПОДРОБНЕЕ</Link>
            </div>
            </Card>
        </div>
        <div className="card-watches">
        <Card
            hoverable
            style={{ width: 500 }}
            cover={<img alt="example" src="https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1615967106/663942_I8600_8125_008_100_0000_Light--Grip-Disneyx-Gucci-40.jpg" />}>
            <Meta title="Часы Grip Disney x Gucci, 40 мм" description="" />
            <div style={{marginTop:"15px", fontSize:"15px", display:"flex" , justifyContent:"center"}}> 
            <Link style={{color:"black"}} to="/products">ПОДРОБНЕЕ</Link>
            </div>
            </Card>
            <Card
            hoverable
            style={{ width: 500 }}
            cover={<img alt="example" src="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1615833010/663942_I8600_8125_001_100_0000_Light--Grip-Disneyx-Gucci-40.jpg" />}>
            <Meta title="Часы Grip Disney x Gucci, 40 мм" description="" />
            <div style={{marginTop:"15px", fontSize:"15px" , display:"flex" , justifyContent:"center"}}> 
            <Link style={{color:"black"}} to="/products">ПОДРОБНЕЕ</Link>
            </div>
            </Card>
        </div>
        <div className="card-watches">
        <Card
            hoverable
            style={{ width: 500 }}
            cover={<img alt="example" src="https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1638902716/681832_ICXA0_8605_008_100_0000_Light--G-Timeless-38.jpg" />}>
            <Meta title="Часы G-Timeless, 38 мм" description="" />
            <div style={{marginTop:"15px", fontSize:"15px", display:"flex" , justifyContent:"center"}}> 
            <Link style={{color:"black"}} to="/products">ПОДРОБНЕЕ</Link>
            </div>
            </Card>
            <Card
            hoverable
            style={{ width: 500 }}
            cover={<img alt="example" src="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1634917518/681832_ICXA0_8605_001_100_0000_Light--G-Timeless-38.jpg" />}>
            <Meta title="Часы G-Timeless, 38 мм" description="" />
            <div style={{marginTop:"15px", fontSize:"15px" , display:"flex" , justifyContent:"center"}}> 
            <Link style={{color:"black"}} to="/products">ПОДРОБНЕЕ</Link>
            </div>
            </Card>
        </div>
        </div>
    );
};

export default Watches;