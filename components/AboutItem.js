import React, {useState} from "react";

function AboutItem({option, value}) {

    const [hovered, setHovered] = useState(false)

    return (
        //animate
        <div
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={'relative h-32 w-48 m-2'}>

            <div className={'flex justify-center items-center absolute text-[#E05F43] z-30 w-full h-full bg-[#1C1D24]'}>
                {hovered ? (
                    //animate__value
                    <div>
                        {value}
                    </div>
                ) : (
                    //animate__key
                    <div>
                        {option}
                    </div>
                )}
            </div>

            <div
                className={`absolute z-20 ${!hovered ? 'bottom-0 left-0' : '-bottom-2 -left-2'} h-[100px] w-[100px] bg-[#E05F43] transition-all `}>
                <div
                    className={'absolute z-10 right-0 bottom-0 bg-white w-[142px] h-[30px] transform rotate-45 translate-y-[-45px] translate-x-[31px]'}>
                </div>
            </div>

        </div>

    )
}

export default AboutItem