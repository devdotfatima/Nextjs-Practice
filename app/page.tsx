import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
const HomePage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signIn?callbackUrl=/");
  }

  return <div>HomePage</div>;
};

export default HomePage;
