import Image from "next/image";
import js from "../static/js.png";
import react from "../static/react.png";
import next from "../static/next.png";
import firebase from "../static/firebase.png";
import stack from "../static/full-stack-developer.jpeg";
import mongo from "../static/mongodb.png";
import redux from "../static/redux.png";
import node from "../static/node.jpeg";
import {useEffect, useState} from "react";



export const FavoriteMix = () => {
    const [items, setItems] = useState([0])
    const [tar, setTar] = useState({})
    const [scrollTop, setScrollTop] = useState(0)
    const [timer, setTimer] = useState()

    useEffect(() => {
        if (scrollTop > (tar?.offsetTop -300) && items.length < 9) {
            setTimer(setTimeout(() => {
                setItems([...items, (items[items.length - 1] + 1)])
            }, 1000))
        }
    }, [scrollTop,items.length])

    //-------------------------SCROLL_TOP------------------------
    const setScroll = () => {
        setScrollTop(window?.pageYOffset)
    }
    useEffect(() => {
        window.addEventListener('scroll', setScroll)
        return () => window.removeEventListener('scroll', setScroll)
    }, [])
    //-------------------------SCROLL_TOP------------------------

    const appear = function (num){
        return items.find(item => item === num) ? `m-2 opacity-100 transition-all duration-1000` : `m-2 opacity-0 transition-all duration-1000`
    }

    return (
        <div onLoad={(e)=>{
            setTar(e.currentTarget)
        }}  className={'flex flex-col col-span-4  justify-center items-center mb-10'}>
            <div className={'flex flex-col col-span-4'}>
                <div className={'font-poppins text-lg text-center'}>
                    Stack
                </div>

                <div className={'m-2'}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={400} height={165}
                        alt={'Logo'}
                        src={stack}
                    />
                </div>
            </div>

            <div className={'flex flex-wrap justify-center items-center text-sm font-serif col-span-4 mr-5'}>
                <div
                    className={appear(1)}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={js}
                    />
                </div>

                <div
                    className={appear(2)}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={react}
                    />
                </div>

                <div
                    className={appear(3)}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={node}
                    />
                </div>

                <div
                    className={appear(4)}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={next}
                    />
                </div>

                <div
                    className={appear(5)}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={firebase}
                    />
                </div>

                <div
                    className={appear(6)}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={mongo}
                    />
                </div>

                <div
                    className={appear(7)}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={redux}
                    />
                </div>

            </div>
        </div>
    )
}