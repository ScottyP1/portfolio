import HorizontalCard from "../components/HorizontalCard";

export default function Home() {
    return (
        <>
            <div className="text-white text-center">
                <h1 className="text-3xl md:text-8xl funkyText tracking-[30px] ms-6">Welcome</h1>
                <h2 className="text-4xl funkyText mt-12 linear-text">Front-End Web Developer</h2>
                <div className="mt-24 flex justify-center">
                    <HorizontalCard />
                </div>
            </div>

        </>
    )
}