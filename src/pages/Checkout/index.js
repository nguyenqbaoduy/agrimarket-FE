import { useLocation } from 'react-router-dom';
const Checkout = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data);
    return (
        <div>
            Checkout
        </div>
    )
};

export default Checkout;
