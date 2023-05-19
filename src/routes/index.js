import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import DashBoard from '../pages/Seller/DashBoard'
import DashBoardAdmin from '../pages/Admin/DashBoardAdmin'
import ManagerAccount from '../pages/Admin/ManagerAccount'

import index from '../pages/Seller/ProductManager'
import AllProduct from '../pages/Seller/ProductManager/AllProduct'
import AddProduct from '../pages/Seller/ProductManager/AddProduct'
import Cart from '../pages/Cart'
//-----------Layout--------------------------------
import Seller from '../Layout/Seller'
import DefaultLayout from '../Layout/DefaultLayout';
import Admin from '../Layout/Admin';

const publicPath = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/Login', component: Login, layout: null },
    { path: '/Product/:ProductID', component: ProductDetail, layout: DefaultLayout },
    { path: '/Cart', component: Cart, layout: DefaultLayout },
    { path: '/Seller', component: DashBoard, layout: Seller },
    { path: '/Seller/AddProduct', component: AddProduct, layout: Seller },
    { path: '/Seller/AllProduct', component: AllProduct, layout: Seller },
    { path: '/Admin', component: DashBoardAdmin, layout: Admin },
    { path: '/ManagerAccount', component: ManagerAccount, layout: Admin },
]
const privatePath = [
]
export { publicPath, privatePath }    