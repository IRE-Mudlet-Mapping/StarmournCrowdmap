const fs = require("fs");
const { MudletMapReader } = require("mudlet-map-binary-reader");
const yargs = require("yargs");

const argv = yargs(process.argv).option("base-dir", {
  default: ".",
  type: "string",
  description: "The base directory to use the Maps directory from",
})
.help()
.argv;

const inputFile = `${argv.baseDir}/Map/map`;
const mapData = MudletMapReader.read(inputFile);
fs.writeFileSync(`${argv.baseDir}/Map/map.json`, MudletMapReader.exportJson(mapData, false));
fs.writeFileSync(`${argv.baseDir}/Map/map_mini.json`, MudletMapReader.exportJson(mapData, true));
const { mapData: exportedMapData, colors } = MudletMapReader.export(mapData);
fs.writeFileSync(`${argv.baseDir}/Map/mapExport.js`, "mapData = " + JSON.stringify(exportedMapData));
fs.writeFileSync(`${argv.baseDir}/Map/colors.js`, "colors = " + JSON.stringify(colors));
fs.writeFileSync(`${argv.baseDir}/Map/mapExport.json`, JSON.stringify(exportedMapData));
fs.writeFileSync(`${argv.baseDir}/Map/colors.json`, JSON.stringify(colors));
