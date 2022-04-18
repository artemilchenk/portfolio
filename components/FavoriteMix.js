import Image from "next/image";
import js from "../static/js.png";
import react from "../static/react.png";
import next from "../static/next.png";
import firebase from "../static/firebase.png";
import jsts from "../static/jsts.png";
import nodereact from "../static/nodereact.png";

export const FavoriteMix =()=>{

    return (
        <div className={'col-span-4 md:col-span-1 py-5'}>
            <div className={'text-center text-lg font-poppins font-thin'}>
                Favorite mix
            </div>
            <Image
                className={'rounded rounded-lg'}
                width={800} height={250}
                alt={'Logo'}
                src={js}
            />
            <Image
                className={'rounded rounded-lg'}
                width={800} height={250}
                alt={'Logo'}
                src={react}
            />
            <Image
                className={'rounded rounded-lg'}
                width={800} height={250}
                alt={'Logo'}
                src={next}
            />
            <Image
                className={'rounded rounded-lg'}
                width={800} height={250}
                alt={'Logo'}
                src={firebase}
            />
            <div className={'text-center text-lg font-poppins font-thin'}>
                Мова програмування
            </div>
            <Image
                className={'rounded rounded-lg'}
                width={800} height={250}
                alt={'Logo'}
                src={jsts}
            />
            <div className={'text-center text-lg font-poppins font-thin'}>
                Корневі бібліотеки
            </div>
            <Image
                className={'rounded rounded-lg'}
                width={800} height={320}
                alt={'Logo'}
                src={nodereact}
            />
        </div>
    )
}