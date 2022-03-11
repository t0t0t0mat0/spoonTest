export interface Sample {
  packageID: string;
  instrumentID: string;
  isin: string;
  sedol?: string;
  cusip?: string;
  marketID: string;
  type: string;
  name: string;
  currency: string;
  exchange: string;
  maturityDate?: string;
  coupon?: number;
  issueDate?: string;
}
