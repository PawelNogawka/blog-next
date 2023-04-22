import { useState } from "react";
import { usePost } from "@/hooks/usePost";

import Input from "@/components/FormElements/Input";
import Button from "@/components/FormElements/Button";

import classes from "./CommentForm.module.scss";

const CommentForm = ({ setShouldReload, postId }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [validationError, setValidationError] = useState(null);

  const { data, addDocument, isLoading, error } = usePost();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name || name.trim() == "" || !text || text.trim() == "") {
      setValidationError("Uzupełnij brakujące pola");
      return;
    }

    await addDocument("/api/comments/" + postId, { name, text });

    setShouldReload(prevState => !prevState);
    setName("");
    setText("");
  };

  const handleClearButtonClick = () => {
    setName("");
    setText("");
  };

  return (
    <div className={classes.form}>
      <h3 className={classes.heading}>Napisz komentarz</h3>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          label="Imię:"
          placeholder="Wpisz swoje imię..."
          required
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          textarea
          label="Komentarz:"
          placeholder="Napisz komentarz..."
          required
          name="comment"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className={classes.btns}>
          <Button ariaLabel="Wyślij komentarz" type="submit">
            {isLoading ? "Ładowanie..." : "Wyślij"}
          </Button>
          <Button
            ariaLabel="wyczyść formularz"
            onClick={handleClearButtonClick}
            empty
          >
            wyczyść
          </Button>
        </div>
        {error && <p className={classes.error}>{error}</p>}
        {validationError && <p className={classes.error}>{validationError}</p>}
      </form>
    </div>
  );
};

export default CommentForm;
