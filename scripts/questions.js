const questions = [
  //Scrum Theory
  {
    set: 'Part4',
    question: 'What is the function or purpose of Management in Scrum? \n \
    (choose the best answer)',
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
    question: 'An organization has decided to adopt scrum, but management wants to change the terminology to fit with terminology already used. What will likely happen if this is done? \n \
    (choose the best answer)',
    answers: [
      { text: 'Without a new vocabulary as a reminder of the change, very little change may actually happen.', correct: false },
      { text: 'The organization may not understand what has changed With Scrum and the benefits of Scrum may be lost.', correct: false },
      { text: 'Management may feel less anxious.', correct: false },
      { text: 'All of the answers. ', correct: true }
    ]
  },
  {
    set: 'Part4',
    question: 'What is sustainable pace? \n \
    (choose the best answer)',
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
    question: 'What are three incorrect, untrue, or misleading statements about Scrum? \n \
    A - Scrum is a methodology where you can pick and choose which parts of Scrum you think will work for your environment. \n \
    B - Scrum is a framework for developing and sustaining complex products. \n \
    C - Each component of Scrum serves a specific purpose and is essential to your ability to use Scrum to develop complex products. \n \
    D - Scrum is like traditional processes but with self-organization to replace Project Managers. \n \
    E - Scrum is based on empirical process control theory. \n \
    F - Scrum is a framework that eliminates complexity.',
    answers: [
      { text: 'A, D and F', correct: true },
      { text: 'A, C and D', correct: false },
      { text: 'B, D and F', correct: false },
      { text: 'D, E and F', correct: false }
    ]
  },
  {
    set: 'Part1',
    question: 'The three pillars of empiricism are: \n \
    (choose the best answer)?',
    answers: [
      { text: 'Planning, Inspection, Adaptation', correct: false },
      { text: 'Transparency, Inspection, Adaptation', correct: true },
      { text: 'Planning, Reviewing, Retrospective', correct: false },
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
    question: 'Scrum is founded on...? \n \
    (choose the best answer)',
    answers: [
      { text: 'empiricism and lean thinking', correct: true },
      { text: 'extreme programming(XP) and Kanban', correct: false },
      { text: 'waterfall', correct: false },
      { text: 'DSDM', correct: false }
    ]
  },
  {
    set: 'Part1',
    question: 'Upon what type of process control is Scrum based? \n \
    (choose the best answer)',
    answers: [
      { text: 'Defined', correct: false },
      { text: 'Complex', correct: false },
      { text: 'Empirical', correct: true },
      { text: 'Hybrid', correct: false }
    ]
  },
  {
    set: 'Part2',
    question: ' What does it mean to say that an event has a timebox? \n \
    (choose the best answer)',
    answers: [
      { text: 'The event can take no more than a maximum amount of time. ', correct: true },
      { text: 'The event must take at least a minimum amount of time.', correct: false },
      { text: 'The event must happen by a given time. ', correct: false },
      { text: 'The event must happen at a set time. ', correct: false }
    ]
  },
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

  //Events
  {
    set: 'Part4',  
    question: 'Which of the following does Sprint planning address? \n \
    A - Why is the sprint Valuable? \n \
    B - What can be Done this Sprint? \n \
    C - How will the chosen work get done? \n \
    (choose the best answer)',
    answers: [
      { text: 'A', correct: false },
      { text: 'B', correct: false },
      { text: 'C', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    set: 'Part4',  
    question: 'When might a Sprint be abnormally cancelled? \n \
    (choose the best answer)',
    answers: [
      { text: 'As soon as it is clear that not all the Sprint Backlog items will be completed.', correct: false },
      { text: 'When an impediment is not resolved within 48 hours.', correct: false },
      { text: 'When the Product Owner declines the invite to the Daily Scrum.', correct: false },
      { text: 'When the Sprint Goal becomes obsolete.', correct: true }
    ]
  },
  {
    set: 'Part4',
    question: 'Which of the following statement is NOT true in regards to the Sprint Review? \n \
    (choose the best answer)',
    answers: [
      { text: 'The Sprint Review is a working session and should not be limited to presentation.', correct: false },
      { text: 'The Scrum Team presents the result of their work to key stakeholders.', correct: false },
      { text: 'In the Sprint Review, progress towards product goal is discussed.', correct: false },
      { text: 'The Sprint review should be considered as a gate to releasing value.', correct: true }
    ]
  },
  {
    set: 'Part4',
    question: 'Under what circumstances would a Sprint be cancelled? \n \
    (choose the best answer)',
    answers: [
      { text: 'When the forecasted workload becomes unachievable.', correct: false },
      { text: 'When the Product Owner is absent too often.', correct: false },
      { text: 'When the Developers are unclear on what to do on the remaining work.', correct: false },
      { text: 'When the Sprint Goal becomes obsolete.', correct: true }
    ]
  },
  {
    set: 'Part2',  
    question: 'When does a Sprint conclude? \n \
    (choose the best answer)',
    answers: [
      { text: 'When all the tasks are completed by the Developers.', correct: false },
      { text: 'When all Product Backlog items meet their Definition of Done.', correct: false },
      { text: 'When the Product Owner decides enough has been delivered to meet the Sprint Goal.', correct: false },
      { text: 'When the Sprint Retrospective is complete.', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'True or False: The Daily Scrum is the only time Developers are allowed to adjust their plan?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'True or False: At least 1 action must be taken from the Retrospective and added to the next Sprint Backlog?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'Another word for the Sprint is an Increment?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'Increments can only be shown to Stakeholders during the Sprint Review?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'True or False: The Scrum Team must choose at least one high priority process improvement item, identified during the Sprint Retrospective, and place it in the Sprint Backlog.',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
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
    question: ' Why is the Daily Scrum held at the same time and same place?  \n \
    (choose the best answer)',
    answers: [
      { text: 'Rooms are hard to book and this lets it be booked in advance.', correct: false },
      { text: 'The consistency reduces complexity.', correct: true },
      { text: 'The Product Owner demands it. ', correct: false },
      { text: 'The place can be named. ', correct: false }
    ]
  },
  {
    set: 'Part3',
    question: 'What is the main reason for the Scrum Master to be at the Daily Scrum?  \n \
    (choose the best answer)',
    answers: [
      { text: 'To gather status and progress information to report to management.', correct: false },
      { text: 'To write down any changes to the Sprint Backlog, including adding new items, and tracking progress on the burn-down.', correct: false },
      { text: 'They do not have to be there; they only need to ensure the Developers have a Daily Scrum.', correct: true },
      { text: 'To make sure every team member answers the three questions.', correct: false }
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
    question: 'The timebox for the Sprint Planning is: \n \
    (choose the best answer)?',
    answers: [
      { text: '1 day.', correct: false },
      { text: '4 hours and longer as needed. For shorter Sprints it is usually shorter.', correct: false },
      { text: '8 hours for a monthly Sprint. For shorter Sprints it is usually shorter.', correct: true },
      { text: 'As long as needed.', correct: false },
      { text: 'At least every month.', correct: false }
    ]
  },
  {
    set: 'Part3',
    question: 'The timebox for the Daily Scrum is: \n \
    (choose the best answer)?',
    answers: [
      { text: '15 minutes.', correct: true },
      { text: 'The same time of day every day.', correct: false },
      { text: '15 minutes for a 4-week sprint. For shorter Sprints it is usually shorter.', correct: false },
      { text: 'Two minutes per person.', correct: false },
      { text: '4 hours.', correct: false }
    ]
  },
  {
    set: 'Part3',
    question: 'The timebox for the Sprint Retrospective is: \n \
    (choose the best answer)?',
    answers: [
      { text: '4 hours for a monthly Sprint. For shorter Sprints it is usually shorter.', correct: false },
      { text: '20 minutes for every member of the Scrum Team', correct: false },
      { text: '3 hours for a monthly Sprint. For shorter Sprints it is usually shorter.', correct: true },
      { text: '1 hour for every week of the Sprint', correct: false },
      { text: '1 hour.', correct: false }
    ]
  },
  {
    set: 'Part3',
    question: 'The timebox for the Sprint Review is: \n \
    (choose the best answer)?',
    answers: [
      { text: '1 day.', correct: false },
      { text: '4 hours and longer as needed.', correct: false },
      { text: '4 hours for a monthly Sprint. For shorter Sprints it is usually shorter.', correct: true },
      { text: 'As long as needed.', correct: false },
      { text: '2 hours.', correct: false }
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
    set: 'Part3',
    question: 'Which statement best describes the Sprint? \n \
    (choose the best answer)?',
    answers: [
      { text: 'A container starting after Sprint Planning and ending after the Sprint Review.', correct: false },
      { text: 'A summary of where progress is tracked on the GANT chart.', correct: false },
      { text: 'The container covering the time between releases.', correct: false },
      { text: 'A container containing all other Events where ideas are turned into value.', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'Which statement best describes the Sprint Planning? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Sprint Planning is where the Product Backlog items to be completed in the Sprint are committed to.', correct: false },
      { text: 'Sprint Planning is where the Product Owner gets sign off from the Stakeholders over the Sprint Backlog.', correct: false },
      { text: 'Sprint Planning happens immediately after a Release to plan the next one.', correct: false },
      { text: 'Sprint Planning initiates the Sprint by laying out the work to be performed for the Sprint.', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'Which statement best describes the Daily Scrum? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The Daily Scrum allows for the Product Owner to get a status update so they can report on progress.', correct: false },
      { text: 'The Daily Scrum allows the Scrum Master to identify unproductive team members.', correct: false },
      { text: 'The Daily Scrum is an optional event only needed when there are impediments to discuss.', correct: false },
      { text: 'The Daily Scrum allows for inspection of progress toward the Sprint Goal and adapt the Sprint Backlog as necessary.', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'Which statement best describes the Sprint Review? \n \
    (choose the best answer)?',
    answers: [
      { text: 'It is a demo at the end of the Sprint for everyone in the organisation to check on the work done.', correct: false },
      { text: 'It is a mechanism to control Developer activity during a Sprint.', correct: false },
      { text: 'It is when the Scrum Team and stakeholders inspect the outcome of a sprint and figure out what to do next.', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'Which statement best describes the purpose of the Sprint Retrospective? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The purpose is to identify Developers who should be replaced', correct: false },
      { text: 'The purpose is to allow the Developers to vent their frustrations.', correct: false },
      { text: 'The purpose is to allow Stakeholders the opportunity to suggest improvements to the Product.', correct: false },
      { text: 'The purpose is to plan ways to increase quality and effectiveness.', correct: true }
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
    question: 'Who should attend Sprint Planning? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The Product Owner and Key Stakeholders.', correct: false },
      { text: 'The Developers only.', correct: false },
      { text: 'The Product Owner and Scrum Master.', correct: false },
      { text: 'The Scrum Team and people they invite to provide advice.', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'Who should attend Sprint Review? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The Developers.', correct: false },
      { text: 'The Product Owner and Key Stakeholders.', correct: false },
      { text: 'The Project Manager and Key Stakeholders.', correct: false },
      { text: 'The Scrum Team and Key Stakeholders.', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'Who should attend Sprint Retrospective? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The Scrum Team and Key Stakeholders.', correct: false },
      { text: 'The Developers and Scrum Master', correct: false },
      { text: 'The Developer and Product Owner', correct: false },
      { text: 'The Scrum Team.', correct: true }
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
    set: 'Part2',
    question: 'Which Scrum events are timeboxed? \n \
    A - Sprint Retrospective \n \
    B - Sprint Planning \n \
    C - Daily Standup \n \
    D - Refinement \n \
    E - Release Retrospective \n \
    F - Daily Scrum',
    answers: [
      { text: 'A, B and C', correct: false },
      { text: 'A, B and F', correct: false },
      { text: 'A, B, D and F', correct: true },
      { text: 'All the above', correct: false }
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
      { text: 'When the timebox expires.', correct: true },
      { text: 'When the Scrum Master says it is done.', correct: false },
      { text: 'When there is no more work to be done.', correct: false }
    ]
  },
  {
    set: 'Part4',  
    question: 'Which statement below is FALSE During the sprint? \n \
    (choose the best answer)',
    answers: [
      { text: 'The Product Backlog is refined as needed', correct: false },
      { text: 'The Scope is fixed.', correct: true },
      { text: 'No changes are made that would endanger the sprint goal.', correct: false },
      { text: 'Quality does not decrease.', correct: false }
    ]
  },

  //Scrum Values
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

  //Scrum Master
  {
    set: 'Part4',
    question: 'The Scrum Master is accountable for the Scrum Team\'s effectiveness?',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'Which of the following is the Scrum Master accountable for?',
    answers: [
      { text: 'The Scrum Team/s effectiveness.', correct: true },
      { text: 'The Scrum Team/s delivery.', correct: false },
      { text: 'The Scrum Team/s  collaboration.', correct: false },
      { text: 'The Scrum Team/s happiness.', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'The Scrum Master serves the Scrum Team in several ways, including?',
    answers: [
      { text: 'Shielding the team by ensuring all communication from stakeholders go through them.', correct: false },
      { text: 'Causing the removal of impediments to the Scrum Team’s progress.', correct: true },
      { text: 'Creating release documentation.', correct: false },
      { text: 'Ensuring all the Scrum Events have an appropriate meeting room booked.', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'True or False: The Scrum Master must resolve all impendiments?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'Which of the following services is appropriate for a Scrum Master in regard to the Daily Scrum? \n \
    (choose the best answer)?',
    answers: [
      { text: 'Teach the Developers to keep the Daily Scrum within the 15 minute timebox.', correct: true },
      { text: 'Facilitate in a way that ensures each team member has a chance to speak.', correct: false },
      { text: 'Lead the discussions of the Developers.', correct: false },
      { text: 'Ensure that all 3 questions have been answered.', correct: false },
      { text: 'All answers apply.', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'Which is NOT a way the Scrum Master serves the Product Owner? \n \
    (choose the best answer)',
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
    (choose the best answer)',
    answers: [
      { text: 'Facilitator', correct: false },
      { text: 'Coach', correct: false },
      { text: 'Teacher', correct: false },
      { text: 'Administrator', correct: true }
    ]
  },
  {
    set: 'Part4',
    question: 'What are two ways a Scrum Master serves to enable effective Scrum Teams? \n \
    A - By keeping high value features high in the Product Backlog. \n \
    B - By removing impediments that hinder the Scrum Team. \n \
    C - By starting and ending the meetings at the proper time. \n \
    D - By facilitating Developer decision-making.',
    answers: [
      { text: 'A and C', correct: false },
      { text: 'B and D', correct: true },
      { text: 'C and D', correct: false },
      { text: 'A and D', correct: false }
    ]
  },

  //Developers
  {
    set: 'Part4',
    question: 'When is ownership of individual items, in the Sprint Backlog, assigned to individual Developers? \n \
    (choose the best answer)',
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
    question: 'When does a Developer become accountable for the value of a Product Backlog item selected for the Sprint?',
    answers: [
      { text: 'When the Scrum Master assigns it to them.', correct: false },
      { text: 'At Sprint Planning.', correct: false },
      { text: 'During the Daily Scrum.', correct: false },
      { text: 'Never. The entire Scrum Team is accountable for creating value every Sprint.', correct: true }
    ]
  },
  {
    set: 'Part4',
    question: 'The Developers should not be interrupted during the Sprint and the Sprint Goal should remain intact. These are conditions that foster creativity, quality and productivity. \n \
    (Which one the following answers is FALSE?)',
    answers: [
      { text: 'As a decomposition of the selected Product Backlog items, the Sprint Backlog changes and may grow as the work emerges.', correct: false },
      { text: 'The Developers may work with the Product Owner to add or remove work if they find themselves with more or less capacity than expected.', correct: false },
      { text: 'The Product Owner can help clarify or optimize the Sprint when asked by the Developers.', correct: false },
      { text: 'The Sprint Backlog is fully formulated in the Sprint Planning event and does not change during the Sprint.', correct: true }
    ]
  },
  {
    set: 'Part4',
    question: 'The CEO asks the Developers to add a "very important" item to a Sprint that is in progress. What should the Developers do? \n \
    (choose the best answer)',
    answers: [
      { text: 'Add the item to the current Sprint without any adjustments.', correct: false },
      { text: 'Inform the other members of the Scrum Team so the team can decide what to do.', correct: true },
      { text: 'Add the item to the current Sprint and drop an item of equal size.', correct: false },
      { text: 'Add the item to the next Sprint.', correct: false }
    ]
  },
  {
    set: 'Part3',
    question: 'Who is responsible for managing the progress of work during a Sprint? \n \
    (choose the best answer)',
    answers: [
      { text: 'The Scrum Master.', correct: false },
      { text: 'The Developers.', correct: true },
      { text: 'The Product Owner.', correct: false },
      { text: 'The most junior member of the team.', correct: false }
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
    set: 'Part4',
    question: 'When does a Developer become the sole owner of an item on the Sprint Backlog? ',
    answers: [
      { text: 'When the Scrum Master assigns it to them.', correct: false },
      { text: 'When the Product Owner assigns it to them.', correct: false },
      { text: 'During the Daily Scrum.', correct: false },
      { text: 'Never. All Sprint Backlog items are "owned" by the Developers on the Scrum Team.', correct: true }
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
    set: 'Part4',  
    question: 'When should a Developer on a Scrum Team be replaced? \n \
    (choose the best answer)',
    answers: [
      { text: 'Every Sprint to create cross functionality.', correct: false },
      { text: 'As needed, with no special allowance for changes in productivity.', correct: false },
      { text: 'Never, teams must be long standing.', correct: false },
      { text: 'As needed, while taking into account a short-term reduction in productivity.', correct: true }
    ]
  },
  {
    set: 'Part2',
    question: 'The Developers should have all the skills needed to: \n \
    (choose the best answer)',
    answers: [
      { text: 'Complete the project as estimated when the date and cost are committed to the Product Owner.', correct: false },
      { text: 'Turn the Product Backlog items they select into an Increment of useful and valuable product functionality.', correct: true },
      { text: 'Do all of the development work, except for specialized testing that requires additional tools and environments.', correct: false },
      { text: 'Increase the velocity by 10% per quarter.', correct: false }
    ]
  },

  //Product Owner
  {
    set: 'Part4',
    question: ' Who should know the most about the progress toward a business objective or a release, and be able to explain the alternatives most clearly? \n \
    (choose the best answer)',
    answers: [
      { text: 'The Developers', correct: false },
      { text: 'The Product Owner', correct: true },
      { text: 'The Scrum Master', correct: false },
      { text: 'The Project Manager', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'Who can cancel a sprint? \n \
    (choose the best answer)',
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
    (choose the best answer)',
    answers: [
      { text: 'Keep stakeholders from distracting the Developers.', correct: false },
      { text: 'Maximising the value of the Product resulting from the work of the Scrum Team.', correct: true },
      { text: 'Managing the project and ensuring that the work meets the commitments to the stakeholders.', correct: false },
      { text: 'Directing the Developers.', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'The Product Owner and the Director of Marketing disagree about the next items to be worked on. Who should make the final decision on what to prioritise? \n \
    (choose the best answer)',
    answers: [
      { text: 'The most senior of the two.', correct: false },
      { text: 'The Product Owner.', correct: true },
      { text: 'The Director of Marketing.', correct: false },
      { text: 'The CEO.', correct: false },
      { text: 'The Scrum Master, after talking to both parties.', correct: false }
    ]
  },

  //Scrum Team
  {
    set: 'Part4',
    question: 'Who is accountable for creating a valuable, useful increment every sprint?',
    answers: [
      { text: 'The Developers', correct: false },
      { text: 'The Scrum Master', correct: false },
      { text: 'The Product Owner', correct: false },
      { text: 'The Scrum Team', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'During a Sprint, a Developer determines that the Scrum Team will not be able to complete the items in their forecast. Who should be present to review and \n \
    adjust the Product Backlog items selected? \n \
    (choose the best answer)',
    answers: [
      { text: 'The Product Owner and all stakeholders.', correct: false },
      { text: 'The Scrum Master, the project manager, and the Developers.', correct: false },
      { text: 'The Developers.', correct: false },
      { text: 'The Product Owner and the Developers.', correct: true }
    ]
  },
  {
    set: 'Part4',
    question: 'Which of the following are examples of a Scrum Team practicing Scrum poorly or not exhibiting traits of a self-managing Scrum Team? \n \
    A - Stakeholders attend the Daily Scrum to check on the Scrum Team\'s progress. \n \
    B - The Developers are nicely handing off work from analyst to developer to tester to integration. \n \
    C - The Developers create their own Sprint Backlog, reflecting all work that is required to meet the Definition Of Done. \n \
    D - The Developers have all the Skills they need to create a valuable, useful Increment. \n \
    E - The Developers invite external stakeholders to the Sprint Planning to get a formal sign off of the Sprint Backlog. \n \
    F - The Developers are collaboratively selecting their own work during the Sprint.',
    answers: [
      { text: 'A, B and E', correct: true },
      { text: 'B, C and E', correct: false },
      { text: 'D, E and F', correct: false },
      { text: 'All of the above', correct: false }
    ]
  },
  {
    set: 'Part3',  
    question: 'When many Scrum Teams are working on a single product, what best describes the Definition of Done? \n \
    (choose the best answer)',
    answers: [
      { text: 'Each team has its own, but differences are stored in a Master Defintion of Done.', correct: false },
      { text: 'All Scrum Teams must have a Definition of Done that makes their combined Increment valuable and useful.', correct: true },
      { text: 'The Definition of Done becomes optional so as to reduce complexity.', correct: false },
      { text: 'It does not matter as each Backlog Item has a unique Definition of Done.', correct: false }
    ]
  },
  {
    set: 'Part2',
    question: 'True or False: Scrum has a role called "project manager?"',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
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
  {
    set: 'Part2',
    question: 'A Scrum Team consists of which of the following? \n \
    (choose the best answer) \n \
    A - Users \n \
    B - Customers \n \
    C - Product Owner \n \
    D - Developers \n \
    E - Scrum Master',
    answers: [
      { text: 'C, D and E', correct: true },
      { text: 'A, C, D and E', correct: false },
      { text: 'B and C', correct: false },
      { text: 'A and B', correct: false },
      { text: 'B, C, D and E', correct: false },
      { text: 'All of the above', correct: false }
    ]
  },
  {
    set: 'Part2',
    question: 'What is the typical size for a Scrum Team? \n \
    (choose the best answer)',
    answers: [
      { text: 'Minimum of 7.', correct: false },
      { text: '10 or fewer.', correct: true },
      { text: '7 plus or minus 2.', correct: false },
      { text: 'At least 5', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'Who is responsible for all product related activities from stakeholder collaboration, verification ,maintenance ,operation, \
    experimentation, research and development and anything else that might be required? \n \
    (choose the best answer)',
    answers: [
      { text: 'Product Owner', correct: false },
      { text: 'Scrum Team', correct: true },
      { text: 'Scrum Master', correct: false },
      { text: 'Developers', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'What is the best description of what Scrum teams are? \n \
    (choose the best answer)',
    answers: [
      { text: 'Cross functional.', correct: false },
      { text: 'Cross functional and self managing.', correct: true },
      { text: 'Cross functional and self organized.', correct: false },
      { text: 'Self managing.', correct: false }
    ]
  },
  //Done
  {
    set: 'Part3',
    question: 'True or False: The Definition of Done builds upon the definition of Ready?',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
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
  {
    set: 'Part3',
    question: 'Who creates the Definition of Done? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The Scrum Team, in a collaborative effort where the result is the common denominator Of all members\' definitions.', correct: false },
      { text: 'If it is not an organizational standard, the Scrum Team must create a Definition Of Done appropriate for the product.', correct: true },
      { text: 'The Product Owner since they are responsible for the product\'s success.', correct: false },
      { text: 'The Scrum Master since they are responsible for the productivity of the Developers.', correct: false }
    ]
  },
  {
    set: 'Part3',
    question: 'How much work must the Developers complete for each Product Backlog item they select for a Sprint? \n \
    (choose the best answer)?',
    answers: [
      { text: 'As much as it can fit into a Sprint.', correct: false },
      { text: 'Analysis, design, programming, testing and documentation.', correct: false },
      { text: 'All development work and at least come testing.', correct: false },
      { text: 'Enough so that each Product Backlog item they select meets the Definition of Done.', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'Who plans the work necessary to create an Increment that meets the Definition of Done? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The Scrum Team.', correct: false },
      { text: 'The Scrum Master.', correct: false },
      { text: 'The Product Owner.', correct: false },
      { text: 'The Developers.', correct: true }
    ]
  },
  {
    set: 'Part3',
    question: 'Who is accountable for instilling quality by adhering to a Definition of Done? \n \
    (choose the best answer)?',
    answers: [
      { text: 'The Scrum Team.', correct: false },
      { text: 'The Scrum Master.', correct: false },
      { text: 'The Product Owner.', correct: false },
      { text: 'The Developers.', correct: true }
    ]
  },

  //Artifacts and Commitments
  {
    set: 'Part3',
    question: 'True or False: The purpose of a Sprint is to produce a valuable and useful Increment of working product?',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
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
      { text: 'False', correct: true }
    ]
  },

  //Releasing
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
    set: 'Part1',
    question: 'True or False: An increment can only be shipped after the Sprint Review?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    set: 'Part2',
    question: 'When should architecture and infrastructure be completed? \n \
    (choose the best answer)',
    answers: [
      { text: 'Before you start the 1st Sprint', correct: false },
      { text: 'They are done in Sprint 0.', correct: false },
      { text: 'They are added to the Product Backlog or implemented along with functional development.', correct: true },
      { text: 'They are done by specialist teams alongside the product team.', correct: false }
    ]
  },
  {
    set: 'Part2', 
    question: 'True or False: Done Increments must be shipped to end users at the end of each Sprint?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    set: 'Part2', 
    question: 'True or False: It is mandatory that the product Increment be released to production at the end of each Sprint.?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },

  //Product Backlog Management
  {
    set: 'Part2', 
    question: 'True or False: When multiple Scrum Teams work together on the same product, each team should maintain a separate Product Backlog.?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
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
    set: 'Part4',
    question: 'The Product Backlog is ordered by: \n \
    (choose the best answer)',
    answers: [
      { text: 'It doesn\'t matter as only the Sprint Backlog needs ordering', correct: false },
      { text: 'Whatever is deemed most appropriate by the Product Owner.', correct: true },
      { text: 'Size, with the smallest items at the top.', correct: false },
      { text: 'Cost, with the cheapest items at the top.', correct: false },
      { text: 'In creation order, with the oldest at the top.', correct: false },
      { text: 'Risk, with the riskiest items at the bottom.', correct: false }
    ]
  },
  {
    set: 'Part4',
    question: 'Which statement is true of Product Backlog items? \n \
    (choose the best answer)',
    answers: [
      { text: 'Product Backlog items that can be Done by the Scrum Team within one Sprint are deemed ready for selection in a Sprint Planning event.', correct: true },
      { text: 'They must be decomposed into smaller items of 1 day or less.', correct: false },
      { text: 'A Product Backlog item must meet the Scrum Teams Definition of Ready before it can be taken into a sprint.', correct: false },
      { text: 'The Scrum Team commits that every Product Backlog item taken into a sprint must be completed in that sprint.', correct: false }
    ]
  },
  
  //Product Value
  {
    set: 'Part1',
    question: 'Which two things should the Scrum Team do during the first Sprint? \n \
    A - Deliver an Increment Of useful and valuable product. \n \
    B - Develop a Plan for the rest of the release. \n \
    C - Determine the complete architecture and infrastructure for the product. \n \
    D - Develop and deliver at least one piece of functionality. \n \
    E - Create the complete Product Backlog to be developed in subsequent Sprints.',
    answers: [
      { text: 'A and B', correct: false },
      { text: 'A and D', correct: true },
      { text: 'B and C', correct: false },
      { text: 'B and D', correct: false }
    ]
  }
]
