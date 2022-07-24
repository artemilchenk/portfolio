import Link from "next/link";
import Image from "next/image";

export  const RoundComponent =({direction, photo})=>{

    return (
        <div className={'flex flex-col justify-center items-center'}>
            <div className={'relative flex justify-end items-end w-48 h-48 md:w-96 md:h-96'}>
                <div style={{transform: `rotate(${direction}deg) scale(0.9)`}}
                     className={`absolute z-10 w-48 h-48 md:w-96 md:h-96 flex justify-end transform transition-transform duration-1000`}>
                    <div className={'w-12 h-12 bg-red-900'}></div>
                </div>
                <div
                    className={`absolute z-20 rounded-full bg-white w-48 h-48 md:w-96 md:h-96 transform scale-110 transition-transform duration-1000 border border-red-900`}>
                </div>
                <div
                    className={'scroll-none absolute z-30 top-0 left-0 flex w-48 h-48 md:w-96 md:h-96 overflow-scroll rounded-full border border-red-900 bg-black'}>
                    <Link
                        href={`${direction === 0 ? 'https://node-express-client-production.vercel.app/' : direction === 45 ? 'https://www.artemilchenko.com/' : 'https://www.snaaake.xyz'}`}>
                        <a>
                            <div className={'cursor-pointer w-48 h-48 md:w-96 md:h-96 '}>
                                <Image objectFit={'cover'} width={400} height={400} src={photo}
                                       alt=""/>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}