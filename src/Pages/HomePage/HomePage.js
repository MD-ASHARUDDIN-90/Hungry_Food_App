import { IoFastFoodOutline } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import HomeModal from "../../Component/HomeModal/HomeModal";
import style from './HomePage.module.css'
export default function HomePage(){
    
    return(
        <>
        <div className={style.up}>
        <HomeModal />
        <div>
        <img width="680px" height="553px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="" />
        </div>
        </div>

        <div className={style.liveOrderTrack}>
        <div className={style.liveOrderTrackSubBox}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="thumbsUp" width= "105px" height="199px" />
        <h3>No Minimum Order</h3>
        <p>Order in for yourself or for the group,</p> <p>with no restrictions on order value</p>
        </div>

        <div className={style.liveOrderTrackSubBox}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="liveOrder" width= "105px" height="199px"/>
        <h3>Live Order Tracking</h3>
        <p>Know where your order is at all times, </p> <p > from the restaurant to your doorstep </p>
        </div>

        <div className={style.liveOrderTrackSubBox}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt="liveOrder" width= "105px" height="199px"/>
        <h3>Lightning-Fast Delivery</h3>
        <p> Experience Swiggy's superfast delivery </p>
        <p> for food delivered fresh & on time</p>
        </div>
    
        </div>


        <div>

        <div className={style.app}>

        <div className={style.googleApp}>

        <div>
        <h1>
        Restaurants in your pocket
        </h1>
        <p>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
        </div>

        <div className={style.googleApphoto}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" height="54px"/>
        
        <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" height="54px"/>
      
        </div>

        </div>

        <div className={style.mobile}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" alt="" width="384px" height="489px"/>
        <img className={style.mobileTwo} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt="" width="384px" height="489px"/>
        
        </div>

        </div>
        
        </div>

        <div className={style.footer}>
        <div className={style.footerContact}>
        <div>
        <h3>COMPANY</h3>
        <p>About us</p>
        <p>Team</p>
        <p>Careers</p>
        <p>Swiggy Blog</p>
        <p>Bug Bounty</p>
        <p>Swiggy One</p>
        <p>Swiggy Corporate</p>
        <p>Swiggy Instamart</p>
        <p>Swiggy Genie</p>
        </div>

        <div>
        <h3>CONTACT</h3>
        <p>Help & Support</p>
        <p>Partner with us</p>
        <p>Ride with us</p>
        </div>

        <div>
        <h3>LEGAL</h3>
        <p>Terms & Conditions</p>
        <p>Refund & Cancellation</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Offer Terms</p>
        <p>Phishing & Fraud</p>
        <p>Corporate – Swiggy Money Codes Terms and Conditions</p>
        <p>Corporate - Swiggy Discount Voucher Terms and Conditions</p>
        </div>

        <div className={style.footerGoogleApphoto}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" height="54px"/>
        
        <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" height="54px"/>
        </div>

        </div>

        <div>
        
        </div>
        </div>

        <div className={style.footerLastMain}>

        <div className={style.seperation}> </div>
        <div className={style.footerLast}>

        <div className={style.iconTab}>
        <IoFastFoodOutline className={style.icon}/>
        <h1 >Hungry</h1>
        </div>

        <div className={style.footerLasttext}>
        &#169;
        {new Date().getFullYear()} 
        &nbsp; Hungry
        </div>


      

        <div className={style.footerIconWrap}>
        <FiFacebook className={style.footerLastIcon}/>
        <FaPinterestP className={style.footerLastIcon} />
        <BsInstagram className={style.footerLastIcon} />
        <BsTwitter className={style.footerLastIcon} />
        
        </div>

        </div>
        </div>

        </>
    )
}