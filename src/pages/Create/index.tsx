import { Header } from '../../components/header'
import Styles from './create.module.scss'

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from '../../components/button';
import { useState } from 'react';

interface Inputs {
    name: string;
    description: string;
    price: string;
    image: FileList;
}

export const CreateProduct = (): JSX.Element => {

    const {register, handleSubmit} = useForm<Inputs>()
    const [image, setImage] = useState("")
    let profile

    const onSubmit: SubmitHandler<Inputs> = (data) => {
       console.log(data)

       setImage(URL.createObjectURL(data.image[0]))
    }
    
    return(
        <>
            <Header />
        
            <div className={Styles.container}>
                <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={Styles.image}>
                        <p>Imagem do Produto</p>
                        <label htmlFor="image">
                            <img src="/images/cross.png" alt="Adicionar imagem do produto" />
                        </label>
                        <input type="file" id="image" accept="image/jpg, image/jpeg, image/png" {...register("image")} />
                    </div>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" {...register("name", {required: true})} />
                    </div>
                    <div>
                        <label htmlFor="name">Descrição</label>
                        <input type="text" {...register("description", {required: true})} />
                    </div>
                    <div>
                        <label htmlFor="name">Preço</label>
                        <input type="text" {...register("price", {required: true})} />
                    </div>
                    <Button type="submit">Adicionar</Button>
                </form>
            </div>

            <img src={`/${profile}`} alt="image" />
        </>
    )
}