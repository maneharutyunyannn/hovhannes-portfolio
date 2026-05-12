import {Header} from "@/components/layout/header";
import {HeroSection} from "@/components/sections/hero";
import {ServicesSection} from "@/components/sections/services";
import {ProjectsSection} from "@/components/sections/projects";
import {ReachOutSection} from "@/components/sections/reach-out";
import {Footer} from "@/components/layout/footer";

export default function Home() {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <ServicesSection/>
            <ProjectsSection/>
            <ReachOutSection/>
            <Footer/>
        </div>
    );
}
