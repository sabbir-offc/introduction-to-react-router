import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, id, website } = userDetails;
  return (
    <div>
      <h3>Details about user.</h3>
      <h3 className="text-4xl">User Id: {id}</h3>
      <h4 className="text-3xl">Name: {name}</h4>
      <p>Visit us: {website}</p>
    </div>
  );
};

export default UserDetails;
