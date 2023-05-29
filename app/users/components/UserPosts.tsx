import React from "react";
type Props = {
  posts: Promise<Post[]>;
};
const UserPosts = async ({ posts }: Props) => {
  const postData = await posts;
  return (
    <div>
      {postData.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <br />
        </article>
      ))}
    </div>
  );
};

export default UserPosts;
