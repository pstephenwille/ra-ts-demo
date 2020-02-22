import React from 'react';
import {List, Datagrid, TextField} from 'react-admin';
import ServicesFilter from './services-filter';
import {demoOverrides} from './overrides_const';

export const ServiceList = props => {
    return (
        <List {...props} filters={<ServicesFilter/>}>
            <Datagrid optimized rowClick="edit">
                {demoOverrides.columnNames.map((name, id) => (<TextField key={id} source={name}/>))}
            </Datagrid>
        </List>
    )
};

