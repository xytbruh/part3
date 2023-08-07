import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Content from "../Layouts/Content";
import IklanAtas from "../components/IklanAtas";
import IklanBawah from "../components/IklanBawah";
import IklanTengah from "../components/IklanTengah";

export default function BannerIklan({ banner }) {
    console.log(banner);
   
    return (
        <Tabs value="iklan-atas">
            <TabsHeader>
                <Tab value="iklan-atas">Iklan Atas</Tab>
                <Tab value="iklan-tengah">Iklan Tengah</Tab>
                <Tab value="iklan-bawah">Iklan Bawah</Tab>
            </TabsHeader>
            <TabsBody>
                <TabPanel value="iklan-atas">
                        <IklanAtas  data={banner} />
                    
                </TabPanel>
                <TabPanel value="iklan-tengah">
                        <IklanTengah  data={banner} />
                
                </TabPanel>
                <TabPanel value="iklan-bawah">
                        <IklanBawah  data={banner} />
                </TabPanel>
            </TabsBody>
        </Tabs>
    );
}
BannerIklan.layout = (page) => <Content children={page} />;
