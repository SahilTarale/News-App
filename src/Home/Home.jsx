import Navbar from "../Navbar/Navbar";
import { NewsContextProvider } from "../NewsContext";
import News from "../Components/News";
import "./app.css" ;

const Home = () => {
    return (
        <div>
            <Navbar />
            <NewsContextProvider>
                <News />
            </NewsContextProvider>
        </div>
      
      
    );
  };
  
  export default Home;