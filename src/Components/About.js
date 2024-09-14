import React from "react";
import "./About.css"; // Assuming the styles are in an external CSS file

const About = () => {
  return (
    <div className="about-container">
      <b>About myNotebook</b>
      <p className="about-para">
        Welcome to myNotebook, your personal note management solution. Designed
        with simplicity and efficiency in mind, myNotebook allows you to securely
        store, update, and organize your thoughts, ideas, and reminders all in
        one place. Whether you're creating a quick to-do list, capturing an
        important thought, or tracking your daily goals, myNotebook ensures your
        notes are just a click away. With user-friendly sign-up and login
        features, you can seamlessly create an account to start adding, updating,
        and deleting notes at your convenience. Stay organized and never miss a
        beat with myNotebook!
      </p>
    </div>
  );
};

export default About;
