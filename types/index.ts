export interface IPrice {
    id: string;
    title: string;
    description: string;
    price: string;
    credits: string;
    salesPrice?: string;
}

export interface IEmailData {
    message: string;
    subject: string;
    email: string;
}