module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'app.js': /^/
            }
        }
    },
    plugins: {
        autoReload: {
            enabled: true
        },
        afterBrunch: [
            'node sw-generate.js'
        ],
        babel: {
            presets: ['env'],
            plugins: [
                ['transform-runtime', {
                    helpers: false,
                    polyfill: false,
                    regenerator: true,
                    moduleName: 'babel-runtime'
                }]
            ]
        },
        eslint: {
            config: {
                rules: {
                    'indent': ['error', 4],
                    'linebreak-style': 0,
                    'comma-dangle': 0,
                    'no-console': 0,
                    'no-plusplus': 0,
                    'no-multi-assign': 0,
                    'prefer-template': 0,
                    'prefer-spread': 0,
                    'no-mixed-operators': 0,
                    'max-len': 0,
                    'guard-for-in': 0,
                    'no-restricted-syntax':0,
                    'no-use-before-define':0,
                    'space-infix-ops': 0,
                    'new-cap':0,
                    'class-methods-use-this': 0,
                    'operator-assignment': 0,
                    'import/first': 0,
                    'no-loop-func': 0,
                    'no-new': 0,
                    'no-param-reassign': 0,
                    'no-unused-expressions': 0,
                    'arrow-body-style': 0,
                    'no-bitwise': 0,
                    'no-eval': 0,
                    'no-prototype-builtins': 0,
                    'import/no-mutable-exports': 0,
                    'no-confusing-arrow': 0,
                    'no-throw-literal': 0
                },
                globals: [
                    'performance: true',
                    'arrayView: true',
                    'Image: true',
                    'window: true',
                    'navigator: true',
                    'document: true',
                    'cordova: true',
                    'XMLHttpRequest: true',
                    'Event: true',
                    'KeyboardEvent: true',
                    'Fullscreen: true',
                    'Blob: true',
                    'Worker: true',
                    'URL: true',
                    'postMessage: true',
                    'self: true',
                    'close: true',
                    'settings: true',
                    'eval: true',
                    'localStorage: true'
                ]
            }
        }        
    }
};
