const questions = [
  //Part 1 Questions
  {
    set: 'Part1',
    question: 'What should be delivered at the end of the first Sprint? \n \
    A - Potentially shippable product Increment. \n \
    B - A formulated plan for the subsequence Sprints. \n \
    C - At least one piece of working software. \n \
    D - A completely refined Product Backlog with estimations and task breakdown \n \
    E - A proof of concept. \n \
    (choose the best answer)',
    answers: [
      { text: 'A and C', correct: true },
      { text: 'A, C and E', correct: false },
      { text: 'C and D', correct: false },
      { text: 'All of the above', correct: false }
    ]
  },
  {
    set: 'Part1',
    question: 'The three pillars of empirical process control consist of: \n \
    (choose the best answer)?',
    answers: [
      { text: 'Planning, Inspection, Adaptation', correct: false },
      { text: 'Inspection, Transparency, Adaptation', correct: true },
      { text: 'Planning, Demonstration, Retrospective', correct: false },
      { text: 'Respect for People, Kaizen, Eliminating Waste', correct: false }
    ]
  },
  {
    set: 'Part1',
    question: 'Which best describes the management style used in the Scrum framework? \n \
    (choose the best answer)',
    answers: [
      { text: 'Authoritarian', correct: false },
      { text: 'Decentralized', correct: true },
      { text: 'Persuasive', correct: false },
      { text: 'Assertive', correct: false }
    ]
  },
  {
    set: 'Part1',
    question: 'Which of the following is NOT an advantage of using Scrum to deliver projects? \n \
    (choose the best answer)',
    answers: [
      { text: 'It makes projects adaptable and open to incorporating change.', correct: false },
      { text: 'It minimizes non-essential work and leads to higher efficiency levels.', correct: false },
      { text: 'It leads to greater levels of motivation among employees.', correct: false },
      { text: 'It ensures that all requirements are delivered at the end of the project.', correct: true }
    ]
  },
  {
    set: 'Part1',
    question: 'Which statement best describes Scrum? \n \
    (choose the best answer)',
    answers: [
      { text: 'A clearly defined methodology that defines the software development process.', correct: false },
      { text: 'A manual for defining best practices for software development.', correct: false },
      { text: 'A clearly defined and predictable process that follows the principles of Computer Science.', correct: false },
      { text: 'A framework to address complex problems in complex environments.', correct: true }
    ]
  },
  {
    set: 'Part1',
    question: 'Scrum is based on which of the following? \n \
    (choose the best answer)',
    answers: [
      { text: 'Defined process.', correct: false },
      { text: 'Complex process.', correct: false },
      { text: 'Empiricism.', correct: true },
      { text: 'Hybrid model.', correct: false }
    ]
  },
  {
    set: 'Part1',
    question: 'Which Scrum Value impacts trust? \n \
    A - Focus \n \
    B - Respect \n \
    C - Openess \n \
    D - Courage \n \
    E - Commitment \n \
    (choose the best answer)',
    answers: [
      { text: 'A and B', correct: false },
      { text: 'A and D', correct: false },
      { text: 'C, D, and E', correct: false },
      { text: 'E', correct: false },
      { text: 'C and E', correct: false },
      { text: 'B and E', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    set: 'Part1',
    question: 'Which of these are Artifacts in Scrum? \n \
    A - Product Backlog \n \
    B - Product Goal \n \
    C - Sprint Backlog \n \
    D - Sprint Goal \n \
    E - Definition of Done \n \
    F - Increment \n \
    (choose the best answer)',
    answers: [
      { text: 'A, C and E', correct: false },
      { text: 'A, C and F', correct: true },
      { text: 'B, D, and E', correct: false },
      { text: 'B, D and F', correct: false },
      { text: 'A and B', correct: false },
      { text: 'All of the above', correct: false }
    ]
  },
  {
    set: 'Part1',
    question: 'True or False: The Developers commit to delivering all the items in the Sprint Backlog?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
    ]
  },
  {
    set: 'Part1',
    question: 'True or False: An increment can only be shipped after the Sprint Review?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
    ]
  },

  //Part 2 Questions
  {
    set: 'Part2',
    question: 'Scrum is founded on empirical process control theory and one of the pillars that upholds \
    its implementation is transparency. In what ways can you maximize transparency of the Product Backlog? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The Product Backlog is divided by future Sprints.', correct: false },
      { text: 'Product Backlog items are estimated in Story Points.', correct: false },
      { text: 'The Product Backlog is managed using Jira.', correct: false },
      { text: 'The Product Backlog is ordered and available to all stakeholders.', correct: true }
    ]
  },
  {
    set: 'Part2',
    question: 'How is architecture and infrastructure handled? \n \
    (choose the best answer)',
    answers: [
      { text: 'They are discussed and planned during Sprint spikes.', correct: false },
      { text: 'They are done in Sprint 0.', correct: false },
      { text: 'They are added to the Product Backlog or implemented along with functional development.', correct: true }
    ]
  },
  {
    set: 'Part2',
    question: 'Who is responsible for estimating the Product Backlog items? \n \
    (choose the best answer)',
    answers: [
      { text: 'The Scrum Master.', correct: false },
      { text: 'The Developers by themselves.', correct: false },
      { text: 'The Product Owner.', correct: false },
      { text: 'The Technical Architect.', correct: false },
      { text: 'The Developers after clarifying the requirements with the Product Owner.', correct: true }
    ]
  },
  {
    set: 'Part2', 
    question: 'True or False: Done Increments must be shipped to end users at the end of each Sprint?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
    ]
  },
  {
    set: 'Part2',
    question: 'How much time should be spent refining the Product Backlog? \n \
    (choose the best answer)',
    answers: [
      { text: 'As much as the Scrum Team agrees is necessary to create enough ready Product Backlog Items.', correct: true },
      { text: 'As much as the Product Owner deems necessary to create enough ready Product Backlog Items.', correct: false },
      { text: 'Up to 10% of the capacity of the Developers in a typical Sprint, but as much as 90% in early Sprints.', correct: false },
      { text: 'No more than 1 day per week for the Developers.', correct: false }
    ]
  },
  {
    set: 'Part2',  
    question: 'When does the Sprint end? \n \
    (choose the best answer)',
    answers: [
      { text: 'When all Sprint Backlog items meet the definition of "Done".', correct: false },
      { text: 'When the time-box expires.', correct: true },
      { text: 'When the Scrum Master says it is done.', correct: false },
      { text: 'When there is no more work to be done.', correct: false }
    ]
  },
  {
    set: 'Part2',
    question: 'The Sprint length should be: \n \
    (choose the best answer)',
    answers: [
      { text: 'Short enough to keep the business risk acceptable to the Product Owner.', correct: false },
      { text: 'Short enough to be able to synchronize the development work with other business events.', correct: false },
      { text: 'No more than one month.', correct: false },
      { text: 'All of these answers are correct.', correct: true }
    ]
  },
  {
    set: 'Part2',
    question: 'When does a new Sprint begin? \n \
    (choose the best answer)',
    answers: [
      { text: 'Immediately after the next Sprint Planning', correct: false },
      { text: 'Immediately after the end of the previous Sprint.', correct: true },
      { text: 'It depends on the Product Owner.', correct: false },
      { text: 'Every Monday.', correct: false }
    ]
  },
  {
    set: 'Part2',
    question: 'Who has the final say on the order of the Product Backlog? \n \
    (choose the best answer)',
    answers: [
      { text: 'The Product Owner.', correct: true },
      { text: 'The CEO.', correct: false },
      { text: 'The Developers.', correct: false },
      { text: 'The Scrum Master.', correct: false },
      { text: 'The Stakeholders.', correct: false }
    ]
  },
  {
    set: 'Part2',
    question: 'True or False: Scrum has a role called "project manager?"',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
    ]
  },
  {
    set: 'Part2',
    question: 'Who is on the Scrum Team? \n \
    (choose the best answer) \n \
    A - The Scrum Master. \n \
    B - The Project Manager. \n \
    C - The Product Owner. \n \
    D - Developers',
    answers: [
      { text: 'A and C.', correct: false },
      { text: 'C and D.', correct: false },
      { text: 'B, C and D.', correct: false },
      { text: 'A, C and D', correct: true },
      { text: 'B and C.', correct: false },
      { text: 'All of the above', correct: false }
    ]
  },

  //Part 3 Questions
  {
    set: 'Part3',
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
    set: 'Part3',
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
    set: 'Part3',
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
    set: 'Part3',
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
    set: 'Part3',
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
    set: 'Part3',
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
    set: 'Part3',
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
    set: 'Part3',
    question: 'True or False: At least 1 action must be taken from the Retrospective and added to the next Sprint Backlog?"',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
    ]
  },
  {
    set: 'Part3',
    question: 'For a 2 week sprint Sprint Planning will take? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Up to 4 hours', correct: false },
      { text: 'Up to 8 hours', correct: true },
      { text: 'There is no time box for Sprint Planning', correct: false },
      { text: 'Up to 3 hours', correct: false }
    ]
  },
  {
    set: 'Part3',
    question: 'The Definition of Done is? \n \
    (choose the best answer)?',
    answers: [
      { text: 'A complimentary practice to Scrum', correct: false },
      { text: 'An Artifact', correct: false },
      { text: 'A commitment', correct: true },
      { text: 'A quality gate that code needs to pass before it can be tested', correct: false }
    ]
  },

  //Part 4 Questions
  {
    set: 'Part4',
    question: 'What is sustainable pace? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The pace at which the Scrum Team can work and sustain comfortably for an indefinite period of time.', correct: true },
      { text: 'The pace at which the Scrum Team converts User Stories into deliverables in a Sprint.', correct: false },
      { text: 'The pace at which the Scrum Team releases project deliverables.', correct: false },
      { text: 'The pace at which the Scrum Team can work and sustain comfortably in a set of Sprints leading \
              to a product release.', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'Under what circumstances would a Sprint be cancelled? \n \
    (choose the best answer)?',
    answers: [
      { text: 'When the forecasted workload becomes unachievable.', correct: false },
      { text: 'When the Product Owner is absent too often.', correct: false },
      { text: 'When the Developers are unclear on what to do on the remaining work.', correct: false },
      { text: 'When the Sprint Goal becomes obsolete.', correct: true }
    ]
  },
  {
    set: 'Part4',
    question: 'Who can cancel a sprint? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The Developers', correct: false },
      { text: 'The Scrum Master', correct: false },
      { text: 'The Product Owner', correct: true },
      { text: 'The Project Manager', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'Which statement best describes a Product Owner\'s responsibility? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Keep stakeholders from distracting the Developers.', correct: false },
      { text: 'Optimizing the value of the work the Scrum Team does.', correct: true },
      { text: 'Managing the project and ensuring that the work meets the commitments to the stakeholders.', correct: false },
      { text: 'Directing the Developers.', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'What is the function or purpose of Management in Scrum? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Identify and remove people that are not working hard enough.', correct: false },
      { text: 'Monitor the progress of the Developers on the Scrum Team.', correct: false },
      { text: 'Support the Product Owner with insights and information into high value product and \
              system capabilities. Support the Scrum Master to encourage organizational change \
              that fosters empiricism, self-management, bottom-up intelligence, and intelligent \
              product delivery.', correct: true },
      { text: 'Continually monitor staffing levels of the Scrum Team.', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'When is ownership of individual items, in the Sprint Backlog, assigned to individual Developers? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Any time during Sprint Planning.', correct: false },
      { text: 'Never. Even if individuals work on specific Sprint Backlog items, the Developers as \
              a whole remain accountable for the Sprint Backlog in its entirety.', correct: true },
      { text: 'During the Daily Scrum.', correct: false },
      { text: 'When the Scrum Master assigns it.', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'Which is NOT a way the Scrum Master serves the Product Owner? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Helping find techniques for effective Product Goal definition', correct: false },
      { text: 'Helping find techniques for effective Product Backlog management, including ordering/prioritization', correct: false },
      { text: 'Facilitating stakeholder collaboration as requested or needed', correct: false },
      { text: 'Cancelling the sprint if the Scrum Master sees the Sprint Goal has become obsolete', correct: true }
    ]
  },
  {
    set: 'Part4',
    question: 'Which is NOT a stance of the Scrum Master? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Facilitator', correct: false },
      { text: 'Coach', correct: false },
      { text: 'Teacher', correct: false },
      { text: 'Administrator', correct: true }
    ]
  },
  {
    set: 'Part4',
    question: 'True or False: The Scrum Master must resolve all impendiments?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
    ]
  },
  {
    set: 'Part4',
    question: 'The Scrum Master is accountable for the Scrum Team\'s effectiveness?',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false },
    ]
  }
]
