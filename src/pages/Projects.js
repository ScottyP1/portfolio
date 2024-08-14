import VerticalCard from "../components/VerticalCard"

import SweetStingImg from '../images/sweetSting.jpg';
import NetflixImg from '../images/netflix.jpg';
import ThorImg from '../images/thor.jpg';

export default function Projects() {
    return (
        <div className="text-white flex flex-col items-center">
            <div className="text-center">
                <h1 className="tracking-[25px] text-xl md:text-2xl">PROJECTS</h1>
            </div>
            <div className="mt-6 columns-1 md:columns-3 md:grid grid-flow-col">
                <VerticalCard
                    image={SweetStingImg}
                    imageAlt='Sweet Sting ScreenShot'
                    link="https://sweet-sting.vercel.app/"
                    title='Sweet Sting'
                    description="Developed a custom website for a piercing company using React, focused on providing a modern, user-friendly experience. The site
                features a clean and aesthetic design, showcasing the company's services, portfolio, and customer testimonials. Key functionalities include an 
                    interactive gallery, service booking system, and an FAQ section to address common inquiries. " />

                <VerticalCard
                    image={NetflixImg}
                    imageAlt='Netflix Clone ScreenShot'
                    link="https://next-app-ias5.vercel.app/"
                    title='Netflix Clone'
                    description='A Netflix clone built with React and Next.js, replicating the core functionality and user interface of the popular streaming platform.
                The project includes features such as user authentication, movie and TV show browsing, a responsive design, and dynamic content loading.'/>

                <VerticalCard
                    image={ThorImg}
                    imageAlt='Thor Transport ScreenShot'
                    link="https://thor-two.vercel.app/"
                    title='Thor Transport'
                    description='Created a website for a semi truck company specializing in road freight, leveraging React for a dynamic and responsive user experience.
                     The site features detailed service descriptions, a fleet overview, and an easy-to-use booking system for freight services.' />
            </div>
        </div>

    )
}