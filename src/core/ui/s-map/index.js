(function (window) {
    const map = new Map();

    const getComponentMapInstance = (element) => {
        return map.get(element);
    };

    const component = (element) => {
        if (!element) {
            return;
        }

        let mapInstance;

        const initMap = () => {
            mapInstance = new ymaps.Map(element, {
                center: [55.668344, 84.395694],
                zoom: 16,
                controls: []
            });

            map.set(element, {
                map: mapInstance,
            });
        };

        ymaps.ready(initMap);
    };

    const mount = () => {
        const elements = document.querySelectorAll('.s-map__map');

        elements.forEach(component);
    };

    window.app.getComponentMapInstance = getComponentMapInstance;

    document.addEventListener('DOMContentLoaded', mount);
})(window);
