import Head from 'next/head'
import Link from 'next/link'
import {ButtonComponent} from "../components/buttonComponent";
import Image from "next/image";
import iam from "../0000000.png";
import logo from "../logo.png";
import react from "../react.png";
import next from "../next.png";
import firebase from "../firebase.png";
import js from "../js.png";
import tailwind from "../tailwind.png";
import recoil from "../recoil.png";
import jsts from "../jsts.png";
import nodereact from "../nodereact.png";
import {SideBar} from "../components/sideBar";
import {useEffect, useState} from "react";
import rumor from "../rumor.png";
import musicspace from "../musicspace.png";
import metastore from "../metastore.png";
import soroka from "../soroka.png";
import {ProjectComponent} from "../components/projectComponent";

export default function Home() {
    const [sideBar, setSideBar] = useState(false)
    const [sideBarPre, setSideBarPre] = useState(false)
    const [spark, setSpark] = useState(false)
    const [projectName, setProjectName] = useState('')

    const setLogoSpark = setTimeout(() => {
        setSpark(!spark)
    }, 1000)


    return (
        <div className={'relative overflow-hidden'}>
            <Head>
                <title>artemilchenko</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&display=swap"
                      rel="stylesheet"/>
            </Head>

            {/*    ================================Body=============================*/}
            <div className={'grid grid-cols-4'}>

                <SideBar sideBar={sideBar} setSideBar={setSideBar} sideBarPre={sideBarPre}
                         setSideBarPre={setSideBarPre}/>

                {/*=======================================Section-1======================================*/}
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
                                <ButtonComponent text={'Про мене'} id={'#aboutMe'}/>
                            </div>
                            <div className={'mx-5'} onClick={() => setSideBar(false)}>
                                <ButtonComponent text={'Проекти'} id={'#projects'}/>
                            </div>
                            <div className={'mx-5'} onClick={() => setSideBar(false)}>
                                <ButtonComponent text={'Контакти'} id={"#contacts"}/>
                            </div>
                        </div>


                    </div>


                    {/*=========MyInfo========*/}

                    <div className={'max-w-6xl grid grid-cols-4 ml-auto mr-auto p-20 text-white bg-black'}>

                        {/*=======Info======*/}
                        <div className={'col-span-4 text-center md:col-span-2 md:text-left'}>
                            <div className={'text-[40px] font-poppins font-bold'}>
                                Artem Ilchenko
                            </div>
                            <div className={'font-poppins m-2'}>
                                Full Stack Developer
                            </div>
                            <ButtonComponent text={'Про мене'} id={'#aboutMe'}/>
                            <div className={'font-poppins m-2 text-red-800'}>
                                093 214 33 60
                            </div>
                            <div className={'font-poppins m-2 text-red-800'}>
                                artemilchenko999@gmail.com
                            </div>
                        </div>
                        {/*=======Image======*/}

                        <div className={'col-span-4 text-center md:col-span-2 md:text-center mt-5 md:mt-0'}>
                            <Image
                                className={'rounded rounded-full'}
                                width={200} height={220}
                                alt={'MyPicture'}
                                src={iam}
                            />

                            <div className={'bg-[#1c1d25] rounded-lg mt-10 p-5 flex justify-between'}>
                                <Link href="https://www.facebook.com/profile.php?id=100004528778719">
                                    <a>
                                        <div
                                            className={'bg-[#550708] rounded-full w-max cursor-pointer transition-all duration-500 hover:bg-white hover:transition-all hover:duration-500'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </Link>

                                <Link href="https://www.instagram.com/artem__ilchenko/">
                                    <a>
                                        <div
                                            className={'bg-[#550708] rounded-full w-max cursor-pointer transition-all duration-500 hover:bg-white hover:transition-all hover:duration-500'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </Link>

                                <Link href="https://github.com/artemilchenk">
                                    <a>
                                        <div
                                            className={'bg-[#550708] rounded-full w-max cursor-pointer transition-all duration-500 hover:bg-white hover:transition-all hover:duration-500'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                {/*==================================Section-2====================================*/}
                <div id='aboutMe'
                     className={'col-span-4 bg-[#E5EAFF] grid grid-cols-4 border-b-2 border-[#1c1d25] py-10 px-5 '}>
                    <div className={'col-span-4 text-[40px] text-center font-poppins font-bold p-10'}>
                        Про мене
                    </div>
                    {/*=====Про мене текст======*/}
                    <div className={'col-span-4 md:col-span-3 mr-5'}>

                        <div
                            className={'mr-auto ml-auto text-left text-sm md:text-lg border-b-2 border-red-700 font-serif mb-5 pb-5'}>
                            <div className={'max-w-2xl mr-auto ml-auto'}>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Вік
                                    </div>
                                    <div>
                                        29
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Освіта
                                    </div>
                                    <div>
                                        Вища (ЧДІЕУ)
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Спеціальність
                                    </div>
                                    <div>
                                        Економічна Кібернетика
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Працював офіційно
                                    </div>
                                    <div>
                                        Ні
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Курси
                                    </div>
                                    <div>
                                        Ні
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Самовивчення
                                    </div>
                                    <div>
                                        Так
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Джерела інформації
                                    </div>
                                    <div>
                                        Ютуб, Документація, Stack Overflow
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Мова програмування
                                    </div>
                                    <div>
                                        JavaScript/TypeScript
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Позиція
                                    </div>
                                    <div>
                                        Full Stack Developer
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Фронтенд/Бекенд
                                    </div>
                                    <div>
                                        70%/30% відповідно
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Бекенд(корінь)
                                    </div>
                                    <div>
                                        Node
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Фронтенд(корінь)
                                    </div>
                                    <div>
                                        React
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Віддаю перевагу функціональним компонентам
                                    </div>
                                    <div>
                                        Так
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Готовий адаптуватись до різних технологій
                                    </div>
                                    <div>
                                        Так
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Можу спокійно жити, знаючи, що проблема не вирішена
                                    </div>
                                    <div>
                                        Ні
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Роль JavaScript в житті
                                    </div>
                                    <div>
                                        Першочергова
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Залежність від кодінга
                                    </div>
                                    <div>
                                        Так
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Отримую завдоволення від робочого процесу
                                    </div>
                                    <div>
                                        Так
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Можу працювати без вихідних
                                    </div>
                                    <div>
                                        Так
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Одружений
                                    </div>
                                    <div>
                                        Ні
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Діти
                                    </div>
                                    <div>
                                        Ні
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Бачу життя без кодінга
                                    </div>
                                    <div>
                                        Ні
                                    </div>
                                </div>
                                <div className={'flex justify-between border-b border-black'}>
                                    <div>
                                        Готовий розвиватись та приносити користь компанії
                                    </div>
                                    <div>
                                        Так
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'text-center text-xl p-5'}>
                            Технології з якими працював
                        </div>

                        <div className={'grid grid-cols-3 items-start justify-between'}>

                            <div className={'col-span-3 md:col-span-1 text-center'}>
                                <div className={'font-thin text-red-700 '}>
                                    Фронтенд
                                </div>
                                <div>
                                    Rect
                                </div>
                                <div>
                                    Next
                                </div>
                                <div>
                                    State management:
                                </div>
                                <div>
                                    Redux
                                </div>
                                <div>
                                    Context
                                </div>
                                <div>
                                    Recoil
                                </div>
                            </div>

                            <div className={'col-span-3 md:col-span-1 text-center'}>
                                <div className={'font-thin text-red-700'}>
                                    Бекенд
                                </div>
                                <div>
                                    Node
                                </div>
                                <div>
                                    Express
                                </div>
                                <div>
                                    Nest
                                </div>
                                <div>
                                    Apollo
                                </div>
                                <div>
                                    GraphQL
                                </div>

                            </div>

                            <div className={'col-span-3 md:col-span-1 text-center'}>
                                <div className={'font-thin text-red-700 '}>
                                    Бази даних
                                </div>
                                <div>
                                    MongoDB
                                </div>
                                <div>
                                    Firebase
                                </div>
                                <div>
                                    AWS S3
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*=====Улюблений мікс======*/}

                    <div className={'col-span-4 md:col-span-1 py-5'}>
                        <div className={'text-center text-[30px] font-poppins font-thin'}>
                            Улюблений мікс
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

                        <div className={'text-center text-[30px] font-poppins font-thin'}>
                            Де особливо хочу виділити
                        </div>
                        <Image
                            className={'rounded rounded-lg'}
                            objectFit={'cover'}
                            width={800} height={250}
                            alt={'Logo'}
                            src={tailwind}
                        />


                        <Image
                            className={'rounded rounded-lg'}
                            objectFit={'cover'}
                            width={800} height={250}
                            alt={'Logo'}
                            src={recoil}
                        />
                        <div className={'text-center text-[30px] font-poppins font-thin text-red-700'}>
                            З чим працюю
                        </div>
                        <div className={'text-center text-[30px] font-poppins font-thin'}>
                            Мова програмування
                        </div>
                        <Image
                            className={'rounded rounded-lg'}
                            width={800} height={250}
                            alt={'Logo'}
                            src={jsts}
                        />
                        <div className={'text-center text-[30px] font-poppins font-thin'}>
                            Корневі бібліотеки
                        </div>
                        <Image
                            className={'rounded rounded-lg'}
                            width={800} height={320}
                            alt={'Logo'}
                            src={nodereact}
                        />
                        <div className={'text-center text-[30px] font-poppins font-thin'}>
                            Та всі фреймворки які над ними
                        </div>


                    </div>


                </div>
                {/*==================================Section-3====================================*/}

                <div id={'projects'} className={'col-span-4 grid grid-cols-4 text-center bg-[#E5EAFF] pb-10 md:pb-20'}>
                    <div
                        className={'col-span-4 text-[40px] bg-[#1c1d25] text-white text-center font-poppins font-bold p-10 h-[200px]'}>
                        Мої проекти
                        <div className={'font-thin'}>
                            {projectName}
                        </div>
                    </div>

                    <div className={'col-span-4 grid grid-cols-4 mt-20 lg:space-x-5 px-5'}>

                        <ProjectComponent id={'MetaStore'} projectName={'MetaStore'}
                                          tek={'Next.js, Firebase, Tailwindcss'}
                                          description={'Магазин металевих конструкцій'} img={metastore}
                                          projectDomain={'metastoree.online'} admin={'metastoree.online/admin'}
                                          youtubeDomain={''}
                                          setProjectName={setProjectName}/>
                        <ProjectComponent id={'Soroka'} projectName={'Soroka'} description={'Месенджер'} img={soroka}
                                          tek={'NextJS, Firebase, StyledComponents'}
                                          projectDomain={'sorokaa.xyz'}
                                          youtubeDomain={''} setProjectName={setProjectName}/>
                        <ProjectComponent id={'Rumor'} projectName={'Rumor'} description={'Соціальна мережа'}
                                          tek={'React, ApolloGraphql, MongoDB'}
                                          img={rumor}
                                          projectDomain={'rumorr.live'} youtubeDomain={''}
                                          setProjectName={setProjectName}/>
                        <ProjectComponent id={'MusicSpace'} projectName={'MusicSpace'} description={'Музична площадка'}
                                          tek={'Next.js, NestJS, MongoDB'}
                                          img={musicspace}
                                          projectDomain={'musicspace.store'} youtubeDomain={''}
                                          setProjectName={setProjectName}/>
                    </div>

                </div>
            </div>
            <footer className={'bg-[#1c1d25] p-5 text-white'}>
                <div
                    className={'flex-col justify-center items-center md:flex-row bg-[#1c1d25] rounded-lg p-5 flex justify-between'}>

                    <Link href="https://www.facebook.com/profile.php?id=100004528778719">
                        <a>
                            <div
                                className={'bg-[#550708] rounded-full w-max cursor-pointer transition-all duration-500 hover:bg-white hover:transition-all hover:duration-500'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
                                </svg>
                            </div>
                        </a>
                    </Link>

                    <div className={'text-red-800 m-2 md:m-0 flex justify-center items-center'}>
                        <div>artemilchenko999@gmail.com</div>
                    </div>

                    <Link href="https://www.instagram.com/artem__ilchenko/">
                        <a>
                            <div
                                className={'bg-[#550708] rounded-full w-max cursor-pointer transition-all duration-500 hover:bg-white hover:transition-all hover:duration-500'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </div>
                        </a>
                    </Link>

                    <div className={'text-red-800 m-2 md:m-0 flex justify-center items-center'}>
                        <div>093 214 33 60</div>
                    </div>


                    <Link href="https://github.com/artemilchenk">
                        <a>
                            <div
                                className={'bg-[#550708] rounded-full w-max cursor-pointer transition-all duration-500 hover:bg-white hover:transition-all hover:duration-500'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </div>
                        </a>
                    </Link>
                </div>
            </footer>

        </div>
    )
}
