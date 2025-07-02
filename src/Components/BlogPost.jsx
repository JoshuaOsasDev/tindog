import BlogSection from "./BlogSection";
import NavBar from "./NavBar";

function BlogPost() {
  return (
    <div className="flex h-full w-full bg-gray-300 md:h-screen lg:h-full">
      <NavBar />
      <BlogSection />
    </div>
  );
}

export default BlogPost;
