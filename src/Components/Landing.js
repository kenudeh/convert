import image from '../Images/standing.jpg';


const Landing = () =>{
	return(
		<main>
			<section className="Herosection">
				<section className="herotext">
					<h2>Convert airtime to cash in minutes...</h2>
					<p>We'll buy your excess airtime at the best rate.</p>
					<p>Be it <span style={{backgroundColor:"yellow", padding:"0.5vh", borderRadius:"5px"}}>MTN</span>, <span style={{backgroundColor:"red", padding:"0.5vh", borderRadius:"5px"}}>Airtel</span>, or <span style={{backgroundColor:"green", padding:"0.5vh", borderRadius:"5px"}}>Glo</span>! </p>
					<button><span style={{fontSize:"1.1rem"}}>Get started</span></button>
				</section>
				<section className="heroimage" style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", 	backgroundSize: "cover", backgroundPosition: "center", padding:"5rem" }}>
				</section>
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