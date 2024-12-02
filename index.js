(async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    const map = new YMap(
        document.getElementById('app'),
        {
            location: {
                center: [37.588144, 55.733842],
                zoom: 10
            },
            mode: 'vector',
            behaviors: ['drag', 'pinchZoom', 'mouseTilt']
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());
})()