import { BrowserRouter } from "react-router-dom";
import { Navbar, RoutesNav } from "./shared";
import { useStoreSelector } from "./shared/store/hooks";

function App() {
  const darkMode:boolean = useStoreSelector((state) => state.globalReducer.darkMode)
  return (
    <div className={`${darkMode ? "bg-amber-500" : "bg-amber-200"} min-h-screen`}>
      <BrowserRouter>
				<Navbar/>
				<RoutesNav/>
      </BrowserRouter>
    </div>
  )
}

export default App
