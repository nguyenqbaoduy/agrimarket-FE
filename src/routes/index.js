import Home from '../pages/Home'
// import User from '../pages/User'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import SellerDefault from '../pages/Seller/Default'
//-----------Layout--------------------------------
import Seller from '../Layout/Seller'
import DefaultLayout from '../Layout/DefaultLayout';

const publicPath = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/Login', component: Login, layout: null },
    // {path:'/User/:userID',component:User, layout:null},
    { path: '/Product/:ProductID', component: ProductDetail, layout: DefaultLayout },
    { path: '/Seller/:SellerID', component: SellerDefault, layout: Seller }

]
const privatePath = [
]
export { publicPath, privatePath }    