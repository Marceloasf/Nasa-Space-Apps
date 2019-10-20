var wwd = new WorldWind.WorldWindow("canvasOne");
function buildGlobe() {
    
    wwd.addLayer(new WorldWind.BMNGOneImageLayer());
    
    wwd.addLayer(new WorldWind.BMNGLandsatLayer());
    
    wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer());
    wwd.addLayer(new WorldWind.StarFieldLayer());
    wwd.addLayer(new WorldWind.AtmosphereLayer());
    wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));

}

buildGlobe();
