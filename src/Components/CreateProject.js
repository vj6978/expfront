import React, {Component} from 'react'
import axios from 'axios'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'

class CreateProject extends Component
{
    constructor()
    {
        super()
        this.state = {
            name: '',
            description: ''
        }
    }

    handleForm = (event) => {
        event.preventDefault()

        axios.post("http://localhost:8080/projects", this.state)
                .then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(error.data)
                })
    }

    inputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        }) 
    }

    render()
    {
        return(
            <div>
                <form onSubmit={this.handleForm}>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="name">Project Name</InputLabel>
                            <Input id="name" onChange={this.inputChange} />
                        </FormControl>
                    </div>
                    <div>
                    <FormControl>
                            <InputLabel htmlFor="description">Project Description</InputLabel>
                            <Input id="description" onChange={this.inputChange} />
                        </FormControl>
                    </div>
                    <div>
                        <Button variety="contained" color="primary" type="submit">Submit!</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateProject