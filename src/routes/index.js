import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import DashBoard from '../pages/Seller/DashBoard'
import index from '../pages/Seller/ProductManager'
import Cart from '../pages/Cart'
//-----------Layout--------------------------------
import Seller from '../Layout/Seller'
import DefaultLayout from '../Layout/DefaultLayout';

const publicPath = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/Login', component: Login, layout: null },
    { path: '/Product/:ProductID', component: ProductDetail, layout: DefaultLayout },
    { path: '/Cart', component: Cart, layout: DefaultLayout },
    { path: '/Seller', component: DashBoard, layout: Seller },
    { path: '/Seller/ManageProduct', component: index, layout: Seller },
    { path: '/Seller/ManageProduct', component: index, layout: Seller },
]
const privatePath = [
]
export { publicPath, privatePath }    