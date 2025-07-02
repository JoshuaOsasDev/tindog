import BlogCard from "./BlogCard";
import Spinner from "./Spinner";
import { useGetblogPost } from "./useFecthData";

function BlogSection() {
  const { posts: blogPosts } = useGetblogPost();
  console.log(blogPosts, "post");
  // const blogPosts = [
  //   {
  //     title: "5 Tips to Prepare Your Home for a New Dog",
  //     excerpt:
  //       "Bringing home a new furry friend? Here's how to make them feel welcome and safe.",
  //     image: "/coco.jpg",
  //     date: "Novermber 15, 2025",
  //   },
  //   {
  //     title: "Why Rescue Dogs Make the Best Pets",
  //     excerpt:
  //       "Adopting a rescue dog isn't just kind—it’s incredibly rewarding. Here's why.",
  //     image: "/Bella.jpg",
  //     date: "June 10, 2025",
  //   },
  //   {
  //     title: "Healthy Treats Your Dog Will Love",
  //     excerpt:
  //       "Ditch the store-bought snacks. Try these vet-approved homemade treats.",
  //     image: "/charlie.jpg",
  //     date: "May 28, 2025",
  //   },
  //   {
  //     title: "Why Rescue Dogs Make the Best Pets",
  //     excerpt:
  //       "Adopting a rescue dog isn't just kind—it’s incredibly rewarding. Here's why.",
  //     image: "/Bella.jpg",
  //     date: "June 10, 2025",
  //   },
  //   {
  //     title: "Healthy Treats Your Dog Will Love",
  //     excerpt:
  //       "Ditch the store-bought snacks. Try these vet-approved homemade treats.",
  //     image: "/charlie.jpg",
  //     date: "May 28, 2025",
  //   },
  // ];

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
