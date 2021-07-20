import React from 'react';
import { Select as MuiSelect, MenuItem, InputLabel, FormControl } from '@material-ui/core';

export const Select = ({array, onChange, state, label}) => {
    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <MuiSelect 
                    value={state}
                    onChange={event => {
                        onChange(event.target.value)
                    }}
                    defaultValue=""
                >
                {array.map(item => {
                    return <MenuItem key={item} value={item}>{item}</MenuItem>
                })}
            </MuiSelect>
        </FormControl>
    )
}

export default Select