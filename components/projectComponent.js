import Image from "next/image";
import Link from "next/link";
import logo from "../logo.png";

export const ProjectComponent = ({
                                     projectName,
                                     description,
                                     setProjectName,
                                     youtubeDomain,
                                     projectDomain,
                                     admin,
                                     tek,
                                     img,
                                     id
                                 }) => {
    return (
        <div id={id} onMouseOver={(e) => setProjectName(e.currentTarget.id)}
             className={'mb-10 lg:mb-0 col-span-4 flex justify-center text-black items-center md:col-span-2 lg:col-span-1 text-white'}>
            <div
                className={'flex flex-col justify-center items-center max-w-[250px] h-[500px] text-center bg-white shadow-2xl p-5 rounded rounded-md '}>
                <div>
                    <div className={'m-5'}>{projectName}</div>
                    <Image
                        className={'rounded rounded-full'}
                        objectFit={'cover'}
                        width={200} height={200}
                        alt={'Logo'}
                        src={img}
                    />
                    <div className={'font-thin'}>{description}</div>
                    <div className={'text-red-700'}>
                        <Link href={`https://www.${projectDomain}`}>
                            <a>{projectDomain}</a>
                        </Link>
                    </div>
                    <div className={'text-red-700'}>
                        <Link href={`https://www.${youtubeDomain}`}>
                            <a>{youtubeDomain}</a>
                        </Link>
                    </div>
                </div>
                <div className={'text-sm text-gray-500'}>
                    Технології:
                </div>
                <div className={'text-sm'}>
                    {tek}
                </div>

                <div className={'h-full flex items-end'}>
                    <div>
                        <Image
                            width={50} height={40}
                            alt={'Logo'}
                            src={logo}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}