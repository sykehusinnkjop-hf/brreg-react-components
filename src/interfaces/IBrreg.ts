

export interface Self {
    href: string;
}

export interface Links {
    self: Self;
}

export interface Organisasjonsform {
    kode: string;
    beskrivelse: string;
    _links: Links;
}

export interface Postadresse {
    land: string;
    landkode: string;
    postnummer: string;
    poststed: string;
    adresse: string[];
    kommune: string;
    kommunenummer: string;
}

export interface Naeringskode1 {
    beskrivelse: string;
    kode: string;
}

export interface Forretningsadresse {
    land: string;
    landkode: string;
    postnummer: string;
    poststed: string;
    adresse: string[];
    kommune: string;
    kommunenummer: string;
}

export interface Self2 {
    href: string;
}

export interface Links2 {
    self: Self2;
}

export interface Enheter {
    organisasjonsnummer: string;
    navn: string;
    organisasjonsform: Organisasjonsform;
    postadresse: Postadresse | undefined;
    registreringsdatoEnhetsregisteret: string;
    registrertIMvaregisteret: boolean;
    naeringskode1: Naeringskode1;
    antallAnsatte: number;
    forretningsadresse: Forretningsadresse | undefined;
    stiftelsesdato: string;
    registrertIForetaksregisteret: boolean;
    registrertIStiftelsesregisteret: boolean;
    registrertIFrivillighetsregisteret: boolean;
    konkurs: boolean;
    underAvvikling: boolean;
    underTvangsavviklingEllerTvangsopplosning: boolean;
    maalform: string;
    _links: Links2;
}


export interface First {
    href: string;
}

export interface Self3 {
    href: string;
}

export interface Next {
    href: string;
}

export interface Last {
    href: string;
}

export interface Links3 {
    first: First;
    self: Self3;
    next: Next;
    last: Last;
}

export interface Page {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}

export interface BrregSearch {
    _embedded: Embedded;
    _links: Links3 | null;
    page: Page | null;
}

export interface Embedded {
    enheter: Enheter[];
}

