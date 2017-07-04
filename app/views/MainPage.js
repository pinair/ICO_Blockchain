import React, { Component } from 'react';

// import { Projects } from '../../api/projects';

import ProjectsPage from './ProjectsPage';
import AddProjectComponent from './project/AddProjectComponent';
// import OpenProjectsPage from './OpenProjectsPage';
// import ProjectsBacked from './ProjectsBacked';

class MainPage extends Component {

    showUserProjects() {
      // return this.props.projects.map((project) => {
      //   return (
      //     <ProjectsPage />
      //   );
      // });
    }

    addProject() {
       return <AddProjectComponent />;
    }

    openProjects() {
        // return (
        //     <OpenProjectsPage />
        // );
        null;
    }

    projectsBacked() {
      // return (
      //   <ProjectsBacked />
      // )
      null
    }

    render() {
        return (
          <div>
            <div className="container">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#projects">My Projects</a></li>
                <li><a data-toggle="tab" href="#exploreProjects">Explore</a></li>
                <li><a data-toggle="tab" href="#backedProjects">Backed</a></li>
              </ul>
              <div className="tab-content">
                <div id="projects" className="tab-pane fade in active">
                  {this.addProject()}
                  {this.showUserProjects()}
                </div>
                <div id="exploreProjects" className="tab-pane fade">
                   {this.openProjects()}
                </div>
                <div id="backedProjects" className="tab-pane fade">
                  {this.projectsBacked()}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

module.exports = MainPage;
