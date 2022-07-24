import AboutItem from "./AboutItem";

export const AboutMeTab = () => {
    return (
            <div className={'flex flex-wrap justify-center items-center text-sm font-serif col-span-4 mr-5'}>
                <AboutItem option={'Age'} value={'30'}/>
                <AboutItem option={'Education'} value={'University Education'}/>
                <AboutItem option={'Branch'} value={'Economic Cybernetics'}/>
                <AboutItem option={'Programming language'} value={'JavaScript/TypeScript'}/>
                <AboutItem option={'Position'} value={'Full Stack Developer'}/>
                <AboutItem option={'Backend (root)'} value={'Node'} />
                <AboutItem option={'Frontend (root)'} value={'React'} />
                <AboutItem option={'Development experience'} value={'1.5 year'} />
                <AboutItem option={'Commercial experience'} value={'No'} />
                <AboutItem option={'Married'} value={'No'}/>
                <AboutItem option={'Children'} value={'No'}/>
            </div>
    )
}