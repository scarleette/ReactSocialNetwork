import React from 'react';
import {Carousel} from 'react-materialize';

const Carrusel = () => {
	return(
		<Carousel options={{ fullWidth: true }} images={[
			"https://www.losreplicantes.com/images/articulos/1000/1899/top.jpg",
			'https://lorempixel.com/800/400/food/3',
			'https://lorempixel.com/800/400/food/4',
			'https://lorempixel.com/800/400/food/5'
		]} />
	)
};
    
export default Carrusel;