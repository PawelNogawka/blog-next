import React, { useState } from "react";

import { usePost } from "../../hooks/usePost";

import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Wrapper from "../UiElements/Wrapper";
import SectionHeader from "./SectionHeader";
import Input from "../FormElements/Input";

import classes from "./Newsletter.module.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState(null);

  const { data, addDocument, isLoading, error } = usePost();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setValidationError("Nieprawidłowy adres email");
      return;
    }

    await addDocument("/api/newsletter", { email });

    setEmail("");
  };

  return (
    <section className={classes.newsletter}>
      <SectionHeader
        lowMargin
        heading="newsletter"
        subtitle="Wpisz się do newslettera"
      />
      <Wrapper>
        <form
          onSubmit={handleFormSubmit}
          className={classes["newsletter-form"]}
        >
          <Input
            type="email"
            required
            placeholder="Wpisz swój adres email..."
            name="news"
            ariaLabel="adres email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {!isLoading && (
            <button
              type="submit"
              aria-label="zapisz się do newslettera"
              className={classes.btn}
            >
              <BsFillSendFill />
            </button>
          )}
          {isLoading && (
            <button
              aria-label="ładowanie"
              className={`${classes.btn} ${classes.loading}`}
            >
              <AiOutlineLoading3Quarters />
            </button>
          )}
        </form>
        {validationError && <p className={classes.error}>{validationError}</p>}
        {error && <p className={classes.error}>{error}</p>}
        {data.message && <p className={classes.success}>{data.message}</p>}
      </Wrapper>
    </section>
  );
};

export default Newsletter;
