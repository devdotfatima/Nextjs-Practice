import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { Repository } from "@/utils/interfaceTypes";

async function fetchRepos(): Promise<Repository[]> {
  try {
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
    const repos: Repository[] = await response.json();
    return repos;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="dark:bg-white mx-auto dark:text-black w-full ">
      <ul className="flex flex-col gap-4 items-center  pt-10">
        {repos && repos.length
          ? repos.map((repo: Repository) => (
              <li
                key={repo.id}
                className="p-3  w-3/4  border-teal-900 bg-teal-100 rounded  border-2 text-left  sm:w-1/2 text-teal-900"
              >
                <Link href={`/repos/${repo.name}`}>
                  <h3 className="font-bold text-lg pb-3">{repo.name}</h3>
                  <p className="pb-3">{repo.description}</p>

                  <div className=" flex flex-row  justify-between">
                    <span className="flex flex-row">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                    <span className="flex flex-row">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor "
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 5C6 4.44772 6.44772 4 7 4C7.55228 4 8 4.44772 8 5C8 5.55228 7.55228 6 7 6C6.44772 6 6 5.55228 6 5ZM8 7.82929C9.16519 7.41746 10 6.30622 10 5C10 3.34315 8.65685 2 7 2C5.34315 2 4 3.34315 4 5C4 6.30622 4.83481 7.41746 6 7.82929V16.1707C4.83481 16.5825 4 17.6938 4 19C4 20.6569 5.34315 22 7 22C8.65685 22 10 20.6569 10 19C10 17.7334 9.21506 16.6501 8.10508 16.2101C8.45179 14.9365 9.61653 14 11 14H13C16.3137 14 19 11.3137 19 8V7.82929C20.1652 7.41746 21 6.30622 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.30622 15.8348 7.41746 17 7.82929V8C17 10.2091 15.2091 12 13 12H11C9.87439 12 8.83566 12.3719 8 12.9996V7.82929ZM18 6C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5C17 5.55228 17.4477 6 18 6ZM6 19C6 18.4477 6.44772 18 7 18C7.55228 18 8 18.4477 8 19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19Z"
                          fill="#000000"
                        />
                      </svg>
                      {repo.forks_count}
                    </span>
                    <span className="flex flex-row">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        stroke="currentcolor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5.83a3.001 3.001 0 1 1 2 0V9H9v1.17a3.001 3.001 0 1 1-2 0V9H2V5.83a3.001 3.001 0 1 1 2 0V7h8V5.83zM7 12v2h2v-2H7zM2 2v2h2V2H2zm10 0v2h2V2h-2z"
                          fill-rule="evenodd"
                        />
                      </svg>
                      {repo.watchers_count}
                    </span>
                  </div>
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
export default ReposPage;
