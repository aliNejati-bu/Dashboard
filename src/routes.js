import Home from "./pages/Home/Home"
import Users from "./pages/Users/UserList"
import NewUser from "./pages/NewUser/NewUser"
import Products from "./pages/Products/Products"

let routes = [
    {path:'/', element: <Home />},
    {path:'/users', element: <Users />},
    {path:'/newuser', element: <NewUser />},
    {path:'/products', element: <Products />},
]

export default routes