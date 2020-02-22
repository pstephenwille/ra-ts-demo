import React from 'react';
import {TestContext} from 'react-admin';
import {shallow, mount, render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {List, Datagrid, TextField} from 'react-admin';

configure({adapter: new Adapter()});

import {ServiceList} from "./mm-services";
import {bool} from "prop-types";

jest.mock('react-admin', () => ({
    List: ({children}) => <div/>,
    Datagrid: ({children}) => <div/>,
    TextField:({children})=><div />
}));

// jest.mock('List', () => {
// });


// const defaultListProps = {
//     basePath: 'mock',
//     ids: [],
//     data: {},
//     hasCreate: false,
//     hasEdit: false,
//     hasList: false,
//     hasShow: false,
//     location: {},
//     match: {},
//     resource: 'services',
//     total: 0,
// };

describe('my test ', () => {

    fit('woot ', () => {
        const service = shallow(<ServiceList props={{}}/>);
        const textField = service.find(TextField);

        expect(textField.at(1).props().source).toEqual('email');
    });
});

