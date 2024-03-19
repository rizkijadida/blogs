import { getEntries } from "@/api/getEntries";
import { findAsset } from "@/utils/findAsset";
import CardBlog from "./components/CardBlog";

export default async function Home() {
  const blogs = await getEntries();
  console.log(blogs);

  return (
    <main className="container mx-auto px-4">
      {/* <Jumbotron></Jumbotron> */}
      <section className="text-center mt-10 space-y-2">
        <h1 className="text-5xl font-bold">The Food Hub Blogs</h1>
        <p className="text-xl">A blog about food, experiences, and recipes</p>
      </section>

      {/* <Bloglist></Bloglist> */}
      <section className="grid grid-cols-3 gap-8 mt-10">
        {blogs.items.map((blog, index) => {
          const assetId = blog.fields.thumbnail.sys.id
          const assets = blogs.includes.Asset;
          const image = findAsset(assetId, assets)
          return (
            <CardBlog
              key={index}
              title={blog.fields.title}
              author={blog.fields.author}
              category={blog.fields.category}
              createdAt={blog.fields.createdAt}
              description={blog.fields.description}
              imageUrl={`https:${image?.fields.file.url}`}
            />
          );
        })}
      </section>
    </main>
  );
}
