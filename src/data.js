var fs = require('fs');
let rawdata = fs.readFile('products.json');
const data = JSON.parse(rawdata);
export default data;

//console.log(typeof(data))


// const data = {
//     Products:[
//     {
//         image: './IMG/Lançamentos/casaco-nike.jpg',
//         name: 'Camiseta Nike',
//         genre: 'Unissex'
//     },
//     {
//         image: './IMG/Carousel.jpg',
//         name: 'Camiseta Nike',
//         genre: 'Unissex'
//     },
        
//     {
//         image: './IMG/Carousel.jpg',
//         name: 'Camiseta Nike',
//         genre: 'Unissex'
//     },
        
//     {
//         image: './IMG/Carousel.jpg',
//         name: 'Camiseta Nike',
//         genre: 'Unissex'
//     },
        
        
//     {
//         image: './IMG/Carousel.jpg',
//         name: 'Cortavento Nike',
//         genre: 'Unissex'
//     },

//     {
//         image: './IMG/Carousel.jpg',
//         name: 'Camiseta Nike',
//         genre: 'Feminino'
//     },
//     {
//         image: './IMG/Carousel.jpg',
//         name: 'Camiseta Nike',
//         genre: 'Feminino'
//     },
//     {
//         image: './IMG/Carousel.jpg',
//         name: 'Camiseta Nike',
//         genre: 'Feminino'
//     },
//     {
//         image: './IMG/Carousel.jpg',
//         name: 'Camiseta Nike',
//         genre: 'Feminino'
//     },
//     {
//         image: './IMG/Carousel.jpg',
//         name: 'Camiseta Nike',
//         genre: 'Masculino'
//     },
//     {
//         image: './IMG/Carousel.jpg',
//         name: 'Camiseta Nike',
//         genre: 'Masculino'
//     },
// ]}