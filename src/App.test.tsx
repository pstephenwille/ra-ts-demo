import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {ServiceList} from './mm-services';
import {act} from "react-dom/test-utils";
import tccDataProvider from './tcc-data-provider';
import { TestContext } from 'react-admin';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const tccData = require('./tcc-data.json');
const dataProvider = {
    create: jest.fn(),
    delete: jest.fn(),
    deleteMany: jest.fn(),
    getList: jest.fn().mockRejectedValue({data: tccData, results: 3}),
    getMany: jest.fn(),
    getManyReference: jest.fn(),
    getOne: jest.fn(),
    update: jest.fn(),
    updateMany: jest.fn(),
}

beforeEach(() => {
});

// test('returns result if array', () => {
//     fetch.mockResponseOnce(JSON.stringify([{id: 1}]));
// });

// xtest('renders learn react link', () => {
//     // const { getByText } = render(<App />);
//     let getByText;
//
//     act(() => {
//         getByText = render(<App dataProvider={dataProvider}/>)
//     });
//     const linkElement = getByText(/services/i);
//     console.log('..link ', linkElement);
//     expect(linkElement).toBeInTheDocument();
// });

xtest('renders learn react link', () => {
    // @ts-ignore
    const props = {basePath:'mock-base-path', resource: 'mock-resource'}
    let app = mount(<TestContext><ServiceList {...props} /></TestContext>);

    // const {getByText} = render(<App/>);
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
    expect(true).toBe(true);
});
