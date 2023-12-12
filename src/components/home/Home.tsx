import icon from "../../assets/icon.png"
import { useStoreSelector } from "../../shared/store/hooks"
const Home:React.FC = () => {
	
	const state = useStoreSelector((state) => state.globalReducer)
	return (
		<div className={`flex-col min-h-screen ${state.darkMode ? "bg-stone-800 text-white" : "bg-amber-200 text-slate-900"}`}>
			<div className="flex flex-col sm:flex-row justify-center items-center sm:mx-10 border-4 border-pink-800">
				<img src={icon} alt="Meditation Wave" className="w-56 sm:w-1/4 mt-10 border-4 border-blue-400"/>
				<div className="flex flex-col border-4 border-green-600">
					<h1 className="mx-auto font-extrabold text-2xl">{state.language == "ENG" ? "Welcome to Meditation Wave" : "Benvenuti su Meditation Wave"}</h1>
					<p className="text-justify mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime autem pariatur fugiat amet dolore quidem expedita qui vel, corporis temporibus maiores tempora iure reprehenderit! Perspiciatis ab quidem laudantium eos id.</p>
				</div>
			</div>
		</div>
	)
}

export default Home;
