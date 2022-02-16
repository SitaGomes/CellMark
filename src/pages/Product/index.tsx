import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

import { Header } from "../../components/header"
import { api } from "../../services/axios"

import {Button} from "../../components/button"

import Styles from "./product.module.scss"

interface Product {
    id: number,
    name: string,
    price: number,
    image: string,
    information: {
        description: string,
        startCount: number,
        stockCount: number,
        reviewCount: number,
        comments: Array<string>
    }
}

export const Product = (): JSX.Element => {

    const {id} = useParams()
    const [product, setProduct] = useState({} as Product)
    //const [noStock] = useState(product.information?.stockCount <= 2)
    const [noStock, setNoStock] = useState(false)
    
    useEffect(() => {
        const getResponse = async () => {
            const response = await api("/products/" + id)

            const data: Product = response.data
            setProduct(data)
        }
        
        getResponse()
    }, [])

    useEffect(() => {
        setNoStock(product.information?.stockCount <= 2)
    }, [product])


    return(
        <>
            <Header />

            
            <div className={Styles.container}>

                <div className={Styles.content}>
                    {/* Image */}
                    <img src={`/images/${product.image}.jpg`} alt={`${product.name}`} />

                    {/* Content */}
                    <div className={Styles.contentData}>
                        <div>
                            <h1>{product.name?.toUpperCase()}</h1>
                            <span>
                                <img src="/images/stars.png" alt="Avaliações do Produto" />
                                <span>{product.information?.reviewCount} Avaliações</span>
                            </span>
                            <h3>{product.information?.description}</h3>
                        </div>
                        <div className={Styles.price}>
                            <span>
                                {noStock
                                    ? ( <p className={Styles.false}>*Sem Stock</p> )
                                    : ( <p className={Styles.true}>*Em Stock</p> )
                                }
                                <p className={Styles.price}>$ {product.price}</p>
                            </span>
                            {noStock
                                ? ( <Button regular>COMPRAR</Button> )
                                : ( <Button>COMPRAR</Button> )
                            }
                        </div>
                    </div>

                </div>

                {/* Comments */}
                <div className={Styles.comments}>
                    <img src="/images/background.png" alt="background" />
                </div>

            </div>


        </>
    )
}