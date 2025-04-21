const products = {
  llaveros: {
    category: 'Llaveros',
    image: `${process.env.PUBLIC_URL}/images/llaveros.png`,
    items: [
      { id: 1, name: '"A" a blanco y negro', price: 10000, image: `${process.env.PUBLIC_URL}/images/llaveros/llavero6.jpg`, description: 'Llavero personalizado a blanco y negro de manera horizontal' },
      { id: 2, name: '"Llavero guitarra"', price: 10000, image: `${process.env.PUBLIC_URL}/images/llaveros/llavero2.jpg`, description: 'Llavero guitarra con iniciales' },
      { id: 3, name: '"I" a blanco y negro', price: 10000, image: `${process.env.PUBLIC_URL}/images/llaveros/llavero3.jpg`, description: 'Llavero personalizado a blanco y negro de manera horizontal' },
      { id: 4, name: '"M" amarilla con purpurina', price: 10000, image: `${process.env.PUBLIC_URL}/images/llaveros/llavero5.jpg`, description: 'Letra con resina amarilla y purpurina' }
    ]
  },
  cuadros: {
    category: 'Cuadros',
    image: `${process.env.PUBLIC_URL}/images/cuadros/cuadros.jpg`,
    items: [
      { id: 1, name: 'GOKU', price: 25000, image: `${process.env.PUBLIC_URL}/images/cuadros/cuadro1.jpg`, overlay: `${process.env.PUBLIC_URL}/images/cuadros/cuadrosFondoTransparente/cuadro1.png`, description: 'Cuadro decorativo en madera mdf 3mm con medida maxima de 40cm' },
      { id: 2, name: 'NARUTO', price: 25000, image: `${process.env.PUBLIC_URL}/images/cuadros/cuadro2.jpg`, overlay: `${process.env.PUBLIC_URL}/images/cuadros/cuadrosFondoTransparente/cuadro2.png`, description: 'Cuadro decorativo en madera mdf 3mm con medida maxima de 40cm' },
      { id: 3, name: 'Cuadro Arte Minimalista', price: 25000, image: `${process.env.PUBLIC_URL}/images/cuadros/cuadro3.jpg`, overlay: `${process.env.PUBLIC_URL}/images/cuadros/cuadrosFondoTransparente/cuadro3.png`, description: 'Cuadro decorativo en madera mdf 3mm con medida maxima de 40cm' },
      { id: 4, name: 'RICK', price: 25000, image: `${process.env.PUBLIC_URL}/images/cuadros/cuadro4.jpg`, overlay: `${process.env.PUBLIC_URL}/images/cuadros/cuadrosFondoTransparente/cuadro4.png`, description: 'Cuadro decorativo en madera mdf 3mm con medida maxima de 40cm' },
      { id: 5, name: 'RICK', price: 25000, image: `${process.env.PUBLIC_URL}/images/cuadros/cuadro5.jpg`, overlay: `${process.env.PUBLIC_URL}/images/cuadros/cuadrosFondoTransparente/cuadro5.png`, description: 'Cuadro decorativo en madera mdf 3mm con medida maxima de 40cm' },
      { id: 6, name: 'RICK', price: 25000, image: `${process.env.PUBLIC_URL}/images/cuadros/cuadro6.jpg`, overlay: `${process.env.PUBLIC_URL}/images/cuadros/cuadrosFondoTransparente/cuadro6.png`, description: 'Cuadro decorativo en madera mdf 3mm con medida maxima de 40cm' },
      { id: 7, name: 'RICK', price: 25000, image: `${process.env.PUBLIC_URL}/images/cuadros/cuadro7.jpg`, overlay: `${process.env.PUBLIC_URL}/images/cuadros/cuadrosFondoTransparente/cuadro7.png`, description: 'Cuadro decorativo en madera mdf 3mm con medida maxima de 40cm' },
      { id: 8, name: 'RICK', price: 25000, image: `${process.env.PUBLIC_URL}/images/cuadros/cuadro8.jpg`, overlay: `${process.env.PUBLIC_URL}/images/cuadros/cuadrosFondoTransparente/cuadro8.png`, description: 'Cuadro decorativo en madera mdf 3mm con medida maxima de 40cm' }
    ]
  },
  cajoneras: {
    category: 'Cajoneras',
    image: `${process.env.PUBLIC_URL}/images/cajoneras/cajonera1.jpg`,
    items: [
      { id: 1, name: 'Cajonera Madera Pequeña', price: 129.99, image: `${process.env.PUBLIC_URL}/images/cajonera1.jpg`, description: 'Cajonera de madera pequeña y funcional' },
      { id: 2, name: 'Cajonera Moderna 3 Niveles', price: 199.99, image: `${process.env.PUBLIC_URL}/images/cajonera2.jpg`, description: 'Cajonera moderna de 3 niveles' },
      { id: 3, name: 'Cajonera Vintage Personalizada', price: 169.99, image: `${process.env.PUBLIC_URL}/images/cajonera3.jpg`, description: 'Cajonera vintage con personalización' }
    ]
  }
};

export default products;
