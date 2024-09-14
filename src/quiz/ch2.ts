export const quizData = [
  {
    type: 'single',
    question: 'What is the primary purpose of the Figma dashboard?',
    options: [
      'To edit designs',
      'To create new files, import files, and search existing ones',
      'To collaborate with team members',
      'To export finished designs',
    ],
    correctAnswer: [1],
    explanation:
      'The Figma dashboard is where you can create new files, import files, go through your recent files or search through the existing ones.',
  },
  {
    type: 'multiple',
    question:
      "Which of the following tools are available in Figma's toolbar? (Select all that apply)",
    options: ['Frame tool', 'Shape tools', 'Pen tool', '3D modeling tool'],
    correctAnswer: [0, 1, 2],
    explanation:
      "Figma's toolbar includes the Frame tool, Shape tools, and Pen tool. It does not have a 3D modeling tool.",
  },
  {
    type: 'boolean',
    question: 'The Hand tool in Figma allows you to draw freehand shapes.',
    options: ['True', 'False'],
    correctAnswer: [1],
    explanation:
      'False. The Hand tool in Figma allows you to move around in your design file without activating hover lines, selecting elements, or accidentally moving them.',
  },
  {
    type: 'single',
    question:
      'Which panel contains Layers, Assets, and Pages in the Figma interface?',
    options: ['Toolbar', 'Properties Panel', 'Layers Panel', 'Assets Panel'],
    correctAnswer: [2],
    explanation:
      'The Layers panel, located on the left side of the editor, contains Layers, Assets and Pages that have been added to the file.',
  },
  {
    type: 'multiple',
    question:
      'What can you customize in the Properties Panel? (Select all that apply)',
    options: ['Frame Size', 'Colors', 'Strokes', 'Effects'],
    correctAnswer: [0, 1, 2, 3],
    explanation:
      'In the Properties panel, you can customize the Frame Size, Colors, Strokes, and Effects. You can also view the code of an element here.',
  },
  {
    type: 'single',
    question: 'What is the default name for a new file in Figma?',
    options: ['New Design', 'Untitled', 'Draft', 'Project 1'],
    correctAnswer: [1],
    explanation:
      "The default name for a new file in Figma is 'Untitled'. You can simply click on it to edit the name.",
  },
  {
    type: 'boolean',
    question:
      "The Comment tool in Figma allows users to edit other users' designs.",
    options: ['True', 'False'],
    correctAnswer: [1],
    explanation:
      "False. The Comment tool gives users the ability to add comments throughout the design file, view comments, and reply to them. It does not allow editing of other users' designs.",
  },
  {
    type: 'single',
    question:
      'Where can you find options for grids, rulers, and outlines in the Figma interface?',
    options: [
      'In the hamburger menu',
      'Next to the zoom settings',
      'In the Properties Panel',
      'In the Layers Panel',
    ],
    correctAnswer: [1],
    explanation:
      'Options such as grids, rulers, outlines, etc. can be found next to the zoom settings in the Figma toolbar.',
  },
  {
    type: 'multiple',
    question:
      'Which of the following can be considered as Assets in Figma? (Select all that apply)',
    options: ['Buttons', 'Forms', 'Navigation elements', 'Color palettes'],
    correctAnswer: [0, 1, 2],
    explanation:
      'Assets in Figma are elements you save as Components. These can include buttons, forms, navigations, cards, cells, and overlays. Color palettes are typically part of the Styles feature, not Assets.',
  },
  {
    type: 'boolean',
    question: 'Figma is a desktop-only design tool.',
    options: ['True', 'False'],
    correctAnswer: [1],
    explanation:
      'False. Figma is a web-based design tool that can be run in your browser, making it accessible from various devices and operating systems.',
  },
];
