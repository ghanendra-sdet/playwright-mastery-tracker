const syllabusData = [
  {
    moduleNum: 1,
    moduleName: "Module 1 – JavaScript Fundamentals",
    subtitle: "JavaScript + AI Setup",
    keyCoverage: [
      "JavaScript fundamentals for automation",
      "Variables, scope, and type coercion",
      "Conditional logic and loops",
      "Functions and arrow functions",
      "Array and object manipulation",
      "DOM selectors and events",
      "Promises and async/await",
      "Modern ES6+ syntax",
      "AI – Setting up a project via GitHub Copilot / Augment Code"
    ],
    projects: ["Foundational coding exercises only – no standalone project"],
    days: [
      { day: 1,  topic: "JavaScript Introduction",   details: "History of JS | Role in automation testing | Dev setup" },
      { day: 2,  topic: "Data Types & Variables",     details: "Primitives | let / const / var | Type coercion" },
      { day: 3,  topic: "Operators & Expressions",    details: "Arithmetic | Comparison | Logical operators" },
      { day: 4,  topic: "Control Flow",               details: "if/else | switch | ternary operator" },
      { day: 5,  topic: "Loops",                      details: "for | while | do-while | loop control" },
      { day: 6,  topic: "Functions Basics",           details: "Declaration | parameters | return values | scope" },
      { day: 7,  topic: "Arrow Functions",            details: "Arrow syntax | this binding | use cases" },
      { day: 8,  topic: "Arrays",                     details: "Array methods | iteration | spread operator" },
      { day: 9,  topic: "Objects",                    details: "Object literals | properties | destructuring" },
      { day: 10, topic: "DOM Manipulation",           details: "Selectors | events | DOM methods" },
      { day: 11, topic: "Async JavaScript",           details: "Callbacks | promises | async/await" },
      { day: 12, topic: "ES6+ Features",              details: "Modules | classes | template literals | optional chaining" }
    ]
  },
  {
    moduleNum: 2,
    moduleName: "Module 2 – Playwright Fundamentals",
    subtitle: "Core Playwright Skills",
    keyCoverage: [
      "Playwright architecture and setup",
      "Writing stable UI tests",
      "Locator strategies and actions",
      "UI assertions and validations",
      "Browser context isolation",
      "Debugging and test introspection"
    ],
    projects: [
      "Form Validation Suite – input field validation, required vs optional fields, error message verification, accessibility basics",
      "Debugging with Playwright Inspector – debug failing tests, use Inspector & Trace Viewer, failure analysis"
    ],
    days: [
      { day: 13, topic: "Playwright Overview",        details: "What is Playwright | features | vs Selenium" },
      { day: 14, topic: "Installation & Setup",       details: "npm install | project structure | playwright.config" },
      { day: 15, topic: "Writing First Test",         details: "Test file structure | running tests | viewing results" },
      { day: 16, topic: "Selectors & Locators",       details: "CSS | text | role selectors | Shadow DOM | SVG" },
      { day: 17, topic: "Locators (Best Practice)",   details: "getByRole | getByText | getByLabel | getByTestId" },
      { day: 18, topic: "Input Actions",              details: "click | fill | check | hover | select options" },
      { day: 19, topic: "Assertions",                 details: "expect | toBeVisible | toHaveText | toHaveValue" },
      { day: 20, topic: "Browser Contexts",           details: "Incognito | multiple contexts | isolation" },
      { day: 21, topic: "Screenshots & Videos",       details: "Full-page screenshots | video recording | debugging artifacts" },
      { day: 22, topic: "Playwright Inspector",       details: "Debug mode | Trace Viewer | Codegen" }
    ]
  },
  {
    moduleNum: 3,
    moduleName: "Module 3 – TypeScript for Automation",
    subtitle: "Type-Safe Testing",
    keyCoverage: [
      "Type-safe automation development",
      "Interface-driven design",
      "Generic utilities and helpers",
      "Strong typing in Playwright tests"
    ],
    projects: ["TypeScript concepts applied gradually to existing Playwright tests"],
    days: [
      { day: 23, topic: "TypeScript Introduction",   details: "Why TS | setup | tsconfig | compilation" },
      { day: 24, topic: "Type Annotations",          details: "Basic types | type inference | any vs unknown" },
      { day: 25, topic: "Interfaces",                details: "Defining interfaces | optional | readonly properties" },
      { day: 26, topic: "Types vs Interfaces",       details: "Type aliases | union types | intersection types" },
      { day: 27, topic: "Functions in TypeScript",   details: "Typed params | return types | function overloads" },
      { day: 28, topic: "Generics",                  details: "Generic functions | generic classes | constraints" },
      { day: 29, topic: "Enums & Literal Types",     details: "String enums | numeric enums | literal types" },
      { day: 30, topic: "Classes & Access Modifiers",details: "public | private | protected | abstract classes | implements" },
      { day: 31, topic: "Modules",                   details: "Import/export | module resolution | namespaces" },
      { day: 32, topic: "TypeScript with Playwright",details: "Type-safe tests | custom types | best practices" }
    ]
  },
  {
    moduleNum: 4,
    moduleName: "Module 4 – Advanced Playwright Capabilities",
    subtitle: "Power Features",
    keyCoverage: [
      "Route handlers and API mocks",
      "File handling automation",
      "Multi-tab and iframe handling",
      "Authentication reuse with storage state",
      "Responsive and visual testing"
    ],
    projects: [
      "Browser Context & Auth State – multiple contexts, incognito sessions, save & reuse auth state",
      "Network Mocking Project – mock API responses, simulate failures (500/timeout), feature flag testing",
      "File Upload & Download Validation – upload automation, file type & size validation, download verification",
      "Multi-Page & iFrame Testing – popups, new tabs, cross-frame interactions",
      "Mobile Responsive Testing – device emulation, viewport validations, touch interactions",
      "Visual Regression Suite – baseline screenshots, comparison, ignore dynamic regions"
    ],
    days: [
      { day: 33, topic: "Network Interception",           details: "Route handlers | intercept | abort | continue" },
      { day: 34, topic: "API Mocking",                    details: "Mock API responses | fixtures | custom responses" },
      { day: 35, topic: "File Uploads & Downloads",       details: "File upload automation | download assertions" },
      { day: 36, topic: "Dialogs & Alerts",               details: "alert | confirm | prompt handling" },
      { day: 37, topic: "Frames & iFrames",               details: "Frame locators | nested frames | cross-frame actions" },
      { day: 38, topic: "Multiple Pages & Popups",        details: "New tabs | popup events | multi-page flows" },
      { day: 39, topic: "Authentication & Storage State", details: "Login flows | save storage state | session reuse" },
      { day: 40, topic: "Geolocation & Permissions",      details: "Location mocking | permissions | browser emulation" },
      { day: 41, topic: "Mobile Testing",                 details: "Device emulation | viewport testing | touch events" },
      { day: 42, topic: "Visual Testing",                 details: "Visual regression | screenshot comparison | pixel matching" }
    ]
  },
  {
    moduleNum: 5,
    moduleName: "Module 5 – Playwright Test Runner Deep Dive",
    subtitle: "Advanced Test Architecture",
    keyCoverage: [
      "Playwright Test architecture",
      "Fixture-based design",
      "Parallel and sharded execution",
      "Flaky test handling",
      "Advanced reporting"
    ],
    projects: [
      "Data-Driven Test Suite – JSON/CSV-based tests, parameterized execution, environment-based data",
      "Flaky Test Investigation – introduce flaky tests, retry vs fix analysis, trace-based debugging",
      "Multi-Browser Compatibility Suite – Chromium, Firefox, WebKit execution, conditional skips & tagging"
    ],
    days: [
      { day: 43, topic: "Test Configuration",        details: "playwright.config | projects | reporters | base URL" },
      { day: 44, topic: "Test Organization",         details: "describe | beforeEach | afterEach | tagging" },
      { day: 45, topic: "Fixtures",                  details: "Built-in | custom | worker-scoped fixtures" },
      { day: 46, topic: "Parallel Execution",        details: "Workers | sharding | parallel config" },
      { day: 47, topic: "Retries & Timeouts",        details: "Retry config | timeout settings | test-level overrides" },
      { day: 48, topic: "Reporters",                 details: "HTML | JSON | list | custom reporters" },
      { day: 49, topic: "Test Annotations",          details: "test.skip | test.only | test.fixme | test.slow" },
      { day: 50, topic: "Parameterized Tests",       details: "Data-driven testing | test matrices | multiple datasets" },
      { day: 51, topic: "Global Setup & Teardown",   details: "globalSetup | globalTeardown | setup projects" },
      { day: 52, topic: "Debugging Tests",           details: "Debug mode | VS Code extension | trace viewer" }
    ]
  },
  {
    moduleNum: 6,
    moduleName: "Module 6 – API Testing with Playwright",
    subtitle: "REST API Automation",
    keyCoverage: [
      "REST API testing with Playwright",
      "Authenticated API calls",
      "JSON assertions and response validation",
      "Hybrid automation flows (API + UI)",
      "Performance thresholds"
    ],
    projects: [
      "API Testing Mini Framework – GET and POST tests, header & auth handling, JSON assertions",
      "API + UI Hybrid Testing Suite – API-based data setup, UI verification, API teardown",
      "API Performance Validation – response time measurement, threshold-based failures, performance reporting"
    ],
    days: [
      { day: 53, topic: "API Testing Fundamentals",   details: "HTTP methods | status codes | request/response lifecycle" },
      { day: 54, topic: "APIRequestContext",          details: "request fixture | headers | base URL configuration" },
      { day: 55, topic: "GET Requests",               details: "Query params | path params | response assertions" },
      { day: 56, topic: "POST Requests",              details: "Request body | JSON payload | multipart (file upload)" },
      { day: 57, topic: "PUT & PATCH Requests",       details: "Update operations | idempotency | partial updates" },
      { day: 58, topic: "DELETE Requests",            details: "Delete operations | soft deletes | 204 assertions" },
      { day: 59, topic: "API Authentication",         details: "Bearer tokens | API keys | OAuth 2.0 flows" },
      { day: 60, topic: "Response Validation",        details: "JSON schema | error handling | dynamic values" },
      { day: 61, topic: "API + UI Hybrid Testing",    details: "API data setup | UI verification | API teardown" },
      { day: 62, topic: "API Performance Testing",    details: "Response time measurement | threshold assertions | monitoring" }
    ]
  },
  {
    moduleNum: 7,
    moduleName: "Module 7 – OOPS & Page Object Model (POM)",
    subtitle: "Scalable Architecture",
    keyCoverage: [
      "Object-oriented automation design",
      "Scalable POM architecture",
      "Reusable page components",
      "Maintainable test code"
    ],
    projects: [
      "E-Commerce Checkout Flow (POM-Based) – product selection, checkout validation, negative scenarios",
      "Page Components Library – header, footer, navigation components, component-level assertions"
    ],
    days: [
      { day: 63, topic: "OOP Concepts",               details: "Encapsulation | inheritance | polymorphism | abstraction" },
      { day: 64, topic: "Classes & Constructors",      details: "Class syntax | constructors | instance methods | static" },
      { day: 65, topic: "Inheritance",                 details: "extends | super | method override | liskov principle" },
      { day: 66, topic: "Abstract Classes",            details: "Abstract methods | base classes | enforced contracts" },
      { day: 67, topic: "Interfaces in OOP",           details: "Interface contracts | composition over inheritance" },
      { day: 68, topic: "Design Patterns",             details: "Singleton | factory | builder | strategy patterns" },
      { day: 69, topic: "POM Introduction",            details: "What is POM | benefits | folder structure" },
      { day: 70, topic: "Creating Page Objects",       details: "Locator encapsulation | action methods | page classes" },
      { day: 71, topic: "Page Components",             details: "Reusable header | footer | navigation components" },
      { day: 72, topic: "Base Page Pattern",           details: "Base class | shared utilities | common methods" },
      { day: 73, topic: "Fixtures with POM",           details: "Dependency injection | page fixture setup | test isolation" },
      { day: 74, topic: "POM Best Practices",          details: "Naming conventions | maintenance | anti-patterns" }
    ]
  },
  {
    moduleNum: 8,
    moduleName: "Module 8 – Automation Framework & CI/CD",
    subtitle: "Production-Ready Framework",
    keyCoverage: [
      "Production-ready framework design",
      "Logging and observability",
      "CI/CD with Docker",
      "Parallel and sharded pipelines"
    ],
    projects: [
      "Complete E2E Automation Framework – folder architecture, base test & page, environment config",
      "Reporting & Failure Analysis – Allure reports, screenshots & videos, failure diagnostics",
      "CI/CD Pipeline Integration – GitHub Actions, Docker execution, parallel & sharded runs",
      "Performance Metrics Collection – Web vitals (LCP, CLS, FID), page load metrics, threshold-based failures"
    ],
    days: [
      { day: 75, topic: "Framework Architecture",      details: "Folder structure | layers | separation of concerns" },
      { day: 76, topic: "Data Management",             details: "JSON | CSV | .env | environment-based config" },
      { day: 77, topic: "Utility Functions",           details: "Custom helpers | wrapper functions | common utils" },
      { day: 78, topic: "Logging",                     details: "Console logging | file logging | log levels" },
      { day: 79, topic: "Error Handling",              details: "try/catch | graceful recovery | custom error types" },
      { day: 80, topic: "Advanced Reporting",          details: "Allure integration | screenshots on failure | videos" },
      { day: 81, topic: "Git & GitHub",                details: "Git branches | commits | PRs | code reviews" },
      { day: 82, topic: "Git Workflows",               details: "Git Flow | trunk-based | branching strategies" },
      { day: 83, topic: "GitHub Actions",              details: "Workflow YAML | jobs | steps | triggers | secrets" },
      { day: 84, topic: "CI Pipeline Setup",           details: "CI triggers | artifacts | test reports in CI" },
      { day: 85, topic: "Docker Basics",               details: "Images | containers | Dockerfile | volumes" },
      { day: 86, topic: "Playwright in Docker",        details: "Headless execution in Docker | playwright Docker image" },
      { day: 87, topic: "Parallel CI Execution",       details: "Matrix strategy | sharding | parallel job config" },
      { day: 88, topic: "Complete Framework Integration", details: "End-to-end integration | documentation | PR review" }
    ]
  },
  {
    moduleNum: 9,
    moduleName: "Module 9 – Career & Industry Readiness",
    subtitle: "Job-Ready SDET Skills",
    keyCoverage: [
      "Resume storytelling using real projects",
      "GitHub portfolio polish",
      "Framework-level interview readiness"
    ],
    projects: [
      "Resume & GitHub Polish – resume bullet creation, repository cleanup, README & documentation"
    ],
    days: [
      { day: 89, topic: "Resume Building",         details: "SDET resume format | project bullets | skills section" },
      { day: 90, topic: "GitHub Portfolio",        details: "Repo cleanup | README polish | project showcase" },
      { day: 91, topic: "Interview Preparation",   details: "Framework-level questions | live coding | system design" }
    ]
  },
  {
    moduleNum: 10,
    moduleName: "Module 10 – Playwright + AI",
    subtitle: "AI-Powered Testing",
    keyCoverage: [
      "AI-assisted test generation",
      "Playwright MCP (Model Context Protocol)",
      "Agentic browser automation workflows",
      "GitHub Copilot & Augment Code for testing"
    ],
    projects: [
      "AI-assisted test generation with GitHub Copilot",
      "Agentic automation with Playwright MCP",
      "Building AI-assisted test architectures"
    ],
    days: [
      { day: 92, topic: "Playwright MCP – Basics",     details: "Model Context Protocol | connecting AI to browser | setup" },
      { day: 93, topic: "Playwright MCP – Workflows",  details: "Agentic test automation | AI-driven assertions | use cases" },
      { day: 94, topic: "AI-Assisted Test Generation", details: "GitHub Copilot | Augment Code | auto-generated test suites" }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = syllabusData;
}
