# EasyKey
> Generate cryptographically secure keypairs

- Works in both node and the browser
- Zero dependencies

## Usage
### Node
```
npm i easykey
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
<script type="module" src="coming soon"></script>
```

## API
### `new EasyKey()`
Create a new instance

### easyKey.pair()
Return a keypair

## License
MIT