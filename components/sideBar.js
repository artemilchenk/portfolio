import {useEffect, useState} from "react";
import {ButtonComponent} from "./buttonComponent";

export const SideBar = ({sideBar, setSideBar, setSideBarPre, sideBarPre}) => {
    const [sideBarPing, setSideBarPing] = useState(false)
    const [inputVisible, setInputVisible] = useState(false)
    const [scroll, setScroll] = useState(null)
    const setScrollFunc = () => setScroll(window.scrollY)
    const style = {
        top: scroll ? scroll : 0
    }
    useEffect(() => {
        if (sideBar) {
            setSideBarPing(true)
        }
        if (!sideBar && inputVisible) {
            setTimeout(() => {
                setSideBarPing(false)
            }, 2200)
        }

    }, [sideBar])

    useEffect(() => (window.addEventListener('scroll', setScrollFunc)), [])

    useEffect(() => {
        if (sideBar) {
            setTimeout(() => {
                setInputVisible(true)
            }, 1600)
        }
        if (!sideBar && inputVisible) {
            setTimeout(() => {
                setSideBarPre(false)
            }, 2600)
        }

    }, [sideBar])


    useEffect(() => {
        if (sideBarPre) {
            setSideBar(true)
        }
    }, [sideBarPre])

    return (

        <div className={`${!sideBarPre && 'hidden'}`}>
            <div style={style}
                 className={`block py-5 text-white absolute z-40 w-full h-full bg-gray-800 bg-opacity-90 duration-500 ${!sideBarPing && 'translate-x-full transition-all duration-500'}`}>
                <div className={'flex justify-center'}>
                    {sideBar ?
                        <button onClick={() => setSideBar(sideBar => !sideBar)}
                                className={'flex md:hidden'}><ButtonComponent text={'Close'}/></button>
                        : <button className={'flex md:hidden'}><ButtonComponent text={'Closing...'}/></button>
                    }
                </div>
                <div>

                    <ButtonComponent styles={'p-5'} setSideBar={setSideBar} timeout={400} side={true} sideBar={sideBar}
                                     text={'About me'} id={'#aboutMe'}/>


                    <ButtonComponent styles={'p-5'} setSideBar={setSideBar} timeout={800} side={true} sideBar={sideBar}
                                     text={'Projects'} id={'#projects'}/>


                    <ButtonComponent styles={'p-5'} setSideBar={setSideBar} timeout={1200} side={true} sideBar={sideBar}
                                     text={'Contacts'} id={"#contacts"}/>

                </div>
            </div>
        </div>


    );
};