import {createBrowserRouter,} from "react-router-dom";
import Main from "../LayOut/Main";
import MyProfile from "../Page/MyProfile/MyProfile";
import Trades from "../Page/Trades/Trades";
import WorkingArea from "../Page/WorkingArea/WorkingArea";
import Reviews from "../Page/Reviews/Reviews";



export const routes =  createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element: <MyProfile></MyProfile>
            },
            {
                path:"/my-profile",
                element: <MyProfile></MyProfile>
            },
            {
                path:"/trades",
                element: <Trades></Trades>
            },
            {
                path:"/Working-area",
                element: <WorkingArea></WorkingArea>
            },
            {
                path:"/Reviews",
                element: <Reviews></Reviews>
            }
        ]
    
    },
])