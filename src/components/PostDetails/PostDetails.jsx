import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  console.log(postId);
  const navigate = useNavigate();
  const postDetails = useLoaderData();
  const { title, body, id } = postDetails;
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2 className="text-3xl font-bold">Post Id: {id}</h2>
      <h3 className="text-3xl">Title: {title}</h3>
      <p>Body: {body}</p>
      <button onClick={goBack} className="btn btn-secondary">
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
