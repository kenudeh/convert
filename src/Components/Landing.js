import image from '../Images/standing.jpg';
import React from "react";
import EmailForm from "./EmailForm"


const Landing = () =>{
	return(
		<main>
			<section className="Hero">
				<div className="Hero-content">
					<h1 className="Hero-heading">Convert airtime to cash in minutes!</h1>
					<p className="Hero-subheading">We'll buy your excess airtime at the best rate. Be it <span style={{backgroundColor:"yellow", padding:"0.5vh", borderRadius:"5px"}}>MTN</span>, <span style={{backgroundColor:"red", padding:"0.5vh", borderRadius:"5px"}}>Airtel</span>, or <span style={{backgroundColor:"green", padding:"0.5vh", borderRadius:"5px"}}>Glo</span>! </p>
					<button className="cta-button"><span style={{fontSize:"1.1rem"}}>Get started</span></button>
				</div>								
			</section>

			<section className="Emailfield">
				<div>
					<p>Enter your email below to get notified when we launch!</p>
					<EmailForm />
				</div>
			</section>
			
			<section className="Howitworks">
				<h3>How it works</h3>
				<section>
					<p>1</p>
					<p>Register/ Sign up for a Convert account</p>
				</section>
				<section>
					<p>2</p>
					<p>Transfer your airtime to us</p>
				</section>
				<section>
					<p>3</p>
					<p>Get paid!</p>
				</section>
			</section>
			
		</main>
	)
}


export default Landing;