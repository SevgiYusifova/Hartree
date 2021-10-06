import { SelectableValue } from '@grafana/data';
import React, { FC, useState } from 'react';
import { Button, Select,  HorizontalGroup,  } from "@grafana/ui";
import { ProductTable } from './ProductTable';

export const ProductFinder: FC = () => {

    const options = [
        { label: 'KY-17', value: 0 },
        { label: 'CNS-OP', value: 1 },
        { label: 'LSJ-11', value: 2 },
    ];

    const [value, setValue] = useState<SelectableValue<number>>();

    return (
        <div className="product-finder">
            <HorizontalGroup>
                <Select
                    width={30}
                    placeholder="Source"
                    value={value}
                    options={options}
                    onChange={(v) => {
                        setValue(v);
                    }}
                    isClearable
                />
                <Select
                    width={30}
                    placeholder="Contract"
                    value={value}
                    options={options}
                    onChange={(v) => {
                        setValue(v);
                    }}
                    isClearable
                />
                <Button icon="arrow-right" size="md">
                    GET PRODUCTS
                </Button>
            </HorizontalGroup>

            {/*filter  */}
            <div>
                <ProductTable/>
            </div>

        </div>
    )
}