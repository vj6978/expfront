import React, {Component} from 'react'
import axios from 'axios'
import {baseURL} from '../config'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ProjectCard  from '../Components/ProjectCard'
import NothingToShow from '../Components/NothingToShow'
import CreateProject from '../Components/CreateProject'
import './css/DashboardCSS.css'

class Dashboard extends Component 
{
    constructor()
    {
        super()
        this.state = {
            projects: []
        }
    }

    componentDidMount()
    {
        axios.get(baseURL+"/projects")
            .then(response => {
                this.setState({
                    projects: response.data
                })
            }).catch(error => {
                console.log(error)
            })
    }

    render()
    {
        const {projects} = this.state

        return(
            
            <div>
                    <GridList cellHeight={160}>
                        {
                            projects.length ? projects.map(project => (
                                        <GridListTile key={project.id} cols={3} padding={10}>
                                            <ProjectCard projectInfo={project} />
                                        </GridListTile>
                            ))
                            : <NothingToShow />
                        }

                    <CreateProject />
                    </GridList>         
            </div>
        )
    }
}

export default Dashboard