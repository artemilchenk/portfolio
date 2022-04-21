import Image from "next/image";
import img1Ref from "../static/rss.png";
import img2Ref from "../static/rumor.png";
import img3Ref from "../static/snake.png";
import {RoundComponent} from "./RoundComponent";
import {useEffect, useState} from "react";
import {ProjectDown} from "./ProjectDown";

export const ProjectsComponent = () => {
    const [timer, setTimer] = useState()
    const [photo, setPhoto] = useState(img1Ref)
    const [direction, setDirection] = useState(0)


//----------------TIMER---------------------
    useEffect(() => {
        setTimer(setTimeout(() => {
            if (direction === 0) setDirection(45)
            if (direction === 45) setDirection(90)
            if (direction === 90) setDirection(0)
        }, 3000))
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
 /*   const setInnerWidth = () => {
        setWidth(window?.innerWidth)
    }

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', setInnerWidth)
        return () => window.removeEventListener('resize', setInnerWidth)
    }, [])*/
//----------------WIDTH---------------------

    return (

        <div className={'col-span-4 flex flex-col text-center'}>

            <div
                className={'flex justify-center items-center text-[40px] bg-[#1c1d25] text-white text-center font-poppins font-bold h-[200px]'}>
                <div>My Projects</div>
            </div>

            <div className={'col-span-4 flex flex-col justify-center items-center h-[600px]'}>
                <div className={'col-span-4 flex justify-center items-center'}>
                    {/*==================================Left====================================*/}
                    <RoundComponent photo={photo} direction={direction}/>
                    {/*==================================Left====================================*/}

                    {/*==================================Right====================================*/}
                    <div className={'flex flex-col w-48 h-96 md:ml-16 justify-between items-center'}>

                        {/*================1=============*/}
                        <div onClick={() => {
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
                        <div onClick={() => {
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
                        <div onClick={() => {
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
                    {/*==================================Right====================================*/}

                </div>
                {/*==================================Down====================================*/}
                <ProjectDown direction={direction} />
                {/*==================================Down====================================*/}
            </div>

        </div>
    )
}