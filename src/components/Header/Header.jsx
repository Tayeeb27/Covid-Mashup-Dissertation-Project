import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./Header.css";

const navLinks = [  
    {display: "Home",    url: "#",  },  
    {display: "About",    url: "#",  },  
    {display: "Sections",    
        submenu: [{display: "Deaths",url: "#deaths",},
                  {display: "Cases",url: "#cases",}, 
                  {display: "Recovery Rate",        url: "#recovery-rate",      },
                             {        display: "News",        url: "#news",      }, 
                                  {        display: "NHS",        url: "#nhs",      },
                                        {        display: "Laws",        url: "#laws",      },    ],
  },
  {
    display: "Contact",
    url: "#",
  },
];
function Nav() {
    return (
      <nav>
        <ul>
          {navLinks.map((link, index) => {
            if (link.submenu) {
              return (
                <li key={index}>
                  <a href={link.url}>{link.display}</a>
                  <ul>
                    {link.submenu.map((submenuLink, submenuIndex) => (
                      <li key={submenuIndex}>
                        <a href={submenuLink.url}>{submenuLink.display}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <a href={link.url}>{link.display}</a>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    );
  }
  
  

const Header = () => {
    const menuRef = useRef();
  
    const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  
    return (
      <header className="header">
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo">
              <h2 className=" d-flex align-items-center gap-1">
                <i class="ri-pantone-line"></i> Covid Mashup
              </h2>
            </div>
  
            <div className="nav d-flex align-items-center gap-5">
              <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                <nav>
                <ul className="nav__list">
                {navLinks.map((link, index) => {
            if (link.submenu) {
              return (
                <li key={index}>
                  <a href={link.url}>{link.display}</a>
                  <ul>
                    {link.submenu.map((submenuLink, submenuIndex) => (
                      <li key={submenuIndex}>
                        <a href={submenuLink.url}>{submenuLink.display}</a>
                      </li>
                    ))}
                  </ul>
                  
                </li>
                
              );
            } else {
              return (
                <li key={index}>
                  <a href={link.url}>{link.display}</a>
                </li>
              );
            }
          })}
                </ul>
                </nav>
              </div>
  
              <div className="nav__right">
                <p className="mb-0 d-flex align-items-center gap-2">
                  <i class="ri-phone-line"></i> 
                </p>
              </div>
            </div>
  
            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line" onClick={menuToggle}></i>
              </span>
            </div>
          </div>
        </Container>
      </header>
    );
  };

export default Header;