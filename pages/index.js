import Layout from "../components/layout";
import Link from "next/link";

const ProfileLink = props => (
    <div>
        <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
            <a>Go to {props.profile} profile</a>
        </Link>
    </div>
)

const Index = (props) => (
    <Layout>        
        <h1>Friends List {props.profiles[0]}</h1>

        {
            props.profiles.map((profile, index) => (
                <ProfileLink key={index} profile={profile} />
            ))
        }
        
    </Layout>
)

Index.getInitialProps = async function() {    
    return {
        profiles: ['Jane11' , 'Mic']
    };
};

export default Index;