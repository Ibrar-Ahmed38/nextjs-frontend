
 import Homepage from "./Homepage"
 import About from "../Components/about"
 import Services from "../Components/services"
import Details from '../Components/details'
import  Carousel  from "../Components/carousel"
import Find from "../Components/Find"
import Link from 'next/link'


const index = () => {
	
  return (
    <div>
      	<nav className="bg-white shadow-lg">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
					
							<Link href=""><a className="flex items-center py-4 px-2">
								
								<span className="font-semibold text-3xl text-lg">Mr Masseur</span>
							</a>
							</Link> 
						</div>
					
					
					</div>
				
					<div className="hidden md:flex items-center space-x-3 ">
						<a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-red-700 hover:text-white transition duration-300">Log In</a>
						<Link href="/Signup"><a  className="py-2 px-2 font-medium w-32 text-center text-white bg-red-700 rounded hover:bg-red-900 transition duration-300">Sign Up</a></Link>
					</div>
				
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button">
					</button>
					</div>
				</div>
			</div>
			
			<div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
		
		</nav>
		<Homepage /> 
		   <About/> 
		  <Services/> 
		 <Details/> 
		 <Carousel />
		<Find /> 
	
		
    </div>
  )
}

export default index
