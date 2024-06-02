import React, { useEffect, useLayoutEffect, useState } from "react";
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

  const changeItemById = (id, percent, constraintGuid) => {
    let newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, percent: percent, constraintGuid: constraintGuid };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleAdd = (id) => {
    let selectedItem = items.filter((item) => item.id === id)[0];
    if (!selectedItem.percent) selectedItem.percent = 0;
       if (selectedItem.percent === 100 ) return;

    addOrUpdateCustomConstraints(id, relId, selectedItem.percent + 5).then(
      (res) => {
        if (res.isSuccess) {
          changeItemById(id, selectedItem.percent + 5, res.data);
        }
      }
    );
  };

  const handleDlt = (id) => {
    let selectedItem = items.filter((item) => item.id === id)[0];
    // if (!selectedItem.percent || selectedItem.percent === 0) return;
    if (!selectedItem.percent) selectedItem.percent = 0;
       if (selectedItem.percent === 100 ) return;

    if (selectedItem.percent === 0) {
      deleteConstraints(selectedItem.constraintGuid).then((res) => {
        if (res.isSuccess) changeItemById(id, 0, res.data);
      });
      return;
    }
 
    addOrUpdateCustomConstraints(id, relId, selectedItem.percent - 5).then(
      (res) => {
        if (res.isSuccess) {
          changeItemById(id, selectedItem.percent - 5, res.data);
        }
      }
    );
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
