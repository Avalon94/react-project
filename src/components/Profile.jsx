import React from "react";
var locale = require("../locales/ru_Ru.json");
const Profile = () => {
  return (
    <div className="content">
      <img src="https://voya.dk/wp-content/uploads/2019/08/Voya-Travel-Bali-rundrejse-500x200.jpg" />
      <div>ava + description</div>
      <div>
        <h2>{locale.My_posts}</h2>
      </div>
    </div>
  );
};

export default Profile;
