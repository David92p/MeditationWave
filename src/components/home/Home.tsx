import { useNavigate } from "react-router-dom";
import home1 from "../../assets/home1.jpg"
import home2 from "../../assets/home2.jpg"

const Home:React.FC = () => {
	const navigate = useNavigate();
  return (
    <div className='w-full flex flex-col'>
			<div className="h-24 flex justify-center items-center border-4 border-white">
				<button onClick={() => navigate("start")} className="bg-amber-900 hover:bg-amber-800 px-8 py-2 rounded-2xl text-white font-medium tracking-wider hover:tracking-widest cursor-pointer">START</button>
			</div>
			<div className='flex flex-col sm:flex-row justify-center items-center mx-4 text-justify gap-4'>
				<img src={home1} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full mt-10'/>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veritatis cupiditate inventore voluptates rerum consectetur vero modi quasi ratione placeat quis voluptatum sapiente enim eum, debitis libero quisquam ad maxime.</h1>
			</div>
			<div className='flex flex-col sm:flex-row-reverse justify-center items-center mx-4 text-justify gap-4'>
				<img src={home2	} alt="Home Img" className='w-44 md:w-72 2xl:w-96 rounded-full mt-10'/>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veritatis cupiditate inventore voluptates rerum consectetur vero modi quasi ratione placeat quis voluptatum sapiente enim eum, debitis libero quisquam ad maxime.</h1>
			</div>
    </div>
  )
}

export default Home
