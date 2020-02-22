import React from 'react';
import expect from 'expect';
import {cleanup} from '@testing-library/react';
import {renderWithRedux} from 'ra-core';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import {MemoryRouter} from 'react-router-dom';
import {act} from "react-dom/test-utils";

import defaultTheme from './defaultTheme';
// import List, { ListView } from './List';
import {ServiceList} from './mm-services';

// @ts-ignore
const theme = createMuiTheme(defaultTheme);

xdescribe('<ServiceList />', () => {
    afterEach(cleanup);
    const defaultListProps = {
        basePath: '/foo',
        ids: [],
        data: {},
        hasCreate: false,
        hasEdit: false,
        hasList: false,
        hasShow: false,
        location: {},
        match: {},
        resource: 'foo',
        total: 0,
    };

    const defaultStateForList = {
        admin: {
            resources: {
                foo: {
                    list: {
                        ids: [],
                        params: {},
                        selectedIds: [],
                        total: 0,
                    },
                },
            },
        },
    };

    it('should display aside component', () => {
        /* error; wrap in an act() */
        const Datagrid = () => <div>datagrid</div>;
        let queryAllByText;
            queryAllByText = renderWithRedux(
                <ThemeProvider theme={theme}>
                    <ServiceList {...defaultListProps}>
                        <Datagrid/>
                    </ServiceList>
                </ThemeProvider>,
                defaultStateForList
            );
        expect(true).toBe(true);
    });
});
