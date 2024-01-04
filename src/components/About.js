import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImg2 from "./HeroImg2";
import AboutContent from "./AboutContent";

const About = () => {
    return (
        <>
            <Navbar />
            <HeroImg2 heading="Jay" text="Jay's Portfolio"/>
            <AboutContent/>
            <Footer />
        </>
    )
}

export default About;