import { BrowserRouter } from "react-router-dom";
import { Navbar, RoutesNav } from "./shared";

function App() {
  return (
    <BrowserRouter>
			<Navbar/>
			<RoutesNav/>
    </BrowserRouter>
  )
}

export default App
