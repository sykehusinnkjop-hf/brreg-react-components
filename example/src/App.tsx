import React, { Component } from 'react'

import { BrregSearcher } from 'brreg-components'
import 'brreg-components/dist/index.css'
import { IAccount } from '../../dist/interfaces/IAccount'


interface Props {

}

interface State {
}




export class  App extends Component<Props, State> {
  
  test (test: IAccount) {
    console.log(test)
  }

  render() {
    return <BrregSearcher SearchTerm={"bygg"} SellectedAccountCallback={this.test.bind(this)}></BrregSearcher>
  }
}

