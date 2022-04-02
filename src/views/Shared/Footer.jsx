import React from 'react';

import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import './assets/css/footerstyles.css'
const Footer = () => {
    return (
        <footer class="footer-basic">
            <ul class="list-inline">
                <li class="list-inline-item"><a href="*">Home</a></li>
                <li class="list-inline-item"><a href="*">Objetivos</a></li>
                <li class="list-inline-item"><a href="*">Funcionalidade</a></li>
                <li class="list-inline-item"><a href="*">Testemunhos</a></li>
                <li class="list-inline-item"><a href="*">Time</a></li>
            </ul>
            <div class="social">
                <a href="*"><FaLinkedin/></a>
                <a href="*"><FaFacebookSquare/></a>
                <a href="*"><BsGithub/></a>
                <a href="*"><AiFillInstagram/></a>
            </div>
            
            <p class="copyright">Blackedin © 2022</p>
        </footer>
    );
}

export default Footer;

