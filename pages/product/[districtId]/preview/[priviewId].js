import { useRouter } from "next/router"

export default function PriviewDetail(){
    const router = useRouter()
    const {districtId, priviewId} = router.query
    return(
        <>
            <h1>district {districtId} with product {priviewId}</h1>
        </>
    )
}