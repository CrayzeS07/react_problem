import React from "react";
import Scss from "./NT.module.scss"
import logo from "./assets/img_logo.svg"
import like from "./assets/img_n1.svg"
import korzinka from "./assets/korzinka.svg"
import search from "./assets/search.svg"

export const  Header  = () => {
    return <>
        <header>
            <div className="contaner">
          <div className="header">
          <div className="NT">
            <div className="logo">
                <div className="logo_img">
                 <a href="./index.html"><img src={logo} alt="logo" /></a>
                 <p className="p1">Колбасы и мясные деликатесы</p>
                </div>
               
            </div>
            <div className="kor">
                  <a href="#"><img className="img_11" src={like} alt="like" /></a>
                  <a href="#"><img className="img_12" src={korzinka} alt="korzinka" /></a>
                  <div className="text_12">
                    <p className="p2">Товаров: 3</p>
                    <p className="p3">12 540 ₽</p>
                  </div>
                </div>
            </div>
          </div>
            </div>
        </header>
        <div className="header_2">
                <ul className="ul">
                 <a href="#"><li className="li">О ресноте</li></a>
                 <a href="#"><li className="li">Каталог</li></a>
                 <a href="#"><li className="li">Наши магазины</li></a>
                 <a href="#"><li className="li"> Контакты</li></a>
                </ul>
                <form className="search">
                    <input className="serach_12" type="text" placeholder="Поиск по сайту" />
                    <img className="img_search" src={search} alt="search" />
                </form>
                </div>       
                <div className="header_3">
                           <div className="heder_text">
                           <h1 className="h1_text">Истина в качестве</h1>    
                              <p className="p_text">КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ</p>     
                      <button className="btn_1">Купить</button>
                           </div>
                    </div>     
    </>
}