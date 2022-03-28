import React, {useState} from 'react'
import SecondNav from '../landingPage/secondNav/secondNav'
import TopNav from '../landingPage/TopNav/topNav'
import SearchBar from '../searchBar/searchBar'
import style from './searchPage.module.css'
import Results from '../Results/Results'
import { useLocation } from 'react-router-dom'


export default function SearchPage(props) {
    const location = useLocation()
    const Image = location.state
    console.log(Image)
    // names checkboxes and defines the number of checkboxes made per section
    const delivery_opts = [
        {name: "Today by 7pm"},
        {name: "All Prime"}
    ]

    const delivery_day = [
        {name: "Get It Today"},
        {name: "Get It Tomorrow"}
    ]
    // creates an array containing false value for each dictionary obj in the prior array
    const [tickChecked, setTickChecked] = useState(
        new Array(delivery_opts.length).fill(false)
    );

    const [secondSet, setSecondSet] = useState(
        new Array(delivery_day.length).fill(false)
    )
    // Changes state of checkbox depending on its current value
    const changeOnClick = (pos) => {

        const changeTick = tickChecked.map((item, index) => index === pos ? !item : item);
        setTickChecked(changeTick)


  
    }

    const changeOnClick2 = (pos) => {
        const changeTick = secondSet.map((item, index) => index === pos ? !item : item)
        setSecondSet(changeTick)  
    }



    return (
        <div>
            <TopNav/>
            <SearchBar/>
            <SecondNav/>
            <div className={style["sideOpts"]} key="{index}">
                <div>
                    
                </div>
                {/* reenable padding-right to ul tag and fix issue where checkbox is disabled by the styling */}
                <ul>
                    <div className={style["delivery"]}>
                    <p>Delivery</p>
                    {delivery_opts.map(({ name }, index) => {
                        return (
                            <li key={index}>
                                
                                <input type={"checkbox"} name={name} checked={tickChecked[index]} onChange={() => changeOnClick(index)}/>
                                <label>{name}</label>
                                </li>
                        )
                    })}
                    </div>
                    <div className={style["delivery-day"]}>
                        <p>Delivery Day</p>
                        {delivery_day.map(({ name }, index) => {
                            return (
                                <li key={index}>
                                    
                                    <input type={"checkbox"} name={name} checked={secondSet[index]} onChange={() => changeOnClick2(index)}/>
                                    <label>{name}</label>
                                    </li>
                            )
                        })}
                    </div>
                    <div className={style["price-range"]}>
                        <p><b>Price</b></p>
                        <li>Up to £15</li>
                        <li>£15 to £50</li>
                        <li>£50 to £100</li>
                        <li>£100 to £200</li>
                        <li>£200 to £500</li>
                        <li>£500 & above</li>
                    </div>
                    
                    <form className={style["price-select"]}>
                        <input className={style["bar-size"]} placeholder="£ Min" type={"text"}/>
                        <input className={style["bar-size"]} placeholder="£ Min" type="text"/>
                        <button className={style["bar-btn"]} type='submit'>Go</button>
                    </form>
                </ul>
                <div>
                </div>
            </div>
            <div className={style["middle"]}>
                <div>
                    <p className={style["mid-col-title"]}>RESULTS</p>
                    <Results Image={Image}/>
                </div>
                </div>
        </div>
    )
}