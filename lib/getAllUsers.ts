
const getAllUsers = async () => {
  // throw new Error("failed to fetch data");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json()
};

export default getAllUsers