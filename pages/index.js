import Link from 'next/link'
import {useRouter} from 'next/router'

function Home(){
    const router = useRouter()

    const handleClick = () =>{
        console.log('placing your order')
        router.replace('/product')
    }
    return(
        <>
            <h5>Homepage</h5>
            <Link href='/product/3/preview/2'>
                <a>product preview detail</a>
            </Link><br/>
            <Link href='/blog'>
                <a>blog</a>
            </Link><br/>
            <Link href='/product'>
                <a>product</a>
            </Link><br/>
            <Link href='/product/2'>
                <a>Product detail</a>
            </Link><br/>
            <Link href='/product/first'>
                <a>Product firstly</a>
            </Link>
            <button onClick={handleClick}>
                Please check
            </button>
        </>
    )
}
export default Home;