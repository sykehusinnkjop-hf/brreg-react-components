import React, { Component } from 'react';
import styles from './styles.module.css'
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import { BrregSearch, Enheter, Postadresse } from './interfaces/IBrreg'
import AccountViewComponent from './components/accountViewComponent';
import { IAccount, IAddress } from './interfaces/IAccount';

initializeIcons();

interface Props {
  SearchTerm: string
  SellectedAccountCallback: (account: IAccount) => void // is called with when a account is selected
}

interface State {
  DataFetched: boolean
  response: BrregSearch | undefined
}


export class BrregSearcher extends Component<Props, State>  {

  constructor(props: Props | Readonly<Props>) {
    super(props)
    this.state = {DataFetched:false , response:undefined}
  }



  private static async SearchBrreg(searchPhrase:string):Promise<BrregSearch> {
    let response:Response

    var pattern = new RegExp("^\\d{9}$");

    //If the searchPhrase is a 9 digit number, query for orgNumber, else Query for the name.
    if(pattern.test(searchPhrase)) {
      response = await fetch("https://data.brreg.no/enhetsregisteret/api/enheter/?organisasjonsnummer=" + searchPhrase)
    } else {
      response = await fetch("https://data.brreg.no/enhetsregisteret/api/enheter/?navn=" + searchPhrase)
    }

    let responsejson = await response.json();

    let result = (responsejson as BrregSearch)


    if (result._embedded === undefined) {
      result._embedded = {enheter:[]}
    }

    return result
  }




  MapAddressData(addresse: Postadresse| undefined):IAddress {

    if(addresse != undefined) {
      return{
        Country: addresse.land,
        CountryCode: addresse.landkode,
        ZipCode: addresse.postnummer,
        PostOffice: addresse.poststed,
        Address: addresse.adresse,
        Municipal: addresse.kommune,
        MunicipalNumber: addresse.kommunenummer,
      }
    }
    return {
      Country:"",
      CountryCode: "",
      ZipCode: "",
      PostOffice: "",
      Address: [],
      Municipal: "",
      MunicipalNumber: "",
    }
  }

  MapBrregToAccounts(enheter: Enheter[]):IAccount[]{
    let accounts:IAccount[] = []

    for(let i = 0; i < enheter.length; i++) {
      let enhet = enheter[i];
      accounts.push({
        DataSource: "Brreg",
        OrgNumber: enhet.organisasjonsnummer, 
        Name: enhet.navn, 
        PostAddress: this.MapAddressData(enhet.postadresse),
        NumberOfEmployees: enhet.antallAnsatte,
        BusinessAddress: this.MapAddressData(enhet.forretningsadresse),
        FoundedOn: new Date(enhet.stiftelsesdato),
        Bankrupt: enhet.konkurs
      })
    }

    console.log(accounts)

    return accounts
  }

  async componentDidMount() {
    let response = await BrregSearcher.SearchBrreg(this.props.SearchTerm)
    this.setState({response:response})
  }

  async componentDidUpdate(prevProps: Props) {
    if(this.props.SearchTerm != prevProps.SearchTerm) {
      let response = await BrregSearcher.SearchBrreg(this.props.SearchTerm)
      this.setState({response:response})
    }
  }

  render() {
    if (this.state.response === undefined) {
      return <div></div>
    }

    return (
      <div>
        <div className={styles.test}>Søkeord: {this.props.SearchTerm}</div>
        <AccountViewComponent Accounts={this.MapBrregToAccounts(this.state.response._embedded.enheter)} AccountCallback={this.props.SellectedAccountCallback}></AccountViewComponent>
      </div>
    )
  }
}


