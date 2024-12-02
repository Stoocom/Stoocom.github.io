window.map = null;

(async function initMap() {
    await ymaps3.ready;

    await ymaps3.import.registerCdn(
        'https://cdn.jsdelivr.net/npm/{package}',
        '@yandex/ymaps3-default-ui-theme@latest'
      );

    //   const {YMapDefaultMarker} = await import('@yandex/ymaps3-default-ui-theme');

    const {YMap, YMapDefaultSchemeLayer, YMapControls, YMapScaleControl} = ymaps3;
    const {YMapZoomControl, YMapGeolocationControl} = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

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

    const coordinates = [
        [37.64, 55.76],
        [37.63, 55.7],
        [37.43, 55.69],
        [37.47, 55.68],
        [38.53, 58.6],
        [37.59, 55.71],
        [37.5, 55.63],
        [37.52, 55.57],
        [37.52, 58.57],
        [40.52, 58.57]
      ];
      
      const points = coordinates.map((lnglat, i) => ({
        type: 'Feature',
        id: i,
        geometry: {coordinates: lnglat},
        properties: {name: 'Point of issue of orders'}
      }));

      console.log('points', points)

    const scaleControl = new YMapScaleControl({});
    const controls = new YMapControls({position: 'bottom left'}, [scaleControl]);
    const controls_geo = new YMapControls({position: 'left'});
    controls_geo.addChild(new YMapGeolocationControl());
    // controls.addChild(new YMapGeolocationControl());

    map.addChild(controls);
    map.addChild(controls_geo);

    // map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));

})()