"use client";
import { useState } from "react";

const CourseSearch = ({ getSearchResults }: any) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="dark:bg-white px-4 py-3 flex flex-row  "
    >
      <input
        className="form-input  rounded-full w-3/4 "
        type="text"
        name="query"
        placeholder="Search Repositries..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="dark:bg-gray-800 sm:w-1/6 rounded m-2 pt-2 pb-2 font-bold sm:ml-10 w-1/3  "
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
export default CourseSearch;
