import React from "react";
// import "../css/style.css";

import "./gallery.css";
import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "../../homeComponents/Header";

import Navbar from "homeComponents/Navbar";
import Footer from "homeComponents/Footer";

function Gallery() {
	const galleryLength = 15;
	const images = [];
	for (let i = 1; i <= galleryLength; i++) {
		images.push(require(`../../images/gallery${i}.jpg`));
	}
	// console.log(images); //Array of image/

	return (
		<>
		<Navbar/>
			<Header title="Our Gallery" image={HeaderImage}>

			</Header>
			<section className="gallery">
				<div className="container gallery__container">
					{images.map((image, index) => {
						return (
							<article key={index}>
								<img src={image} alt={`GalleryImage ${index + 1}`} />
							</article>
						);
					})}
				</div>
			</section>
	    <Footer/>
		</>

	);
}

export default Gallery;
