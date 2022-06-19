import "./home.css";
import Navbar from "../../Components/Navbar/navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import PropertyList from "../../Components/propertyList/PropertyList";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        </div>
    </div>
  )
}

export default Home