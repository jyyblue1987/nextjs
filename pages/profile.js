import Layout from "../components/layout";
import {useRouter} from "next/router";
import {useEffect} from 'react';

export default function Profile() {
    const router = useRouter();

    useEffect(() => {
        console.log("useEffect");
    }, []);

    return (
        <Layout>
            <p>Hello, my name is {router.query.profile} seo, I use next.js</p>
        </Layout>
    )
}