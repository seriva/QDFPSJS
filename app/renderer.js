import Utils from './utils';
import Console from './console';

Utils.addCSS(
    `
    #viewport {
        background: #000;
        width: 100vw; height: 100vh;
        display: block;
        z-index : 100;
    }
    `
);

const canvas = Utils.addElement('canvas', 'viewport');
const gl = canvas.getContext('webgl2', {
    antialias: true
});
if (!gl) {
    Console.error('Failed to initialize WebGL 2.0 context');
}
if (!gl.getExtension('EXT_color_buffer_float')) {
    Console.error('EXT_color_buffer_float is required to run');
}

gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clearDepth(1.0);
gl.enable(gl.DEPTH_TEST);
gl.cullFace(gl.BACK);
gl.enable(gl.CULL_FACE);
gl.depthFunc(gl.LEQUAL);

Console.log('Initialized renderer');
Console.log('Renderer: ' + gl.getParameter(gl.RENDERER));
Console.log('Vendor: ' + gl.getParameter(gl.VENDOR));
Console.log('WebGL version: ' + gl.getParameter(gl.VERSION));
Console.log('GLSL version: ' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));

const screenQuadVBO = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, screenQuadVBO);
gl.bufferData(gl.ARRAY_BUFFER,
    new Float32Array([
        -1.0, -1.0,
        1.0, 1.0,
        -1.0, 1.0,
        -1.0, -1.0,
        1.0, -1.0,
        1.0, 1.0]),
    gl.STATIC_DRAW);

const drawFullscreenQuad = () => {
    gl.bindBuffer(gl.ARRAY_BUFFER, screenQuadVBO);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.disableVertexAttribArray(0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
};

window.addEventListener('resize', () => {
    gl.canvas.width = document.body.clientWidth;
    gl.canvas.height = document.body.clientHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
}, false);

window.dispatchEvent(new Event('resize'));

const Renderer = {
    gl,
    canvas,
    drawFullscreenQuad
};

export { Renderer as default };
