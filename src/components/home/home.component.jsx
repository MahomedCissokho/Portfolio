import { Route, Routes } from "react-router";
import MainRoute from "../../Routes/main/main.route";
import '../../App.css';
import HomeRoute from '../../Routes/home/home.route';

const About = () => {
  return <div>About Page</div>;
};

const Projects = () => {
  return <div>Project Page</div>;
};

const Contact = () => {
  return <div>Contact Page</div>;
};
const Home = ({counter}) => {
    return (
      <>
        <MainRoute/>
        <Routes>
            <Route path="/" element={<HomeRoute counter={counter}/>} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact/>} />
        </Routes>
      </>  
    );
}

export default Home;