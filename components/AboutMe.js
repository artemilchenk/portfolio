import {AboutMeTab} from "./AboutMeTab";
import {TechnologiesColumn} from "./TechnologiesColumn";
import {FavoriteMix} from "./FavoriteMix";

export const AboutMe = () =>{
    return (
        <div id='aboutMe'
             className={'col-span-4 bg-[#E5EAFF] grid grid-cols-4 border-b-2 border-[#1c1d25] py-10 px-5 '}>
            <div className={'col-span-4 text-[40px] text-center font-poppins font-bold p-10'}>
                About me
            </div>
            {/*=====Про мене текст======*/}
            <div className={'col-span-4 md:col-span-3 mr-5'}>
                <AboutMeTab/>
                <div className={'text-center text-xl p-5'}>
                    Technologies I worked with
                </div>
                <div className={'grid grid-cols-3 items-start justify-between'}>
                    <TechnologiesColumn aria={'Frontend'} rect={'Rect'} next={'Next'} redux={'Redux'} ontext={'Context'} recoil={'Recoil'}/>
                    <TechnologiesColumn aria={'Backend'} node={'Node'} express={'Express'} nest={'Nest'} apollo={'Apollo'} graphQL={'GraphQL'}/>
                    <TechnologiesColumn aria={'Databases'} mongoDB={'MongoDB'} firebase={'Firebase'} awss3={'AWS S3'}/>
                </div>
            </div>

            {/*=====FavoriteMix======*/}

            <FavoriteMix/>

            {/*=====FavoriteMix======*/}

        </div>
    )
}