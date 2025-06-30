import {
  createBrowserRouter,
  Outlet,
  redirect,
} from "react-router";


async function protectedRoute(){
    const USER = localStorage.getItem("token")
    if(!USER){
        throw redirect("/login")
    }
    return null
}

async function authProtectRoute(){
    const USER = localStorage.getItem("token")
    if(USER){
        throw redirect("/")
    }
    return null
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>slash</div>,
  },
  {path: "/login",
    loader:authProtectRoute,
      element:<p>login</p>
  },
  {path:'/register',
    loader:authProtectRoute,
    element:<p>register</p>
  },
  {path:"/dashboard",
    loader:protectedRoute,
    element:<div>dashboard
        <Outlet/>
    </div>,
    children:[
        {
            path:"setting",
            element:<div>setting</div>
        },
        {
            index:true,
            element:<div>aboutus</div>
        }
    ]
  }
]);