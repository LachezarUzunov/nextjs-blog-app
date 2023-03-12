import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "the-role-of-the-father",
  title: "The Role of the Father in the Family",
  image: "the-role-of-the-father.jpg",
  content: "# This is the 1st post",
  date: "2023-03-12",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
