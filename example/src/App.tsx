import React, { Component } from 'react'

import { BrregSearcher } from 'brreg-components'
import 'brreg-components/dist/index.css'
import { IAccount } from '../../dist/interfaces/IAccount'
import { SearchBox } from '@fluentui/react/lib/SearchBox';

interface Props {

}

interface State {
  searchWord: string
}




export class App extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>){
    super(props)
    this.state = {searchWord:""}
  }

  test(test: IAccount) {
    console.log(test)
  }

  OnSearch(SearchWord: string) {
    this.setState({searchWord: SearchWord})
}


  render() {
    return (
      <div>
        <SearchBox onChange={(_, newValue) => ( this.OnSearch(newValue || ""))}></SearchBox>
        <BrregSearcher SearchTerm={this.state.searchWord} SellectedAccountCallback={this.test.bind(this)}></BrregSearcher>
      </div>
    )
  }
}

