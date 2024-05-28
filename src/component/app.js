import React from "react";
import "./App.css";
import Logo from "./logo.png";
import { useState, useEffect } from "react";

const App = () => {

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
      setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleClickOutside = (event) => {
      if (!event.target.closest('.header-menu')) {
          setActiveMenu(null);
      }
  };

  useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
          document.removeEventListener('click', handleClickOutside);
      };
  }, []);


  return (
    <>
      <section className="home-page">
      <header className="header-container">
            <nav>
                <div className="image_container">
                    
                    
                    
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="menu-and-btn">
                    <ul className="header-menu">
                        <li onClick={() => handleMenuClick('product')}>
                            Product
                            <ul className={`dropdown-menu ${activeMenu === 'product' ? 'active' : ''}`}>
                             
                            <li> <img alt="image" src="https://teleporthq.io/Home/Icons/bxs-detail1.svg" ></img>AI website builder </li>
                            <li> <img alt="image" src="https://teleporthq.io/cms-icon.svg" ></img> Headless CMS Integrations</li>
                                <li> <img alt="image" src="https://teleporthq.io/Home/Icons/bxs-layout1.svg" ></img> Static website templates</li>
                                <li> <img alt="image" src="https://teleporthq.io/Home/Icons/bxs-devices.svg" ></img>Low-code development</li>
                                <li> <img alt="image" src="https://teleporthq.io/Home/Icons/bxs-terminal.svg" ></img> Code collaboration</li>
                                <li> <img alt="image" src="https://teleporthq.io/Home/Icons/bxl-react.svg" ></img>code generators</li>
                                <li> <img alt="image" src="https://teleporthq.io/Home/Icons/bxl-figma1.svg" ></img> fogma plugin</li>
                              
                            </ul>
                        </li>
                        <li onClick={() => handleMenuClick('resource')}>
                            Resource
                            <ul className={`dropdown-menu ${activeMenu === 'resource' ? 'active' : ''}`}>
                            <li> <img alt="image" src="https://teleporthq.io/cms-icon.svg" ></img> Headless CMS Integrations</li>
                                <li> <img alt="image" src="https://teleporthq.io/Home/Icons/bxs-layout1.svg" ></img> Static website templates</li>
                                <li> <img alt="image" src="https://teleporthq.io/Home/Icons/bxs-devices.svg" ></img>Low-code development</li>
                                <li> <img alt="image" src="https://teleporthq.io/Home/Icons/bxs-terminal.svg" ></img> Code collaboration</li>
                                <li> <img alt="image" src="https://teleporthq.io/Home/Icons/bxl-react.svg" ></img>code generators</li>
                                <li> <img alt="image" src="https://teleporthq.io/Home/Icons/bxl-figma1.svg" ></img> fogma plugin</li>
                            </ul>
                        </li>
                        <li onClick={() => handleMenuClick('pricing')}>
                            Pricing
                        </li>
                    </ul>
                    <div className="header-botton">
                        <button className="login-btn">Login</button>
                        <button className="signin-btn">Start for Free</button>
                    </div>
                </div>
            </nav>
        </header>

        <main>
          <div className="home-container">
            <div className="home-titles">
              <h1 className="home-header">Create. Code. publish.</h1>
              <h2>
                <span className="span-content">Together</span>
              </h2>
            </div>
            <div className="home-paragraph">
              <p>
                TeleportHQ is the collaborative front-end platform with
                integrated UI development and content modelling tools. A
                powerful visual builder to create and publish your headless
                static websites instantly.
              </p>
            </div>
            <div className="home-buttons">
              <button className="home-btn">
                get started - it's free
                <span class="arrow-container">
                  
                  
                  
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMS44ODMgMTJsLTcuNTI3IDYuMjM1LjY0NC43NjUgOS03LjUyMS05LTcuNDc5LS42NDUuNzY0IDcuNTI5IDYuMjM2aC0yMS44ODR2MWgyMS44ODN6Ii8+PC9zdmc+"
                    alt=""
                  />
                </span>
              </button>
              <button className=" home-btn2"> see How it work</button>
            </div>
          </div>

           <div className="main-circle-animation"></div>


           <div class="chatbot-icon-container">
             <img src="https://teleporthq.io/Home/Icons/group%20817.svg" alt="" />
            <button>  Built in TeleportHQ</button>
  
           </div>


        </main>
      </section>

      
      
        
  




      
    </>
  );
};

export default App;


