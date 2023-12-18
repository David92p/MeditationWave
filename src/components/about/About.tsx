import about1 from "../../assets/images/about1.jpg"
import about2 from "../../assets/images/about2.jpg"
import about3 from "../../assets/images/about3.jpg"
import about4 from "../../assets/images/about4.jpg"
import { useStoreSelector } from "../../store/hooks";
import { motion } from "framer-motion"

const About:React.FC = () => {
  const state = useStoreSelector((state) => state.globalReducer)
	return (
		<div className={`w-full flex flex-col 2xl:items-center ${state.darkMode ? "bg-stone-800 text-white" : "bg-amber-200 text-slate-900"} `}>
			<div className='flex flex-col sm:flex-row justify-center items-center mb-10 mt-8 2xl:mt-14 mx-4 sm:mx-10 2xl:mx-0 text-justify 2xl:w-[80%]'>
				<img src={about1} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full sm:mr-10 mb-4 shadow-xl shadow-amber-900/100'/>
				<div className="leading-8 2xl:leading-10 2xl:mr-40">
					<motion.div initial={{x:`${document.body.clientWidth < 500 ? 500 : 1500}`}} animate={{x:0}} transition={{delay: 0.5, duration: 2}}>
						{state.about.par1}
					</motion.div>
				</div>
			</div>
			<div className='flex flex-col sm:flex-row-reverse justify-center items-center mb-10 mt-8 mx-4 sm:mx-10 2xl:mx-0 text-justify 2xl:w-[80%]'>
				<img src={about2} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full sm:ml-10 mb-4 shadow-xl shadow-amber-900/100'/>
				<div className="leading-8 2xl:leading-10 2xl:ml-40">
					<motion.div initial={{x:`${document.body.clientWidth < 500 ? -500 : -1500}`}} animate={{x:0}} transition={{delay: 1, duration: 2}}>
						{state.about.par2}
					</motion.div>
				</div>
			</div>
			<div className='flex flex-col sm:flex-row justify-center items-center mb-10 mt-8 mx-4 sm:mx-10 2xl:mx-0 text-justify 2xl:w-[80%]'>
				<img src={about3} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full sm:mr-10 mb-4 shadow-xl shadow-amber-900/100'/>
				<div className="leading-8 2xl:leading-10 2xl:mr-40">
					<motion.div initial={{x:`${document.body.clientWidth < 500 ? 500 : 1500}`}} animate={{x:0}} transition={{delay: 1.5, duration: 2}}>
						{state.about.par3}
					</motion.div>
				</div>
			</div>
			<div className='flex flex-col sm:flex-row-reverse justify-center items-center mb-10 mt-8 mx-4 sm:mx-10 2xl:mx-0 text-justify 2xl:w-[80%]'>
				<img src={about4} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full sm:ml-10 mb-4 shadow-xl shadow-amber-900/100'/>
				<div className="leading-8 2xl:leading-10 2xl:ml-40">
					<motion.div initial={{x:`${document.body.clientWidth < 500 ? -500 : -1500}`}} animate={{x:0}} transition={{delay: 2, duration: 2}}>
						{state.about.par4}
					</motion.div>
				</div>
			</div>
		</div>
	)
};

export default About
