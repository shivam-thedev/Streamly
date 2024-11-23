import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login';
import Signup from '../pages/Signup';
export const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            
        ]
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/login',
        element:<Login/>
    }
]);