import { useRoutes } from "react-router-dom";
import { Home, About, Contact, ErrorServer, Start } from "../../components"

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
      path: "/start",
      element: <Start/>
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
