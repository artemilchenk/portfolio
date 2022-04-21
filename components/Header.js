import Image from "next/image";
import logo from "../static/logo.png";
import {ButtonComponent} from "./buttonComponent";
import {MyInfo} from "./MyInfo";
import {useState} from "react";

export const Header = ({setSideBarPre, setSideBar}) => {

//----------------SPARK---------------------
    const [spark, setSpark] = useState(false)
    const setLogoSpark = setTimeout(() => {
        setSpark(!spark)
    }, 1000)
//----------------SPARK---------------------

    return (
        <div id={'contacts'} className={'col-span-4 bg-[#1c1d25] border-[1px] border-black pb-40'}>

            {/*=========Header========*/}

            <div className={'top-0 col-span-4 grid grid-cols-4 text-white p-5'}>

                {/* ====Logo====*/}
                <div
                    className={`hidden md:flex justify-center md:justify-start text-center md:text-left col-span-4 md:col-span-1 text-xl`}>
                    <div
                        className={`${spark ? 'bg-[#550708] transition-all duration-2000' : 'bg-black transition-all duration-2000'} w-max p-2`}>
                        <Image
                            className={'rounded'}
                            width={130} height={100}
                            alt={'Logo'}
                            src={logo}
                        />
                    </div>
                </div>

                <div onClick={() => setSideBarPre(true)}
                     className={'flex md:hidden justify-center md:justify-start text-center md:text-left col-span-4 md:col-span-1 text-xl cursor-pointer'}>
                    <div
                        className={`${spark ? 'bg-[#550708] transition-all duration-2000' : 'bg-black transition-all duration-2000'} w-max p-2`}>
                        <Image
                            className={'rounded'}
                            width={130} height={100}
                            alt={'Logo'}
                            src={logo}
                        />
                    </div>
                </div>

                {/* ====Items====*/}
                <div
                    className={'hidden md:flex mt-5 col-span-4 justify-center md:justify-end md:col-span-3 md:mt-0'}>
                    <div className={'mx-5'}>
                        <ButtonComponent text={'About me'} id={'#aboutMe'}/>
                    </div>
                    <div className={'mx-5'} onClick={() => setSideBar(false)}>
                        <ButtonComponent text={'Projects'} id={'#projects'}/>
                    </div>
                    <div className={'mx-5'} onClick={() => setSideBar(false)}>
                        <ButtonComponent text={'Contacts'} id={"#contacts"}/>
                    </div>
                </div>
                {/* ====Items====*/}
            </div>


            {/*=========MyInfo========*/}
            <MyInfo/>
            {/*=========MyInfo========*/}


        </div>
    )
}