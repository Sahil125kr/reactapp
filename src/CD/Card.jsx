import React from "react";
import "pages/css/style.css";
// import "../../index.css";

const Card = ({ className, children }) => {
	return <article className={`card ${className}`}>{children}</article>;
};

export default Card;
