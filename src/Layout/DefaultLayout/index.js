import Header from "./Header";
import Slidebar from "./Slidebar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <Slidebar/>
            {children}
        </div>
     );
}

export default DefaultLayout;