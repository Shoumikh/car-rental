import React from "react";
import CarCard from "../CarCard/CarCard";
import RentForm from "../Home/RentForm/RentForm";
import "./Cars.css";
import cars from "../cars";

function Cars() {
  return (
    <div className="cars">
      <div className="cars__conainer">
        <div className="cars__rentForm">
          <RentForm />
        </div>
        <div className="cars__cardContainer">
          <div className="cars__cardItem">
            {cars.map((car) => (
              <CarCard
                image={car.image}
                model={car.model}
                info={car.info}
                personCapasity={car.personCapasity}
                bagCapasity={car.bagCapasity}
                fuelType={car.fuelType}
                gearType={car.gearType}
                price={car.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cars;
