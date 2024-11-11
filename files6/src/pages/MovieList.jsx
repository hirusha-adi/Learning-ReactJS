import { Card } from "../components/Card";

const MovieList = () => {
    return (
        <>
            <main>
                <section className="max-w-7xl mx-auto py-7 items-center">
                    <div className="flex justify-center flex-wrap ">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
            </main>
        </>
    );
};

export { MovieList }