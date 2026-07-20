/* ─────────────────────────────────────────────
   Udemy Course Data — Playwright + TypeScript
   7 Modules, structured by video/topic
───────────────────────────────────────────── */

const udemyData = [
  {
    moduleNum: 1,
    moduleName: "Module 1 – Introduction to Playwright",
    subtitle: "Foundation & Overview",
    keyCoverage: [
      "What is automation testing and why it matters",
      "Playwright architecture and key features",
      "Playwright vs Selenium comparison",
      "JavaScript vs TypeScript for automation",
      "Why TypeScript is preferred"
    ],
    topics: [
      { id: 'u1_1',  topic: 'Introduction to Automation Testing', details: 'Why automation? Manual vs automation testing | Test pyramid' },
      { id: 'u1_2',  topic: 'What is Playwright?',                details: 'Open-source by Microsoft | Cross-browser | Chromium, Firefox, WebKit' },
      { id: 'u1_3',  topic: 'Key Features of Playwright',         details: 'Auto-waiting | Parallel execution | Screenshots | Multi-tab | API testing' },
      { id: 'u1_4',  topic: 'Playwright Tools',                   details: 'Inspector | Trace Viewer | Codegen | VS Code extension | UI Mode' },
      { id: 'u1_5',  topic: 'Playwright vs Selenium',             details: 'Speed | auto-wait | browser support | language support | community' },
      { id: 'u1_6',  topic: 'JavaScript vs TypeScript',           details: 'Dynamic vs static typing | when to use each | migration path' },
      { id: 'u1_7',  topic: 'Why Use TypeScript?',                details: 'IntelliSense | compile-time errors | type definitions | scalability' },
      { id: 'u1_8',  topic: 'Playwright Architecture',            details: 'WebSocket-based protocol | Browser processes | Context → Page model' }
    ]
  },
  {
    moduleNum: 2,
    moduleName: "Module 2 – TypeScript Programming",
    subtitle: "TypeScript from Scratch",
    keyCoverage: [
      "TypeScript setup with Node.js and VS Code",
      "Variables, data types, and type annotations",
      "Control flow, loops, and functions",
      "OOP: Classes, interfaces, inheritance",
      "Working with files: JSON, CSV, Excel"
    ],
    topics: [
      { id: 'u2_1',  topic: 'TS Introduction & Environment Setup',   details: 'What is TS? | Node.js + VS Code install | TypeScript compiler | tsconfig' },
      { id: 'u2_2',  topic: 'Transpiling .ts to .js',               details: 'tsc command | watch mode | output configuration' },
      { id: 'u2_3',  topic: 'Variables – let, const, var',          details: 'Scope | hoisting | block scope | temporal dead zone' },
      { id: 'u2_4',  topic: 'Data Types',                           details: 'number | string | boolean | any | unknown | void | null | undefined' },
      { id: 'u2_5',  topic: 'Type Annotation & Type Inference',      details: 'Explicit types | implicit inference | type widening' },
      { id: 'u2_6',  topic: 'Operators',                            details: 'Arithmetic | Logical | Comparison | Assignment | Ternary operator' },
      { id: 'u2_7',  topic: 'Conditional Statements',               details: 'if / else / else if | switch-case | ternary shorthand' },
      { id: 'u2_8',  topic: 'Loops',                                details: 'for | while | do..while | for...of | for...in' },
      { id: 'u2_9',  topic: 'Functions',                            details: 'Declarations | expressions | optional params | default params | rest params | return types' },
      { id: 'u2_10', topic: 'Callback Functions & Overloading',      details: 'Writing callbacks | Function overloading in TypeScript' },
      { id: 'u2_11', topic: 'Arrays & Tuples',                      details: 'Declaring arrays | Fixed-length tuples | type constraints' },
      { id: 'u2_12', topic: 'Array Methods',                        details: 'push/pop/shift/unshift | slice/splice | map/filter/reduce/forEach | find/includes/some/every' },
      { id: 'u2_13', topic: 'String Methods',                       details: 'substring/substr/slice | indexOf/includes/replace/split/trim' },
      { id: 'u2_14', topic: 'Creating Objects',                     details: 'Object literals | Inline objects | type alias | class-based objects' },
      { id: 'u2_15', topic: 'Class Features',                       details: 'Constructors | readonly | static variables & methods | method overloading' },
      { id: 'u2_16', topic: 'Inheritance & Access Control',         details: 'extends | super | method overriding | public / private / protected' },
      { id: 'u2_17', topic: 'Interfaces & Modules',                 details: 'Defining interfaces | implementing | import / export modules' },
      { id: 'u2_18', topic: 'Reading Data from Files',              details: 'JSON file | CSV file | Excel file | fs module | parsing libraries' }
    ]
  },
  {
    moduleNum: 3,
    moduleName: "Module 3 – Playwright Automation",
    subtitle: "Core Automation Skills",
    keyCoverage: [
      "Playwright project setup and structure",
      "All locator types: CSS, XPath, Role-based",
      "Actions: type, click, dropdown, tables, date pickers",
      "Browser contexts, tabs, dialogs, iFrames",
      "Mouse, keyboard, scroll, file upload, Shadow DOM"
    ],
    topics: [
      { id: 'u3_1',  topic: 'Installing & Initialising Playwright',   details: 'npm init playwright | project structure | playwright.config.ts' },
      { id: 'u3_2',  topic: 'Writing First Test',                     details: 'test() | expect() | async/await | page.goto()' },
      { id: 'u3_3',  topic: 'Async/Await & Promise Basics',           details: 'Promise chain | async functions | error handling in async context' },
      { id: 'u3_4',  topic: 'Running Tests (headed/headless)',         details: 'npx playwright test | --headed flag | specific test files | HTML reports' },
      { id: 'u3_5',  topic: 'Playwright UI Mode Overview',            details: 'npx playwright test --ui | live reloading | filter & run from UI' },
      { id: 'u3_6',  topic: 'Locators – getByText/Role/Label',        details: 'getByRole | getByText | getByLabel | getByPlaceholder | getByTestId' },
      { id: 'u3_7',  topic: 'locator() & page.locator()',             details: 'CSS selectors | chaining locators | nth() | first() | last()' },
      { id: 'u3_8',  topic: 'CSS Locators',                           details: 'Tag | ID | Class | Attribute | Combinators: descendant, child, sibling' },
      { id: 'u3_9',  topic: 'XPath & Dynamic Elements',               details: 'Basic XPath | dynamic attribute values | contains() | starts-with()' },
      { id: 'u3_10', topic: 'XPath Axis',                             details: 'parent | child | ancestor | following-sibling | descendant | relative XPath' },
      { id: 'u3_11', topic: 'Basic Actions',                          details: 'click() | fill() | type() | check() | uncheck() | radio buttons | checkboxes' },
      { id: 'u3_12', topic: 'Capture Text of Elements',               details: 'innerText() | textContent() | allInnerTexts() | allTextContents() | all()' },
      { id: 'u3_13', topic: 'Dropdowns',                              details: 'Static | dynamic | hidden | Bootstrap dropdowns | selectOption()' },
      { id: 'u3_14', topic: 'Web Tables',                             details: 'Static & dynamic tables | pagination | row/column traversal | filter & validate data' },
      { id: 'u3_15', topic: 'Date Pickers',                           details: 'Calendar UI interaction | dynamic month/year navigation' },
      { id: 'u3_16', topic: 'Browser Context & Pages',                details: 'newContext() | newPage() | isolated sessions | multi-tab' },
      { id: 'u3_17', topic: 'Dialogs, Windows & Tabs',                details: 'alert | confirm | prompt | switching tabs/windows | page.on("dialog")' },
      { id: 'u3_18', topic: 'iFrames',                                details: 'frameLocator() | nested iframes | actions inside frame context' },
      { id: 'u3_19', topic: 'Mouse Actions',                          details: 'hover() | dblclick() | right-click | drag-and-drop | mouse.move()' },
      { id: 'u3_20', topic: 'Scrolling',                              details: 'scrollIntoViewIfNeeded() | wheel events | infinite scroll handling' },
      { id: 'u3_21', topic: 'Keyboard Actions',                       details: 'keyboard.press() | keyboard.type() | key combinations | typing with delay' },
      { id: 'u3_22', topic: 'File Upload',                            details: 'setInputFiles() | single & multiple files | file type validation' },
      { id: 'u3_23', topic: 'Shadow DOM',                             details: 'Handling Shadow DOM | nested Shadow DOM elements | pierce selectors' },
      { id: 'u3_24', topic: 'Browser Context Settings',               details: 'Cookies | viewport | proxy setup | SSL certificate handling' }
    ]
  },
  {
    moduleNum: 4,
    moduleName: "Module 4 – Advanced Playwright Features",
    subtitle: "Pro-Level Testing Skills",
    keyCoverage: [
      "Auto-waiting mechanism and timeout strategies",
      "Hard, soft, and negating assertions",
      "Codegen for test recording",
      "Debugging with Trace Viewer",
      "Hooks, grouping, tagging, parallel execution",
      "POM, parameterization, visual & accessibility testing"
    ],
    topics: [
      { id: 'u4_1',  topic: 'Auto-Waiting, Timeouts & Assertions',    details: 'Auto-wait | page timeout | test timeout | expect timeout' },
      { id: 'u4_2',  topic: 'Assertion Types',                        details: 'Auto-retrying assertions | non-retrying | negating with .not | soft assertions' },
      { id: 'u4_3',  topic: 'Hard & Soft Assertions',                 details: 'expect.soft() | fail-fast vs continue on failure | assertion reports' },
      { id: 'u4_4',  topic: 'Codegen – Test Recording',               details: 'npx playwright codegen | identify locators | modifying generated tests' },
      { id: 'u4_5',  topic: 'Debugging',                              details: 'PWDEBUG=1 | Playwright Inspector | breakpoints | page.pause()' },
      { id: 'u4_6',  topic: 'Screenshots & Videos',                   details: 'page.screenshot() | fullPage | video recording | on-failure capture' },
      { id: 'u4_7',  topic: 'Tracing & Trace Viewer',                 details: 'Enabling tracing | trace.zip | opening trace file | network/DOM view' },
      { id: 'u4_8',  topic: 'Retries & Flaky Test Handling',          details: 'retries config | test.retries | detecting flakiness | stabilisation' },
      { id: 'u4_9',  topic: 'Grouping Tests & Hooks',                 details: 'describe() | beforeAll | afterAll | beforeEach | afterEach' },
      { id: 'u4_10', topic: 'Tagging & Annotations',                  details: 'test.only | test.skip | test.slow | test.fail | test.fixme | tags' },
      { id: 'u4_11', topic: 'Parallel Test Execution',                details: 'workers config | fullyParallel | serial mode | worker-level isolation' },
      { id: 'u4_12', topic: 'Parameterization & Data-Driven Testing', details: 'Different parameterization approaches | JSON, CSV, Excel driven tests' },
      { id: 'u4_13', topic: 'Reporting',                              details: 'Default HTML report | JSON | list | Allure reporter integration' },
      { id: 'u4_14', topic: 'Page Object Model (POM)',                details: 'Reusable page classes | encapsulating actions | using fixtures with POM' },
      { id: 'u4_15', topic: 'Run Tests via package.json',             details: 'scripts in package.json | npm run | custom command shortcuts' },
      { id: 'u4_16', topic: 'Visual Testing / Comparisons',           details: 'Generating snapshots | toMatchSnapshot() | updating baselines' },
      { id: 'u4_17', topic: 'Accessibility Testing',                  details: 'axe-playwright | scan page | scan region | WCAG violations | disable rules | fixtures' }
    ]
  },
  {
    moduleNum: 5,
    moduleName: "Module 5 – Framework Design & Development",
    subtitle: "Production-Ready Framework",
    keyCoverage: [
      "End-to-end framework architecture",
      "Page Object classes and error handling",
      "Test data: JSON, CSV, Faker library",
      "CI/CD with GitHub Actions and Jenkins",
      "Git workflow for test projects"
    ],
    topics: [
      { id: 'u5_1',  topic: 'Introduction to Automation Framework',   details: 'What is a framework? | Why we need it | Types of frameworks' },
      { id: 'u5_2',  topic: 'Phases in Designing Framework',          details: 'Plan | design | develop | integrate | maintain' },
      { id: 'u5_3',  topic: 'Project Setup & Dependencies',           details: 'Create new project | install packages | folder structure' },
      { id: 'u5_4',  topic: 'playwright.config File Deep Dive',       details: 'testDir | timeout | retries | projects | reporter | use options' },
      { id: 'u5_5',  topic: 'Creating testconfig File',               details: 'Environment config | base URL | credentials | config per env' },
      { id: 'u5_6',  topic: 'Creating Page Object Classes',           details: 'Page class design | locator encapsulation | reusable methods' },
      { id: 'u5_7',  topic: 'Error Handling in Page Objects',         details: 'try/catch | graceful fallbacks | meaningful error messages' },
      { id: 'u5_8',  topic: 'Preparing Test Data Files',              details: 'JSON & CSV test data | structured data files | env-specific data' },
      { id: 'u5_9',  topic: 'Utility Files & Data Providers',         details: 'Parsing JSON/CSV | helper functions | shared utilities' },
      { id: 'u5_10', topic: 'Faker Library for Random Data',          details: 'faker.js | dynamic name/email/address | seeded randomness' },
      { id: 'u5_11', topic: 'Adding Test Cases with Tags',            details: 'Structured test files | tags for env/priority | test filtering' },
      { id: 'u5_12', topic: 'HTML & Allure Reports',                  details: 'Report generation | Allure serve | screenshots & videos in reports' },
      { id: 'u5_13', topic: 'Parallel & Serial Execution',            details: 'fullyParallel | projects | serial file-level | shard config' },
      { id: 'u5_14', topic: 'Git & GitHub for Test Projects',         details: 'Branching | commits | PRs | .gitignore for test artifacts' },
      { id: 'u5_15', topic: 'Playwright GitHub Actions Workflow',     details: 'workflow.yml | install browsers | run tests | upload reports' },
      { id: 'u5_16', topic: 'Jenkins + Playwright Integration',       details: 'Jenkinsfile | pipeline stages | run in Jenkins | publish reports' }
    ]
  },
  {
    moduleNum: 6,
    moduleName: "Module 6 – API Testing with Playwright",
    subtitle: "REST API Automation",
    keyCoverage: [
      "GET, POST, PUT, PATCH, DELETE requests",
      "Dynamic data with Faker library",
      "Path and query parameters",
      "API chaining and response validation",
      "Basic, Token, and API Key authentication"
    ],
    topics: [
      { id: 'u6_1',  topic: 'REST API Basics',                   details: 'What is REST? | HTTP methods | status codes | request/response lifecycle' },
      { id: 'u6_2',  topic: 'Making GET Requests',               details: 'request.get() | query params | path params | response body parsing' },
      { id: 'u6_3',  topic: 'Making POST Requests',              details: 'request.post() | static body | JSON file body | dynamic data body' },
      { id: 'u6_4',  topic: 'PUT, PATCH & DELETE Requests',      details: 'Update operations | partial updates | delete & verify response' },
      { id: 'u6_5',  topic: 'Faker for Dynamic Request Data',    details: 'faker.js in API tests | random payload generation | seeded data' },
      { id: 'u6_6',  topic: 'Path & Query Parameters',           details: 'Passing path params | query strings | URL construction' },
      { id: 'u6_7',  topic: 'API Chaining',                      details: 'Use response from one call as input to next | data dependency flows' },
      { id: 'u6_8',  topic: 'Validating Responses',              details: 'Status codes | headers | JSON body validation | schema validation' },
      { id: 'u6_9',  topic: 'API Authentication',                details: 'Basic auth | Bearer token | API key in headers/params' }
    ]
  },
  {
    moduleNum: 7,
    moduleName: "Module 7 – Playwright Powered by AI",
    subtitle: "AI-Augmented Testing",
    keyCoverage: [
      "Generative AI fundamentals for testers",
      "Model Context Protocol (MCP) explained",
      "GitHub Copilot for test generation",
      "Playwright MCP + Copilot workflow",
      "Vibe Coding — AI-assisted development"
    ],
    topics: [
      { id: 'u7_1',  topic: 'Basics of Generative AI',              details: 'What is GenAI? | Prompting basics | LLMs and their limitations' },
      { id: 'u7_2',  topic: 'What is an Agent?',                    details: 'AI agents | agentic loops | tool use | context management' },
      { id: 'u7_3',  topic: 'Model Context Protocol (MCP)',         details: 'What is MCP? | How LLMs connect to tools | Playwright MCP architecture' },
      { id: 'u7_4',  topic: 'Playwright MCP Config in VS Code',     details: 'MCP server setup | VS Code config | connecting Copilot to browser' },
      { id: 'u7_5',  topic: 'Working with GitHub Copilot',          details: 'Copilot chat | inline suggestions | test case generation from prompts' },
      { id: 'u7_6',  topic: 'Generating UI Tests with MCP+Copilot', details: 'Creating test context | prompt to generate test | run & validate' },
      { id: 'u7_7',  topic: 'Generating API Tests with MCP+Copilot',details: 'API test context | automated assertion generation | refinement' },
      { id: 'u7_8',  topic: 'VS Code Playwright Test Extension',    details: 'Test explorer | run/debug from sidebar | watch mode' },
      { id: 'u7_9',  topic: 'Vibe Coding',                         details: 'AI-assisted flow state | prompting patterns | review & refactor AI output' }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = udemyData;
}
