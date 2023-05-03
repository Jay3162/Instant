import react, {useState, useEffect} from 'react';
import style from './carousel.module.css';
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default function Carousel() {

    const [product, setProduct] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [clickedR, setClickedR] = useState(false);
    const [clickedL, setClickedL] = useState(false);

    const [num, setNum] = useState(0);

    // ensures that num doesn't exceed become < || > the length of the product array and allows the carousel to function
    useEffect(() => {
        if (clickedR) {
          if (num === 5) {
            setNum(1);
          } else {
            setNum((prev) => prev + 1);
          }
          setClickedR(false);
        } else if (clickedL) {
          if (num === 0) {
            setNum(5);
          } else {
            setNum((prev) => prev - 1);
          }
          setClickedL(false);
        }
        console.log(num)
      }, [clickedR, clickedL]);

    const handleLeft = (e) => {
        setClickedL(!clickedL);
    }

    const handleRight = (e) => {
        setClickedR(!clickedR);
    }
    const RandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min); 
    }

    let x = RandomInt(1, 19);
    const fetchData = async () => {
        try {
            const req = await fetch('https://fakestoreapi.com/products')
            const res = await req.json();
            // boolean confirming the presence of the api data
            return { success: true, data: res };
        } catch(e) {
            console.log(e)
            return { success: false };
        }
    
    }

    useEffect(() => {
        (async () => {
            setIsLoaded(false);
            let arr = [];
            // assigns api data to state once it's ready and sets isLoaded to true
            let response = await fetchData();
            if (response.success) {
                for (let i = 0; i < 6; i++) {
                    arr.push(response.data[RandomInt(1, 19)]);
                }
                setProduct(arr);
                setIsLoaded(true);
            }
        }) ();
    }, [])

    return (
        <div className={style["container"]}>
            
            {isLoaded ? <div>
                
                <div className={style["carousel"]}>
                    <a className={style["chev"]} onClick={handleLeft}><BsChevronLeft/></a>
                    <div className={style["carousel-txt"]}>
                        <h2 className={style["carousel-title"]}>{product[num].title}</h2>
                        <p>{product[num].description}</p>
                        <Link to={{ pathname: '/products', state: { products: product[num] } }} className={style["cart-btn"]}>View Item</Link>
                        
                    </div>
                    <Link to={{ pathname: '/products', state: { products: product[num] } }}><img src={product[num].image}/></Link>
                    <a className={style["chev"]} onClick={handleRight}><BsChevronRight/></a>
                </div>
                </div> : <div></div>}
            
                
        </div>
    )
}