export class Orders{
    constructor(
        public order_id: number,
        public order_date: string, // date
        public order_total: number,
        public order_date_delivery: string, // date
        public order_satus: string,
        public customer_id: number


    ){}
}
