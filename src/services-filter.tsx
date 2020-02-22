import React from 'react';
import {
    Filter,
    SearchInput,
    SelectInput,
    ReferenceInput,
    AutocompleteInput,
} from 'react-admin';

import {demoOverrides} from './overrides_const';


export default (props) => {
    let filters = demoOverrides.autoCompleteFilters.map(name => (
        <ReferenceInput
            key={name}
            source={name}
            reference="users"
            filterToQuery={searchTerm => ({[`q?_${name}`]: searchTerm})}>
            <AutocompleteInput
                optionText={choice => `${choice[name]}`}
                translateChoice={false}
            />
        </ReferenceInput>

    ));

    return (
        <Filter {...props}>
            {filters}
        </Filter>
    )
};
