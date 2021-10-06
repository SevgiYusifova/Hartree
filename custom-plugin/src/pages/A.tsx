import { AppRootProps } from '@grafana/data';
import React, { FC } from 'react';
import { CustomProduct } from './components/CustomProduct/CustomProduct'
import { HorizontalGroup } from "@grafana/ui";
import { ProductFinder } from './components/ProductFinder/ProductFinder';


export const A: FC<AppRootProps> = ({ query, path, meta }) => {

  return (
    <HorizontalGroup align={'flex-start'} justify={'space-between'}>

      <CustomProduct />
      <ProductFinder/>

    </HorizontalGroup>
  );
};
