import {AboutMeTab} from "./AboutMeTab";
import {FavoriteMix} from "./FavoriteMix";

export const AboutMe = () => {
    return (
        <div id='aboutMe'
             className={'col-span-4 bg-white grid grid-cols-4 border-b-2 border-[#1c1d25] px-2'}>
            <div
                className={'flex justify-center items-center col-span-4 text-[40px] text-center font-poppins font-bold border-b-2 border-[#1c1d25] p-10'}>
                <div>About me</div>
            </div>

            <AboutMeTab/>

            {/*=====FavoriteMix======*/}

            <FavoriteMix/>

            {/*=====FavoriteMix======*/}

        </div>
    )
}