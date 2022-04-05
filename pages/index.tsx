import { Navbar, Sidebar } from "../components";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="grid grid-cols-2">
        <Sidebar />
        <div className="main w-full h-screen bg-primary p-12 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          consequuntur quam ipsum laborum voluptate maiores, libero modi labore?
          Minus, mollitia vel. Animi ea nisi sapiente, ratione tempore dicta
          neque ex? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Dicta sunt adipisci, in voluptate voluptatem quisquam nulla debitis
          vero ullam perferendis beatae autem impedit. Fuga quam atque fugiat
          quae earum culpa, quod ipsum necessitatibus hic illum voluptate
          officiis pariatur, provident eius totam perferendis porro consequuntur
          esse? Quaerat impedit optio rem ex.
        </div>
      </div>
    </>
  );
};

export default Home;
