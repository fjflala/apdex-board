# Apdex Board
New Relic challenge

## Architecture
The architecture of the project is based OOP.
The idea of the project is to be scalable, mantainable and well writen code.
It uses a small implementation of redux to manage the state of the entire application.

## Requirements
### getTopAppsByHost
Run in browser's console:
```
ApdexBoardApp.getTopAppsByHost(hostName); // By default the limit is 25, but you can specify it sending an limit param
```
### removeAppFromHosts
Run in browser console:
```
ApdexBoardApp.removeAppFromHosts([hostName], app); // app must have a name property
```

### addAppToHosts
Run in browser's console:
```
ApdexBoardApp.addAppToHosts([hostName], app); // app must have a name property and apdex
```


### Develop
```
git clone https://github.com/fjflala/apdex-board.git
npm install
npm run watch
npm run start:dev
```

### Test
```
npm run test
```

### Dependencies
+ NodeJS
+ Webpack
+ Babel (React Preset)
+ Jest
+ http-server

> Notice: This project actually not use React, just the preset for babel, to transform the JSX syntax tree into an object. The creation of the DOM elements are made by this [util](https://github.com/fjflala/apdex-board/tree/master/src/utils/dom)