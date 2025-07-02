import { useParams } from "react-router";
import { useGetPost } from "../Components/useFecthData";

function BlogTitle() {
  const { id } = useParams();
  console.log(id, "id");
  const { post } = useGetPost(id);
  console.log(post, "content for post");
  return <div>title</div>;
}

export default BlogTitle;
