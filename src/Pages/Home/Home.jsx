import Card from "../../Components/Card";
import Slide from "../../Components/Slide";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Slide></Slide>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    categories.map(category => <Card key={category.id} category={category}> </Card>)
                }
            </div>
        </div>
    );
};

export default Home;