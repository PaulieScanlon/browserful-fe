# broswerful-fe

[![forthebadge](https://forthebadge.com/images/badges/certified-snoop-lion.svg)](http://forthebadge.com)

Features:

- React
- TypeScript
- Styled Components
- Storybook
- Jest
- Enzyme
- Made with Next.js
- [react-grid-system](https://github.com/JSxMachina/react-grid-system#readme) - [API](https://jsxmachina.github.io/react-grid-system/)

### Development

server.js contains the named routes, these are:

- ./
- ./app/matrix
- ./app/messages

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

### caniuse data

API:  
`https://s3.eu-west-2.amazonaws.com/browserful/caniuse/data-1.0.json`  
`https://s3.eu-west-2.amazonaws.com/browserful/caniuse/data-2.0.json`
