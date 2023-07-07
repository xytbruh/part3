import Content from "./Layouts/Content";

export default function Dashboard(props) {
    return (
        <Content user={props.auth.user}>
            <div>Ini Dashboard</div>
        </Content>
    );
}
