import home1 from "../../assets/home1.jpg"
import home2 from "../../assets/home2.jpg"
import home3 from "../../assets/home3.jpg"
import { useStoreSelector } from "../../shared/store/hooks";

const About:React.FC = () => {
  const state = useStoreSelector((state) => state.globalReducer)
	return (
    <div className={`w-full flex flex-col 2xl:items-center ${state.darkMode ? "bg-slate-800 text-white" : "bg-amber-200 text-slate-900"} `}>
			<div className='flex flex-col sm:flex-row justify-center items-center mb-10 mt-8 2xl:mt-14 mx-4 2xl:mx-0 text-justify 2xl:w-[80%]'>
				<img src={home1} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full 2xl:mr-10 mb-4 shadow-xl shadow-amber-900/100'/>
				<div className="leading-8 2xl:leading-10 2xl:mr-40">
					{state.home.par1}
				</div>
			</div>
			<div className='flex flex-col sm:flex-row-reverse justify-center items-center mb-10 mt-8 mx-4 2xl:mx-0 text-justify 2xl:w-[80%]'>
				<img src={home2} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full 2xl:ml-10 mb-4 shadow-xl shadow-amber-900/100'/>
				<div className="leading-8 2xl:leading-10 2xl:ml-40">
					{state.home.par2}
				</div>
			</div>
			<div className='flex flex-col sm:flex-row justify-center items-center mb-10 mt-8 mx-4 2xl:mx-0 text-justify 2xl:w-[80%]'>
				<img src={home3} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full 2xl:mr-10 mb-4 shadow-xl shadow-amber-900/100'/>
				<div className="leading-8 2xl:leading-10 2xl:mr-40">
					{state.home.par3}
				</div>
			</div>
    </div>
  )
}

export default About
