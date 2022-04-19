import AboutItem from "./AboutItem";

export const AboutMeTab = () => {
    return (
            <div className={'flex flex-wrap justify-center items-center text-sm font-serif col-span-4 mr-5'}>
                <AboutItem size={100} color={'#550708'} keyVal={'Age'} value={'29'} backgroundParent={'white'}/>
                <AboutItem size={100} color={'#550708'} keyVal={'Education'} value={'University Education'} backgroundParent={'white'}/>
                <AboutItem size={100} color={'#550708'} keyVal={'Branch'} value={' Economic Cybernetics'} backgroundParent={'white'}/>
                <AboutItem size={100} color={'#550708'} keyVal={'Programming language'} value={'JavaScript/TypeScript'} backgroundParent={'white'}/>
                <AboutItem size={100} color={'#550708'} keyVal={'Position'} value={'Full Stack Developer'} backgroundParent={'white'}/>
                <AboutItem size={100} color={'#550708'} keyVal={'Frontend/Backend'} value={'70%/30%'} backgroundParent={'white'}/>
                <AboutItem size={100} color={'#550708'} keyVal={'Backend (root)'} value={'Node'} backgroundParent={'white'}/>
                <AboutItem size={100} color={'#550708'} keyVal={'Frontend (root)'} value={'React'} backgroundParent={'white'}/>
                <AboutItem size={100} color={'#550708'} keyVal={'Development experience'} value={'1 year'} backgroundParent={'white'}/>
                <AboutItem size={100} color={'#550708'} keyVal={'Commercial experience'} value={'No'} backgroundParent={'white'}/>
                <AboutItem size={100} color={'#550708'} keyVal={'Married'} value={'No'} backgroundParent={'white'}/>
                <AboutItem size={100} color={'#550708'} keyVal={'Children'} value={'No'} backgroundParent={'white'}/>
            </div>
    )
}