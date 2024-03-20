import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import foot from './styles.module.css'


export default function Footer() {
  return (
    <footer className={foot.foot}>
        <FaGithub />
        <FaLinkedin />
        <RiTwitterXFill />
        <FaInstagram />

</footer>
)
}