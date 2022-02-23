import { Header } from '../../components/header'
import Styles from './create.module.scss'

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from '../../components/button';

interface Inputs {
    name: string;
    description: string;
    price: string;
}

export const CreateProduct = (): JSX.Element => {

    const {register, handleSubmit} = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
       console.log(data)
    }
    
    return(
        <>
            <Header />
        
            <div className={Styles.container}>
                <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        </>
    )
}