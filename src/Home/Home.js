import React from "react";
import "./Home.css";
import RentForm from "./RentForm/RentForm";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://goldcar.s3.amazonaws.com/interrent/landings/ofertas/oferta_1_euro_2018/from-1euro-day_background.jpg"
          //   src="https://s1.cdn.autoevolution.com/images/news/2019-hyundai-santa-fe-official-images-reveal-a-completely-new-suv-123289_1.jpg"
          alt="amazon prime"
        />
      </div>
      <div className="home__rentForm">
        <RentForm className="home__rentForm" />
      </div>
    </div>
  );
}

export default Home;
