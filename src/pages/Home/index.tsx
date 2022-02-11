import { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

import {api} from "../../services/axios"

import { Header } from '../../components/header';

import Styles from "./home.module.scss"

interface Product {
  id: number,
  name: string,
  price: number,
  image: string
}

export const Home = (): JSX.Element => {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getResponse = async () => {

      const response = await api.get("/products")

      const data: Product[] = response.data
    
      setProducts(data)
    }

    getResponse()
    
  }, [])


  return (
    <>
      <Header />

      <div className={Styles.container}>
        <div className={Styles.content}>
          <h1 className={Styles.title}>Todos os produtos</h1>

          <div className={Styles.cardsContainer}>
            {products.map(product => (
              <Link to={`/product/${product.id}`} className={Styles.cards} key={product.id}>
                <img src={`images/${product.image}.jpg`} alt={product.name} />

                <span>
                  <h2>{product.name.toUpperCase()}</h2>
                  <p> $ {product.price}</p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}
