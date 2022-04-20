import Image from "next/image";
import js from "../static/js.png";
import react from "../static/react.png";
import next from "../static/next.png";
import firebase from "../static/firebase.png";
import stack from "../static/full-stack-developer.jpeg";
import mongo from "../static/mongodb.png";
import tailwind from "../static/tailwind.png";
import recoil from "../static/recoil.png";
import redux from "../static/redux.png";
import typescript from "../static/typescript-in-react.png";
import node from "../static/node.jpeg";


export const FavoriteMix = () => {

    return (

        <div className={'flex flex-col col-span-4  justify-center items-center'}>
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

                <div className={'m-2'}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={js}
                    />
                </div>

                <div className={'m-2'}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={react}
                    />
                </div>

                <div className={'m-2'}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={node}
                    />
                </div>

                <div className={'m-2'}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={next}
                    />
                </div>

                <div className={'m-2'}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={firebase}
                    />
                </div>

                <div className={'m-2'}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={mongo}
                    />
                </div>

                <div className={'m-2'}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={tailwind}
                    />
                </div>

                <div className={'m-2'}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={recoil}
                    />
                </div>

                <div className={'m-2'}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={redux}
                    />
                </div>

                <div className={'m-2'}>
                    <Image
                        className={'rounded rounded-lg'}
                        width={200} height={65}
                        alt={'Logo'}
                        src={typescript}
                    />
                </div>

            </div>
        </div>
    )
}