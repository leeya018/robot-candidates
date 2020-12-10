module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "standard-jsx",
    ],
    "parserOptions": {
        "ecmaVersion": 10,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        // "indent": [
        //     "error",
        //     2
        // ],
        // "linebreak-style": ["error", "unix"],
        // "quotes": ["error", "double"],
        // "semi": [
        //     "error",
        //     "never"
        // ],
        "react/no-deprecated": [
            "error"
        ],
        // "react/no-unescaped-entities": [
        //     "error",
        //     {
        //         "forbid": [">", "}"],
        //     },
        // ]
    }
}
