import { useNavigate } from "react-router-dom"
import icon1 from "../../assets/images/icon1.png"
import icon2 from "../../assets/images/icon2.png"
import { useStoreSelector } from "../../store/hooks"
import { motion } from "framer-motion"
const Home:React.FC = () => {
	
	const state = useStoreSelector((state) => state.globalReducer)

	const navigate = useNavigate()
	return (
		<div className={`flex-col sm:h-[1200px] justify-around items-center ${state.darkMode ? "bg-stone-800 text-white" : "bg-amber-200 text-slate-900"}`}>
			<div className="flex flex-col sm:flex-row sm:items-center sm:h-[50%] sm:justify-around 2xl:justify-around 2xl:mx-56 pt-6 sm:mx-10">
				<img src={icon1} alt="Meditation Wave" className={`bg-amber-600 rounded-lg p-4 ${state.darkMode ? "shadow-lg shadow-amber-800" : "shadow-2xl shadow-amber-600"} h-56 sm:h-64 2xl:h-80 w-48 sm:w-64 2xl:w-80 mx-auto sm:mx-0 mb-4 sm:mb-0`}/>
				<div className="flex flex-col items-center py-4 ml-4 gap-4">
					<motion.h1 initial={{x:`${document.body.clientWidth < 500 ? 500 : 1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 1}} className="text-center text-2xl mb-2 font-bold tracking-wider">{state.language == "ENG" ? "Welcome to Meditation Wave" : "Benvenuto su Meditation Wave"}</motion.h1>
					<motion.h3 initial={{x:`${document.body.clientWidth < 500 ? 500 : 1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 1.3}} className="text-center text-lg mb-2 font-bold tracking-wider">{state.language == "ENG" ? "Let yourself be transported into a moment of well-being" : "Lasciati trasportare in un momento di benessere"}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 500 ? 500 : 1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 1.6}} className="text-center text-md mb-2 font-bold tracking-wider">{state.language == "ENG" ? "Start your spiritual journey here" : "Inizia quì il tuo viaggio spirituale"}</motion.h3>
					<motion.button initial={{x:`${document.body.clientWidth < 500 ? 500 : 1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 1.8}} onClick={() => navigate("start")} className="w-24 sm:w-28 h-8 sm:h-10 text-sm sm:text-lg bg-amber-800 hover:bg-amber-900 rounded-2xl text-white font-medium tracking-widest mt-4">START</motion.button>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row-reverse sm:items-center sm:h-[50%] sm:justify-around 2xl:justify-around 2xl:mx-56 pt-6 sm:mx-10">
				<img src={icon2} alt="Meditation Wave" className={`bg-amber-600 rounded-lg p-4 ${state.darkMode ? "shadow-lg shadow-amber-800" : "shadow-2xl shadow-amber-600"} h-56 sm:h-64 2xl:h-80 w-48 sm:w-64 2xl:w-80 mx-auto sm:mx-0 mb-4 sm:mb-0`}/>
				<div className="flex flex-col items-center py-4 gap-4">
					<motion.h3 initial={{x:`${document.body.clientWidth < 500 ? -500 : -1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 1}} className="text-center text-md mb-2 font-bold tracking-wider">{state.home.header.first}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 500 ? 500 : -1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 1.3}} className="text-center text-md mb-2 font-bold tracking-wider">{state.home.header.second}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 500 ? -500 : -1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 1.6}} className="text-center text-md mb-2 font-bold tracking-wider">{state.home.header.third},</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 500 ? 500 : -1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 2.1}} className="text-center text-md mb-2 font-bold tracking-wider">{state.home.header.fourth}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 500 ? -500 : -1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 2.6}} className="text-center text-md mb-2 font-bold tracking-wider">{state.home.header.fifth}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 500 ? 500 : -1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 2.9}} className="text-center text-md mb-2 font-bold tracking-wider">{state.home.header.sixth}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 500 ? -500 : -1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 3.4}} className="text-center text-md mb-2 font-bold tracking-wider">{state.home.header.seventh}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 500 ? 500 : -1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 4}} className="text-center text-md mb-2 font-bold tracking-wider">{state.home.header.eighth}</motion.h3>
				</div>
			</div>
		</div>
	)
}

export default Home;
