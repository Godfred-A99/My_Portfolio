import Card from "./Components/Card";

const Blog = () => {
  return (
    <section className="bg-bg-color px-28 py-5 flex-col xl:flex-row  w-full  ">
      <div className="">
        <h1 className="font-Roboto_Slab text-center text-4xl text-white p-1">Blogs</h1>
        <hr className="m-auto border-bg-div w-14"/>
        <div className="flex justify-center items-center gap-4 py-10 xl:flex-row flex-col w-ful">
           <Card />
           <Card />
           <Card />
        </div>
      </div>
    </section>
  );
};

export default Blog;
