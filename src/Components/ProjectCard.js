import React, {Component} from 'react'
import Container from "@material-ui/core/Container"
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Typography from "@material-ui/core/Typography"
import '../Components/css/ProjectCardCSS.css'
import axios from 'axios'
import {baseURL} from '../config'

class ProjectCard extends Component
{
    deleteProject = id =>
    {
        axios.delete(baseURL+"/projects/"+id)
                .then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                })
    }

    render()
    {
        const {projectInfo} = this.props
        return(
            <div>
                <Container fixed>
                    <Card className="ProjectCard">
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>
                                {projectInfo.name}
                            </Typography>

                            <Typography color="textSecondary" gutterBottom>
                                {projectInfo.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="secondary" onClick={() => this.deleteProject(projectInfo.id)}>Delete</Button>
                        </CardActions>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default ProjectCard