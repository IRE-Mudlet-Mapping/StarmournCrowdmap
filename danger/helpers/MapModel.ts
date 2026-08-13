import { MudletMapReader } from "mudlet-map-binary-reader";
import fs from "fs";

const inputFile = "./Map/map";
export default MudletMapReader.readBuffer(fs.readFileSync(inputFile));
