import BlogCard from "./BlogCard";
import Spinner from "./Spinner";
import { useGetblogPost } from "./useFecthData";

function BlogSection() {
  const { posts: blogPosts } = useGetblogPost();
  console.log(blogPosts, "post");

  return (
    <section className="m-auto py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-green-800">
          🐾 Dog Blog
        </h2>
        <div className="grid gap-8 bg-[#fffaf6] p-12 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
