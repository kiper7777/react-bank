import React, { useState, useEffect } from "react";
import BackButton from "./BackButton";
import "./NotificationsPage.css";
import announcement from "./svg/announcement.svg";
import warning from "./svg/warning.svg";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/notifications/events");
    
    eventSource.onmessage = (event) => {
      const newNotification = JSON.parse(event.data);
      setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const handleBackButtonClick = () => {
    console.log("Back button clicked!");
  };

  return (
    <div className="page__notifications">
      <div className="header">
        <BackButton onClick={handleBackButtonClick} />
        <h1 className="header__notifications-title">Notifications</h1>
      </div>

      <div className="form__notifications">
        <div className="cards__notifications">
          {notifications.map((notification, index) => (
            <div key={index} className="card__notifications">
              <img
                src={notification.type === "login" ? warning : announcement}
                alt={`${notification.type} Icon`}
                className="card__notifications-image"
              />
              <div className="card__notifications-text">
                <span className="card__notifications-title">{notification.title}</span>
                <p className="card__notifications-text-description">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;


// import React, { useState } from "react";
// import BackButton from "./BackButton";
// import "./NotificationsPage.css";
// import announcement from "./svg/announcement.svg";
// import warning from "./svg/warning.svg";
// import { click } from "@testing-library/user-event/dist/click";

// const NotificationsPage = () => {
//   const handleBackButtonClick = () => {
//     // Handle back button click logic here
//     console.log("Back button clicked!");
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle signup logic here (e.g., send data to backend)
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Clear form fields
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="page__notifications">
//       <div className="header">
//         <BackButton onClick={handleBackButtonClick} />
//         <h1 className="header__notifications-title">Notifications</h1>
//       </div>

//       <form className="form__notifications" onSubmit={handleSubmit}>
    
//         <div className="field__notifications">
          
//           <div className="cards__notifications">
//             <div className="card__notifications">
//               <img
//                 src={announcement}
//                 alt="Announcement Icon"
//                 className="card__notifications-image"
//                 onClick={click}
//               />
//               <div className="card__notifications-text">
//                 <span className="card__notifications-title">New reward system</span>
//                 <p className="card__notifications-text-description">10 min. ago - Announcement</p>
//               </div>
//             </div>

//             <div className="card__notifications">
//               <img
//                 src={warning}
//                 alt="Warning Icon"
//                 className="card__notifications-image"
//                 onClick={click}
//               />
//               <div className="card__notifications-text">
//                 <span className="card__notifications-title">New login</span>
//                 <p className="card__notifications-text-description">20 min. ago - Warning</p>
//               </div>
//             </div>

//             <div className="card__notifications">
//               <img
//                 src={announcement}
//                 alt="Announcement Icon"
//                 className="card__notifications-image"
//                 onClick={click}
//               />
//               <div className="card__notifications-text">
//                 <span className="card__notifications-title">New reward system</span>
//                 <p className="card__notifications-text-description">10 min. ago - Announcement</p>
//               </div>
//             </div>

//             <div className="card__notifications">
//               <img
//                 src={warning}
//                 alt="Warning Icon"
//                 className="card__notifications-image"
//                 onClick={click}
//               />
//               <div className="card__notifications-text">
//                 <span className="card__notifications-title">New login</span>
//                 <p className="card__notifications-text-description">20 min. ago - Warning</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NotificationsPage;
