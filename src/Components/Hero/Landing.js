import React from "react";
import EmailForm from "../EmailForm";
import "./Hero.css"
import comingsoon from '../../Images/comingsoon.jpg'


const Landing = () =>{
	return(
		<main className='Landing'>
			<section className="Hero">
				<div className="Coming-soon"><img src={comingsoon} alt="coming soon" /></div>
				<div className="Hero-content">
					<h1 className="Hero-heading">Get ready to exchange excess airtime for money..</h1>
					<p className="Hero-subheading">in record time, and at the best rate in Nigeria, be it <span style={{backgroundColor:"yellow", padding:"0.5vh", borderRadius:"5px"}}>MTN</span>, <span style={{backgroundColor:"red", padding:"0.5vh", borderRadius:"5px"}}>Airtel</span>, or <span style={{backgroundColor:"green", padding:"0.5vh", borderRadius:"5px"}}>Glo</span>! </p>
					<button className="cta-button"><span style={{fontSize:"1.1rem"}}>Notify me</span></button>
				</div>								
			</section>

			<section className="Emailfield">
				<div>
					<EmailForm />
				</div>
			</section>
			
		</main>
	)
}


export default Landing;