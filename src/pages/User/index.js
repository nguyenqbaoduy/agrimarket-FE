import Header from "../../Layout/DefaultLayout/Header";
import {useParams} from 'react-router-dom';
function User() {
    const params = useParams();
    return (
        <div>
            <Header />
            <div className="container">
                <h2>User + {params.userID}</h2>
            </div>
        </div>

    );
}

export default User;