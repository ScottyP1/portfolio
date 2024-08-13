import React from 'react';
import { motion } from 'framer-motion';

const orbsCount = 50;
const width = window.innerWidth;
const height = window.innerHeight;

const LiveBackground = () => {
    const generatePath = () => ({
        path: [
            { x: Math.random() * width, y: Math.random() * height },
            { x: Math.random() * width, y: Math.random() * height },
            { x: Math.random() * width, y: Math.random() * height },
        ],
    });

    return (
        <div className="background">
            {[...Array(orbsCount)].map((_, index) => {
                const { path } = generatePath();

                return (
                    <motion.div
                        key={index}
                        className="orb"
                        initial={{ x: path[0].x, y: path[0].y }}
                        animate={{
                            x: [path[0].x, path[1].x, path[2].x, path[0].x],
                            y: [path[0].y, path[1].y, path[2].y, path[0].y],
                        }}
                        transition={{
                            duration: 60,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default LiveBackground;
