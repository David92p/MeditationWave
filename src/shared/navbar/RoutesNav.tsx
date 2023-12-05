import { useRoutes } from "react-router-dom";
import { Home, Start, Contact, ErrorServer } from "../../components"

const RoutesNav:React.FC = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home />
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
