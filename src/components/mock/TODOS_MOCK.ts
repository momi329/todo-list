export const MOCK_TODOS = [
  {
    userId: "user1",
    title: "Complete project proposal",
    id: "todo1",
    content: "Write a detailed project proposal for the new client",
    subTasks: [
      { text: "Research client background", subTaskId: "subtask1", done: true },
      { text: "Outline project scope", subTaskId: "subtask2", done: false },
      { text: "Estimate timeline", subTaskId: "subtask3", done: false },
    ],
    status: "IN PROGRESS",
    expectedCompletionTime: new Date("2024-03-15").toISOString(),
  },
  {
    userId: "user1",
    title: "Review code changes",
    id: "todo2",
    content: "Review and approve pull requests for the latest feature",

    status: "TODO",
    expectedCompletionTime: new Date("2024-03-10").toISOString(),
  },
  {
    userId: "user1",
    title: "Review 喵喵貓喵",
    id: "todo4",
    content: "Review and approve pull requests for the latest feature",

    status: "TODO",
    expectedCompletionTime: new Date("2024-03-10").toISOString(),
  },
  {
    userId: "user1",
    title: "Update documentation",
    id: "todo3",
    content: "Update the user manual with the latest features",
    subTasks: [
      {
        text: "Gather new feature information",
        subTaskId: "subtask4",
        done: true,
      },
      { text: "Write new sections", subTaskId: "subtask5", done: true },
      { text: "Proofread and format", subTaskId: "subtask6", done: false },
    ],
    status: "DONE",
    expectedCompletionTime: new Date("2024-03-05").toISOString(),
    completedTime: new Date("2024-03-04").toISOString(),
  },
];
