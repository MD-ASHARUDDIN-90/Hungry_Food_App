import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { CiPercent } from "react-icons/ci";
import NavBar from "../../Component/NavBar/NavBar";
import style from "./AllRestroPage.module.css";
export default function AllRestroPages() {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("allRestroDetail")) {
      const allRestroData = JSON.parse(localStorage.getItem("allRestroDetail"));
      console.log(allRestroData, "restro page pr all data of rstro aya kya ?");
      setList(allRestroData);
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className={style.main}>
        {list.map((x, i) => (
          <div className={style.card} key={i}>
            <img
              className={style.img}
              width="400px"
              src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${x.data.cloudinaryImageId}`}
              alt="hotel_picture"
            />

            <div>
              <h3>{x.data.name}</h3>

              <div className={style.mainFotter}>
                <div className={style.cuisinesWrap}>
                  {x.data.cuisines.slice(0, 4).map((y) => (
                    <span className={style.cuisines}>{y},</span>
                  ))}
                </div>

                <div className={style.avgPriceWrap}>
                  <span
                    className={
                      Number(x.data.avgRating) < 4
                        ? style.avgRating
                        : style.avgRatingTwo
                    }
                  >
                    <AiFillStar /> {x.data.avgRating}
                  </span>
                  <span>{x.data.slaString}</span>
                  <span>{x.data.costForTwoString}</span>
                </div>

                <div className={style.offers}>
                  <CiPercent className={style.iconPercent} />
                  <span>
                    {x.data.aggregatedDiscountInfo.shortDescriptionList[0].meta}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
