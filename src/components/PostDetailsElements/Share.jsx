import React from "react";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import classes from "./Share.module.scss";

const Share = () => {
  const router = useRouter();
  const isLocal = router.pathname.startsWith("/post");
  const domain = isLocal ? "http://localhost:3000" : "https://yourdomain.com";
  const shareUrl = `${domain}${router.asPath}`;

  return (
    <section className={classes.share}>
      <h3 className={classes.heading}>udostępnij</h3>
      <ul className={classes.list}>
        <li>
          <WhatsappShareButton url={shareUrl}>
            <AiOutlineWhatsApp className={classes.icon} />
          </WhatsappShareButton>
        </li>
        <li>
          <InstapaperShareButton url={shareUrl}>
            <AiFillInstagram className={classes.icon} />
          </InstapaperShareButton>
        </li>
        <li>
          <TwitterShareButton url={shareUrl}>
            <AiOutlineTwitter className={classes.icon} />
          </TwitterShareButton>
        </li>
        <li>
          <FacebookShareButton url={shareUrl}>
            <FaFacebookF className={classes.icon} />
          </FacebookShareButton>
        </li>
      </ul>
    </section>
  );
};

export default Share;
