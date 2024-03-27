import React from 'react'

import { TextField } from "@mui/material"

export const AddUser = () => {
    
    const postUser = (event: React.FormEvent) => {
        
    }

    return (
        <>
            <TextField id="standard-basic" label="User name" variant="standard" onSubmit={postUser} />
        </>
    )
}