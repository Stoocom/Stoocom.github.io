window.map = null;

(async function initMap() {
    await ymaps3.ready;

    await ymaps3.import.registerCdn(
        'https://cdn.jsdelivr.net/npm/{package}',
        '@yandex/ymaps3-default-ui-theme@latest'
      );

    //   const {YMapDefaultMarker} = await import('@yandex/ymaps3-default-ui-theme');

    const {YMap, YMapDefaultSchemeLayer, YMapControls, YMapScaleControl, YMapGeolocationControl} = ymaps3;
    const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

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

    const scaleControl = new YMapScaleControl({});
    const controls = new YMapControls({position: 'bottom left'}, [scaleControl]);
    const controls_geo = new YMapControls();
    controls_geo.addChild(new YMapGeolocationControl());
    // controls.addChild(new YMapGeolocationControl());

    map.addChild(controls);
    map.addChild(controls_geo);

    // map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));

})()