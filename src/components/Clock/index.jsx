import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

Clock.propTypes = {};

function dateToString(date) {
  const hour = `0${date.getHours()}`.slice(-2);
  const minute = `0${date.getMinutes()}`.slice(-2);
  const second = `0${date.getSeconds()}`.slice(-2);

  return hour + ":" + minute + ":" + second;
}

function Clock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    //   Did mount
    const _updatingInterval = setInterval(function () {
      const date = new Date();
      const newTimeString = dateToString(date);
      setTimeString(newTimeString);
    }, 1000);
    // trong này t khai báo 1 cái hàm Interval -> nó đc khai báo ở cái component Clock này

    return () => {
      //   Will Unmount
      clearInterval(_updatingInterval);
    };
  }, []);

  // Chỗ này nè: Đầu tiên tạo cái useEffect truyền mảng rỗng để giống như DidMount vs Will unMount

  const style = {
    fontSize: "42px",
    padding: "0px",
    margin: "0px",
  };
  return (
    <div>
      <p style={style}>{timeString}</p>
    </div>
  );
}

export default Clock;
