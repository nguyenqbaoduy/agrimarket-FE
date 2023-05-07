import {useParams} from 'react-router-dom';
function ProductDetail() {
    const params = useParams();
    console.log(params.ProductID)
    return (
        <div>
            <div className="container">

            </div>
        </div>

    );
}

export default ProductDetail;