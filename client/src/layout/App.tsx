import { useEffect, useState } from "react"
import { Product } from "../models/product";
import Catalog from "../features/catalog/Catalog";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {

  const [products, setProducts] = useState<Product []>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/Product')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Print the JSON data to the console
        setProducts(data);
      })
  }, [])


  function addProduct() {
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: 'Anmol',
        description: 'sexy product',
        pictureUrl: 'http://picsum.photos/200'
      }])
    }

  return (
    <div className='app'>
      <h1>
        E-Commerce
      </h1>
      <Catalog products={products} addProduct={addProduct}/>
    </div>
  )
}

export default App
