import { IoFastFoodOutline } from 'react-icons/io5';
import { RiPercentFill } from 'react-icons/ri';
import CustomInput from '../../Atom/CustomInput';
import style from './NavBar.module.css'
import { TbPokeball } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiSearch, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import foodDataFetch from '../../FetchData/foodDataFetch';

export default function NavBar() {
    const [value , setValue] = useState("")
    const [list , setList] = useState([])
   async function captureValue(e){
        setValue(e.target.value)
      let predictedFood = await foodDataFetch(e.target.value) 
      console.log(predictedFood.data.suggestions,"navbar")
      setList(predictedFood.data?.suggestions)
    }
    console.log(list,"food prediedd")
    return(
        <>
        <div className={style.main}>
        <Link  className={style.link} to="/" >
        <div className={style.subMain}>
        <IoFastFoodOutline className={style.icon}/>
        <h1>Hungry</h1>
        </div>
        </Link>

        <div className={style.mainSecond}>
        <div className={style.input}>
        <FiSearch className={style.iconSearch} />
        <CustomInput value={value} onChange={captureValue} className={style.inputBox} placeholder="Search"/>
        </div>
       
          
           { value ? 
        <div className={style.predictedFood} style={{}}>
        {list.map((x,i)=>
            <>
            <div className={style.foodList} key={i}>
            <img width="100px" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${x.cloudinaryId}`} alt="dishes"/>
           <p>{x.text}</p>
            </div>
            </>)}
        </div> : ""
        }

        <div  className={style.subMain}>
        <RiPercentFill className={style.iconTwo}  />
        <h3>Offers</h3>
        </div>

        <div  className={style.subMain}>
        <TbPokeball className={style.iconTwo}  />
        <h3>Help</h3>
        </div>

        <div  className={style.subMain}>
        <FiUser className={style.iconTwo} />
        <h3>Sign In</h3>
        </div>

        <div  className={style.subMain}>
        <AiOutlineShoppingCart className={style.iconTwo}  />
        <h3>Cart</h3>
        </div>

        </div>
        </div>
        </>
    )
}