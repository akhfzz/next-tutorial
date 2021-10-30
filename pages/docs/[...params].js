import { useRouter } from "next/router"

export default function Doc(){
    const router = useRouter()
    const {params} = router.query
    console.log(params)
    return(
        <>
            <h1>Docs {params[0]} id {params[1]} product {params[2]} id {params[3]}</h1>
        </>
    )
}