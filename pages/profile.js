import Layout from "../components/layout";
import {useRouter} from "next/router";
import {useEffect} from 'react';

const Profile = (props) => {
    const router = useRouter();
    useEffect(() => {
        console.log("useEffect", props);
        fetch("/api/hello");
    }, []);

    return (
        <Layout>
            <p>Hello, my name is {router.query.profile} seo, I use next.js {props.data1.name}</p>
        </Layout>
    )
}


Profile.getInitialProps = async function() {    
    let res = await fetch("https://nextjs-ten-gamma-29.vercel.app/api/hello");
    let data = await res.json();
    return {
        data1: data
    };
};

export default Profile;