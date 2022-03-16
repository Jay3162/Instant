import React, {useState} from 'react';
import style from './sidemenu.module.css'
import {ReactComponent as CogIcon} from './icons/iconmonstr-menu-1.svg'



export default function Sidemenu() {
    
    function NavIcon() {
        const [open, setOpen] = useState(false)
        function Dropdown(props) {
            return (
                <li >
                    
                    <a className={style["menu"]} onClick={() => setOpen(!open)}>{props.icon}</a>
                    <span className="icon-right">{props.iconRight}</span>
                    {open && props.children}

                    
                </li>
                
            )
        }
        return (
            
            <div className={style["dropdown"]}>
                <Dropdown icon={<CogIcon />}></Dropdown>
                <div className={style["screen"]}>
                    <Dropdown ><p className={style["headerSize"]}><b>Trending</b></p></Dropdown>
                    <Dropdown>Best Sellers</Dropdown>
                    <Dropdown >New Releases</Dropdown>
                    <Dropdown >Movers and Shakers</Dropdown>
                    <Dropdown><hr></hr></Dropdown>
                    <Dropdown><p className={style["headerSize"]}><b>Digital Content And Devices</b></p></Dropdown>
                    <Dropdown>Prime Video</Dropdown>
                    <Dropdown>Music</Dropdown>
                    <Dropdown>Apps for Android</Dropdown>
                    <Dropdown>Smart Home</Dropdown>
                    <Dropdown>Fire TV</Dropdown>
                    <Dropdown>Fire Tablets</Dropdown>
                    <Dropdown>Kindle E-readers & Books</Dropdown>
                    <Dropdown>Audible Audiobooks</Dropdown>
                    <Dropdown><hr></hr></Dropdown>
                    <Dropdown><p className={style["headerSize"]}><b>Shop By Department</b></p></Dropdown>
                    <Dropdown>Books</Dropdown>
                    <Dropdown>Films</Dropdown>
                    <Dropdown>Electronics & Computers</Dropdown>
                    <Dropdown>Home, Garden</Dropdown>
                    <Dropdown>See All</Dropdown>
                    <Dropdown><hr></hr></Dropdown>
                    <Dropdown><p className={style["headerSize"]}><b>Programs & Features</b></p></Dropdown>
                    <Dropdown>Morrisons</Dropdown>
                    <Dropdown>Gift Cards</Dropdown>
                    <Dropdown>Find a Gift</Dropdown>
                    <Dropdown>Handmade</Dropdown>
                    <Dropdown>Sell All</Dropdown>
                    <Dropdown><hr></hr></Dropdown>
                    <Dropdown><p><b>Help & Settings</b></p></Dropdown>
                    <Dropdown>Your Account</Dropdown>
                    <Dropdown>Currency Settings</Dropdown>
                    <Dropdown>Customer Service</Dropdown>
                    <Dropdown>Sign Out</Dropdown>

                </div>

            </div>
        )
    }


    return (
        <NavIcon >

        </NavIcon>
    )


}