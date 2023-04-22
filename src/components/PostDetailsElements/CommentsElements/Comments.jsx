import { useFetch } from "@/hooks/useFetch";

import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";

import classes from "./Comments.module.scss";

const Comments = ({ postId }) => {
  const { data, setShouldReload, isLoading, error } = useFetch(
    "/api/comments/" + postId
  );

  if (isLoading) return;

  if (data.length === 0) return;

  return (
    <section className={classes.comments}>
      <h2
        className={classes.heading}
      >{`komentarze (${data.comments.length})`}</h2>
      {!error && <CommentsList comments={data.comments} />}

      {error && <p className={classes.error}>{error}</p>}
      <CommentForm setShouldReload={setShouldReload} postId={postId} />
    </section>
  );
};

export default Comments;
