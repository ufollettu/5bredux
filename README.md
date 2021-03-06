# React typescript boilerplate

[![Build Status](https://travis-ci.org/fifthbeat/react-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/fifthbeat/react-typescript-boilerplate)
[![Maintainability](https://api.codeclimate.com/v1/badges/31a6d0abf11533eae4ca/maintainability)](https://codeclimate.com/github/fifthbeat/react-typescript-boilerplate/maintainability)
[![Dependencies](https://david-dm.org/fifthbeat/react-typescript-boilerplate.svg)](https://david-dm.org/fifthbeat/react-typescript-boilerplate)

## How to

### Install

Just `cd` into the folder and

```bash
yarn
```

or if you have time to spare

```bas
npm i
```

### Start

```bash
yarn start
```

or if you have time to spare

```bash
npm start
```

### Generate stuff

```bash
yarn generate
```

or if you have time to spare

```bash
npm run generate
```

## Structure

```text
.
├── internals                     # Internal scripts
|   ├── generators                # Generators' config
|   └── webpack                   # Webpack scripts
├── src
│   ├── app                       # App folder
│   |   ├── components            # Components folder
│   |   |   └── componentName     # Single component
│   |   |       ├── index.js
│   |   |       └── styles.js
│   |   ├── views                 # Views folder
│   |   |   └── viewName          # Single view
│   |   |       ├── index.js
│   |   |       └── styles.js
│   |   └── stores                # Stores folder
│   |       └── storeName         # Single store
│   |           ├── index.js
│   |           └── selectors.js
│   ├── assets                    # Images original html and stuff like that
│   ├── beans                     # Internal type definitions
│   ├── constants                 # Global constants
│   ├── utils                     # Useful functions
│   └── global-styles.js          # CSS appliable to all project
└── types                         # Libraries type definitoins
```

## Requirements

- Node >= 10.1
- React create app >= 1.5.2

## Author

- Nicola Bertelloni – [https://github.com/wanbinkimoon](https://github.com/wanbinkimoon)
