import {useEffect, useRef, useState} from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css"

const markers = [
    {latitude: 50.450100, longitude: 30.523399},
    {latitude: 49.588268, longitude: 34.551418},
    {latitude: 50.26000780506512, longitude: 28.674598428820175},
    {latitude: 50.91301418722878, longitude: 34.8043828731674},
    {latitude: 51.497151937308374, longitude: 31.29172895814928},
    {latitude: 46.46458517915436, longitude: 30.725992906500306},
    {latitude: 50.383119335685684, longitude: 24.235547965875732},
    {latitude: 49.42471094600893, longitude: 27.003914228192272},
    {latitude: 48.93526198131941, longitude: 24.715569753682637},
    {latitude: 49.56576549476982, longitude: 25.62445840660356},
    {latitude: 49.84635532325797, longitude: 24.021834314679793},
    {latitude: 49.84635532325797, longitude: 24.021834314679793},
    {latitude: 51.2074112, longitude: 26.5208033},
    {latitude: 50.7450733, longitude: 25.320078},
    {latitude: 49.2320162, longitude: 28.467975},
    {latitude: 50.62610664226777, longitude: 26.253952601370752},
    {latitude: 49.42144477323727, longitude: 32.06432029992485},
    {latitude: 48.460351199754534, longitude: 35.017426407564926},
    {latitude: 47.83904905046751, longitude: 35.15386833157616},
    {latitude: 48.52227588751875, longitude: 32.267876353025265},
]

export function MapComponent() {
    const [map, setMap] = useState(null)
    let mapElement = useRef()

    const init = async () => {
        try {
            const tt = (await import("@tomtom-international/web-sdk-maps")).default;

            let map = tt.map({
                key: 'EACgCZ1EDDrAfuv62YGhbDXnbDpChzoc',
                container: mapElement.current,
                stylesVisibility: {
                    trafficIncidents: true,
                    trafficFlow: true

                },
                center: [markers[0].longitude, markers[0].latitude],
                zoom: 4
            })
            setMap(map)

            if (markers.length) markers.forEach((mar, index) => {
                const element = document.createElement('div')
                element.style.height = '22px'
                element.style.width = '22px'
                element.style.backgroundColor = index === 0 ? 'darkgreen' : 'darkred'
                element.style.borderRadius = '11px'

                let marker = new tt.Marker({
                    draggable: false,
                    element

                })
                    .setLngLat([mar.longitude, mar.latitude])
                    .addTo(map)
            })

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        init()
    }, [])

    return (
        <div className={'relative flex flex-col col-span-4 h-96 self-center bg-black text-white'}>

            <div className={'flex flex-col'}>
                Cities I would like to work in
            </div>

            <div className={'block w-full h-96'} ref={mapElement}>
            </div>
        </div>

    )
}