import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Repository } from "@/utils/interfaceTypes";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/devdotfatima/repos",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const repos = await response.json();
  return repos;
}

// async function isUserLoggedIn() {
//   try {
//     const session = await getServerSession(authOptions);
//     if (!session) {
//       redirect("/signIn?callbackUrl=/repos");
//     }
//   } catch (err) {
//     throw new Error("Failed to fetch data");
//   }
// }
const ReposPage = async () => {
  // await isUserLoggedIn();
  const repos = await fetchRepos();

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo: Repository) => (
          <li key={repo.id}>
            <Link href={`/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ReposPage;
