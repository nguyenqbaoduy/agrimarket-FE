import Home from '../pages/Home'
import User from '../pages/User'
import Login from '../pages/Login'

import ProductDetail from '../pages/ProductDetail'
import Seller from '../pages/Seller'
const publicPath = [
    {path:'/',component:Home},
    {path:'/Login',component:Login, layout:null},
    {path:'/User/:userID',component:User, layout:null},
    {path:'/Product/:ProductID',component:ProductDetail},
    {path: '/Seller/:SellerID',component:Seller, layout:null}

]
const privatePath = [
]
export {publicPath, privatePath}    