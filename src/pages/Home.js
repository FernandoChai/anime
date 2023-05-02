import { Header } from "../components/Home/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/index.css';
import { Banner } from "../components/Home/Banner";

export const Home = () => {
    return (
        <>
            <Header />
            <Banner />
        </>
    )
}