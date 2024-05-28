import axios from 'axios';
import { IEmailData, IPrice } from '@/types';

class Price implements IPrice {
  id: string;
  title: string;
  description: string;
  price: string;
  credits: string;
  salesPrice?: string;
  constructor(priceItem: any) {
    this.id = priceItem.id;
    this.title = priceItem.properties.name;
    this.description = priceItem.properties.description;
    this.price = priceItem.properties.price;
    this.credits = priceItem.properties.credits;
    this.salesPrice = priceItem.properties.sales_price;
  }
}

export const getPrices = async () => {
  const api = axios.create({ baseURL: 'https://api.hubapi.com/crm/v3/objects' });
  api.defaults.headers.common['Authorization'] = `Bearer ${process.env.HUB_SPOT_KEY}`;

  const params = ['id', 'credits', 'price', 'name', 'description'];

  const payload = await api.get(`/products?properties=${params.join(',')}`).then(({ data }) => data.results);
  const prices = payload.map((priceItem: any) => new Price(priceItem));


  return prices;
}
