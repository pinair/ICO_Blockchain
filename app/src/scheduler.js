module.exports = (interactor, CreatorDB, BackerDB) => {

    this.killContractIfFundingGoalNotReached = data => {
        interactor
            .showStatus(data)
            .then(result => {
                if (!result.goalReached) {

                    let query = { $pull: { "projects": { address: data.project } } }
                        //remove the project from array of creator projects
                    CreatorDB
                        .updatePull(query)
                        .then(result => console.log(result))
                        .catch(error => console.log(error));

                    //remove project reference to backers
                    BackerDB
                        .updatePull(query)
                        .then(result => console.log(result))
                        .catch(error => console.log(error));

                    interactor.kill(data);
                }
            });
    }

    this.setScheduler = (project, data) => {
        let time = project.deadline - (new Date().getTime());
        console.log(time);
        let timerObj = setTimeout(this.killContractIfFundingGoalNotReached, time, data);
        return timerObj;
    }

    CreatorDB
        .getAll()
        .then(creators => {

            creators.forEach((creator, index) => {
                let createdProjects = creator.projects;

                createdProjects.forEach((project, index) => {
                    let data = {
                        creator: creator._id,
                        project: project.address
                    }

                    console.log(project)
                    this.setScheduler(project, data);
                });

            });
        })
        .catch(error => console.log(error));

    return this;
}