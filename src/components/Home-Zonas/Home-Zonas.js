import React from "react";
import "./Home-Zonas.css";
import clases1 from "./clases.jpg";

function ImageTextBox() {
	return (
		<div className="image-text-box-zonas">
			<div className="text-container-zonas">
				<h2 className="titleZonas">ZONAS</h2>
				<div>
					<p className="txtZonas">
						Buscamos modelos, participantes en desfiles y fotógrafos apasionados
						por la moda masculina. Si tienes estilo, confianza y talento, únete
						a nuestra pasarela y muestra nuestra increíble lencería.
					</p>
					<p className="txtZonas">
						Completa nuestro formulario de contacto y envíanos tus detalles para
						tener la oportunidad de formar parte de una experiencia emocionante
						en la moda masculina. ¡Esperamos conocerte pronto!
					</p>
				</div>{" "}
				<button className="btnZonas">Conocé más</button>
			</div>
			<div className="image-container">
				<img src={clases1} alt="Imagen" />
			</div>
		</div>
	);
}

export default ImageTextBox;
