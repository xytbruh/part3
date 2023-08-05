import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

import { FaList, FaTools, FaUserCircle } from "react-icons/fa";
import Content from "../Layouts/Content";

export default function Pengaturan() {
    const data = [
        {
            label: "Dashboard",
            value: "dashboard",
            icon: <FaList />,
            desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Profile",
            value: "profile",
            icon: <FaUserCircle />,
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Settings",
            value: "settings",
            icon: <FaTools />,
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    return (
        <>
            <Tabs value="dashboard">
                <TabsHeader>
                    {data.map(({ label, value, icon }) => (
                        <Tab key={value} value={value}>
                            <div className="flex items-center gap-2">
                                {icon}
                                {label}
                            </div>
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </>
    );
}
Pengaturan.layout = (page) => <Content children={page} />;
