import Article from "../components/Article";
import Cards from "../components/Cards";
import MyFooter from "../components/MyFooter";
import MyNav from "../components/MyNav";

function Home(){
    return(
        <>
            <MyNav />
            <main>
                <Article />
                <Cards name="Jonh" />
                <Cards name="Panha" />
            </main>
            <MyFooter />
        </>
    )
}
export default Home;