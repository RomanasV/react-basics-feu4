import { useState } from 'react';
import Container from '../../components/Container/Container';

const CarsPage = () => {
  const [car, setCar] = useState(null);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Pirmas variantas
    // const newCar = {
    //   brand: event.target.brand.value,
    //   model: event.target.model.value,
    // }

    // Antras variantas
    // const newCar = {
    //   brand: brand,
    //   model: model,
    // }

    // Trečias variantas
    // const newCar = {
    //   brand,
    //   model,
    // }

    // setCar(newCar);

    setCar({ brand, model });
  }

  const brandInputHandler = event => setBrand(event.target.value);
  const modelInputHandler = event => setModel(event.target.value);

  return (
    <Container>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="car-brand">Brand:</label>
          <input 
            type="text" 
            id="car-brand" 
            name="brand" 
            placeholder="Enter a brand" 
            value={brand} 
            onChange={brandInputHandler}
            />
        </div>
        <div className="form-control">
          <label htmlFor="car-model">Model:</label>
          <input 
            type="text" 
            id="car-model" 
            name="model" 
            placeholder="Enter a model"
            value={model}
            onChange={modelInputHandler} 
            />
        </div>

        <button type="submit">Submit</button>
      </form>
      {car && (
        <div className='car-item'>
          <h2 className='car-name'>{car.brand} {car.model}</h2>
        </div>
      )}
    </Container>
  )
}

export default CarsPage;