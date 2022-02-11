import {useParams} from "react-router-dom"

export const Product = (): JSX.Element => {

    const {id} = useParams()

    console.log(id)

    return(
        <div>{id}</div>
    )
}