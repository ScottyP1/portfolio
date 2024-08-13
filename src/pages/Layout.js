import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import LiveBackground from "../components/LiveBackground";

export default function Layout() {
    const [width, setWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <LiveBackground />

            <Box bg='transparent' w='100%' p={4} color='white'>
                <nav>
                    {width < 760 ? (
                        isOpen ? (
                            <div className="bg-black h-screen">
                                <ul className="flex flex-col items-center justify-center h-full">
                                    <li className="text-2xl cursor-pointer mb-8 border-2 border-black p-4 rounded-full bg-[#7805fc] text-white" onClick={toggleMenu}>CLOSE</li>
                                    <li className="mb-4 text-xl"><Link to='/' onClick={toggleMenu}>Home</Link></li>
                                    <li className="mb-4 text-xl"><Link to='/projects' onClick={toggleMenu}>Projects</Link></li>
                                    <li className="mb-4 text-xl"><Link to='/resume' onClick={toggleMenu}>Resume</Link></li>
                                    <li className="text-xl"><Link to='/contact' onClick={toggleMenu}>Contact</Link></li>
                                </ul>
                            </div>
                        ) : (
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <h2 className="border border-4 border-white rounded-full p-4 text-md font-black">
                                    <Link to='/'>CS</Link>
                                </h2>
                                <GiHamburgerMenu
                                    className="border-2 rounded-lg p-2 cursor-pointer"
                                    color='white'
                                    size={40}
                                    onClick={toggleMenu}
                                />
                            </Box>
                        )
                    ) : (
                        <ul className="flex justify-center space-x-8">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/resume'>Resume</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    )}
                </nav>
            </Box>

            <Box p={4}>
                <Outlet />
            </Box>
        </>
    );
}
