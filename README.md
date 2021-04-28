# brreg-components

>A collection of components to help get accounts from the Brønnøysundregister API, still in early stages, expect changes

[![NPM](https://img.shields.io/npm/v/brreg-components.svg)](https://www.npmjs.com/package/brreg-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save brreg-components
```

## Usage

```tsx
export class  App extends Component<Props, State> {

  // callback function recieves an account back when an account is clicked on
  AccountCallback (account: IAccount) {
    console.log(account)
  }

  render() {
    return <BrregSearcher SearchTerm={"bygg"} SellectedAccountCallback={this.test.bind(this)}></BrregSearcher>
  }
}


```

## License

MIT © [Ballzer0](https://github.com/Ballzer0)
