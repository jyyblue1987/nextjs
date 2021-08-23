import Header from "./header";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header></Header>
        <div>{props.label}</div>
        {props.children}
    </div>
)

export default Layout;
