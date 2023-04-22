import { useState } from "react";

import { useRouter } from "next/router";

import Input from "../FormElements/Input";

import { AiOutlineSearch } from "react-icons/ai";

import classes from "./Search.module.scss";

const Search = ({ desktop, setShowModal }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!search || search.trim() == "") {
      setError("Uzupełnij pole");
      return;
    }

    router.push(`/szukaj/${search}`);
    setShowModal(false);
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSearchFormSubmit}
      className={`${classes.search} ${desktop && classes.desktop}`}
    >
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="search"
        placeholder="Szukaj..."
        name="search"
        required
      />
      <button type="submit">
        <AiOutlineSearch />
      </button>
      {error && <p className={classes.error}>{error}</p>}
    </form>
  );
};

export default Search;
