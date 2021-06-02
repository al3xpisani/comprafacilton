interface mappable {
  uuid: string;
  productName: string;
  price: {min: number};
  productDescription: string;
  image: string;
}

export interface mapProducts extends Array<mappable> {}
