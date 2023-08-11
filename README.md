# EasyKeys
> Generate cryptographically secure keypairs

- Works in both node and the browser
- Zero dependencies

## Usage
### Node
```
npm i easykeys
```

#### Test
Install Mocha
```
npm i mocha -g
```

Run test
```
npm test
```

The test generates 10,000 keypairs and passes if the average [entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)) is greater than 4.5 (6 is perfect, 0 is not sufficiently random for between 32 and 64 bit keys).

### Browser
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/easypeers/easykeys@master/index.js"></script>
```

## API
### `new EasyKeys()`
Create a new instance

### `easyKeys.pair()`
Return a keypair

## License
MIT