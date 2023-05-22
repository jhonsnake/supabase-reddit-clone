import { useParams } from "react-router-dom";
const AllPost = () => {
  const { pageNumber } = useParams();
  return <h2>AllPost - page: {pageNumber}</h2>;
};

export default AllPost;
