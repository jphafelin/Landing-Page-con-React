import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
			<Jumbotron title= "A Warm Welcome!" text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." buttonText="Call to action!" />
			<div className="row px-4 my-5" id="services">
				
			<Card title= "Card Title" btnDescription = "Find Out More!" urlimg = "http://via.placeholder.com/500x325" />
			<Card title= "Card Title" btnDescription = "Find Out More!" urlimg = "http://via.placeholder.com/500x325" />
			<Card title= "Card Title" btnDescription = "Find Out More!" urlimg = "http://via.placeholder.com/500x325" />
			<Card title= "Card Title" btnDescription = "Find Out More!" urlimg = "http://via.placeholder.com/500x325" />
			</div>
			</div>
			<Footer />
		</div>


	)
};

export default Home;
