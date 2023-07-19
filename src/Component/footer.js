import React from "react";
import "../scss/footer.scss"
import { BiLogoFacebook,BiLogoTwitter,BiLogoInstagram,BiLogoLinkedinSquare } from "react-icons/bi";

export default function Footer(params) {

    


    return(
        <>
        <div className="footer" >
        <div class="container">
  	 	<div class="roww">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
               <div class="footer-col">
  	 			<h4>Contact us</h4>
  	 			<ul>
  	 				<li><a href="#">Phone no</a></li>
  	 				<li><a href="#">Address</a></li>
  	 				<li><a href="#">Landline</a></li>
                       <li><a href="#">gmail</a></li>

  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><BiLogoFacebook/></a>
  	 				<a href="#"><BiLogoTwitter/></a>
  	 				<a href="#"><BiLogoInstagram/></a>
  	 				<a href="#"><BiLogoLinkedinSquare/></a>

  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
        </div>

        </>
    );
}


