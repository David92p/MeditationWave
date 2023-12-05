import { BrowserRouter } from "react-router-dom";
import { Navbar, RoutesNav } from "./shared";

function App() {

  return (
    <div className="bg-amber-600 min-h-screen">
      <BrowserRouter>
				<Navbar/>
				<RoutesNav/>
      </BrowserRouter>
    </div>
  )
}

export default App
