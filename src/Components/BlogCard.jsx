import { Link } from "react-router";
import { useGetblogPost } from "./useFecthData";
import Spinner from "./Spinner";
import { format } from "date-fns";

function BlogCard({ id, title, excerp, image, date }) {
  const { isLoading } = useGetblogPost();

  if (isLoading) return <Spinner color="#000" />;
  return (
    <div className="relative overflow-hidden rounded-md border-t-9 border-t-blue-500 bg-white shadow-md transition hover:shadow-xl">
      <Link to={`/blog/${id}`}>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </Link>
      <div className="p-5">
        <Link className="" to={`/blog/${id}`}>
          <h3 className="mb-2 text-lg font-semibold text-gray-800 hover:text-gray-500">
            {title}
          </h3>
        </Link>
        <p className="mb-4 pb-3 text-sm text-gray-600">{excerp}</p>
        <p className="">
          <span className="absolute top-0 m-3 ml-1 w-fit rounded-sm bg-[#fffaf6] p-3 text-sm font-bold text-gray-500">
            {format(new Date(date), "EEE, MMMM, dd yyyy")}
          </span>
          <Link className="absolute right-5 bottom-3 mt-4 text-blue-500 hover:underline">
            Read more...
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
