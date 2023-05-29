import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "users",
};
const UsersPage = async () => {
  const users: User[] = await getAllUsers();

  return (
    <div>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}> {user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default UsersPage;
