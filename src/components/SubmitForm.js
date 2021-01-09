import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FormContainer,
  FormWrapper,
  FormLineBox,
  SubmitBtn,
} from "../components/styles/form";

const SubmitForm = ({ grid }) => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitRequest = async (e) => {
    e.preventDefault();
    console.log({ name, subject, email, message });
  };

  return (
    <FormContainer grid={grid}>
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
    </FormContainer>
  );
};

export default SubmitForm;
