import { Navbar, Sidebar } from "../components";
import Resume from "../components/Resume";

const Home = () => {
  return (
    <>
      <div className="md:grid grid-cols-2">
        <Sidebar />
        <div className="main w-full h-auto bg-primary p-12 text-white">
          <Resume />
        </div>
      </div>
    </>
  );
};

export default Home;
