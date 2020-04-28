import Utils from './utils.js';
import Console from './console.js';

const defaults = {
    // rendering
    znear: 0.1,
    zfar: 1000,
    renderscale: Utils.isMobile() ? 0.5 : 1.0,
    dofxaa: true,
    dossao: !Utils.isMobile(),
    doemissive: true,
    ssaoRadius: 64,
    ssaoBias: 0.55,
    ssaoAttenuation: [0.7, 1],
    bloomOffset: 1.5,
    bloomMult: 3.0,
    bloomIteration: 10,
    anisotropicFiltering: 16,
    gamma: 1.0,

    // controls
    forward: 87,
    backwards: 83,
    left: 65,
    right: 68,
    movespeed: 5,
    looksensitivity: 5
};

let Settings = {};

// load possible settings from local storage
if (window.localStorage.getItem('settings') !== null) {
    Console.log('Using stored settings');
    const stored = JSON.parse(localStorage.getItem('settings'));
    Settings = { ...defaults, ...stored };
} else {
    Console.log('Using default settings');
    Settings = defaults;
    localStorage.setItem('settings', JSON.stringify(Settings));
}

Console.registerCmd('settings', Settings);
Console.registerCmd('sstore', () => {
    localStorage.setItem('settings', JSON.stringify(Settings));
});

export { Settings as default };
