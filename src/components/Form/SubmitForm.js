import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import { Parallax } from "react-scroll-parallax";
import * as emailjs from "emailjs-com";
import {
  FormContainer,
  FormWrapper,
  FormLineBox,
  SubmitBtn,
} from "../styles/form";

const SubmitForm = ({ grid }) => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };
  const submitRequest = (e) => {
    e.preventDefault();
    console.log({ name, subject, email, message });

    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Loxi",
      to_email: "dianyuyi@gmail.com",
      subject: subject,
      message: message,
    };
    emailjs
      .send(
        "service_2z48bgx",
        "template_w43n7a3",
        templateParams,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        (res) => {
          alert("Message Sent.Thank you!");
          console.log(res.text);
          clearForm();
        },
        (error) => {
          alert("Message Sent Fail. Check the net?");
          console.log(error.text);
        }
      );

    // const response = await fetch("/access", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({ name, subject, email, message }),
    // });
    // const resData = await response.json();
    // if (resData.status === "success") {
    //   alert("Message Sent.");
    //   this.resetForm();
    // } else if (resData.status === "fail") {
    //   alert("Message failed to send.");
    // }
  };

  return (
    <FormContainer grid={grid}>
      {/* <Parallax y={[-10, 10]} tagOuter="div"> */}
      <FormWrapper>
        <form action="" onSubmit={submitRequest}>
          <FormLineBox className="half">
            <label htmlFor="Name">{t("form_name")}</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </FormLineBox>
          <FormLineBox className="half">
            <label htmlFor="Subject">{t("form_subject")}</label>
            <input
              type="text"
              name="subject"
              placeholder="Mail subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              required
            />
          </FormLineBox>
          <FormLineBox>
            <label htmlFor="Email">{t("form_email")}</label>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </FormLineBox>
          <FormLineBox>
            <label htmlFor="Message">{t("form_message")}</label>
            <textarea
              type="text"
              name="message"
              placeholder="Write your comment."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
          </FormLineBox>
          <FormLineBox className="btn-box">
            <SubmitBtn className="" type="submit">
              {t("form_submit")}
            </SubmitBtn>
          </FormLineBox>
        </form>
      </FormWrapper>
      {/* </Parallax> */}
    </FormContainer>
  );
};

export default SubmitForm;
