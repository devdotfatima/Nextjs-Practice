import { Suspense } from 'react';
import Link from 'next/link';

interface RouteParams {
    name: string;
  }
  interface RepoPageProps {
    params: RouteParams;
  }

  
async function fetchContents(repoName:string) {

  const response = await fetch(
    `https://api.github.com/repos/devdotfatima/${repoName}/contents`
  );
  const contents = await response.json();
  return contents;
}
const RepoPage  = async({ params: { name } }) => {
  const contents = await fetchContents(name);
  const dirs = contents.filter((item:any) => item.type === 'dir');
  console.log(dirs[0])

  return (
    <div className='card'>
      <Link href='/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      
      <Suspense fallback={<div>Loading directories...</div>}>
      <h3>Directories:</h3>
      <ul>
        {dirs.map((dir:any) => (
          <li key={dir.path}>
            <Link href={`/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    

      </Suspense>
    </div>
  );
};
export default RepoPage;
