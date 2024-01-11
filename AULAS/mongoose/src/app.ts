import mongoose from 'mongoose';
import { Car } from './models/Car';
import { Brand } from './models/Brand';

const uri = 'mongodb+srv://Hamil2708:0413262772621340@projeto01.w0uofae.mongodb.net/mongoose';

(async () => {
  try {
    await mongoose.connect(uri);
    console.log('Conectado ao Banco de Dados;');

    // CADASTRO / CREATE
    // await new Brand({
    //   title: 'VolkWagen',
    //   description: 'Fabrica Alemã de Automoveis'
    // }).save();

    // await new Car({
    //   model: 'Fusca',
    //   color: 'Preto',
    //   fuel: 'Gasolina',
    //   year: 1985,
    //   brand: '659b164d77b9874328a6da75'
    // }).save();


    // LISTAGEM
    const brands = await Brand.find();
    const cars = await Car.find().populate('brand');


    // ATUALIZAR
    // const updateCar = await Car.updateOne({ model: 'Chevrolet Camaro' }, {
    //   year: 2012,
    //   fuel: 'Gasolina'
    // });

    console.log(brands);
    console.log(cars);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  };
})();

// CONTINUAÇÃO :  29 / 11 / 2023.
