import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "the-role-of-the-father",
    title: "The Role of the Father in the Family",
    image: "the-role-of-the-father.jpg",
    excerpt:
      "In the past, fathers were typically seen as the primary breadwinners and providers, while mothers were responsible for the care and nurturing of children. However, this traditional view of fatherhood has evolved over time...",
    date: "2023-03-12",
  },
  {
    slug: "the-role-of-the-father2",
    title: "The Role of the Father in the Family 2",
    image: "the-role-of-the-father.jpg",
    excerpt:
      "In the past, fathers were typically seen as the primary breadwinners and providers, while mothers were responsible for the care and nurturing of children. However, this traditional view of fatherhood has evolved over time...",
    date: "2023-03-12",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
