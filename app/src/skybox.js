import { mat4 } from './libs/gl-matrix.js';
import { gl } from './context.js';
import { Shaders } from './shaders.js';
import Camera from './camera.js';
import Resources from './resources.js';

const matModel = mat4.create();
const matIdentity = mat4.create();
mat4.identity(matIdentity);
mat4.identity(matModel);

const mesh = Resources.get('skyboxes/skybox.mesh');

const Skydome = {
    setTextures(tex) {
        for (let i = 0; i < 6; i++) {
            const texture = Resources.get(tex[i]);
            texture.setTextureWrapMode(gl.CLAMP_TO_EDGE);
            mesh.indices[i].material = tex[i];
        }
    },

    render() {
        gl.disable(gl.DEPTH_TEST);
        gl.depthMask(false);

        mat4.translate(matModel, matIdentity, Camera.position);

        Shaders.geometry.setInt('colorSampler', 0);
        Shaders.geometry.setInt('geomType', 3);
        Shaders.geometry.setInt('doDetail', 0);
        Shaders.geometry.setMat4('matWorld', matModel);
        Shaders.geometry.setMat4('matViewProj', Camera.viewProjection);

        mesh.renderSingle();

        gl.enable(gl.DEPTH_TEST);
        gl.depthMask(true);
    }
};

export { Skydome as default };
