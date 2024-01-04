import Footer from "./Footer";
import HeroImg2 from "./HeroImg2";
import Navbar from "./Navbar";
import Work from "./Work";

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="Project." text="My Recent Work"/>
            <Work/>
            <Footer />
        </div>
    )
}

export default Project;