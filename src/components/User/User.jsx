import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="border-2 border-yellow-500 rounded-lg  p-10">
      <h3 className="text-3xl">User id: {id}</h3>
      <h4 className="text-4xl">{name}</h4>
      <p className="text-2xl">E-mail: {email}</p>
      <p className="text-xl">Phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <Link to={`/user/${id}`}>
        <button className="px-4 py-2 ml-2 bg-purple-500 rounded-lg text-white">
          Click me
        </button>
      </Link>
    </div>
  );
};
export default User;
