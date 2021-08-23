import Layout from "../../components/layout";
import {useRouter} from "next/router";

export default function Profile() {
    const router = useRouter();

    return (
        <Layout>
            <p>Hello, my name is {router.query.profile} seo, I use next.js111</p>
        </Layout>
    )
}