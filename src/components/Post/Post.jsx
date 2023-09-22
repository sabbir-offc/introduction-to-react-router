import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const { id, title } = post;
  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="border-2 border-lime-500 rounded-xl p-3">
      <h2 className="text-2xl mt-3">Post of id: {id}</h2>
      <p className="text-xl mt-1">Post Title: {title}</p>
      <Link to={`/post/${id}`}>Show Details</Link>
      <button onClick={handleShowDetail} className="btn btn-info">
        Post Details
      </button>
    </div>
  );
};

export default Post;
