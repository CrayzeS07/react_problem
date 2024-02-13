import React from "react";
import img1 from "./assets/img_logo"

export const  Main_html  = () => {
return <>
<div className="box">
    <div className="block_1">
        <p>Хиты</p>
    </div>
    <div className="block_2">
        <p>Скидки</p>
    </div>
    <div className="block_1">
        <p>Новинки</p>
    </div>
</div>
<div className="container">
    <div className="tavar">
        <div className="tavar1">
            <img src={img1} alt="" />
        </div>
    </div>
</div>
</>
}