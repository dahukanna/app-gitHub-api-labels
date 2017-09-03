/*
## ==========================================================================
## Updated on Sunday 3 Sep 2017 16:27:20 GMT+0200 (CST)
## Description: NodeJs JavaScript code for config and running application to manage GitHub and GitHub Enterprise issue labels.
## Package: NodeJs JavaScript code to manage GitHub and GitHub Enterprise issue labels.
## Version: v0.0.1
## Contributors: Dawn Ahukanna <dawn.n.ahukanna@ibm.com>
## Licence: MIT
##
## Notice:
## ==========================================================================
##
*/

/*
===================
Declare variables
===================
*/
var gitLabel = require('git-label');

//Default Github repo issue labels.
var labelsRepoDefault =
[
  {
    "name": "bug",
    "color": "ee0701"
  },
  {
    "name": "duplicate",
    "color": "cccccc"
  },
  {
    "name": "enhancement",
    "color": "84b6eb"
  },
  {
    "name": "help wanted",
    "color": "128A0C"
  },
  {
    "name": "invalid",
    "color": "e6e6e6"
  },
  {
    "name": "question",
    "color": "cc317c"
  },
  {
    "name": "wontfix",
    "color": "ffffff"
  }
]

//Defined repo issue labels for code repos, including KanBan status.
/*
axis 1. Labels for Project experimentation in order of statbility: Fidelity_Low > Fidelity_Mid > Fidelity_High > Fidelity_Pilot > Fidelity_Production > Fidelity_Rollout.

axis 2. Kanban status labels, in order of workflow: @new > @backlog > @toDo > @inProgress < > @stalled and @closed-*.

axis 3. Agile labels for Epics, Stories and Tasks: StoryEpic = (x * (StoryItem = y * StoryTask)).

axis 4. Project labels - Critical and enhancement.
*/
var labelsRepoKanban =
[
  {
    "name": "Fidelity_High",
    "color": "c2e0c6"
  },
  {
    "name": "Fidelity_Low",
    "color": "c2e0c6"
  },
  {
    "name": "Fidelity_Mid",
    "color": "c2e0c6"
  },
  {
    "name": "Fidelity_Pilot",
    "color": "c2e0c6"
  },
  {
    "name": "@backlog",
    "color": "0e8a16"
  },
  {
    "name": "@closed-complete",
    "color": "0e8a16"
  },
  {
    "name": "@closed-moved-to-ideation",
    "color": "0e8a16"
  },
  {
    "name": "@closed-pull-request",
    "color": "0e8a16"
  },
  {
    "name": "@closed-rejected",
    "color": "0e8a16"
  },
  {
    "name": "@inProgress",
    "color": "0e8a16"
  },
  {
    "name": "@new",
    "color": "0e8a16"
  },
  {
    "name": "@stalled",
    "color": "0e8a16"
  },
  {
    "name": "@toDo",
    "color": "0e8a16"
  },
  {
    "name": "@toReview",
    "color": "0e8a16"
  },
  {
    "name": "StoryEpic",
    "color": "5a8700"
  },
  {
    "name": "StoryItem",
    "color": "8CD211"
  },
  {
    "name": "StoryTask",
    "color": "B4E051"
  },
  {
    "name": "Critical",
    "color": "b60205"
  },
  {
    "name": "enhancement",
    "color": "84b6eb"
  }
];

//GitHub API URL
var GitHub_API_URL='https://api.github.com'

// User name or Org name/repository name
var targetRepo='[Insert your repository here]';

// Generate personal access tokens from this URL - https://github.ibm.com/settings/tokens
/*
Select the following options for your Personal Access Token.
  [x] repo - Full control of private repositories
    [x] repo:status - Access commit status
    [x] repo_deployment - Access deployment status
    [x] public_repo - Access public repositories
*/
var personalAccessToken='[Insert your Personal Access Token here]';

var config = {
  api   : GitHub_API_URL,
  repo  : targetRepo,
  token : personalAccessToken
};
console.log("====");
console.log("API Endpoint: " + config.api);
console.log("Target Repository: " + config.repo);
//console.log("Personal Access Token: " + config.token);
console.log("====");

/*
===================
Manage repo issue labels
===================
*/

// Remove default repo labels
gitLabel.remove(config, labelsRepoDefault)
  .then(console.log)  //=> success message
  .catch(console.log) //=> error message

// Add defined KanBan labels to repo.
gitLabel.add(config, labelsRepoKanban)
  .then(console.log)  //=> success message
  .catch(console.log) //=> error message
