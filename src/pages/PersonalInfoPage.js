import React, { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";

const PersonalInfoPage = () => {
   const personalItems = [
    {
      name: "نام و نام خانوادگی",
      value: "شیرین شاپوری",
    },
    {
      name: "شماره موبایل",
      value: 9121234676,
    },
    {
      name: "تاریخ تولد",
      value: 1379,
    },
    {
      name: "کد ملی",
      value: 925252552,
    },
    {
      name: "کد پرسنلی",
      value: 37412,
    },
  ];
  const workBackgroundItems = [
    {
      name: "مدرك تحصيلی",
      value: "لیسانس",
    },
    {
      name: "رشته تحصيلی",
      value: "نرم افزار",
    },
    {
      name: "سابقه تدریس",
      value: 22,
    },
    {
      name: "مدرک تحصیلی",
      value: "File.png",
    },
    {
      name: "گواهینامه‌های اخذ شده",
      value: "File.png",
    },
  ];

  
  const jobDescriptions = [
    {
      type: "مدرسه",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90%"
          height="1em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#000"
            d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
          />
        </svg>
      ),
      name: "دخترانه شهید حاتمی",
    },
    {
      type: "نقش",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90%"
          height="1em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#000"
            d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
          />
        </svg>
      ),
      name: "معلم",
    },
    {
      type: "ساعت ابلاغ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90%"
          height="1em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#000"
            d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
          />
        </svg>
      ),
      name: "6 ساعت",
    },
    {
      type: "تدریس تخصصی",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90%"
          height="1em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#000"
            d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
          />
        </svg>
      ),
      name: "ریاضی",
    },
    {
      type: "تدریس غیرتخصصی",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90%"
          height="1em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#000"
            d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
          />
        </svg>
      ),
      name: "هنر ",
    },
  ];

  return (
    <div className="profile-border">
      <PersonalInfo
        name="مشخصات فردی"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FF5CAE"
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M3.751 20.105a8.25 8.25 0 0 1 16.498 0a.75.75 0 0 1-.437.695A18.7 18.7 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695"
              clip-rule="evenodd"
            />
          </svg>
        }
        subItems={personalItems}
      />
      <PersonalInfo
        name="سوابق تحصيلی و شغلی"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FF842C"
              d="M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3"
              opacity="0.5"
            />
            <path
              fill="#FF842C"
              d="M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14z"
            />
          </svg>
        }
        subItems={workBackgroundItems}
      />
      <PersonalInfo
        name="امنیت"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ff3d4f"
              d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
            />
          </svg>
        }
      >
        <PasswordResetForm />
      </PersonalInfo>

      <PersonalInfo
        name="سمت شغلی"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#3BBFDC"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <circle cx="18" cy="15" r="3" />
              <circle cx="9" cy="7" r="4" />
              <path d="M10 15H6a4 4 0 0 0-4 4v2m19.7-4.6l-.9-.3m-5.6-2.2l-.9-.3m2.3 5.1l.3-.9m2.2-5.6l.3-.9m.2 7.4l-.4-1m-2.4-5.4l-.4-1m-2.1 5.3l1-.4m5.4-2.4l1-.4" />
            </g>
          </svg>
        }
      >
        <PersonalInfo 
          name="مدرسه"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="#3bbfdc" stroke-width="4"><path stroke-linejoin="round" d="M4 33a2 2 0 0 1 2-2h6v-7l12-8l12 8v7h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4z"/><path stroke-linecap="round" d="M24 6v10"/><path stroke-linecap="round" stroke-linejoin="round" d="M36 12V6s-1.5 3-6 0s-6 0-6 0v6s1.5-3 6 0s6 0 6 0m-8 32V31h-8v13m-2 0h12"/></g></svg>}
          subItems={[{ name: "دخترانه شهید حاتمی" }, { name: "دبیرستان فردوسی" }]}
         
        />
        <PersonalInfo 
          name="نقش"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#3bbfdc" d="M16.43 16.69a7 7 0 1 1 7-7a7 7 0 0 1-7 7m0-11.92a5 5 0 1 0 5 5a5 5 0 0 0-5-5M22 17.9a25.41 25.41 0 0 0-16.12 1.67a4.06 4.06 0 0 0-2.31 3.68v5.95a1 1 0 1 0 2 0v-5.95a2 2 0 0 1 1.16-1.86a22.91 22.91 0 0 1 9.7-2.11a23.58 23.58 0 0 1 5.57.66Zm.14 9.51h6.14v1.4h-6.14z"/><path fill="#3bbfdc" d="M33.17 21.47H28v2h4.17v8.37H18v-8.37h6.3v.42a1 1 0 0 0 2 0V20a1 1 0 0 0-2 0v1.47H17a1 1 0 0 0-1 1v10.37a1 1 0 0 0 1 1h16.17a1 1 0 0 0 1-1V22.47a1 1 0 0 0-1-1"/></svg>}
          subItems={[{ name: "معلم" },{ name: "معاون" },{ name: "والدین" },{ name: "دانش‌آموز" }]}
          
        />
        <PersonalInfo 
          name="ساعت ابلاغ"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="#3bbfdc"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></g></svg>}
          subItems={[{ name: "6" },{ name: "12" },{ name: "18" },{ name: "24" },{ name: "30" }]}
         
        /> 
        <PersonalInfo 
          name="تدریس تخصصی"
         icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#3bbfdc" stroke-linecap="round" stroke-width="1.5"><path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114M6 17h14M6 21h14"/><path stroke-linejoin="round" d="M6 21a2 2 0 1 1 0-4"/><path d="M9 7h6"/></g></svg>}
          subItems={[{ name: "ریاضی" },{ name: "هنر" },{ name: "علوم" },{ name: "فارسی" },{ name: "اجتماعی" }]}
         
        /> 
        <PersonalInfo 
          name="تدریس غیرتخصصی"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#3bbfdc" stroke-linecap="round" stroke-width="1.5"><path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114M6 17h14M6 21h14"/><path stroke-linejoin="round" d="M6 21a2 2 0 1 1 0-4"/><path d="M9 7h6"/></g></svg>}
          subItems={[{ name: "ریاضی" },{ name: "هنر" },{ name: "علوم" },{ name: "فارسی" },{ name: "اجتماعی" }]}
         
        />
      </PersonalInfo>
    </div>
  );
};

const PasswordResetForm = ({ onSubmit }) => {
  const [password, setPassword] = useState("");
  const [prePassword, setPrePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form style={{marginRight:"15%"}}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ password, confirmPassword });
      }}
    >
       <input 
        type="password"
        placeholder="رمز عبور فعلی"
        className="input-pass"
        value={prePassword}
        onChange={(e) => setPrePassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="رمز عبور جدید"
        className="input-pass"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="تکرار رمز عبور جدید"
        className="input-pass"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit" className="save" style={{marginRight:"25%", marginBottom:"2%"}}>تغییر رمز عبور</button>
    </form>
  );
};

export default PersonalInfoPage;

//               )
// switch(index) {
// case 0:
//  return console.log("fffffffffff");
// case 1:
//   return <EducationalInfo />;
// case 2:
//   return <SecurityInfo />;
// default:
//   return <RoleInfo />;
//    }
