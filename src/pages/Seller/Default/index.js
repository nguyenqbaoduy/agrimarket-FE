import { useParams } from "react-router-dom";
const SellerDefault = () => {
    const params = useParams();
    return (
        <div className="b">
            <h2>Seller + {params.SellerID}</h2>
            Đây là Seller
        </div>
    )
}
export default SellerDefault;
