module.exports = {
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": 3,
            "modules": false // lets webpack handle the conversion of ES modules imports to enable treeshaking - https://babeljs.io/docs/en/babel-preset-env#modules
        }],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    "plugins": ["babel-plugin-react-scoped-css"]
}
