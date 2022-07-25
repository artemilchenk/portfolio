import Head from 'next/head'
import {SideBar} from "../components/sideBar";
import {useState} from "react";
import {Header} from "../components/Header";
import {AboutMe} from "../components/AboutMe";
import {Footer} from "../components/Footer";
import {ProjectsComponent} from "../components/ProjectsComponent";
import {MapComponent} from "../components/Map";


export default function Home() {
    const [sideBar, setSideBar] = useState(false)
    const [sideBarPre, setSideBarPre] = useState(false)

    return (
        <div className={'overflow-hidden'}>

            <Head>
                <title>artemilchenko</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&display=swap"
                      rel="stylesheet"/>
            </Head>

            <div className={'grid grid-cols-4'}>

                {/*=====SideBar======*/}
                <SideBar sideBar={sideBar} setSideBar={setSideBar} sideBarPre={sideBarPre}
                         setSideBarPre={setSideBarPre}/>

                {/*=====Header======*/}
                <Header setSideBarPre={setSideBarPre} setSideBar={setSideBar}/>

                {/*======aboutMe=====*/}
                <AboutMe/>

                {/*======MyProjects=====*/}
                <ProjectsComponent />

                {/*======Map=====*/}
                <MapComponent/>
            </div>

            <Footer/>
        </div>
    )
}

