import { BrowserRouter } from "react-router-dom";
import { Navbar, RoutesNav } from "./shared";
import { Footer } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
			<Navbar/>
			<RoutesNav/>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
