import { AppRootProps } from '@grafana/data';
import React, { FC, useState } from 'react';
import {Select} from '@grafana/ui';

export const A: FC<AppRootProps> = ({ query, path, meta }) => {

  const [value, setValue] = useState<SelectableValue<number>>();

  const options = [
    { label: 'KY-17', value: 0 },
    { label: 'CNS-OP', value: 1 },
    { label: 'LSJ-11', value: 2 },
  ];

  return (
    <div style={{display: 'flex'}}>
      <Select
        value={value}
        options={options}
        onChange={v => {
          setValue(v);
        }}
        isClearable
      />
      <Select
        value={value}
        options={options}
        onChange={v => {
          setValue(v);
        }}
        isClearable
      />
    </div>
  );
};
