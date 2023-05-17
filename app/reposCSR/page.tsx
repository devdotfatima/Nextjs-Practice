
'use client';
import { useState, useEffect } from 'react';
import {  useSession } from "next-auth/react";
import Loading from '../loading';
import CourseSearch from '../components/CourseSearch';
import Link from 'next/link';

interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface License {
  name: string;
  spdx_id: string;
  url: string | null;
}

const Repository = async () => {
 
  const {data:session}=useSession({
    required:true
  });
  
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:3000/api/courses');
      const data = await response.json();
      setCoursesData(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);
  
  if (loading) {
    return <Loading />;
  }
  const getSearchResults = (courses) => {
    setCoursesData(courses);
  };

  return (
    <>
     <CourseSearch getSearchResults={getSearchResults} />
    
    <div className='courses'>
      {coursesData.map((course:Repository) => (
        <div key={course.id} className='card'>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          <Link href={course.html_url} target='_blank' className='btn'>
            Go To Repo
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};
export default Repository;