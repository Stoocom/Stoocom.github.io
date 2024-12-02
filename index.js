(async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapControls, YMapScaleControl, YMapZoomControl} = ymaps3;

    const map = new YMap(
        document.getElementById('app'),
        {
            showScaleInCopyrights: true,
            location: {
                center: [37.588144, 55.733842],
                zoom: 10
            },
            mode: 'vector',
            behaviors: ['drag', 'pinchZoom', 'mouseTilt']
        }
    );

    const scaleControl = new YMapScaleControl({});
    const controls = new YMapControls({position: 'bottom left'}, [scaleControl]);

    map.addChild(controls);
    map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));
    map.addChild(new YMapDefaultSchemeLayer());
})()