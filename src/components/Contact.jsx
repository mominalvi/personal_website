import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formref = useRef()
  const [from, setForm] = useState ({
    name: '',
    email: '',
    message: '', 
  })
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {}
  const handleSubmit = (e) => {}

  return (
    <div>Contact</div>
  )
}

export default SectionWrapper(Contact, "")