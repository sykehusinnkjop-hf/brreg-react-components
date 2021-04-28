import React, { Component } from 'react'
import { IAddress } from '../interfaces/IAccount'
import { Icon } from '@fluentui/react/lib/Icon';


interface Props {
    Address: IAddress | undefined
}
interface State {

}

export default class AddressComponent extends Component<Props, State> {
    state = {}

    render() {
        if (this.props.Address === undefined) {
            return
        }
        return (
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent:"center", margin: "1rem"}}>
                    <Icon iconName="MapPin" />
                </div>
                <div>
                    <div>{this.props.Address.Country}</div>
                    <div>{this.props.Address.ZipCode + " " + this.props.Address.PostOffice}</div>
                    <div>{this.props.Address.Address[0]}</div>
                </div>
            </div>
        )
    }
}
