export class Listing {
  public address: string;
  public listedPrice: number;
  public dateListed: Date;

  constructor(address: string, listedPrice: number, dateListed: Date) {
    this.address = address;
    this.listedPrice = listedPrice;
    this.dateListed = dateListed;
  }
}
