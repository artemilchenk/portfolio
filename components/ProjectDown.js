import Image from "next/image";
import img1Ref from "../static/rss.png";
import img2Ref from "../static/portfolio.png";
import img3Ref from "../static/snake.png";
import {useEffect, useState} from "react";

const mode = {
    '0': 0,
    '45': 50,
    '90': 100
}

export const ProjectDown = ({direction})=>{
    const [width, setWidth] = useState(0)
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
        <div className={'w-full lg:w-[50%]'}>
            <div className={'relative w-full mt-20'}>
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