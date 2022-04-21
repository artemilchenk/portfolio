import Link from "next/link";
import Image from "next/image";
import img1Ref from "../static/rss.png";
import img2Ref from "../static/rumor.png";
import img3Ref from "../static/snake.png";
import {useEffect, useState} from "react";


const mode = {
    '0': 0,
    '45': 50,
    '90': 100
}

export  const RoundComponent =({direction, photo})=>{
    const [width, setWidth] = useState()
    const [timer, setTimer] = useState()

    useEffect(()=>{
        clearTimeout(timer)
        setTimer(setTimeout(()=>{
            if(width < 100 && width !== 49) setWidth(width + 1)
        },55))
    },[width])



    useEffect(()=>{
        clearTimeout(timer)
        setWidth(mode[String(direction)])
    },[direction])


    return (
        <div className={'flex flex-col justify-center items-center'}>
            <div className={'relative flex justify-end items-end w-48 h-48 md:w-96 md:h-96'}>
                <div style={{transform: `rotate(${direction}deg) scale(0.9)`}}
                     className={`absolute z-10 w-48 h-48 md:w-96 md:h-96 flex justify-end transform transition-transform duration-1000`}>
                    <div className={'w-12 h-12 bg-red-900'}></div>
                </div>
                <div
                    className={`absolute z-20 rounded-full bg-gray-300 w-48 h-48 md:w-96 md:h-96 transform scale-110 transition-transform duration-1000 border border-red-900`}>
                </div>
                <div
                    className={'scroll-none absolute z-30 top-0 left-0 flex w-48 h-48 md:w-96 md:h-96 overflow-scroll rounded-full border border-red-900 bg-black'}>
                    <Link
                        href={`${direction === 0 ? 'https://node-express-client-production.vercel.app/' : direction === 45 ? 'https://www.rumorr.live' : 'https://www.snaaake.xyz'}`}>
                        <a>
                            <div className={'cursor-pointer w-48 h-48 md:w-96 md:h-96 '}>
                                <Image objectFit={'cover'} width={400} height={400} src={photo}
                                       alt=""/>
                            </div>
                        </a>
                    </Link>

                </div>
            </div>
            <div className={'relative w-full mt-10'}>
                <div style={{width: `${width}%`}} className={'h-5 rounded-full bg-red-900 flex'}>
                </div>
                <div style={{top: -5}} id={'33'}
                     className={'absolute w-full flex justify-between items-center'}>
                    <Image className={'rounded-full'} width={30} height={30} id={'first'}
                           src={img1Ref} alt=""/>
                    <Image className={'rounded-full'} width={30} height={30} id={'second'}
                           src={img2Ref} alt=""/>
                    <Image className={'rounded-full'} width={30} height={30} id={'third'}
                           src={img3Ref} alt=""/>
                </div>
            </div>
        </div>
    )
}