import React, {Component} from 'react'
import Container from "@material-ui/core/Container"


const NothingToShow = () =>
{
    return(
        <div>
            <Container fixed>
                <h1>No Projects Yet!</h1>
                <h3>Create a New Project</h3>
            </Container>
        </div>
    )
}

export default NothingToShow