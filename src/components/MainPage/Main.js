import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarLogo from "../../assets/icon-star.svg";
import classes from "./Main.module.css";

const numbersArr = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
];

const Main = ({ number, setNumber }) => {
  const navigate = useNavigate();

  const submitHandler = () => {
    if (number) {
      navigate("/submitted");
    } else return;
  };

  const selectHandler = (value) => {
    setNumber(value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.circle_star}>
          <img src={StarLogo} alt="logo" />
        </div>
        <h2 className={classes.header}>How did we do ?</h2>
        <p className={classes.story_text}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className={classes.rate_numbers}>
          {numbersArr.map((num) => {
            const { id, value } = num;
            return (
              <div
                key={id}
                className={`${classes.circle_numbers_div} ${
                  value === number ? `${classes.active}` : ""
                }`}
                onClick={() => selectHandler(value)}
              >
                {value}
              </div>
            );
          })}
        </div>
        <button
          className={classes.submit_btn}
          type="submit"
          onClick={submitHandler}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Main;
