import { useState } from "react";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosMailUnread } from "react-icons/io";

import SectionHeader from "./SectionHeader";
import Wrapper from "../UiElements/Wrapper";
import Input from "../FormElements/Input";
import Button from "../FormElements/Button";

import classes from "./Contact.module.scss";

const Contact = () => {
  const [name, setName] = useState();
  return (
    <section className={`${classes.contact} ${"section-padding"}`}>
      <Wrapper>
        <SectionHeader
          heading="kontakt"
          subtitle="Jeśli masz jakieś pytania skontaktuj się."
        />

        <div className={classes.container}>
          <div className={classes["contact-methods-container"]}>
            <div className={classes.social}>
              <h3 className={classes.heading}>
                Obserwuj nas w mediach społecznościowych
              </h3>
              <div className={classes["icons-box"]}>
                <Link
                  href="https://facebook.com"
                  className={classes.link}
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://twitter.com"
                  className={classes.link}
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </Link>
                <Link
                  href="https://instagram.com"
                  className={classes.link}
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </Link>
                <Link
                  href="https://snapchat.com"
                  className={classes.link}
                  rel="noopener noreferrer"
                >
                  <FaSnapchatGhost />
                </Link>
              </div>
            </div>
            <div className={classes.direct}>
              <h3 className={classes.heading}>Dane kontaktowe</h3>
              <div className={classes["contact-box"]}>
                <Link
                  href="tel:+483433234235"
                  className={classes["contact-method"]}
                >
                  <BsTelephoneFill />
                  <span>+48 343 323 4235</span>
                </Link>

                <Link
                  href="https://www.google.com/maps/search/?api=1&query=123+NY+main+street"
                  className={classes["contact-method"]}
                >
                  <HiLocationMarker />
                  <address>123 NY main street</address>
                </Link>

                <Link
                  href="mailto:blog.historyczny@kontakt.com"
                  className={classes["contact-method"]}
                >
                  <IoIosMailUnread />
                  <span>blog.historyczny@kontakt.com</span>
                </Link>
              </div>
            </div>
          </div>
          <form className={`${classes.form} ${"card"}`}>
            <h3 className={classes.heading}>Napisz wiadomość</h3>
            <Input
              type="text"
              label="Imię:"
              placeholder="Wpisz swoje imię..."
              required
              name="name"
            />
            <Input
              type="email"
              label="Email:"
              placeholder="Wpisz swój adres email..."
              required
              name="email"
            />
            <Input
              textarea
              label="Wiadomość:"
              placeholder="Napisz wiadomość..."
              required
              name="message"
            />
            <Button ariaLabel="Wyślij wiadomość" type="submit">
              Wyślij wiadomość
            </Button>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
