import {useRouter} from "next/router";


const Product = () => {

    const {query} = useRouter();
    return (
        <h1>{query.slug}</h1>
    )
}

export default Product;