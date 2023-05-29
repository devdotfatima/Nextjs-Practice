import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "../components/UserPosts";
import getAllUsers from "@/lib/getAllUsers";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;
  return {
    title: user.name,
  };
}
const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPosts: Promise<Post[]> = await getUserPosts(userId);
  const user = await userData;
  return (
    <div>
      <h2>{user.name}</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts posts={userPosts} />
      </Suspense>
    </div>
  );
};

export const generateStaticParams = async () => {
  const users: User[] = await getAllUsers();
  return users.map((user) => user.id.toString());
};

export default UserPage;
