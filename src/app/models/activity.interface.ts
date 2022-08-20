export interface IActivityRequest {
    accessibility: number;
    participants: number;
    price: number;
    type: string;
}

export interface IActivity extends IActivityRequest {
    activity: string;
    key: string;
    link: string;
}
