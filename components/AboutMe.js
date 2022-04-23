import {AboutMeTab} from "./AboutMeTab";
import {FavoriteMix} from "./FavoriteMix";
import js from "../static/js.png";
import react from "../static/react.png";
import next from "../static/next.png";
import firebase from "../static/firebase.png";
import mongo from "../static/mongodb.png";
import redux from "../static/redux.png";
import node from "../static/node.jpeg";
import typescript from "../static/typescript.png";

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

            <FavoriteMix imgArr={[js, react, next, mongo, firebase, redux, node, typescript]}/>

            {/*=====FavoriteMix======*/}

        </div>
    )
}