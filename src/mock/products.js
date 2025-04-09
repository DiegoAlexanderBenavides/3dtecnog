const products = {
  llaveros: {
    category: 'Llaveros',
    image: '/images/llaveros.png',
    items: [
      { id: 1, name: 'Llavero Personalizado Nombre', price: 15.99, image: '/images/llavero1.jpg', description: 'Llavero personalizado con nombre grabado' },
      { id: 2, name: 'Llavero Foto Familiar', price: 19.99, image: '/images/llavero2.jpg', description: 'Llavero con foto familiar impresa' },
      { id: 3, name: 'Llavero Metálico Grabado', price: 12.99, image: '/images/llavero3.jpg', description: 'Llavero metálico con grabado láser' }
    ]
  },
  cuadros: {
    category: 'Cuadros',
    image: '/images/cuadros-category.jpg',
    items: [
      { id: 1, name: 'GOKU', price: 89.99, image: '/images/cuadros/cuadro1.jpg', description: 'Cuadro decorativo en madera mdf 3mm' },
      { id: 2, name: 'NARUTO', price: 79.99, image: '/images/cuadros/cuadro2.jpg', description: 'Cuadro decorativo en madera mdf 3mm' },
      { id: 3, name: 'Cuadro Arte Minimalista', price: 59.99, image: '/images/cuadros/cuadro3.jpg', description: 'Cuadro decorativo en madera mdf 3mm' },
      { id: 4, name: 'RICK', price: 59.99, image: '/images/cuadros/cuadro5.jpg', description: 'Cuadro decorativo en madera mdf 3mm' }
    
    ]
  },
  cajoneras: {
    category: 'Cajoneras',
    image: '/images/cajoneras-category.jpg',
    items: [
      { id: 1, name: 'Cajonera Madera Pequeña', price: 129.99, image: '/images/cajonera1.jpg', description: 'Cajonera de madera pequeña y funcional' },
      { id: 2, name: 'Cajonera Moderna 3 Niveles', price: 199.99, image: '/images/cajonera2.jpg', description: 'Cajonera moderna de 3 niveles' },
      { id: 3, name: 'Cajonera Vintage Personalizada', price: 169.99, image: '/images/cajonera3.jpg', description: 'Cajonera vintage con personalización' }
    ]
  }
};

export default products;