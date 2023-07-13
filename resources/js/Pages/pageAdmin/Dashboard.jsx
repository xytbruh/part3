import { Head } from "@inertiajs/react";
import Content from "./Layouts/Content";

export default function Dashboard(props) {
    console.log(props);
    return (
        <>
            <Head title="Dashboard" />
            <div>Ini Dashboard</div>
        </>
    );
}
Dashboard.layout = (page) => <Content children={page} />;
