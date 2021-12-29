import {useRouter} from "next/router";
import {useState} from "react";


export const ButtonComponent = ({text, id, sideBar, side, timeout, setSideBar, styles}) => {
    const router = useRouter()
    const [timer, setTimer] = useState(false)

    if (side) {
        if (sideBar && sideBar !== 'onload') {
            setTimeout(() => {
                setTimer(false)
            }, timeout)
        }
        if (!sideBar && sideBar !== 'onload') {
            setTimeout(() => {
                setTimer(true)
            }, timeout)
        }
    }

    return (
        <>
            <div
                className={`${styles && styles} transition-all duration-1000 ${timer && 'translate-x-full transition-all duration-1000'}`}>
                <button onClick={() => {
                    if (setSideBar) setSideBar(false)
                    if (side) {
                        setTimeout(() => {
                            if (id) router.push(`/${id}`)
                        }, 2600)
                    } else {
                        if (id) router.push(`/${id}`)
                    }
                }}
                        className={'px-5 py-2 rounded rounded-full bg-[#E05F43] hover:opacity-60 transition-opacity duration-200 hover:transition-opacity hover:duration-200'}>
                    {text}
                </button>
            </div>


        </>
    )
}