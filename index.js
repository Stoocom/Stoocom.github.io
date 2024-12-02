window.map = null;

(async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapControls, YMapScaleControl} = ymaps3;
    // const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

    const map = new YMap(
        document.getElementById('app'),
        {
            showScaleInCopyrights: true,
            location: {
                center: [37.588144, 55.733842],
                zoom: 10
            }
        },
        [new YMapDefaultSchemeLayer({})]
    );

    // const scaleControl = new YMapScaleControl({});
    // const controls = new YMapControls({position: 'bottom left'}, [scaleControl]);

    // map.addChild(controls);
    // map.addChild(new YMapDefaultSchemeLayer());
    // map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));

})()