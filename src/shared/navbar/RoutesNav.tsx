import { useRoutes } from "react-router-dom";
import { Home, About, Contact, ErrorServer, Controller } from "../../components"

const RoutesNav:React.FC = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home />
    }, 
    {
        path: "/about",
        element: <About/>
    },
    {
      path: "/controller",
      element: <Controller />
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "*",
        element: <ErrorServer />,
      },
  ])
}

export default RoutesNav
