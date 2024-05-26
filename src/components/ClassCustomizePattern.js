import React, { useEffect, useState } from "react";
import CountBox from "./CountBox";
import {
  addOrUpdateCustomConstraints,
  constraints,
  deleteConstraints,
} from "../api/classService";
import { toPersianDigit } from "./toPersianDigit";

const ClassCustomizePattern = ({ relId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    constraints(relId).then((res) => {
      if (res.isSuccess) {
        setItems(res.data);
      }
    });
  }, []);

  const handleAdd = (constraintId) => {
    let newItems = items.map((item) => {
      if (item.constraintId === constraintId) {
        if (!item.percent) item.percent = 0;
        if (item.percent === 100) return item;
        let newItem = { ...item, percent: item.percent };
     
        addOrUpdateCustomConstraints( constraintId,relId, item.percent + 5).then(
          (res) => {
            if (res.isSuccess) {
              newItem = {
                ...item,
                percent: item.percent + 5,
                constraintGuid: res.data,
              };
            }
          }
        );

        return newItem;
      }
      return item;
    });
    setItems(newItems);
  };

  const handleDlt = (constraintId) => {
    let dltItems = items.map((item) => {
      if (item.constraintId === constraintId) {
        let dltItem = { ...item };
        if (!item.percent || item.percent === 0) return item;
        if (item.percent - 5 === 0) {
          deleteConstraints().then((res) => {
            if (res.isSuccess) dltItem.percent = 0;
          });
        }

        addOrUpdateCustomConstraints(constraintId, relId, item.percent - 5).then(
          (res) => {
            if (res.isSuccess) {
              dltItem = { ...item,
              percent: item.percent - 5,
              constraintGuid: res.data, };
            }
          }
        );
        return dltItem;
      }
      return item;
    });
    setItems(dltItems);
  };

  return (
    <>
      <p className="btn-class-lable">کلاس‌بندی سفارشی</p>
      {items.map((item) => (
        <CountBox
          onAdd={handleAdd}
          onDlt={handleDlt}
          num={item.percent ? item.percent : toPersianDigit(0)}
          item={item}
        />
      ))}
    </>
  );
};

export default ClassCustomizePattern;
