import { useNavigate } from "react-router-dom";
import home1 from "../../assets/home1.jpg"
import home2 from "../../assets/home2.jpg"
import home3 from "../../assets/home3.jpg"
import { useStoreSelector } from "../../shared/store/hooks";

const Home:React.FC = () => {
	const navigate = useNavigate();
	const state = useStoreSelector((state) => state.globalReducer)
  return (
    <div className='w-full flex flex-col 2xl:items-center'>
			<div className="w-full text-center py-10 px-2 tracking-widest text-xl 2xl:text-2xl font-semibold">
				{state.header}
			</div>
			<div className="h-24 flex justify-center items-center">
				<button onClick={() => navigate("start")} className="bg-amber-900 hover:bg-amber-800 px-8 py-2 rounded-2xl text-white font-medium tracking-wider hover:tracking-widest transition duration-300 ease-in-out shadow-xl shadow-amber-700/50">START</button>
			</div>
			<div className='flex flex-col sm:flex-row justify-center items-center mb-10 mt-8 mx-4 2xl:mx-0 text-justify 2xl:w-[80%]'>
				<img src={home1} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full 2xl:mr-10 mb-4 shadow-xl shadow-amber-900/100'/>
				<div className="leading-8 2xl:leading-10 2xl:mr-40">
					{state.par1}
				</div>
			</div>
			<div className='flex flex-col sm:flex-row-reverse justify-center items-center mb-10 mt-8 mx-4 2xl:mx-0 text-justify 2xl:w-[80%]'>
				<img src={home2} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full 2xl:ml-10 mb-4 shadow-xl shadow-amber-900/100'/>
				<div className="leading-8 2xl:leading-10 2xl:ml-40">
					{state.par2}
				</div>
			</div>
			<div className='flex flex-col sm:flex-row justify-center items-center mb-10 mt-8 mx-4 2xl:mx-0 text-justify 2xl:w-[80%]'>
				<img src={home3} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full 2xl:mr-10 mb-4 shadow-xl shadow-amber-900/100'/>
				<div className="leading-8 2xl:leading-10 2xl:mr-40">
					{state.par1}
				</div>
			</div>
    </div>
  )
}

export default Home
