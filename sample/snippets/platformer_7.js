// Load one or more TMX files
// and load all the assets referenced in them
Q.loadTMX("level1.tmx, sprites.json", function() {
    Q.compileSheets("sprites.png","sprites.json");
    Q.stageScene("level1");
});