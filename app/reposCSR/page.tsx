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
    <>
      <CourseSearch getSearchResults={getSearchResults} />

      <div className="courses">
        {coursesData.map((course: Repository) => (
          <div key={course.id} className="card">
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <Link href={course.html_url} target="_blank" className="btn">
              Go To Repo
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Repository;
