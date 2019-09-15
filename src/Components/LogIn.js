import React, {Component} from 'react'
import axios from 'axios'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import {baseURL} from '../config'

class LogIn extends Component
{
    constructor()
    {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleForm = (event) => {
        event.preventDefault()

        axios.post(baseURL + "/login", this.state)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }

    render()
    {
        return(
            <div>
                 <form onSubmit={this.handleForm}>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" onChange={this.inputChange} />
                        </FormControl>
                    </div>
                    <div>
                    <FormControl>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" onChange={this.inputChange} />
                        </FormControl>
                    </div>
                    <div>
                        <Button variety="contained" color="primary" type="submit">Submit!</Button>
                    </div>
                </form>
            </div>
        )
    }

}

export default LogIn