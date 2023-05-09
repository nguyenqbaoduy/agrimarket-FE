import Header from "./Header";
import Slidebar from "./Slidebar";
import Footer from "./Footer";
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <Slidebar/>
            {children}
            <Footer/>
        </div>
     );
}

export default DefaultLayout;