import React from "react";
import "../scss/footer.scss"
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import { NavLink } from "react-router-dom";


export default function Footer(params) {




	return (
		<>
			<div className="footer" >
				<div class="container">
					<div class="roww">
						<div class="footer-col">
							<h4>company</h4>
							<ul>

								<li>about us</li>
								<li>our services</li>
								<li>privacy policy</li>
								<li>affiliate program</li>



							</ul>
						</div>
						<div class="footer-col">
							<h4>Contact us</h4>
							<ul>

								<li>Phone</li>
								<li>Address</li>
								<li>Landline</li>
								<li>gmail</li>




							</ul>
						</div>
						<div class="footer-col">
							<h4>get help</h4>
							<ul>

								<li>FAQ</li>
								<li>returns</li>
								<li>order status</li>
								<li>payment options</li>





							</ul>
						</div>

						<div class="footer-col">
							<h4>follow us</h4>
							<div class="social-links">

								<NavLink className="a" to="/"><BiLogoFacebook /></NavLink>
								<NavLink className="a" to="/"><BiLogoTwitter /></NavLink>
								<NavLink className="a" to="/"><BiLogoInstagram /></NavLink>
								<NavLink className="a" to="/"><BiLogoLinkedinSquare /></NavLink>

							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}


