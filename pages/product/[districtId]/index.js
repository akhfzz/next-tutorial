import {useRouter} from 'next/router'

function DistrictDetail(){
    const router = useRouter()
    const district = router.query.districtId
    return(
        <h1>District in {district}</h1>
    )
}
export default DistrictDetail