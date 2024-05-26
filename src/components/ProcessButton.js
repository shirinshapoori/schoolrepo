import React, { useState } from "react";
import { assignStuToClass } from "../api/classService";

const ProcessButton = ({ processText, relId }) => {
  function sendProcess() {
    if (relId === -1) return;
    assignStuToClass(relId).then((res) => {
      if (res.isSuccess) {
        console.log(res);
      }
    });
  }

  return (
    <button className="process" onClick={sendProcess}>
      {processText} {relId}
    </button>
  );
};
export default ProcessButton;
