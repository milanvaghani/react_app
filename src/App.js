import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Name from "./Name";
import Search from "./Search";
import Services from "./Services";
import User from "./User";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" element={<About name="About"/>} />
        <Route exact path="/services" element={<Services name="Services"/>} />
        <Route exact path="/search" element={<Search name="Search"/>} />
        <Route exact path="/user/:fname/:lname" element={<User name="User"/>} />
        <Route exact path="/contact" element={<Contact name="Contact"/>} />
        <Route path="/contact/name" element={<Name name="Name"/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
