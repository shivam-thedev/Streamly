import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Home, Login, Signup, Dashboard, History, LikedVideos, Subscriptions, Support, YourChannel} from '../pages'
import { Main } from '../components';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        children: [
            {
                path: '/',
                element: <Main />, 
                children: [
                    {
                        path: '/',
                        element: <Home />
                    },
                    {
                        path: '/liked-videos',
                        element: <LikedVideos />
                    },
                    {
                        path: '/history',
                        element: <History />
                    },
                    {
                        path: '/subscriptions',
                        element: <Subscriptions />
                    },
                    {
                        path: '/dashboard',
                        element: <Dashboard />
                    },
                    {
                        path: '/your-channel',
                        element: <YourChannel />
                    },
                    {
                        path: '/support',
                        element: <Support />
                    }
                ]
            }
        ]
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/login',
        element: <Login />
    }
]);










