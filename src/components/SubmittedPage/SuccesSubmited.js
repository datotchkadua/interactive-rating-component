import React, { useEffect } from "react";
import classes from "./SuccesSubmited.module.css";
import succesImg from "../../assets/illustration-thank-you.svg";

const Succes = ({ number }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={succesImg} alt="Thank-you" />

        <div className={classes.rate_info}>
          You selected {number || 0} out of 5
        </div>

        <h2 className={classes.header}>Thank you!</h2>
        <p className={classes.story_text}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default Succes;
