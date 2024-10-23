import axios from "axios";
import { useState } from "react";


export default function Example() {
  const [buscador, setbuscador] = useState("");
  const [productos, setproductos]= useState([])

  function handleSubmit(event){
    event.preventDefault()
    axios.get('http://localhost:3030/api/productos?search=' + buscador)
    .then(res => {
      const productosData = res.data;
      
      setproductos(productosData);
    }).catch(err =>{
      console.log(err)
    } )
  }
  
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">TAXFREE</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          ¡Encuentra el precio real!
          Nuestra página te ayuda a descubrir el verdadero costo de los productos. Buscamos precios sin impuestos para que sepas exactamente cuánto pagarás al final. ¡Olvídate de las sorpresas en la caja!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Busque aqui su producto</h3>
            <form className="bg-gray-200 block w-full rounded-md px-2 py-1.5 text-black font-semibold shadow-sm  placeholder:text-gray-400">
              <input type="text" placeholder="buscador" 
              onChange={e => setbuscador(e.target.value)}
              />
              <button type="submit" className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={handleSubmit}>buscar</button>
            </form>
            
            <div className="flex font-semibold p-4 shadow-md rounded-lg overflow-hidden">
              {
                productos.map((producto, index) => (
                  <div key={index} className="">
                    <p>{producto.title}</p>
                    <p>{producto.price}</p>
                    <img src={producto.image} className="w-full object-cover" />        
                    
                  
                  </div>
                    
                ))
              }
            </div>
            

          </div>   
          {/* <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">mercado libre</h3>
            
          </div>        */}
        </div>
      </div>
    </div>
  )
}
