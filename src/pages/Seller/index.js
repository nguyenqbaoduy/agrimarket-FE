import {useParams} from 'react-router-dom';
import Header from './Header';
import SideBar from './Home/SideBar';
import DashBoard from './Home/DashBoard';
import classNames from 'classnames/bind';

import styles from './Seller.module.scss';

const cx = classNames.bind(styles)

function Seller() {
    const params = useParams();
    return (
        <div>
            <Header />
            <div className={cx('wrapper')} style={{display: 'flex'}}>
                <SideBar />
                <DashBoard />
            </div>
            <div className="b">
                <h2>Seller + {params.SellerID}</h2>
                Đây là Seller
            </div>
        </div>

    );
}

export default Seller;