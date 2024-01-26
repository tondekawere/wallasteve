import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button, TextareaAutosize } from "@mui/material";
import axios from 'axios';
import Map from "./Map";

const Wrapper = styled.section`

`;

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform any additional logic here, such as validation or API calls
    console.log("Form submitted:", formData);

    try {
      const response = await axios.post(
        "https://formsubmit.co/13962cf4a2847f3346afef1b62cac67a",
        formData
      );
      if (response) {
        console.log(response);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
          });
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Wrapper>
      <div className="contact px-20 xs:px-5 text-center grid gap-10 py-10">
        <h2 className="text-4xl text-navy text-center">Contact Us</h2>
        <div className="partners-inner relative flex justify-between gap-72 bg-slate-100  xl:flex-wrap xl:gap-10 lg:gap-5">
          <div className="form w-full py-10 xl:w-2/5 lg:w-[45%] xs:w-full">
            <form onSubmit={handleSubmit} method="POST" className="grid gap-3">
              <TextField
                id="name"
                name="name"
                label="Enter Your Name"
                variant="filled"
                className=" bg-gray-100 "
                value={formData.name}
                onChange={handleInputChange}
              />
              <TextField
                id="email"
                name="email"
                label="Enter Your Email"
                variant="filled"
                className=" bg-gray-100 "
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextareaAutosize
                id="message"
                placeholder="Messages"
                // name="message"
                // label="Messages"
                // variant="filled"
                className=" bg-gray-100 pb-32"
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                variant="contained"
                className="bg-navy p-3 px-5 text-light hover:underline underline-offset-2 hover:text-navy hover:bg-transparent 
              hover:border hover:border-5 hover:border-navy text-sm rounded "
              >
                Submit
              </Button>
            </form>
            <p className="message">{isSubmitted ? "Sent SuccessFully" : ""}</p>
          </div>
          <div
            className="info grid bg-slate-600 text-left gap-5 text-light  p-10 text-sm  absolute 
          top-14 right-72 xl:relative xl:top-0 xl:right-0 xl:w-1/2 xs:w-full"
          >
            <h5 className="text-base font-bold ">Info</h5>
            <span>wallasteve@gmail.com</span>
            <a href="#" className="">
              +263 71 234 1334
            </a>
            <a href="#" className="">
              +263 71 234 1334
            </a>
            <span>105 Mbundane, Bulawayo, Zimbabwe</span>
            <span>Always Open</span>
          </div>
          <Map className="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;