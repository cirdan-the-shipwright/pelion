export interface IActivityRequest {
    accessibilityMin: number;
    accessibilityMax: number;
    participants: number;
    priceMin: number;
    priceMax: number;
    type: string;
}

export interface IActivity extends IActivityRequest {
    activity: string;
    key: string;
    link: string;
}

export interface IFormModel {
    typeId: number;
    priceId: number;
    participants: number;
    accessibilityId: number;
}

export interface IType {
    id: number;
    displayName: string;
    icon: string;
    value: string;
}

export interface IPrice {
    id: number;
    displayName: string;
    min: number;
    max: number;
}

export interface IAccessibility extends IPrice {}

export interface ITools {
    types: IType[];
    prices: IPrice[];
    accessibilities: IAccessibility[];
}
