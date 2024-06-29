import React, { useState, useEffect } from "react";
import { QueryCache } from "react-query";
import { useFetchHeaderDropDownData } from "../http/apiService";
import { NavLink } from "react-router-dom";
import logo from "../images/logo/logo.png";
import whiteLogo from "../images/logo/whiteLogo.png";
import { MdClose } from "react-icons/md";
import TopHeader from "./TopHeader";

const Header = () => {
  const queryCache = new QueryCache();
  const {
    data: dropdownData,
    isLoading,
    error,
  } = useFetchHeaderDropDownData(queryCache);
  const services = dropdownData?.data || [];

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <TopHeader />
      <header className={scroll ? "fixed-menu" : "hed-n"}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light align-items-center justify-content-between">
            <NavLink to="/" className="navbar-brand">
              <figure>
                <img src={whiteLogo} className="logo-main rounded" alt="logo" />
                <img src={logo} className="logo-mobile rounded" alt="logo" />
              </figure>
            </NavLink>
            <button
              className="navbar-toggler ms-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobile-menu"
              aria-controls="offcanvasExample"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                <li className="nav-item dropdown dropdown-mega">
                  <NavLink
                    className="nav-link mega-menu-a dropdown-toggle"
                    to="/about"
                    data-bs-auto-close="outside"
                  >
                    About Us
                  </NavLink>
                  <ul className="dropdown-menu dropdown-menu1 shadow">
                    <li className="mega-content px-2">
                      <div className="container-fluid">
                        <div className="row row-cols-md-1 justify-content-between">
                          <div className="col">
                            <div className="comon-menu-div">
                              <ul className="list-unstyled">
                                <li>
                                  <NavLink to="/about">
                                    About Film Fusion
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/portfolio">
                                    Our Projects
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <NavLink
                    className="nav-link mega-menu-a dropdown-toggle"
                    to="/film-making-services"
                    data-bs-auto-close="outside"
                  >
                    Film Making Services
                  </NavLink>
                  <ul className="dropdown-menu dropdown-menu1 shadow">
                    <li className="mega-content px-2">
                      <div className="container-fluid">
                        <div className="row row-cols-md-1 justify-content-between">
                          <div className="col">
                            <div className="comon-menu-div">
                              <ul className="list-unstyled">
                                {services?.[0]?.service?.map((service) => (
                                  <li key={service?.id}>
                                    <NavLink
                                      to={`/film-making-service/${service?.route}`}
                                    >
                                      {service?.name}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <NavLink
                    className="nav-link mega-menu-a dropdown-toggle"
                    to="/new-tech-services"
                    data-bs-auto-close="outside"
                  >
                    New Tech Services
                  </NavLink>
                  <ul className="dropdown-menu dropdown-menu1 shadow">
                    <li className="mega-content px-2">
                      <div className="container-fluid">
                        <div className="row row-cols-md-1 justify-content-between">
                          <div className="col">
                            <div className="comon-menu-div">
                              <ul className="list-unstyled">
                                {services?.[1]?.service?.map((ntsService) => (
                                  <li key={ntsService?.id}>
                                    <NavLink
                                      to={`/new-tech-service/${ntsService?.route}`}
                                    >
                                      {ntsService?.name}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <NavLink
                    className="nav-link mega-menu-a dropdown-toggle"
                    to="/advertising-services"
                    data-bs-auto-close="outside"
                  >
                    Advertising Services
                  </NavLink>
                  <ul className="dropdown-menu dropdown-menu1 shadow">
                    <li className="mega-content px-2">
                      <div className="container-fluid">
                        <div className="row row-cols-md-1 justify-content-between">
                          <div className="col">
                            <div className="comon-menu-div">
                              <ul className="list-unstyled">
                                {services?.[2]?.service?.map((mservice) => (
                                  <li key={mservice?.id}>
                                    <NavLink
                                      to={`/advertising-service/${mservice?.route}`}
                                    >
                                      {mservice?.name}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div
        className="offcanvas offcanvas-start menu-mobile-modal"
        tabIndex="-1"
        id="mobile-menu"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <NavLink to="/">
            <figure>
              <img src={logo} alt="logom" className="rounded logombl" />
            </figure>
          </NavLink>
          <button
            type="button"
            className="close_btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <MdClose />
          </button>
        </div>
        <div className="offcanvas-body menu-modal">
          <ul className="list-unstyled mt-4">
            <div className="dropdown postion-relative">
              <button
                className="btn dropdown-toggle mega-btn text-start col-12"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </button>
              <ul
                className="dropdown-menu mobile-mega-menu col-12"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <div className="comon-menu-div">
                    <ul className="list-unstyled">
                      <li data-bs-dismiss="offcanvas">
                        <NavLink to="/about">About Film Fusion</NavLink>
                      </li>
                      <li data-bs-dismiss="offcanvas">
                        <NavLink to="/portfolio"> Our Projects</NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="dropdown postion-relative">
              <button
                className="btn dropdown-toggle mega-btn text-start col-12"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Film Making Services
              </button>
              <ul
                className="dropdown-menu mobile-mega-menu col-12"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <div className="comon-menu-div">
                    <ul className="list-unstyled">
                      <li data-bs-dismiss="offcanvas">
                        <NavLink to="/film-making-services">All</NavLink>
                      </li>
                      {services?.[0]?.service?.map((service) => (
                        <li key={service?.id} data-bs-dismiss="offcanvas">
                          <NavLink
                            to={`/film-making-service/${service?.route}`}
                          >
                            {service?.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="dropdown postion-relative">
              <button
                className="btn dropdown-toggle mega-btn text-start col-12"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                New Tech Services
              </button>
              <ul
                className="dropdown-menu mobile-mega-menu col-12"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <div className="comon-menu-div">
                    <ul className="list-unstyled">
                      <li data-bs-dismiss="offcanvas">
                        <NavLink to="/new-tech-services">All</NavLink>
                      </li>
                      {services?.[1]?.service?.map((ntsService) => (
                        <li key={ntsService?.id} data-bs-dismiss="offcanvas">
                          <NavLink
                            to={`/new-tech-service/${ntsService?.route}`}
                          >
                            {ntsService?.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="dropdown postion-relative">
              <button
                className="btn dropdown-toggle mega-btn text-start col-12"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Advertising Services
              </button>
              <ul
                className="dropdown-menu mobile-mega-menu col-12"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <div className="comon-menu-div">
                    <ul className="list-unstyled">
                      <li data-bs-dismiss="offcanvas">
                        <NavLink to="/advertising-services">All</NavLink>
                      </li>
                      {services?.[2]?.service?.map((mservice) => (
                        <li key={mservice?.id} data-bs-dismiss="offcanvas">
                          <NavLink
                            to={`/advertising-service/${mservice?.route}`}
                          >
                            {mservice?.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <li data-bs-dismiss="offcanvas">
              <NavLink className="dropdown-item" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
