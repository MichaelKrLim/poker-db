import {TextField} from "@mui/material"

import axios from 'axios';

export const AddUser = () => {
    const postUser = (userName: String) => {
        axios.get('http://localhost/api.php/records/users')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        axios.post('http://localhost/api.php/records/users', {
            name: userName
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <div className="addUser">
            <TextField className="newUserTextfield" name="test" id="standard-basic" label="User name" variant="standard" onKeyDown={(e) => {
                if(e.code=="Enter") { // @ts-ignore
                    postUser(e.target.value)
                }}}
            />
        </div>
    )
}