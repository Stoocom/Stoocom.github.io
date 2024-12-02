(async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapControls, YMapZoomControl} = ymaps3;

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

    const controls = new YMapControls();
    controls.addChild(
        new YMapZoomControl({
            easing: 'linear'
        })
    );
    map.addChild(controls);
    map.addChild(new YMapDefaultSchemeLayer());
})()