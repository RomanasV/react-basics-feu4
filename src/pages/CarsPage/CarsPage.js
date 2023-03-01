import { useState } from 'react';
import Container from '../../components/Container/Container';

const CarsPage = () => {
  const engineTypes = ['petrol', 'diesel', 'hybrid', 'electric'];
  const colors = ['black', 'red', 'blue', 'silver', 'white', 'special blue', 'other'];

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [engine, setEngine] = useState(engineTypes[0]);
  const [basePrice, setBasePrice] = useState(1000);
  const [mileage, setMileage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [color, setColor] = useState(colors[0]);
  const [image, setImage] = useState('');

  const [car, setCar] = useState(null);
  
  const optionElements = (data) => {
    const elements = data.map((item, index) => {
      const optionText = item[0].toUpperCase() + item.slice(1);
  
      return <option key={index} value={item}>{optionText}</option>;
    })

    return elements;
  };

  const getFinalPrice = (price) => {
    return price + getVAT(price);
  }

  const getVAT = (price) => {
    return price * 0.21;
  }

  const getEnginePrice = () => {
    if (engine === 'electric') {
      return 10000;
    }

    if (engine === 'hybrid') {
      return 7500;
    }

    if (engine === 'diesel') {
      return 5000;
    }

    return 0;;
  }

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

    setCar({ 
      brand,
      model,
      color,
      image,
      engine,
      mileage,
      price: {
        basePrice,
        enginePrice: getEnginePrice(),
        vat: getVAT(basePrice),
        finalPrice: getFinalPrice(basePrice),
      }
    });
  }

  const brandInputHandler = event => setBrand(event.target.value);
  const modelInputHandler = event => setModel(event.target.value);
  const engineSelectHandler = event => setEngine(event.target.value);
  const basePriceHandler = event => setBasePrice(Number(event.target.value));
  const mileageHandler = event => setMileage(Number(event.target.value));
  
  const colorSelectHandler = event => {
    const selectedElementColor = event.target.value;
    setSelectedColor(selectedElementColor);

    if (selectedElementColor !== 'other') {
      setColor(selectedElementColor);
    }
  };
  
  const otherColorHandler = event => setColor(event.target.value);
  const imageHandler = event => setImage(event.target.value);

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

        {engineTypes && engineTypes.length > 0 && (
          <div className="form-control">
            <label htmlFor="car-engine">Engine:</label>
            
            <select id="car-engine" name="engine" value={engine} onChange={engineSelectHandler}>
              {/* <option disabled value="">Choose an engine</option> */}
              {optionElements(engineTypes)}
            </select>
          </div>
        )}

        <div className="form-control">
          <label htmlFor="car-base-price">Base price:</label>
          <input 
            type="number" 
            id="car-base-price" 
            name="base-price" 
            placeholder="Enter a base price" 
            min="0" 
            step="50"
            value={basePrice}
            onChange={basePriceHandler} 
            />
        </div>

        <div className="form-control">
          <label htmlFor="car-mileage">Mileage:</label>
          <input 
            type="number" 
            id="car-mileage" 
            name="mileage" 
            placeholder="Enter a mileage" 
            min="0" 
            step="500"
            value={mileage}
            onChange={mileageHandler} 
            />
        </div>

        {colors && colors.length > 0 && (
          <div className="form-control">
            <label htmlFor="car-color">Color:</label>
            
            <select id="car-color" name="color" value={selectedColor} onChange={colorSelectHandler}>
              {optionElements(colors)}
            </select>
          </div>
        )}

        {selectedColor === 'other' && (
          <div className="form-control">
            <label htmlFor="other-car-color">Other color:</label>
            <input 
              type="text" 
              id="other-car-color" 
              name="other-color" 
              placeholder="Enter a color" 
              onChange={otherColorHandler}
              />
          </div>
        )}

          <div className="form-control">
            <label htmlFor="car-image">Car image:</label>
            <input 
              type="url" 
              id="car-image" 
              name="image" 
              placeholder="Enter an image url" 
              onChange={imageHandler}
              value={image}
              />
          </div>
        
        {brand && model && engine && basePrice && mileage && color && image && <button type="submit">Submit</button>}
      </form>

      {car && (
        <div className='car-item'>
          <h2 className='car-name'>{car.brand} {car.model}</h2>
          <img src={car.image} alt={`${car.brand} ${car.model}`} />
          <h3>Car's info:</h3>
          <ul>
            <li>Color: {car.color}</li>
            <li>Engine type: {car.engine}</li>
            <li>Mileage: {car.mileage}</li>
          </ul>

          <h3>Price:</h3>
          <ul>
            <li>Base Price: {car.price.basePrice}</li>
            <li>Engine Price: {car.price.enginePrice}</li>
          </ul>

          <h3>Discounts:</h3>
          <ul>
            <li>Mileage: </li>
            <li>Discount: </li>
          </ul>

          <h5>{getFinalPrice(car.price.basePrice)}€ su PVM</h5>
        </div>
      )}
    </Container>
  )
}

export default CarsPage;