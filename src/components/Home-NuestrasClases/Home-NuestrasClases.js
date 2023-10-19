import React from "react";
import "./Home-NuestrasClases.css";
import clases1 from "./clases.jpg";

function ImageTextBox() {
	return (
		<div className="image-text-box-clases">
			<div className="image-container">
				<img className="imgClases" src={clases1} alt="Imagen" />
			</div>
			<div className="text-container-clases">
				<h2 className="titleClases">NUESTRAS CLASES</h2>
				<div>
					<p className="txtClases">
						Tenemos muchas clases para vos. ¡Anímate a probarlas todas!
					</p>
					<p className="txtClases">
						Nuestro equipo de profesores te espera con ganas de explorar tu
						movimiento y vivir momentos únicos.
					</p>
				</div>{" "}
				<button className="btnClases">Conocé más</button>
			</div>
		</div>
	);
}

export default ImageTextBox;
