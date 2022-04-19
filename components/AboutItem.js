import React, {useEffect, useRef, useState} from "react";


function AboutItem({size, color, backgroundParent, value, keyVal}) {
    const ref = useRef()
    const biggerLong = Math.sqrt((size * size) + (size * size)) + 4
    const [onHover, setOnHover] = useState(false)
    const [arrow, setArrow] = useState(false)
    const offSet = onHover ?  size * 0.7 : size * 0.5

    useEffect(() => {
        setTimeout(() => {
            if (onHover) {
                setArrow(true)
            } else {
                setArrow(false)
            }
        }, 500)
    }, [onHover])

    return (
        <div style={{position: 'relative', height: `${size + 80}px`, margin: 15}}>
            <div style={{position: 'relative'}}>
                <div onMouseLeave={() => {
                    setOnHover(false)
                }} onMouseOver={() => setOnHover(true)} ref={ref}
                     style={{
                         background: backgroundParent,
                         height: size * 1.5,
                         width: size * 2,
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center'
                     }}>
                    <div style={{width: size, height: size, background: 'inherit'}} className={'relative'}>
                        <div style={{
                            width: size,
                            height: size,
                            background: 'inherit',
                            top: offSet * 0.5,
                            right: offSet * 0.92,
                            position: 'absolute',
                            zIndex: 30,
                            transition: 'all 0.5s'
                        }}>
                            <div style={{
                                width: size,
                                height: size,
                                position: 'absolute',
                                transition: 'all 0.5s',
                                backgroundColor: '#E05F43'
                            }}>
                            </div>
                            <div style={{
                                width: biggerLong,
                                height: size * 0.8,
                                left: size / 14,
                                bottom: size / 2.7,
                                background: 'inherit',
                                position: 'absolute',
                                zIndex: 20,
                                transform: 'rotate(45deg)'
                            }}>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            background: color,
                            width: size * 2,
                            height: size * 1.5,
                            position: 'absolute',
                            zIndex: 40,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <div className={'text-gray-50'} style={{width: 'auto'}}>{keyVal}</div>
                    </div>
                    <div
                        style={{
                            height: size * 1.5, width: arrow ? size * 2 : 0, display: 'flex', position: 'absolute',
                            zIndex: 50, background: "#7A3C47", justifyContent: 'center', transition: 'all 0.5s',
                            alignItems: 'center'
                        }}>
                        {arrow && <div className={'cursor-pointer'} onClick={() => {
                            return null
                        }}>

                            <div style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{
                                    background: '#E05F43',
                                    padding: 5,
                                    margin: 5,
                                    borderRadius: 5,
                                    cursor: 'pointer',
                                    width: 'min-content'
                                }}>
                                    {value}
                                </div>
                                <div style={{display: 'flex', justifyContent: 'between', alignItems: 'center', width: '100%'}}>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>


            </div>
        </div>


    )
}

export default AboutItem