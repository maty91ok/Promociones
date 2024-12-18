export interface Discount {
    id: number;
    description: string;
    percentage: number;
    validUntil: Date;
    applicableCards: string[];
}