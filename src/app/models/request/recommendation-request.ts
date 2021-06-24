import {ItemRequest} from './item-request';

export class RecommendationRequest{
  companyName: string;
  date: string;
  cardType: string;
  product: string;
  program: string;
  items: ItemRequest[];
}
