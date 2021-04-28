export interface IAccount {
    DataSource: string
    OrgNumber: string
    Name: string
    PostAddress: IAddress | undefined
    NumberOfEmployees: number
    BusinessAddress: IAddress | undefined 
    FoundedOn: Date
    Bankrupt: boolean
}

export interface IAddress {
    Country: string
    CountryCode: string
    ZipCode: string
    PostOffice: string
    Address: string[]
    Municipal: string
    MunicipalNumber: string

}


