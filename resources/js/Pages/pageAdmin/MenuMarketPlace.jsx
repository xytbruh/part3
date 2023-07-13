import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];

import Content from "./Layouts/Content";
import { Head, Link } from "@inertiajs/react";
import Kategori from "./menuMarketPlace/Kategori";


export default function MenuMarketPlace(props) {
    console.log(props)

    return (
        <>
            <Head title="Menu MarketPlace" />
            <Tabs value="menu-market-place">
                <TabsHeader>
                    <Tab value="produk">Produk</Tab>
                    <Tab value="kategori">Kategori</Tab>
                    <Tab value="transaksi">Transaksi</Tab>
                </TabsHeader>
                <TabsBody>
                    <TabPanel value="produk">
                        <Card className="overflow-scroll h-full w-full">
                            <table className="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head) => (
                                            <th
                                                key={head}
                                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                            >
                                                <div
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    {head}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {TABLE_ROWS.map(
                                        ({ name, job, date }, index) => {
                                            const isLast =
                                                index === TABLE_ROWS.length - 1;
                                            const classes = isLast
                                                ? "p-4"
                                                : "p-4 border-b border-blue-gray-50";

                                            return (
                                                <tr key={name}>
                                                    <td className={classes}>
                                                        <div
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {name}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {job}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {date}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div
                                                            as="a"
                                                            href="#"
                                                            variant="small"
                                                            color="blue"
                                                            className="font-medium"
                                                        >
                                                            Edit
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )}
                                </tbody>
                            </table>
                        </Card>
                    </TabPanel>
                    <TabPanel value="kategori">
                        <Kategori category={props.category} />
                    </TabPanel>
                    <TabPanel value="transaksi">
                        <Card className="overflow-scroll h-full w-full">
                            <table className="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head) => (
                                            <th
                                                key={head}
                                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                            >
                                                <div
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    {head}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {TABLE_ROWS.map(
                                        ({ name, job, date }, index) => {
                                            const isLast =
                                                index === TABLE_ROWS.length - 1;
                                            const classes = isLast
                                                ? "p-4"
                                                : "p-4 border-b border-blue-gray-50";

                                            return (
                                                <tr key={name}>
                                                    <td className={classes}>
                                                        <div
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {name}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {job}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {date}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div
                                                            as="a"
                                                            href="#"
                                                            variant="small"
                                                            color="blue"
                                                            className="font-medium"
                                                        >
                                                            Edit
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )}
                                </tbody>
                            </table>
                        </Card>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </>
    );
}
MenuMarketPlace.layout = (page) => <Content children={page} />;
