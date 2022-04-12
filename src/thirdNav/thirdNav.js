import React from 'react'
import { Link } from 'react-router-dom'
import style from './thirdNav.module.css'


export default function ThirdNav() {
    const order_img = require('./images/order._CB660692193_.png')
    const security_img = require('./images/security._CB657827121_.png')
    const prime_img = require('./images/prime-ss-modified_Sep4._CB657827121_.png')
    const address_img = require('./images/YA_icon_address_01._CB657827121_.png')
    const payment_img = require('./images/payment._CB660692193_.png')
    const gift_img = require('./images/gift_card._CB659956472_.png')
    const msg_img = require('./images/YA_icon_Message_3._CB657827121_.png')
    const contact_img = require('./images/contact_us._CB659956472_.png')
    const app_img = require('./images/amazon_app._CB643864491_.png')
    return (
        <div >
            <div className={style["navbar"]}>
                <span className={style["nav-el"]}><b><Link to='/'>Amazon.co.uk</Link></b></span>
                <span className={style["nav-el"]}>Today's Deals</span>
                <span className={style["nav-el"]}>Warehouse Deals</span>
                <span className={style["nav-el"]}>Outlet</span>
                <span className={style["nav-el"]}>Subscribe & Save</span>
                <span className={style["nav-el"]}>Vouchers</span>
                <span className={style["nav-el"]}>Amazon Family</span>
                <span className={style["nav-el"]}>Amazon Prime</span>
                <span className={style["nav-el"]}>Prime Video</span>
                <span className={style["nav-el"]}>Prime Student</span>
                <span className={style["nav-el"]}>Mobile Apps</span>
                <span className={style["nav-el"]}>Amazon Pickups</span>
                <span className={style["nav-el"]}>Amazon Assistant</span>
            </div>
            <p className={style["account-title"]}>Your Account</p>
            <div className={style["segments"]}>
                <div className={style["seg-row"]}>
                    <div className={style["segment"]}>
                        <img className={style["order-img"]} src={order_img}></img>
                        <div className={style["segtxt"]}>
                            <p className={style["segtitle"]}>Your Orders</p>
                            <p className={style["seginfo"]}>Track, return or buy things again</p>
                        </div>
                    </div>
                    <div className={style["segment"]}>
                        <img className={style["order-img"]} src={security_img}></img>
                        <div className={style["segtxt"]}>
                            <p className={style["segtitle"]}>Login & security</p>
                            <p className={style["seginfo"]}>Edit login, name, and mobile number</p>
                        </div>
                    </div>
                    <div className={style["segment"]}>
                        <img className={style["order-img"]} src={prime_img}></img>
                        <div className={style["segtxt"]}>
                            <p className={style["segtitle"]}>Prime</p>
                            <p className={style["seginfo"]}>View benefits and payment settings</p>
                        </div>
                    </div>
                </div>
                <div className={style["seg-row"]}>
                    <div className={style["segment"]}>
                        <img className={style["order-img"]} src={address_img}></img>
                        <div className={style["segtxt"]}>
                            <p className={style["segtitle"]}>Your Addresses</p>
                            <p className={style["seginfo"]}>Edit addresses and delivery preferences for orders</p>
                        </div>
                    </div>
                    <div className={style["segment"]}>
                        <img className={style["order-img"]} src={payment_img}></img>
                        <div className={style["segtxt"]}>
                            <p className={style["segtitle"]}>Your payments</p>
                            <p className={style["seginfo"]}>Manage payment methods and settings, view balances and offers</p>
                        </div>
                    </div>
                    <div className={style["segment"]}>
                        <img className={style["order-img"]} src={gift_img}></img>
                        <div className={style["segtxt"]}>
                            <p className={style["segtitle"]}>Gift Cards & Top Up</p>
                            <p className={style["seginfo"]}>View balance or redeem a card</p>
                        </div>
                    </div>
                </div>
                <div className={style["seg-row"]}>
                    <div className={style["segment"]}>
                        <img className={style["order-img"]} src={msg_img}></img>
                        <div className={style["segtxt"]}>
                            <p className={style["segtitle"]}>Message Centre</p>
                            <p className={style["seginfo"]}>View your Amazon and Marketplace Seller Messages</p>
                        </div>   
                    </div>
                    <div className={style["segment"]}>
                        <img className={style["order-img"]} src={contact_img}></img>
                        <div className={style["segtxt"]}>
                            <p className={style["segtitle"]}>Contact Us</p>
                            <p className={style["seginfo"]}>Contact our Customer Service via Phone or Chat</p>
                        </div>
                    </div>
                    <div className={style["segment"]}>
                        <img className={style["order-img"]} src={app_img}></img>
                        <div className={style["segtxt"]}>
                            <p className={style["segtitle"]}>Amazon Mobile App</p>
                            <p className={style["seginfo"]}>Downlaod the Amazon App</p>
                        </div>
                    </div>
                </div>

            </div>
            <hr></hr>
            <div className={style["tabs"]}>
                <div className={style["tab-row"]}>
                    <div className={style["tab"]}>
                        <div className={style["inner-tab"]}>
                            <p className={style["tab-title"]}>Digital content and devices</p>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Amazon Drive</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Apps and more</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Audible settings</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Content and devices</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Games and software</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Music settings</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Video settings</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Digital and device forum</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Comixology settings</a>
                            </span>
                        </div>
                    </div>
                    <div className={style["tab"]}>
                        <div className={style["inner-tab"]}>
                                <p className={style["tab-title"]}>Email alerts, messages, ads, and cookies</p>
                                <span className={style["tab-span"]}>
                                    <a className={style["tab-a"]} href='#'>Cookie preferences</a>
                                </span>
                                <span className={style["tab-span"]}>
                                    <a className={style["tab-a"]} href='#'>Advertising preferences</a>
                                </span>
                                <span className={style["tab-span"]}>
                                    <a className={style["tab-a"]} href='#'>Communication preferences</a>
                                </span>
                                <span className={style["tab-span"]}>
                                    <a className={style["tab-a"]} href='#'>Message centre</a>
                                </span>
                                <span className={style["tab-span"]}>
                                    <a className={style["tab-a"]} href='#'>Alexa shopping notifications</a>
                                </span>
                                <span className={style["tab-span"]}>
                                    <a className={style["tab-a"]} href='#'>Deals Notifications</a>
                                </span>
                            </div>
                        </div>
                    <div className={style["tab"]}>
                        <div className={style["inner-tab"]}>
                            <p className={style["tab-title"]}>More ways to pay</p>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Your purchase preferences</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Amazon money store</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Amazon Pay</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Amazon Coins</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Coupons</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Shop with Points</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Product vouchers</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Amazon Business Amex Card</a>
                            </span>
                        </div>
                    </div>
                    
                </div>
                <div className={style["tab-row"]}>
                    <div className={style["tab"]}>
                    <p className={style["tab-title"]}>Ordering and shopping preferences</p>
                        <span className={style["tab-span"]}>
                            <a className={style["tab-a"]} href='#'>Your Transactions</a>
                        </span>
                        <span className={style["tab-span"]}>
                            <a className={style["tab-a"]} href='#'>Amazon Currency Converter</a>
                        </span>
                        <span className={style["tab-span"]}>
                            <a className={style["tab-a"]} href='#'>Change Currency Settings</a>
                        </span>
                        <span className={style["tab-span"]}>
                            <a className={style["tab-a"]} href='#'>Archived Orders</a>
                        </span>
                        <span className={style["tab-span"]}>
                            <a className={style["tab-a"]} href='#'>Lists</a>
                        </span>
                        <span className={style["tab-span"]}>
                            <a className={style["tab-a"]} href='#'>Manage saved IDs</a>
                        </span>
                        <span className={style["tab-span"]}>
                            <a className={style["tab-a"]} href='#'>Profile</a>
                        </span>
                        <span className={style["tab-span"]}>
                            <a className={style["tab-a"]} href='#'>VAT registration number</a>
                        </span>
                    </div>
                    <div className={style["tab"]}>
                    <p className={style["tab-title"]}>Other accounts</p>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Account linking</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Amazon Business registration</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Sell on Amazon</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Audible membership</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Login with Amazon</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Twitch account settings</a>
                            </span>

                        </div>
                    <div className={style["tab"]}>
                    <p className={style["tab-title"]}>Shopping programmes</p>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Manage your profiles</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Amazon Household</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Subscribe & Save</a>
                            </span>
                            <span className={style["tab-span"]}>
                                <a className={style["tab-a"]} href='#'>Manage Amazon Family Settings</a>
                            </span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}