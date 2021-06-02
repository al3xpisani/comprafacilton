import * as React from 'react';
import {useState, useEffect} from 'react';
import {SectionDetails} from '../components/sectiondetails/SectionDetails';
import {mapProducts} from '../../mapping/customMap';
import faker from 'faker';

export const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<mapProducts | undefined>([]);

  useEffect(() => {
    faker.locale = 'pt_BR';
    const createProduct = () => {
      return {
        uuid: faker.datatype.uuid(),
        productName: faker.commerce.productName(),
        price: {min: Number(faker.commerce.price())},
        productDescription: faker.commerce.productDescription(),
        image: faker.image.image(),
      };
    };

    setProducts(new Array(10).fill(undefined).map(createProduct));
  }, []);

  return (
    <SectionDetails
      title="Compra fácil Ton"
      showBack={false}
      products={products}
    />
  );
};
