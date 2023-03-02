import { useState } from 'react';
import Container from '../../components/Container/Container';

const CarsPage = () => {
  const engineTypes = ['petrol', 'diesel', 'hybrid', 'electric'];
  const colors = ['black', 'red', 'blue', 'silver', 'white', 'special blue', 'other'];

  const carsData = [
    {
      brand: 'Brandas',
      model: 'Modelis',
      color: 'black',
      image: 'https://i.pinimg.com/originals/73/ee/a0/73eea0f3f5402177fafdb1145039cce3.jpg',
      engine: 'diesel',
      mileage: 5000,
      discount: 10,
      price: {
        basePrice: 10000,
        enginePrice: 0,
        colorPrice: 3000,
        mileageDiscount: 10,
        manualDiscount: 0,
        vat: 1000,
        finalPrice: 100000,
      }
    },
    {
      brand: 'Brandas 2',
      model: 'Modelis 2',
      color: 'black',
      image: 'https://i.pinimg.com/originals/73/ee/a0/73eea0f3f5402177fafdb1145039cce3.jpg',
      engine: 'diesel',
      mileage: 5000,
      discount: 10,
      price: {
        basePrice: 10000,
        enginePrice: 0,
        colorPrice: 3000,
        mileageDiscount: 10,
        manualDiscount: 0,
        vat: 1000,
        finalPrice: 100000,
      }
    }
  ];

  let newCar = {
    brand: 'Brandas 3',
    model: 'Modelis 3',
    color: 'black',
    image: 'https://i.pinimg.com/originals/73/ee/a0/73eea0f3f5402177fafdb1145039cce3.jpg',
    engine: 'diesel',
    mileage: 5000,
    discount: 10,
    price: {
      basePrice: 10000,
      enginePrice: 0,
      colorPrice: 3000,
      mileageDiscount: 10,
      manualDiscount: 0,
      vat: 1000,
      finalPrice: 100000,
    }
  }

  const initialCars = [...carsData, newCar];

  const [cars, setCars] = useState(initialCars);
  const [brand, setBrand] = useState('Brandas');
  const [model, setModel] = useState('Modelis');
  const [engine, setEngine] = useState(engineTypes[0]);
  const [basePrice, setBasePrice] = useState(1000);
  const [mileage, setMileage] = useState(500);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [color, setColor] = useState(colors[0]);
  const [image, setImage] = useState('https://i.pinimg.com/originals/73/ee/a0/73eea0f3f5402177fafdb1145039cce3.jpg');
  const [discount, setDiscount] = useState(0);

  const [car, setCar] = useState(null);
  
  const optionElements = (data) => {
    const elements = data.map((item, index) => {
      const optionText = item[0].toUpperCase() + item.slice(1);
  
      return <option key={index} value={item}>{optionText}</option>;
    })

    return elements;
  };

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

    return 0;
  }

  const getColorPrice = () => {
    if (color === 'special blue') {
      return 500;
    }

    if (selectedColor === 'other') {
      return 3000;
    }

    return 0; 
  }

  const getMileageDiscount = () => {
    if (mileage > 400000) {
      return basePrice * 0.5;
    }

    if (mileage > 100000) {
      return basePrice * 0.3;
    }

    if (mileage > 50000) {
      return basePrice * 0.2;
    }

    if (mileage > 20000) {
      return basePrice * 0.15;
    }

    if (mileage > 0) {
      return basePrice * 0.1;
    }

    return 0;
  }

  const getManualDiscount = () => {
    return basePrice / 100 * discount;
  }

  const getAllPrice = () => basePrice + getEnginePrice() + getColorPrice();
  const getAllDiscount = () => getMileageDiscount() + getManualDiscount();
  const getTotalPrice = () => getAllPrice() - getAllDiscount();
  const getVAT = () => getTotalPrice() * 0.21;
  const getFinalPrice = () => getTotalPrice() + getVAT();

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

    // setCar({ 
    //   brand,
    //   model,
    //   color,
    //   image,
    //   engine,
    //   mileage,
    //   discount,
    //   price: {
    //     basePrice,
    //     enginePrice: getEnginePrice(),
    //     colorPrice: getColorPrice(),
    //     mileageDiscount: getMileageDiscount(),
    //     manualDiscount: getManualDiscount(),
    //     vat: getVAT(),
    //     finalPrice: getFinalPrice(),
    //   }
    // });

    const newCar = { 
      brand,
      model,
      color,
      image,
      engine,
      mileage,
      discount,
      price: {
        basePrice,
        enginePrice: getEnginePrice(),
        colorPrice: getColorPrice(),
        mileageDiscount: getMileageDiscount(),
        manualDiscount: getManualDiscount(),
        vat: getVAT(),
        finalPrice: getFinalPrice(),
      }
    }

    // setCars((prevState) => {
    //   let newState = [...prevState, newCar];
    //   return newState
    // })

    setCars(prevState => [newCar, ...prevState]);
  }

  const brandInputHandler = event => {
    setBrand(event.target.value)
  };
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
  const discountHandler = event => setDiscount(Number(event.target.value));

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
        

          <div className="form-control">
            <label htmlFor="car-discount">Discount:</label>
            <input 
              type="number" 
              id="car-discount" 
              name="discount" 
              placeholder="Enter a discount" 
              min="0" 
              step="0.1"
              max="100"
              value={discount}
              onChange={discountHandler} 
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
            <li>Base Price: {car.price.basePrice}€</li>
            <li>Engine Price: {car.price.enginePrice}€</li>
            <li>Color Price: {car.price.colorPrice}€</li>
            <li><strong>Price: {getAllPrice()}€</strong></li>
          </ul>

          <h3>Discounts:</h3>
          <ul>
            <li>Mileage: {car.price.mileageDiscount}€</li>
            <li>Manual Discount: {car.price.manualDiscount}€</li>
            <li><strong>Discount: {getAllDiscount()}€</strong></li>
          </ul>
          
          <h3>Total price:</h3>
          <ul>
            <li>Price: {getTotalPrice()}€</li>
            <li>VAT: {getVAT()}€</li>
            <li><strong>Final Price: {getFinalPrice()}€ VAT included</strong></li>
          </ul>

        </div>
      )}


      {cars && cars.length > 0 && cars.map((car, index) => (
        <div key={index} className='car-item'>
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
            <li>Base Price: {car.price.basePrice}€</li>
            <li>Engine Price: {car.price.enginePrice}€</li>
            <li>Color Price: {car.price.colorPrice}€</li>
            {/* <li><strong>Price: {getAllPrice()}€</strong></li> */}
          </ul>

          <h3>Discounts:</h3>
          <ul>
            <li>Mileage: {car.price.mileageDiscount}€</li>
            <li>Manual Discount: {car.price.manualDiscount}€</li>
            {/* <li><strong>Discount: {getAllDiscount()}€</strong></li> */}
          </ul>
          
          <h3>Total price:</h3>
          <ul>
            {/* <li>Price: {getTotalPrice()}€</li> */}
            {/* <li>VAT: {getVAT()}€</li> */}
            {/* <li><strong>Final Price: {getFinalPrice()}€ VAT included</strong></li> */}
          </ul>

        </div>
      ))}
    </Container>
  )
}

export default CarsPage;