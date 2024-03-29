import React, {useState} from "react";
import style from './resultTemp.module.css'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";


export default function Result(props) {

    const cont = []
    for (let i = 0; i < props.Image.length; i++) {
        cont.push(props.Image[i])
    }
    const [resultProd, setResultProd] = useState(cont)
    let starCont = []
    const starHolder = []

    

// generate stars for each item to replace numeric rating
    for (let i = 0; i < props.Image.length; i++) {
        const numStars = Math.floor(props.Image[i].rating.rate)
        for (let j = 0; j < numStars; j++) {
            starCont.push(<FaStar className={style["star"]}/>)
        }
        if (props.Image[i].rating.rate % 1 !== 0) {
            starCont.push(<FaStarHalfAlt className={style["star"]}/>)
        }
        starHolder.push(starCont)
        starCont = []
    }
    
    return (
        <div>
            
            {resultProd.map((obj, index) => {
            return (
                <div key={index} className={style["aligner"]}>
                    <Link to={{ pathname:'/products', state: {obj}}}>
                    <div className={style["prod-left"]}>
                        <img className={style["image-opts"]}src={obj.image} alt="product"></img>
                    </div>
                    </Link>
                    <div className={style["prod-right"]}>
                        <Link to={{ pathname:'/products', state: {obj}}}>   
                        <p className={style["title"]}>{obj.title}</p>
                        </Link>
                        <div className={style["rating"]}>
                            <div className={style["rate-row"]}>
                                 <p className={style["starholder"]}>{starHolder[index]}</p>
                                <p className={style["num-stars"]}>{obj.rating.rate}</p>
                            </div>
                    
                            <p className={style["reviews"]}>{obj.rating.count} reviews</p>
                        </div>
                        <p className={style["price"]}>£{obj.price}</p>
                        <p className={style["del-date"]}>Get it <b>Tomorrow, Mar 15</b></p>
                    </div>
                    
                </div>
            )
        })}
        </div>

    )
}