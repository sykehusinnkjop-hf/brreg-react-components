# brreg-components

>A collection of components to help get accounts from the Brønnøysundregister API, still in early stages, expect changes

[![NPM](https://img.shields.io/npm/v/brreg-components.svg)](https://www.npmjs.com/package/brreg-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save brreg-components
```

## Usage

```tsx
import * as React from 'react'
import {BrregSearcher} from 'brreg-components'
import { IAccount } from 'brreg-components/dist/interfaces/IAccount'

interface Props {
    SearchWord: string | undefined;
    onChange: (newValue: string | undefined) => void;
}
interface State {
    
}

export default class BrregSearchComponent extends React.Component<Props, State> {
    state = {}
    
    //function is called when the user clicks an account
    CallBackFunction(account: IAccount) {
        console.log(account)
        this.props.onChange(account.OrgNumber)
      }

    render() {
        return (
            <div >
                <BrregSearcher SearchTerm={"bygg"} SellectedAccountCallback={this.CallBackFunction.bind(this)}></BrregSearcher>
            </div>
        )
    }
}


```

## License

MIT © [Ballzer0](https://github.com/sykehusinnkjop-hf)
