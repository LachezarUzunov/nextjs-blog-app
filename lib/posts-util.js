import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFile(filePath, "utf-8");

  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension

  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}