import { Pagination, Table, VerticalGroup } from '@grafana/ui';
import { FieldType, toDataFrame } from '@grafana/data'
import React, { FC } from 'react';

export const ProductTable: FC = () => {

  let productNames = ['OLS-29', 'KT-OP', 'OLS-29', 'KT-OP']

  const data = toDataFrame({
    name: 'Products',
    fields: [
      { name: 'Product names', type: FieldType.string, values: productNames },
    ],
  });


  return (
    <VerticalGroup >
      <Table data={data} width={30} height={30} />
      <Pagination numberOfPages={10} currentPage={1} onNavigate={() => fetchPage(2)}/>
    </VerticalGroup>
  )
}