import icon from "../../assets/icon.png"
import { useStoreSelector } from "../../shared/store/hooks"
import { motion } from "framer-motion"
const Home:React.FC = () => {
	
	const state = useStoreSelector((state) => state.globalReducer)
	return (
		<div className={`flex-col min-h-screen pt-10 2xl:px-20 ${state.darkMode ? "bg-stone-800 text-white" : "bg-amber-200 text-slate-900"}`}>
			<div className="flex flex-col sm:flex-row border-4 border-red-600">
				<img src={icon} alt="Meditation Wave" className="w-48 sm:w-60 2xl:w-80 mx-auto mb-6 sm:mb-0 border-4 border-blue-400"/>
				<div className="flex flex-col items-center sm:w-[75%] border-4 border-white">
					<motion.h3 initial={{x:`${document.body.clientWidth < 400 ? "-500px" : "800px"}`}} animate={{x:0}} transition={{delay: 1, duration: 2.5}} className="text-center text-md mb-2 font-bold">{state.home.header.first}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 400 ? "-500px" : "800px"}`}} animate={{x:0}} transition={{delay: 2, duration: 2.5}} className="text-center text-md mb-2 font-bold">{state.home.header.second}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 400 ? "-500px" : "800px"}`}} animate={{x:0}} transition={{delay: 3, duration: 2.5}} className="text-center text-md mb-2 font-bold">{state.home.header.third},</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 400 ? "-500px" : "800px"}`}} animate={{x:0}} transition={{delay: 4, duration: 2.5}} className="text-center text-md mb-2 font-bold">{state.home.header.fourth}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 400 ? "-500px" : "800px"}`}} animate={{x:0}} transition={{delay: 5, duration: 2.5}} className="text-center text-md mb-2 font-bold">{state.home.header.fifth}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 400 ? "-500px" : "800px"}`}} animate={{x:0}} transition={{delay: 6, duration: 2.5}} className="text-center text-md mb-2 font-bold">{state.home.header.sixth}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 400 ? "-500px" : "800px"}`}} animate={{x:0}} transition={{delay: 7, duration: 2.5}} className="text-center text-md mb-2 font-bold">{state.home.header.seventh}</motion.h3>
					<motion.h3 initial={{x:`${document.body.clientWidth < 400 ? "-500px" : "800px"}`}} animate={{x:0}} transition={{delay: 8, duration: 2.5}} className="text-center text-md mb-2 font-bold">{state.home.header.eighth}</motion.h3>
				</div>
			</div>
			{/* <h1 className="text-center pt-10 text-2xl border-4 border-red-500">{state.language == "ENG" ? "Welcome to Meditation Wave" : "Benvenuti su Meditation Wave"}</h1> */}
			{/* <div className="flex flex-col sm:flex-row justify-center items-center sm:mx-10 border-4 border-pink-800"> */}
				{/* <img src={icon} alt="Meditation Wave" className="w-56 sm:w-1/4 mt-10 border-4 border-blue-400"/> */}
				{/* <div className="flex flex-col border-4 border-green-600">
					<p className="text-justify mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime autem pariatur fugiat amet dolore quidem expedita qui vel, corporis temporibus maiores tempora iure reprehenderit! Perspiciatis ab quidem laudantium eos id.</p>
				</div> */}
			{/* </div> */}
		</div>
	)
}

export default Home;
