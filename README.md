# broswerful-fe

[![forthebadge](https://forthebadge.com/images/badges/certified-snoop-lion.svg)](http://forthebadge.com)

Features:

- React
- TypeScript
- React Emotion
- Storybook
- Jest
- Enzyme
- Browserslist
- ReCharts
- Made with Next.js
- [react-grid-system](https://github.com/JSxMachina/react-grid-system#readme) - [API](https://jsxmachina.github.io/react-grid-system/)

### Development

server.js contains the named routes, these are:

- ./
- /freeview/matrix => Freeview Matrix uses the set and get url methods and the Redux state
- /app/matrix => App Matrix will use only the Redux state + api

Each route resolves to a .tsx in ./src/pages.
For example http://localhost:3030/app/matrix resolves to ./src/pages/matrix.tsx

#### Dev:

```sh
yarn dev
```

```sh
Access URL:
------------------------------
  Local: http://localhost:3030
------------------------------
```

#### Storybook:

```sh
yarn storybook
```

```sh
Access URL:
------------------------------
  Local: http://localhost:6060
------------------------------
--------------------------------------------------------
  Public: https://PaulieScanlon.github.io/browserful-fe/
--------------------------------------------------------
```
