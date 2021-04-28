import React, { Component } from 'react'
import { IAccount } from '../interfaces/IAccount'
import AccountRowComponent from './accountRowComponent';

interface AccountViewComponentProps {
    Accounts: IAccount[]
    AccountCallback: (account: IAccount) => void
}
interface AccountViewComponentState {
    
}

export default class AccountViewComponent extends Component<AccountViewComponentProps, AccountViewComponentState> {
    constructor(props: AccountViewComponentProps){
        super(props);
        this.state = {SelectedAccount: undefined}
    }


    render() {
        if(this.props.Accounts.length === 0) {
            return (<div></div>)
        }
         let accounts = [];


         for( let i = 0; i < this.props.Accounts.length; i++) {
             accounts.push(<AccountRowComponent Account={this.props.Accounts[i]} UpdateFunction={this.props.AccountCallback}></AccountRowComponent>)
         }
        return (
            <div>
                {accounts}  
            </div>
        )
    }
}
