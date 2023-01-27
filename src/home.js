import Articles from './articles';
import Display from './display';
import Feedback from './feedbacks';
import Intro from './intro';
import Logo from './logo';
import Navbar from './navbar';
import Project from './project';
import Works from './works';
import Footer from './footer'
const Home = () => {
    return ( 
        <div className="home">
        <Navbar />
        <Intro />
        <Works />
        < Display />
        < Feedback />
        < Logo />
        < Project />
        < Articles />
        < Footer />
        </div>
     );
}
 
export default Home;