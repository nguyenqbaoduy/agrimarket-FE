import Home from '../pages/Home'
import User from '../pages/User'
import ProductDetail from '../pages/ProductDetail'
const publicPath = [
    {path:'/',component:Home},
    {path:'/User/:userID',component:User, layout:null},
    {path:'/Product/:ProductID',component:ProductDetail},

]
const privatePath = [
]
export {publicPath, privatePath}    