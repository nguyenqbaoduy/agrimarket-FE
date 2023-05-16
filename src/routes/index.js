import Home from '../pages/Home'
// import User from '../pages/User'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import DashBoard from '../pages/Seller/DashBoard'
import index from '../pages/Seller/ProductManager'

//-----------Layout--------------------------------
import Seller from '../Layout/Seller'
import DefaultLayout from '../Layout/DefaultLayout';

const publicPath = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/Login', component: Login, layout: null },
    // {path:'/User/:userID',component:User, layout:null},
    { path: '/Product/:ProductID', component: ProductDetail, layout: DefaultLayout },
    { path: '/Seller/:SellerID', component: DashBoard, layout: Seller },
    { path: '/Seller/:SellerID/ManageProduct', component: index, layout: Seller }

]
const privatePath = [
]
export { publicPath, privatePath }    