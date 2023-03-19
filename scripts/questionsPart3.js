const questions = [
  {
    question: 'When is the Sprint Backlog created? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Any time before Sprint Planning.', correct: false },
      { text: 'During Product Backlog refinement.', correct: false },
      { text: 'At least one or two Sprints ahead.', correct: false },
      { text: 'During Sprint Planning.', correct: true }
    ]
  },
  {
    question: 'Which two statements are correct during the Sprint? \n \
    A - The Sprint Goal emerges as the Developers work through the plan and learns more about the work. \n \
    B - The scope may be clarified as more is learned. \n \
    C - The scope may be re-negotiated as more is learned. \n \
    D - The Developers focus on finishing all Sprint Backlog items as their commitment from Sprint Planning.',
    answers: [
      { text: 'A and B', correct: false },
      { text: 'B and C', correct: true },
      { text: 'C and D', correct: false },
      { text: 'B and D', correct: false }
    ]
  },
  {
    question: 'Of the following activities, which is the best way to promote transparency of an Increment? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Sending a daily status report to the stakeholders.', correct: false },
      { text: 'Estimate the work needed to complete the items in hours rather than days.', correct: false },
      { text: 'Log any technical debt incurred during development on a separate but transparent list.', correct: false },
      { text: 'Doing the work that is necessary to meet the current Definition of Done.', correct: true }
    ]
  },
  {
    question: 'Which is the best description of the Sprint Backlog? \n \
    (choose the best answer)?',
    answers: [
      { text: 'It is a finalized list of items that the Developers commit to completing by the end of the Sprint.', correct: false },
      { text: 'Each task is assigned an owner.', correct: false },
      { text: 'It is the Developers\' plan for the Sprint.', correct: true },
      { text: 'User Stories are no bigger than 8 Story Points.', correct: false },
      { text: 'It is ordered by the Scrum Master.', correct: false }
    ]
  },
  {
    question: 'What is time-boxing? \n \
    (choose the best answer)?',
    answers: [
      { text: 'It refers to emphasizing achieving results by focusing on the needs of the Scrum Team.', correct: false },
      { text: 'It refers to delivering maximum business value in a minimum time span', correct: false },
      { text: 'It refers to prioritizing creation of high value deliverables over lower value deliverables.', correct: false },
      { text: 'It proposes fixing a certain timeframe for each activity. ', correct: true }
    ]
  },
  {
    question: 'At the end of a Sprint, one of the items that is in progress does not meet the Definition of Done. \
    What should happen the item? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Modify the Definition of Done so that the item can be added to the Increment.', correct: false },
      { text: 'Add the completed work of the item to the Increment and create a separate Product Backlog \
              item to make it \'done\' in the next Sprint.', correct: false },
      { text: 'Do not include the item in the Increment, put it back in the Product Backlog, and let \
              the Product Owner decide what to do with it.', correct: true },
      { text: 'Extend the Sprint until item is \'done\' and can be added to the Increment.', correct: false }
    ]
  },
  {
    question: 'Who is required to attend the Daily Scrum? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The Scrum Master and Product Owner.', correct: false },
      { text: 'The Developers and Scrum Master.', correct: false },
      { text: 'The Developers.', correct: true },
      { text: 'The Developers and Product Owner.', correct: false },
      { text: 'The Scrum Team.', correct: false }
    ]
  },
  {
    question: 'True or False: At least 1 action must be taken from the Retrospective and added to the next Sprint Backlog?"',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
    ]
  },
  {
    question: 'For a 2 week sprint how long can Sprint Planning take? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Up to 4 hours', correct: false },
      { text: 'Up to 8 hours', correct: true },
      { text: 'There is no time box for Sprint Planning', correct: false },
      { text: 'Up to 3 hours', correct: false }
    ]
  },
  {
    question: 'The Definition of Done is? \n \
    (choose the best answer)?',
    answers: [
      { text: 'A complimentary practice to Scrum', correct: false },
      { text: 'An Artifact', correct: false },
      { text: 'A commitment', correct: true },
      { text: 'A quality gate that code needs to pass before it can be tested', correct: false }
    ]
  }
]
