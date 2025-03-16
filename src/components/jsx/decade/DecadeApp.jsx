import Footer from "../elements/Footer";
import GroupMenu from "../elements/GroupMenu";
import GroupSerieMovie from "../elements/GroupSerieMovie";
import Header from "../elements/Header";
import NavBar from "../elements/NavBar";
import Decade from "./Decade";

// import Footer from "./components/JSX/Elements/Footer";
const DecadeApp = () => {
  return (
    <>
      <Header />
      <div className="w-full mt-[90px] flex">
        <GroupMenu />
        <div className="w-full ml-[60px]">
          <NavBar />
          <GroupSerieMovie />
          <Decade />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DecadeApp;
