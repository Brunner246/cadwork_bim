import {Viewer, WebIFCLoaderPlugin} from 
"https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/xeokit-sdk.es.min.js";

const viewer = new Viewer({
    canvasId: "myCanvas",
    transparent: true
});

viewer.camera.eye = [-3.933, 2.855, 27.018];
viewer.camera.look = [4.400, 3.724, 8.899];
viewer.camera.up = [-0.018, 0.999, 0.039];

const webIFCLoader = new WebIFCLoaderPlugin(viewer, {
    // Path to web-ifc.wasm, which does the IFC parsing for us
    wasmPath: "https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/"
});

const model = webIFCLoader.load({ // Returns an Entity that represents the model
    src: "Duplex.ifc",
    edges: true
});
