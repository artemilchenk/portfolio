import Head from 'next/head'
import Image from "next/image";
import {SideBar} from "../components/sideBar";
import {useEffect, useState} from "react";
import img1Ref from "../static/metastore.png"
import img2Ref from "../static/rumor.png"
import img3Ref from "../static/snake.png"
import {Header} from "../components/Header";
import {AboutMe} from "../components/AboutMe";
import {RoundComponent} from "../components/RoundComponent";
import {Footer} from "../components/Footer";

export default function Home() {
    const [sideBar, setSideBar] = useState(false)
    const [sideBarPre, setSideBarPre] = useState(false)
    const [direction, setDirection] = useState(0)
    const [md, setMd] = useState(false)
    const [inW, setInw] = useState(null)
    const [photo, setPhoto] = useState(img1Ref)
    const [timer, setTimer] = useState()

//----------------SPARK---------------------
    const [spark, setSpark] = useState(false)
    const setLogoSpark = setTimeout(() => {
        setSpark(!spark)
    }, 1000)
//----------------SPARK---------------------


//----------------TIMER---------------------
    useEffect(() => {
        setTimer(setTimeout(()=>{
            if(direction === 0) setDirection(45)
            if(direction === 45) setDirection(90)
            if(direction === 90) setDirection(0)
        },3000))
    }, [direction])
//----------------TIMER---------------------


//--------------CHANGE--IMG--FROM--DIRECTION--ERROR---------------
    useEffect(() => {
        if (direction === 0) {
            setTimeout(() => {
                setPhoto(img1Ref)
            }, 1000)
        }
        if (direction === 45) {
            setTimeout(() => {
                setPhoto(img2Ref)
            }, 1000)
        }
        if (direction === 90) {
            setTimeout(() => {
                setPhoto(img3Ref)
            }, 1000)
        }
    }, [direction])

//--------------CHANGE--IMG--FROM--DIRECTION--ERROR--------------


//----------------WIDTH---------------------
    const setInnerWidth = () => {
        setInw(window?.innerWidth)
    }

    useEffect(() => {
        if (window.innerWidth >= 767) {
            setMd(true)
        }
        if (window.innerWidth < 767) {
            setMd(false)
        }
    }, [inW])
    useEffect(() => {
        setInw(window.innerWidth)
        window.addEventListener('resize', setInnerWidth)
        return () => window.removeEventListener('resize', setInnerWidth)
    }, [])
//----------------WIDTH---------------------
    return (
        <div className={'relative overflow-hidden'}>
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
                {/*=====SideBar======*/}

                {/*=====Header======*/}
                <Header spark={spark} setSideBarPre={setSideBarPre} setSideBar={setSideBar}/>
                {/*=====Header======*/}

                {/*==================================aboutMe====================================*/}
                <AboutMe/>
                {/*==================================aboutMe====================================*/}

                <div id={'projects'} className={'col-span-4 flex flex-col text-center bg-[#E5EAFF] pb-10 md:pb-20'}>
                    <div
                        className={'text-[40px] bg-[#1c1d25] text-white text-center font-poppins font-bold p-10 h-[200px]'}>
                        My Projects
                    </div>

                    {/* ========================================MyProjects===========================*/}

                    <div className={'h-screen relative col-span-4 flex justify-center items-center bg-gray-300 px-5 '}>

                        {/*================RoundComponent=============*/}
                        <RoundComponent photo={photo} direction={direction}/>
                        {/*================RoundComponent=============*/}


                        <div className={'flex flex-col w-48 h-96 md:ml-16 justify-between items-center'}>

                            {/*================1=============*/}
                            <div onClick={()=>{
                                clearTimeout(timer)
                                setDirection(0)
                            }}
                                className={'flex relative items-center justify-center w-24 h-24 rounded-full hover:opacity-80 transition-opacity duration-200  cursor-pointer'}>
                                {direction === 0 && (
                                    <div className={'absolute rounded-full w-32 h-32 border border-red-900'}></div>
                                )}
                                <Image objectFit={'cover'} width={100} height={100} className={'rounded-full'}
                                       id={'first'} src={img1Ref}
                                       alt=""/>
                            </div>

                            {/*================2=============*/}
                            <div onClick={()=>{
                                clearTimeout(timer)
                                setDirection(45)
                            }}
                                className={'flex items-center justify-center w-24 h-24 rounded-full hover:opacity-80 transition-opacity duration-200 cursor-pointer '}>
                                {direction === 45 && (
                                    <div className={'absolute rounded-full w-32 h-32 border border-red-900'}></div>
                                )}
                                <Image objectFit={'cover'} width={100} height={100} className={'rounded-full'}
                                       id={'second'} src={img2Ref}
                                       alt=""/>
                            </div>

                            {/*================3=============*/}
                            <div onClick={()=>{
                                clearTimeout(timer)
                                setDirection(90)
                            }}
                                className={'flex items-center justify-center w-24 h-24 rounded-full hover:opacity-80 transition-opacity duration-200 cursor-pointer'}>
                                {direction === 90 && (
                                    <div className={'absolute rounded-full w-32 h-32 border border-red-900'}></div>
                                )}
                                <Image objectFit={'cover'} width={100} height={100} className={'rounded-full'}
                                       id={'third'} src={img3Ref}
                                       alt=""/>
                            </div>

                        </div>
                    </div>
                    {/* ========================================MyProjects===========================*/}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

