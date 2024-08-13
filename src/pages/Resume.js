import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Resume() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="text-white min-h-screen flex flex-col items-center">
            <div className="text-center">
                <h1 className="tracking-[25px] text-xl md:text-2xl">RESUME</h1>
                <h2 className="mt-6 tracking-[15px] text-2xl md:text-5xl">CODY SCOTT</h2>
            </div>
            <div className="flex flex-col items-center mt-4">
                <ul className="flex flex-wrap justify-center">
                    <li className="mx-2"><a href="mailto:codymoto122@gmail.com">codymoto122@gmail.com</a></li>
                    <li className="mx-2">|</li>
                    <li className="mx-2"><a href='tel:3019974575'>301-997-4575</a></li>
                    {width >= 760 && (
                        <>
                            <li className="mx-2">|</li>
                            <li className="mx-2">Falling Waters, WV 25419</li>
                        </>
                    )}
                </ul>
            </div>
            <div className="p-6">
                <SectionTitle title="Summary" />
                <p className="text-sm mt-4">
                    Highly dedicated and disciplined professional with a proven track record of seven years in the United States Navy as both a Rescue Swimmer and Test & Evaluation Aircrewman. Excelled in demanding and high-pressure environments, demonstrating an unwavering commitment to precision, attention to detail, and the ability to perform under challenging conditions and tight deadlines. Possesses a unique blend of teamwork, adaptability, and problem-solving skills cultivated through extensive military service. In addition to military experience, I have immersed myself in web development for over two years, acquiring proficiency in various programming languages and frameworks. A self-motivated learner, I have successfully completed multiple projects that showcase my dedication to mastering coding skills. Eager to leverage my diverse background, technical acumen, and passion for creating innovative solutions as I transition into a rewarding career as a Web Developer.
                </p>

                {/* -------------------------------------------------------------------------------------------------- */}

                <SectionTitle title="Skills" />
                <div className="mt-4 ms-4 columns-3">
                    <ul className="list-disc">
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                        <li>React Native</li>
                        <li>Next.js</li>
                        <li>Express</li>
                        <li>Flask</li>
                        <li>Redux</li>
                        <li>MongoDB</li>
                        <li>SQLite</li>
                        <li>HTML5</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>Material UI</li>
                    </ul>
                </div>

                {/* -------------------------------------------------------------------------------------------------- */}

                <SectionTitle title="Experience" />
                <Experience
                    company="United States Navy, USN"
                    location="Patuxent River, MD"
                    title="Test Specialist"
                    dates="09/2022 - current"
                    description="Air Test and Evaluation (T&E) Aircrewman play a crucial role in the testing and evaluation of various aircraft and related systems. Their responsibilities involve ensuring the safety, performance, and effectiveness of aircraft and associated equipment. Collaborated with test engineers and other team members to develop detailed test plans, including defining test objectives, parameters, and success criteria."
                />
                <Experience
                    company="United States Navy, USN"
                    location="San Diego, CA"
                    title="Rescue Swimmer"
                    dates="03/2018 - 08/2022"
                    description="Air Test and Evaluation (T&E) Aircrewman play a crucial role in the testing and evaluation of various aircraft and related systems. Their responsibilities involve ensuring the safety, performance, and effectiveness of aircraft and associated equipment. Collaborated with test engineers and other team members to develop detailed test plans, including defining test objectives, parameters, and success criteria."
                />

                {/* -------------------------------------------------------------------------------------------------- */}

                <SectionTitle title="Education and Training" />
                <Education
                    institution="Udemy | Online Course"
                    course="The Complete React Native + Hooks Course"
                    date="07/2024"
                    description="Developed real-world native apps using React Native, creating reusable components and deploying applications to the Apple and Google Play Stores. Gained a strong understanding of Redux concepts and React design principles. Prototyped and deployed apps, incorporating mobile design patterns used by experienced engineers to ensure a polished and functional user experience."
                />
                <Education
                    institution="Udemy | Online Course"
                    course="Modern React with Redux [2024 Update]"
                    date="05/2024"
                    description="Acquired skills in creating dynamic web applications using cutting-edge technologies. Gained expertise in client-side navigation with React Router and TypeScript for safer coding. Mastered form handling with robust validation, state management with Redux and Redux Toolkit, and API data handling. Enhanced app performance with immutable state management using Immer and developed responsive data tables. Integrated TailwindCSS for efficient UI development and practiced with large projects, exercises, and quizzes to prepare for a software engineering role."
                />
                <Education
                    institution="Udemy | Online Course"
                    course="Next.js 14 & React - The Complete Guide"
                    date="05/2024"
                    description="Mastered fullstack React app development using Next.js 14 and the App Router, including server and client components, data fetching, and handling data submissions via Server Actions. Built real projects to apply knowledge, explored different Next.js routing methods (App Router vs Pages Router), and learned key features such as pre-rendering, SSR, file-based routing, and authentication. Optionally completed the 'Next.js Summary' module for a quickstart overview."
                />
                <Education
                    institution="Udemy | Online Course"
                    course="The Web Developer Bootcamp 2024"
                    date="11/2023"
                    description="Mastered HTML5, CSS3, and Modern JavaScript by building responsive web applications, including complex projects like a blog and Yelp-like app using Node, Express, and MongoDB. Gained skills in front-end and back-end development, security practices, authentication, and deploying applications. Developed a strong foundation in JavaScript, working with frameworks like Bootstrap and mastering full-stack development."
                />
                <Education
                    institution="Udemy | Online Course"
                    course="100 Days of Code: The Complete Python Pro Bootcamp for 2023"
                    date="11/2023"
                    description="Completed a 100-day Python course, mastering automation, web development, data science, and machine learning. Built 100 projects, including games, GUIs, and web apps, using tools like Flask, Pandas, NumPy, and Scikit-learn. Created a portfolio of projects to showcase professional Python programming skills."
                />
                <Education
                    institution="Udemy | Online Course"
                    course="2022 Complete Python Bootcamp From Zero to Hero in Python"
                    date="08/2022"
                    description="Developed a comprehensive understanding of Python, including both Python 2 and Python 3. Built a portfolio of projects, including games like Tic Tac Toe and Blackjack, utilizing advanced Python features such as the collections module, timestamps, and Object-Oriented Programming. Gained experience with Jupyter Notebook and .py files, and learned to create GUIs within the Jupyter environment. Acquired the skills to apply Python professionally to solve real-world problems."
                />
            </div>
        </div>
    );
}

function SectionTitle({ title }) {
    return (
        <div className="flex items-center mt-16 text-center">
            <h2 className="text-2xl text-[#7805fc]">{title}</h2>
            <div className="flex-grow h-px bg-[#7805fc] ml-4"></div>
        </div>
    );
}

function Experience({ company, location, title, dates, description }) {
    return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1 text-gray-300 text-xl">
                <strong>{company}</strong><br />
                {location}<br />
                {title}<br />
                {dates}
            </div>
            <div className="md:col-span-2 text-gray-200 text-sm">
                {description}
            </div>
        </div>
    )
}

function Education({ institution, course, date, description }) {
    return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1 text-gray-300 text-xl">
                <strong>{institution}</strong><br />
                {course}<br />
                Date: {date}
            </div>
            <div className="md:col-span-2 text-gray-200 text-sm">
                {description}
            </div>
        </div>
    );
}