import Card from "./Components/Card";

const Blog = () => {
  return (
    <section className="bg-bg-color w-full flex  xl:flex-row flex-col justify-between items-center min-h-screen gap-5 max-sm:px-5">
      <div className="">
        <h1 className="font-Roboto_Slab text-center text-4xl text-white p-1">Blogs</h1>
        <hr className="m-auto border-bg-div"/>
        <div className="flex justify-center items-center gap-4 py-10">
           <Card />
           <Card />
           <Card />
        </div>
      </div>
    </section>
  );
};

export default Blog;
