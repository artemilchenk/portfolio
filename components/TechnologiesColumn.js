export const TechnologiesColumn= ({aria, ...technologies})=>{
    const technologiesKeys = Object.keys(technologies)

    return (
        <div className={'col-span-3 md:col-span-1 text-center'}>
            <div className={'font-thin text-red-700 '}>
                {aria}
            </div>
            {technologiesKeys.length && technologiesKeys.map(tec=>(
                <div>
                    {technologies[tec] ? technologies[tec] : null}
                </div>
            ))}
        </div>
    )
}

