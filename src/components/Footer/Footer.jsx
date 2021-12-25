import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import {InstagramOutlined , YoutubeOutlined , FacebookOutlined ,TwitterOutlined} from '@ant-design/icons';

function Footer() {

  function success() {
    Modal.success({
      content: 'FBDJFJDDJJ',
      input:"jsdjjafkj"
      
      
    });
  }
    return (
      <div className='footer-container'>
         <div className="btn-top">
              
                <a onClick={() =>  window.scrollTo({top: 0, behavior: 'smooth'})
}>ВВЕРХ</a>
              
              </div>
      
        
        <div class='footer-links'>
            <div className='footer-link-items'>
                 <h2 style={{color:'#999'}}>ЭКСКЛЮЗИВНЫЕ УСЛУГИ</h2>
                 <Link to='/'>Связаться с нами</Link>
                 <Link to='/'>FAQs</Link>
            </div>
            <div class='footer-link-items'>
             
              <h2>НУЖНА ПОМОЩЬ?</h2>
              <a href='https://t.me/trainingshopbot'>
              <img style={{width:"40px", heigth:"40px"}} src="https://veadug.com/wp-content/uploads/f8/ef/f8efd62ec948a114347dc5214cb498b7.png" alt="" />
              </a>
              <Link onClick={success} to='/'>Связаться с нами</Link>
              <Link to='/'>FAQs</Link>
              <Link to='/'>Уход за изделиями</Link>
              <Link to='/'>Карта сайта </Link>
            </div>
            <div class='footer-link-items'>
              <h2>НАША КОМПАНИЯ</h2>
              <Link to='/'>Подробнее о Gucci</Link>
              <Link to='/'>Gucci Equilibrium</Link>
              <Link to='/'>Code of Ethics</Link>
              <Link to='/'> Careers</Link>
              <Link to= '/'> Правовая информация  </Link>
             
            </div>
           
             
            <div class='footer-link-items'>
              <h2>ABOUT WOS US</h2>
              <Link to='/'>About Us</Link>
              <Link to='/'>Press Room</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Newsletter Sign Up</Link>
            </div>
            <div class='footer-link-items'>
              <h2>СЛЕДИТЕ ЗА НАМИ</h2>
              <div style={{width:'100%',  display: 'flex' , justifyContent:'space-around' , alignItems:'center' , fontSize:"150%" }} >
              <a href="https://www.instagram.com/gucci/"><InstagramOutlined /></a>
              <a href="https://www.youtube.com/c/gucci"><YoutubeOutlined /></a>
              <a href="https://www.facebook.com/gucci"> <FacebookOutlined /> </a>
              <a href="https://twitter.com/gucci"> <TwitterOutlined /> </a>  
              </div>
              
            </div>
          
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
           
        
        <Link to ="/">
          <img src="https://www.watchesofswitzerland.com/medias/usa-payment-options-group-1121.png?context=bWFzdGVyfHJvb3R8NTA1M3xpbWFnZS9wbmd8aDIwL2hkNS85MTIyMTcxMTI1NzkwLnBuZ3wzZDQ5ZGZhMjc2NjM4MzBlZjZhMjk1NzcyOWEyOGUwYzVjNGZiNzAzZGZmYjQ5Y2U5M2E1MTUxYzU5ZWRmMjVj" alt="" />
             
        </Link>
             
            </div>
            <small class='website-rights'> © ПРОСТИТЕ РАЗРАБОТЧИКИ ГУЧЧИ ЧТО НАРУШИЛ ВАШИ АВТОРСКИЕ ПРАВА</small>

          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;