import {runServer} from "./common";
import {mongoHandlers} from "./projections";

const host = "0.0.0.0:9091";

if (require.main === module) {
    runServer(host, mongoHandlers);
}
