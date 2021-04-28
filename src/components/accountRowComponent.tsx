import React, { Component } from 'react'
import { IAccount } from '../interfaces/IAccount'
import { Icon } from '@fluentui/react/lib/Icon';
import AddressComponent from './addressComponent';

interface AccountRowComponentProps {
    Account: IAccount
    UpdateFunction: (account: IAccount) => void
}
interface AccountRowComponentState {
    
}

export default class AccountRowComponent extends Component<AccountRowComponentProps, AccountRowComponentState> {
    constructor(props: AccountRowComponentProps) {
        super(props)
    }



    render() {
        let account = this.props.Account

        return (
            <div style={{display: "flex"}} onClick={()=> this.props.UpdateFunction(account)}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent:"center", margin: "1rem", fontSize:70}}>
                    <Icon iconName="EMI"/>
                </div>
                <div>
                    <h3 style={{marginBottom:0}}>{this.props.Account.Name}</h3>
                    <text>{this.props.Account.OrgNumber}</text>
                    <AddressComponent Address={this.props.Account.BusinessAddress}></AddressComponent>
                </div>
            </div>
        )
    }
}
