import React, { useEffect, useState } from 'react';
import PageComponent from './../components/PageComponent.jsx';
import Navbar from './../components/Navbar.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  
  const navigateToPath = (path) => {
    navigate(path);
  }
  useEffect(() => {
    axios.get("/user").then(({ data }) => {
      setUser(() => data);
      if(window.location.pathname.split("/").length < 3) {
        navigateToPath(window.location.pathname + "/" + data.username);
      }}).catch(() => {
        console.log("error getting user details");
      });
    }, []);
  return (
    <>
      <Navbar />
      <PageComponent user={user} setUser={setUser} navigateToPath={navigateToPath} />
    </>
  )
}

export default Main;
