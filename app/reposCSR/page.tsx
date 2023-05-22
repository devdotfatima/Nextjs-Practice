"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Loading from "../loading";
import CourseSearch from "../components/CourseSearch";
import Link from "next/link";
import { Repository } from "../../utils/interfaceTypes";

const Repository = async () => {
  const { data: session } = useSession({
    required: true,
  });

  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("http://localhost:3000/api/courses");
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
    <div className="min-w-full  ">
      <CourseSearch getSearchResults={getSearchResults} />

      <div className="flex flex-col dark:bg-white text-black gap-8 items-center pt-10">
        {coursesData.map((course: Repository) => (
          <div
            key={course.id}
            className="p-3  w-3/4  m-5  border-teal-900 bg-teal-100 rounded  border-2 text-left  sm:w-1/2 text-teal-900"
          >
            <h2 className=" font-bold text-lg sm:text-xl">{course.name}</h2>
            <p>{course.description}</p>
            <button className="rounded mt-5 bg-teal-900 text-white p-3">
              <Link href={course.html_url} target="_blank">
                Go To Repo
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Repository;
