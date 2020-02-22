import React from 'react';
import {Admin, Resource, fetchUtils} from 'react-admin';
import tccDataProvider from './tcc-data-provider';
import {ServiceList} from "./mm-services";
import {demoOverrides} from './overrides_const';

const demoUrl = 'http://jsonplaceholder.typicode.com';

const dataProvider = tccDataProvider(demoUrl, fetchUtils.fetch, demoOverrides);


const App = () => (
    <div>
      <Admin dataProvider={dataProvider}>
        <Resource name={'users'} list={ServiceList}/>
      </Admin>

    </div>

);


export default App;
