import { SelectableValue } from '@grafana/data';
import React, { FC, useState } from 'react';
import { Button, IconButton, Select, Switch, HorizontalGroup, Input } from "@grafana/ui";


var stylingObject = {
  line: {
    border: "0.1px solid white",
    display: "inline-block",
    width: '100%'
  },
  switchItem: {
    margin: "15px 0px",
  }
};

export const CustomProduct: FC = () => {

  const [value, setValue] = useState<SelectableValue<number>>();

  const options = [
    { label: 'KY-17', value: 0 },
    { label: 'CNS-OP', value: 1 },
    { label: 'LSJ-11', value: 2 },
  ];

  return (
    <div className='custom-product'>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0px' }}>
            <Select
              width={30}
              placeholder="Product name"
              value={value}
              options={options}
              onChange={(v) => {
                setValue(v);
              }}
              isClearable
            />
            <IconButton size={'lg'} name={'link'} variant={'secondary'} style={{ marginLeft: '20px', marginRight: '20px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select
              width={30}
              placeholder="Factor"
              // value={value}
              options={options}
              onChange={(v) => {
                setValue(v);
              }}
              isClearable
            />
            <Button variant='destructive' size="md" icon={'times'} style={{ marginLeft: '20px' }} />
          </div>
        </div>


        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select
              width={30}
              placeholder="Product name"
              // value={value}
              options={options}
              onChange={(v) => {
                setValue(v);
              }}
              isClearable
            />
            <IconButton size={'lg'} name={'link'} style={{ marginLeft: '20px', marginRight: '20px' }} variant={'secondary'} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select
              width={30}
              placeholder="Factor"
              // value={value}
              options={options}
              onChange={(v) => {
                setValue(v);
              }}
              isClearable
            />
            <Button variant='destructive' size="md" icon={'times'} style={{ marginLeft: '20px' }} />
          </div>
        </div>


        <hr style={stylingObject.line} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button icon="plus" size="md" style={{margin: '15px 0px 8px 0px'}}>
            ADD
          </Button>
        </div>

        <div style={{ padding: '10px', margin: '10px 0', backgroundColor: 'white', display: 'flex', alignItems: 'center' }} >
          <p style={{ margin: '0px' }}>{value?.label}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button style={{ margin: '10px 0px' }} icon="eye" size="md">
            PREVIEW CHART
          </Button>
        </div>
      </div>



      <div>
        <Input placeholder="Expression Name"></Input>
        <div style={stylingObject.switchItem} >
          <HorizontalGroup  >
            <Switch />
            <h4 style={{ margin: '0' }}>Not Approved</h4>
          </HorizontalGroup>
        </div>
        <Button style={{ margin: '30px 0px' }} size="md">
          SAVE EXPRESSION
        </Button>
      </div>
    </div>
  )
}