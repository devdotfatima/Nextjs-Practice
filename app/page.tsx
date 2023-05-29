import Link from "next/link";

const HomePage = async () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-700 dark:text-white text-black ">
      <h1>Home Page</h1>
      <a>
        <Link href="/users">Users</Link>
      </a>
    </div>
  );
};

export default HomePage;
