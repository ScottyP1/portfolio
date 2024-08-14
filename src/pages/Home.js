import { Image } from "@chakra-ui/react";

import HorizontalCard from "../components/HorizontalCard";
import AvatarImg from '../images/avatar.png';

export default function Home() {
    return (
        <>
            <div className="text-white text-center relative">
                {/* Absolute positioned Avatar Image */}
                <div className="absolute inset-0 z-0 flex items-center top-[480px] left-[250px] md:left-60 md:top-12">
                    <Image src={AvatarImg} className="w-[190px] h-[250px] md:w-[300px] md:h-[500px] opacity-80" />
                </div>

                {/* Content with headings and card */}
                <div className="relative z-10 mt-3 md:mt-24 flex flex-col items-center space-y-6">
                    <h1 className="text-3xl md:text-8xl funkyText tracking-[30px] ms-6">Welcome</h1>
                    <h2 className="text-4xl funkyText mt-12 linear-text">Front-End Web Developer</h2>
                    <div className="flex flex-col md:flex-row justify-center items-start space-x-6">
                        <div className="flex-shrink-0">
                            <HorizontalCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
