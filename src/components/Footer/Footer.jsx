import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faG } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.jpeg";
const Footer = () => {
  return (
    <footer class="container-fluid">
      <div class="row d-flex justify-content-between">
        <div class="col-md-4 mt-3">
          <div class="col-sm-4 mt-5 social-icon-container">
            <ul class="list-unstyled">
              <a href="#" class="text-decoration-none ">
                <li class="d-flex align-items-center justify-content-left mb-2">
                  <FontAwesomeIcon icon={faFacebookF} />
                  <span class="1 fw-bold fs-5 ms-2">Facebook</span>
                </li>
              </a>
              <a href="#" class="text-decoration-none ">
                <li class="d-flex align-items-center justify-content-left mb-2">
                  <FontAwesomeIcon icon={faInstagram} />
                  <span class="fw-bold fs-5 ms-2">Instagram</span>
                </li>
              </a>
              <a href="#" class="text-decoration-none ">
                <li class="d-flex align-items-center justify-content-left mb-2">
                  <FontAwesomeIcon icon={faXTwitter} />
                  <span class="fw-bold fs-5 ms-2">X</span>
                </li>
              </a>
              <a href="#" class="text-decoration-none ">
                <li class="d-flex align-items-center justify-content-left mb-2">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span class="fw-bold fs-5 ms-2">LinkedIn</span>
                </li>
              </a>
              <a href="#" class="text-decoration-none ">
                <li class="d-flex align-items-center justify-content-left mb-2">
                  <FontAwesomeIcon icon={faG} />
                  <span class="fw-bold fs-5 ms-2">G-mail</span>
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div class="col-sm-4 text-center" id="logo">
          <h1>Medical app</h1>
          <img src={logo} class=" " style={{ width: 120 }} alt="" />
        </div>
        <div class="col-md-4 mt-5">
          <div class="col-sm-4 mt-1 anchor-links-container">
            <ul class="list-unstyled footer-links">
              <li>
                <a href="#" class="text-decoration-none  fw-bold fs-5">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="text-decoration-none  fw-bold fs-5">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" class="text-decoration-none  fw-bold fs-5">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" class="text-decoration-none  fw-bold fs-5">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#" class="text-decoration-none  fw-bold fs-5">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
