import { Pagination, Table } from '@grafana/ui';
import { FieldType, toDataFrame, applyFieldOverrides } from '@grafana/data'
import React, { FC, useState } from 'react';
import { config } from '@grafana/runtime';
import * as _ from 'lodash';

export const ProductTable: FC = () => {

  let productNames: string[] = ['OLS-29', 'KT-OP', 'OLS-29', 'KT-OP', 'OLS-29', 'KT-OP', 'OLS-29', 'KT-OP']

  const [page, setPage] = useState(1);

  const product_data = toDataFrame({
    name: 'Products',
    refId: 'A',
    fields: [{ name: 'Product Name', type: FieldType.string, values: _.take(productNames, 10) }],
  });

  const renderable_product_data = applyFieldOverrides({
    data: [product_data],
    fieldConfig: {
      overrides: [],
      defaults: {},
    },
    theme: config.theme as any,
    replaceVariables: (value: string) => value,
  });


  return (
    <div style={{ marginTop: '30px' }}>
      <Table data={renderable_product_data[0]} width={700} height={300} />
      <div style={{marginTop: '20px', paddingBottom: '0px',display: 'flex', justifyContent: 'center'}}>
        <Pagination numberOfPages={10} currentPage={page} onNavigate={setPage} />
      </div>
    </div>
  )
}