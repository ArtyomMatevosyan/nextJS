import {useRouter} from 'next/router'
import MainLayout from '../../components/MainLayout'

export default function Post({post}){
    // const router = useRouter()
    // console.log(router)
    return(
        <div>
            <MainLayout>
            {/* post is {router.query.id} */}
            <h1>{post}</h1>
            </MainLayout>
        </div>
    )
}