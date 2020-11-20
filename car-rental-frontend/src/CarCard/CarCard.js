import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import "./carCard.css";

function CarCard({
  model,
  image,
  info,
  personCapasity,
  bagCapasity,
  fuelType,
  gearType,
  price,
}) {
  return (
    <div className="carCard">
      <img src={image} alt="" />
      <div className="carCard__info">
        <h3>{model}</h3>
        <p>{info}</p>
        <div className="carCard__items">
          <div className="carCard__itemOne">
            <div className="carCard__itemBox">
              <PersonIcon />
              <span>{personCapasity} Passengers</span>
            </div>
            <div className="carCard__itemBox">
              <LocalGasStationIcon color="orange" />
              <span>{fuelType}</span>
            </div>
          </div>
          <div className="carCard__itemTwo">
            <div className="carCard__itemBox">
              <LocalMallIcon />
              <span>{bagCapasity} large bag </span>
            </div>
            <div className="carCard__itemBox">
              <DragIndicatorIcon />
              <span>{gearType}</span>
            </div>
          </div>
          <div className="carCard__itemPrice">
            <p>
              Price from <strong>{price}</strong> Taka per day
            </p>
            <button>Rent</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
