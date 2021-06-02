import {useGlobalContext} from '../../context/GlobalContext';
import {SectionDetails} from '../components/sectiondetails/SectionDetails';

import * as React from 'react';

export const ProductsCart: React.FC = () => {
  const {cartWish} = useGlobalContext();
  return (
    <SectionDetails
      title="Sua lista de compras"
      showBack={true}
      products={cartWish}
      enableAddButton={false}
    />
  );
};
