import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassword from '../pages/Login/ForgotPassword'
import Category from '../pages/Category'
import Checkout from '../pages/Checkout'
import ProductDetail from '../pages/ProductDetail'
import DashBoard from '../pages/Seller/DashBoard'
import DashBoardAdmin from '../pages/Admin/DashBoardAdmin'
import ManagerAccount from '../pages/Admin/ManagerAccount'
import AllProduct from '../pages/Seller/ProductManager/AllProduct'
import AddProduct from '../pages/Seller/ProductManager/AddProduct'
import AddAccount from '../pages/Admin/AddAccount'
import Cart from '../pages/Cart'
import News from '../pages/News'
import SingleNews from '../pages/News/singleNews'
import Order from '../pages/User/Order'


//-----------Layout--------------------------------
import Seller from '../Layout/Seller'
import DefaultLayout from '../Layout/DefaultLayout';
import Admin from '../Layout/Admin';

const publicPath = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/Login', component: Login, layout: null },
    { path: '/Forgot', component: ForgotPassword, layout: null },
    { path: '/Category/:CategoryID', component: Category, layout: DefaultLayout },
    { path: '/Product/:ProductID', component: ProductDetail, layout: DefaultLayout },
    { path: '/Cart', component: Cart, layout: DefaultLayout },
    { path: '/Order', component: Order, layout: DefaultLayout },
    { path: '/Category/:CategoryID', component: Category, layout: DefaultLayout },
    { path: '/Checkout', component: Checkout, layout: DefaultLayout },
    { path: '/News', component: News, layout: DefaultLayout },
    { path: '/News/:NewsID', component: SingleNews, layout: DefaultLayout },

    { path: '/Seller', component: DashBoard, layout: Seller },
    { path: '/Seller/AddProduct', component: AddProduct, layout: Seller },
    { path: '/Seller/AllProduct', component: AllProduct, layout: Seller },
    { path: '/Admin', component: DashBoardAdmin, layout: Admin },
    { path: '/Admin/AddAcount', component: AddAccount, layout: Admin },
    { path: '/ManagerAccount', component: ManagerAccount, layout: Admin },
]
const privatePath = [
]
export { publicPath, privatePath }    