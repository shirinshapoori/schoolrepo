import React, { useState } from "react";
import { toPersianDigit } from "./toPersianDigit";

const PersonalInfo = ({ name, icon, subItems, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="personal-info">
      <div className="personal-titr" onClick={() => setOpen(!open)}>
        {icon}
        <p className="long-txt">{name}</p>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#000"
              d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            idth="1em"
            height="1em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#000"
              d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
            />
          </svg>
        )}
      </div>
      {open ? (
        <>
          {subItems
            ? subItems.map((item) => (
                <div className="more-info">
                  <p className="long-txt">{item.name}</p>
                  <p
                    className="long-txt"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {typeof item.value === "number"
                      ? `${toPersianDigit(item.value)}`
                      : item.value}
                  </p>
                  <div style={{ marginTop: "5px" }}>{item.icon}</div>
                </div>
              ))
            : children}
        </>
      ) : null}
    </div>
  );
};

export default PersonalInfo;
