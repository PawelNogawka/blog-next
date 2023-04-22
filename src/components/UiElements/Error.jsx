import React from "react";
import { useRouter } from "next/router";

import Button from "../FormElements/Button";
import Modal from "./Modal";

import classes from "./Error.module.scss";

const Error = ({ message }) => {
  const router = useRouter();
  return (
    <Modal>
      <div className={classes.error}>
        <span className={classes.message}>{message}</span>
        <Button onClick={() => router.back()}>Powrót</Button>
      </div>
    </Modal>
  );
};

export default Error;
