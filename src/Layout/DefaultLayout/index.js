import Header from "./Header";
import Slidebar from "./Slidebar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <Slidebar/>
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;