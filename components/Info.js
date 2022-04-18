import {ButtonComponent} from "./buttonComponent";

export const Info = ()=>{
    return (
        <div className={'col-span-4 text-center md:col-span-2 md:text-left'}>
            <div className={'text-[40px] font-poppins font-bold'}>
                Artem Ilchenko
            </div>
            <div className={'font-poppins m-2'}>
                Full Stack Developer
            </div>
            <ButtonComponent text={'About me'} id={'#aboutMe'}/>
            <div className={'font-poppins m-2 mt-5 text-red-800'}>
                093 214 33 60
            </div>
            <div className={'font-poppins m-2 text-red-800'}>
                <span className={'text-gray-500'}>Skype:</span> live:.cid.35038bc4e716cd2c
            </div>
            <div className={'font-poppins m-2 text-red-800'}>
                <span className={'text-gray-500'}>Github:</span> https://github.com/artemilchenk
            </div>
            <div className={'font-poppins m-2 text-red-800'}>
                <span className={'text-gray-500'}>Mail:</span> artemilchenko999@gmail.com
            </div>
        </div>
    )
}