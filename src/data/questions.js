export const questions = [
  // ── Test Strategy & Planning ──────────────────────────────────────────────
  {
    id: 1,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "What is a test strategy, and how does it differ from a test plan?",
    answer:
      "A test strategy is a high-level approach to quality assurance that defines testing objectives, scope, risks, tools, environments, and testing types. A test plan is a detailed execution document containing timelines, resources, test cycles, and deliverables.",
  },
  {
    id: 2,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "What should a comprehensive test strategy include?",
    answer:
      "Scope, Objectives, Test levels, Testing types, Risk assessment, Environment strategy, Test data strategy, Automation strategy, Entry/exit criteria, Resource planning, and Reporting approach.",
  },
  {
    id: 3,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "How do you estimate testing effort for a complex release?",
    answer:
      "Consider: number of impacted modules, complexity, integrations, platforms, regression scope, automation needs, team capacity, and historical data.",
  },
  {
    id: 4,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "How do you estimate when requirements are incomplete?",
    answer:
      "Provide ranges rather than exact numbers, document assumptions, highlight unknowns and risks, and re-estimate when requirements mature.",
  },
  {
    id: 5,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "What factors affect testing timelines the most?",
    answer:
      "Requirement quality, scope changes, technical complexity, environment stability, resource availability, dependency on other teams, and automation coverage.",
  },
  {
    id: 6,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "How would you allocate QA resources across multiple releases?",
    answer:
      "Prioritize based on business impact, risk, deadlines, team expertise, and release criticality.",
  },
  {
    id: 7,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "How would you approach testing for a release affecting 10 modules?",
    answer:
      "Conduct impact analysis, identify high-risk areas, define regression scope, prioritize critical business flows, and allocate resources based on risk.",
  },
  {
    id: 8,
    category: "Test Strategy & Planning",
    level: "Senior",
    question:
      "You have one week to test functionality that normally requires three weeks. What would you do?",
    answer:
      "Perform risk assessment, prioritize critical flows, reduce low-risk coverage, communicate risks to stakeholders, and recommend phased testing.",
  },
  {
    id: 9,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "What is risk-based testing?",
    answer:
      "A testing approach where effort is prioritized according to business impact, probability of failure, and technical complexity.",
  },
  {
    id: 10,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "What information do you need before creating a test strategy?",
    answer:
      "Requirements, architecture, dependencies, release goals, risks, team capacity, and existing automation.",
  },
  {
    id: 11,
    category: "Test Strategy & Planning",
    level: "Senior",
    question:
      "What is more important: test coverage or risk coverage?",
    answer:
      "Risk coverage. 100% test coverage can still miss critical business risks.",
  },
  {
    id: 12,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "How would you balance quality, speed, and cost?",
    answer:
      "Prioritize high-risk areas, automate repetitive validation, use risk-based testing, and focus on business value. Perfect quality is rarely achievable within fixed time and budget.",
  },
  {
    id: 13,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "How would you build a release readiness framework?",
    answer:
      "Include: risk assessment, test execution status, open defects, automation results, performance validation, security validation, rollback plan, and stakeholder sign-off.",
  },
  {
    id: 14,
    category: "Test Strategy & Planning",
    level: "Senior",
    question: "What distinguishes a Senior QA from a Middle QA in strategy and planning?",
    answer:
      "A Senior QA defines testing strategy, performs risk analysis, influences release decisions, balances quality and business needs, optimizes processes, and leads quality initiatives. A Middle QA primarily executes and contributes within an existing strategy.",
  },
  {
    id: 15,
    category: "Test Strategy & Planning",
    level: "Senior",
    question:
      "You are responsible for release sign-off. Testing is incomplete, two medium-severity defects remain open, and management wants to proceed. How do you make the decision?",
    answer:
      "Present testing status, quantify risks, explain the impact of open defects, provide a recommendation based on evidence, and allow business stakeholders to make an informed final decision.",
  },

  // ── Functional Testing ────────────────────────────────────────────────────
  {
    id: 16,
    category: "Functional Testing",
    level: "Senior",
    question: "What is the difference between UI, API, and End-to-End testing?",
    answer:
      "UI Testing validates the user interface. API Testing validates services and business logic. End-to-End Testing validates complete business workflows.",
  },
  {
    id: 17,
    category: "Functional Testing",
    level: "Senior",
    question: "Why should API testing often be prioritized over UI testing?",
    answer:
      "API tests are faster, more stable, easier to maintain, and provide better defect isolation.",
  },
  {
    id: 18,
    category: "Functional Testing",
    level: "Senior",
    question: "What types of defects are best detected through UI testing?",
    answer:
      "Layout issues, user workflows, accessibility issues, browser compatibility, and client-side validation.",
  },
  {
    id: 19,
    category: "Functional Testing",
    level: "Senior",
    question: "What should be validated in API testing besides status codes?",
    answer:
      "Schema, business rules, data integrity, authentication, authorization, error handling, and performance.",
  },
  {
    id: 20,
    category: "Functional Testing",
    level: "Senior",
    question: "What is the biggest risk of relying heavily on End-to-End tests?",
    answer:
      "Slow execution, high maintenance, difficult debugging, and test flakiness.",
  },
  {
    id: 21,
    category: "Functional Testing",
    level: "Senior",
    question:
      "A login feature has UI, API, and Database layers. Where would you place most automation?",
    answer:
      "Primarily at the API level, with a small number of UI tests and database validation where necessary.",
  },

  // ── Non-Functional Testing ────────────────────────────────────────────────
  {
    id: 22,
    category: "Non-Functional Testing",
    level: "Senior",
    question: "What is performance testing?",
    answer:
      "Testing system responsiveness, stability, and scalability under expected conditions.",
  },
  {
    id: 23,
    category: "Non-Functional Testing",
    level: "Senior",
    question: "What is the difference between load, stress, and spike testing?",
    answer:
      "Load Testing uses expected user load. Stress Testing goes beyond expected capacity. Spike Testing introduces sudden traffic increases.",
  },
  {
    id: 24,
    category: "Non-Functional Testing",
    level: "Senior",
    question: "What metrics would you monitor during performance testing?",
    answer:
      "Response time, throughput, error rate, CPU usage, memory consumption, and database performance.",
  },
  {
    id: 25,
    category: "Non-Functional Testing",
    level: "Senior",
    question: "What types of security testing should QA understand?",
    answer:
      "Authentication testing, authorization testing, session management, input validation, and OWASP Top 10 awareness.",
  },
  {
    id: 26,
    category: "Non-Functional Testing",
    level: "Senior",
    question: "What is the purpose of penetration testing?",
    answer: "To identify vulnerabilities that attackers could exploit.",
  },
  {
    id: 27,
    category: "Non-Functional Testing",
    level: "Senior",
    question:
      "An API responds correctly but response time increased from 300ms to 3 seconds. Would you consider this a defect?",
    answer: "Yes, if performance requirements are violated.",
  },

  // ── Risk Analysis ─────────────────────────────────────────────────────────
  {
    id: 28,
    category: "Risk Analysis",
    level: "Senior",
    question: "How do you assess risk during release planning?",
    answer:
      "Evaluate business impact, technical complexity, number of integrations, historical defect rates, and architectural changes.",
  },
  {
    id: 29,
    category: "Risk Analysis",
    level: "Senior",
    question: "What is quality debt?",
    answer:
      "Quality debt occurs when known quality risks are accepted temporarily to achieve short-term goals. Examples include skipped testing, missing automation, and deferred known defects.",
  },
  {
    id: 30,
    category: "Risk Analysis",
    level: "Senior",
    question: "What risks typically arise from architectural changes?",
    answer:
      "Integration failures, performance regressions, data consistency issues, security vulnerabilities, and unexpected side effects.",
  },
  {
    id: 31,
    category: "Risk Analysis",
    level: "Senior",
    question:
      "How would you assess the risk of replacing a critical service with a new implementation?",
    answer:
      "Consider user impact, dependency count, historical stability, rollback capability, and monitoring availability.",
  },
  {
    id: 32,
    category: "Risk Analysis",
    level: "Senior",
    question:
      "The team wants to skip regression testing to meet a deadline. How would you respond?",
    answer:
      "Assess risk, explain consequences, recommend a minimal critical regression suite, and document the accepted risks.",
  },
  {
    id: 33,
    category: "Risk Analysis",
    level: "Senior",
    question: "How do you decide whether a known defect can be released?",
    answer:
      "Evaluate severity, business impact, frequency, available workarounds, customer impact, and release timeline.",
  },
  {
    id: 34,
    category: "Risk Analysis",
    level: "Senior",
    question:
      "A critical feature has only 60% test coverage but the release date cannot move. What would you recommend?",
    answer:
      "Identify untested risks, prioritize remaining testing on high-risk areas, increase monitoring, consider feature flags, and ensure stakeholders formally accept the risks.",
  },

  // ── Framework Design & CI/CD ──────────────────────────────────────────────
  {
    id: 35,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "What characteristics make an automation framework scalable?",
    answer:
      "Modularity, reusability, maintainability, clear separation of concerns, easy onboarding, parallel execution support, configurability, cross-platform compatibility, and good reporting.",
  },
  {
    id: 36,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "How would you structure a test automation framework from scratch?",
    answer:
      "Organize into folders: tests/, pages/, api/, fixtures/, helpers/, data/, config/, reports/. Key principles: separation of test and business logic, centralized configuration, and reusable utilities.",
  },
  {
    id: 37,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "What design patterns are commonly used in automation frameworks?",
    answer:
      "Page Object Model, Page Factory, Factory Pattern, Builder Pattern, Singleton, and Dependency Injection.",
  },
  {
    id: 38,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "What are the limitations of Page Object Model?",
    answer:
      "Large pages become difficult to maintain, code duplication can still occur, and it does not scale well for complex applications. Modern frameworks often use Page Components or the Screenplay Pattern instead.",
  },
  {
    id: 39,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "When would you choose Playwright over Selenium?",
    answer:
      "For modern web applications, faster execution, built-in waiting, easier parallelization, and better debugging tools.",
  },
  {
    id: 40,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "When would Selenium still be a good choice?",
    answer:
      "When there is an existing mature framework, legacy applications, large team expertise in Selenium, or extensive browser compatibility requirements.",
  },
  {
    id: 41,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "What factors influence framework selection?",
    answer:
      "Team skills, application architecture, CI/CD compatibility, community support, maintainability, performance, and cost.",
  },
  {
    id: 42,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question:
      "Your framework has grown to 3000 tests and execution takes 8 hours. What improvements would you consider?",
    answer:
      "Parallel execution, replacing UI tests with API tests where possible, test prioritization, framework optimization, and infrastructure scaling.",
  },
  {
    id: 43,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "How do you manage test data in large automation projects?",
    answer:
      "Use test data factories, dynamic generation, dedicated environments, cleanup strategies, and independent datasets per test.",
  },
  {
    id: 44,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "What challenges arise with parallel execution?",
    answer:
      "Shared test data conflicts, race conditions, environment limitations, and thread safety issues.",
  },
  {
    id: 45,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "What is CI/CD and why is it important for QA?",
    answer:
      "CI (Continuous Integration) is frequent integration of code changes; CD (Continuous Delivery/Deployment) is an automated release pipeline. For QA it provides faster feedback, early defect detection, consistent testing, and reduced release risk.",
  },
  {
    id: 46,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "Where should automated tests run within CI/CD?",
    answer:
      "Unit tests on commit, API tests during build, smoke tests after deployment to QA, and regression tests pre-release.",
  },
  {
    id: 47,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "What are quality gates?",
    answer:
      "Conditions that must be met before progressing in a pipeline. Examples: unit tests pass, code coverage threshold met, no critical defects open, smoke tests pass.",
  },
  {
    id: 48,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "What is a flaky test, and why is it dangerous in CI/CD?",
    answer:
      "A flaky test produces inconsistent results. It reduces trust in the pipeline, slows releases, and can mask real defects.",
  },
  {
    id: 49,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "How would you reduce flaky tests?",
    answer:
      "Better synchronization, stable locators, independent test data, environment improvements, and root cause investigation.",
  },
  {
    id: 50,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "What is shift-left testing within CI/CD?",
    answer:
      "Moving testing earlier by running tests on every commit, applying static analysis, unit testing, and API testing — all before changes reach QA environments.",
  },
  {
    id: 51,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question:
      "Your regression suite takes 6 hours and blocks every release. What would you do?",
    answer:
      "Split suites, prioritize tests, parallelize execution, move tests to lower pyramid levels, and implement risk-based execution.",
  },
  {
    id: 52,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question: "What metrics would you track for CI/CD quality?",
    answer:
      "Build success rate, deployment success rate, test pass rate, mean time to recovery, flaky test percentage, and release frequency.",
  },
  {
    id: 53,
    category: "Framework Design & CI/CD",
    level: "Senior",
    question:
      "You join a project with no CI/CD, manual testing, and monthly releases. What improvements would you introduce?",
    answer:
      "Source control standards, build automation, smoke automation, a CI pipeline, regression automation, quality gates, and continuous delivery practices.",
  },

  // ── Metrics & Analytics ───────────────────────────────────────────────────
  {
    id: 54,
    category: "Metrics & Analytics",
    level: "Senior",
    question: "What quality metrics do you regularly track, and why?",
    answer:
      "Defect leakage, defect escape rate, test coverage, automation coverage, pass/fail rate, defect density, reopen rate, and production incidents. Metrics should support decision-making, not just reporting.",
  },
  {
    id: 55,
    category: "Metrics & Analytics",
    level: "Senior",
    question: "What is defect leakage?",
    answer:
      "Defect leakage measures defects missed during one phase and discovered in a later phase (e.g., missed during QA, found in UAT or Production). Formula: Defect Leakage = Defects Found Later / Total Defects × 100%.",
  },
  {
    id: 56,
    category: "Metrics & Analytics",
    level: "Senior",
    question: "What is defect escape rate?",
    answer:
      "The percentage of defects that reach production. Formula: Production Defects / Total Defects × 100%. A high rate may indicate insufficient coverage, requirement gaps, or weak regression testing.",
  },
  {
    id: 57,
    category: "Metrics & Analytics",
    level: "Senior",
    question: "How would you measure test coverage?",
    answer:
      "Coverage can be measured against requirements, user stories, business processes, or risks. It should focus on quality and risk, not just quantity.",
  },
  {
    id: 58,
    category: "Metrics & Analytics",
    level: "Senior",
    question: "Which metrics can be misleading?",
    answer:
      "Number of bugs found, number of test cases executed, and automation coverage %. Without context, these metrics may drive incorrect behavior.",
  },
  {
    id: 59,
    category: "Metrics & Analytics",
    level: "Senior",
    question: "What metrics would you present to executives?",
    answer:
      "Release readiness, escaped defects, production incidents, quality trends, and risk areas. Avoid highly technical metrics.",
  },
  {
    id: 60,
    category: "Metrics & Analytics",
    level: "Senior",
    question:
      "Production incidents increased by 50% over the last quarter. What metrics would you investigate?",
    answer:
      "Defect escape rate, defect leakage, requirement quality, test coverage, regression effectiveness, and root cause categories.",
  },
  {
    id: 61,
    category: "Metrics & Analytics",
    level: "Senior",
    question: "How would you measure automation ROI?",
    answer:
      "Time saved, execution frequency, reduced manual effort, faster releases, and reduced regressions.",
  },

  // ── Root Cause Analysis ───────────────────────────────────────────────────
  {
    id: 62,
    category: "Root Cause Analysis",
    level: "Senior",
    question: "What is Root Cause Analysis?",
    answer:
      "A structured investigation used to identify why an issue occurred and how similar issues can be prevented in the future. The goal is process improvement, not assigning blame.",
  },
  {
    id: 63,
    category: "Root Cause Analysis",
    level: "Senior",
    question: "What techniques can be used for RCA?",
    answer:
      "5 Whys, Fishbone Diagram, Timeline Analysis, Fault Tree Analysis, and Process Mapping.",
  },
  {
    id: 64,
    category: "Root Cause Analysis",
    level: "Senior",
    question: "Explain the 5 Whys technique.",
    answer:
      "Keep asking 'Why?' until the underlying cause is identified. Example: Incorrect discount applied → logic was incorrect → requirement misunderstood → acceptance criteria unclear → requirements review skipped. Root Cause: Insufficient requirement validation.",
  },
  {
    id: 65,
    category: "Root Cause Analysis",
    level: "Senior",
    question: "What is the difference between corrective and preventive actions?",
    answer:
      "A corrective action fixes the current issue (e.g., fix the bug in production). A preventive action prevents recurrence (e.g., add a regression test or improve requirement reviews).",
  },
  {
    id: 66,
    category: "Root Cause Analysis",
    level: "Senior",
    question:
      "A critical production bug was caused by a missing negative test case. What would you investigate?",
    answer:
      "Test design process, requirement quality, risk assessment, peer review effectiveness, and regression coverage.",
  },
  {
    id: 67,
    category: "Root Cause Analysis",
    level: "Senior",
    question: "Three production incidents occurred from the same module within six months. How would you approach RCA?",
    answer:
      "Look for patterns, review previous RCAs, analyze process weaknesses, assess module ownership, and strengthen regression coverage.",
  },
  {
    id: 68,
    category: "Root Cause Analysis",
    level: "Senior",
    question:
      "Describe how you would build a culture where every production incident becomes a learning opportunity rather than a blame exercise.",
    answer:
      "Blameless postmortems, focus on process failures, actionable improvements, shared ownership, transparent communication, tracking preventive actions, and a continuous improvement mindset.",
  },

  // ── Quality Culture & Shift-Left ──────────────────────────────────────────
  {
    id: 69,
    category: "Quality Culture & Shift-Left",
    level: "Senior",
    question: "What does 'Shift Left' mean in software quality?",
    answer:
      "Moving quality activities earlier in the SDLC. Instead of finding defects during testing, teams aim to prevent defects through early involvement in requirements, design reviews, risk analysis, and collaboration.",
  },
  {
    id: 70,
    category: "Quality Culture & Shift-Left",
    level: "Senior",
    question: "Why is Shift Left important?",
    answer:
      "Defects are cheaper to fix earlier, it reduces rework, improves delivery speed and product quality, reduces production incidents, and encourages team collaboration.",
  },
  {
    id: 71,
    category: "Quality Culture & Shift-Left",
    level: "Senior",
    question: "How can QA contribute during the requirements phase?",
    answer:
      "Review requirements for ambiguities, identify missing acceptance criteria, raise edge cases, suggest testability improvements, perform risk analysis, and ask clarifying questions.",
  },
  {
    id: 72,
    category: "Quality Culture & Shift-Left",
    level: "Senior",
    question: "What does a strong quality culture look like?",
    answer:
      "Quality is everyone's responsibility, developers write tests, product managers consider quality during planning, QA participates early, defects are prevented rather than just detected, and teams continuously improve processes.",
  },
  {
    id: 73,
    category: "Quality Culture & Shift-Left",
    level: "Senior",
    question: "What are signs of a poor quality culture?",
    answer:
      "QA is treated as the gatekeeper, testing starts only after development is complete, frequent production issues, lack of ownership, poor communication between teams, and quality being sacrificed for deadlines.",
  },
  {
    id: 74,
    category: "Quality Culture & Shift-Left",
    level: "Senior",
    question: "How would you encourage developers to take more ownership of quality?",
    answer:
      "Promote unit testing, share defect trends, involve developers in root cause analysis, encourage pair testing, establish quality metrics, and foster collaboration instead of blame.",
  },
  {
    id: 75,
    category: "Quality Culture & Shift-Left",
    level: "Senior",
    question: "What is the difference between defect detection and defect prevention?",
    answer:
      "Detection means finding defects after they are introduced. Prevention means reducing the likelihood of defects being introduced in the first place. Shift Left focuses heavily on prevention.",
  },
  {
    id: 76,
    category: "Quality Culture & Shift-Left",
    level: "Senior",
    question:
      "A Product Owner refuses requirement reviews because 'QA will test it later.' How would you respond?",
    answer:
      "Explain the cost of late defects, the benefits of early feedback, the risks of ambiguous requirements, and provide examples where requirement reviews prevented issues.",
  },
  {
    id: 77,
    category: "Quality Culture & Shift-Left",
    level: "Senior",
    question:
      "You join a project where QA is involved only after development, developers write few unit tests, and production defects are common. What is your first 90-day improvement plan?",
    answer:
      "Month 1: assess current process, review defect trends, identify quality bottlenecks. Month 2: introduce requirement reviews, participate in refinement sessions, establish quality metrics. Month 3: promote Shift Left practices, improve test automation strategy, increase developer quality ownership, and implement root cause analysis.",
  },

  // ── AI-Driven Testing ─────────────────────────────────────────────────────
  {
    id: 78,
    category: "AI-Driven Testing",
    level: "Senior",
    question:
      "What is AI-driven testing, and how does it differ from traditional test automation?",
    answer:
      "AI-driven testing uses artificial intelligence to assist with test case generation, requirement analysis, test data creation, risk identification, and automation code. Traditional automation follows predefined scripts, while AI can generate suggestions and adapt based on context.",
  },
  {
    id: 79,
    category: "AI-Driven Testing",
    level: "Senior",
    question: "What testing activities can be effectively supported by AI today?",
    answer:
      "Test case generation, exploratory testing ideas, test data creation, bug report writing, requirement analysis, automation code generation, root cause analysis, and documentation creation.",
  },
  {
    id: 80,
    category: "AI-Driven Testing",
    level: "Senior",
    question: "What are the main risks of relying on AI-generated test cases?",
    answer:
      "Missing business-specific scenarios, hallucinated requirements, incorrect assumptions, duplicate test cases, and false confidence in coverage. AI-generated outputs must always be reviewed by a QA engineer.",
  },
  {
    id: 81,
    category: "AI-Driven Testing",
    level: "Senior",
    question: "What is prompt engineering, and why is it important for QA engineers?",
    answer:
      "Prompt engineering is writing effective instructions for AI tools. Good prompts provide context, requirements, expected output format, constraints, and user roles. Better prompts produce higher-quality results.",
  },
  {
    id: 82,
    category: "AI-Driven Testing",
    level: "Senior",
    question: "What are AI hallucinations, and how can they impact testing activities?",
    answer:
      "Hallucinations occur when AI confidently provides incorrect information, such as inventing requirements, creating non-existent APIs, or suggesting invalid test scenarios. QA engineers must verify all outputs.",
  },
  {
    id: 83,
    category: "AI-Driven Testing",
    level: "Senior",
    question:
      "What security and privacy concerns should be considered when using AI tools?",
    answer:
      "Never share production data, customer information, passwords, API keys, or confidential business information with public AI tools. Follow company AI policies and use only approved tools.",
  },
  {
    id: 84,
    category: "AI-Driven Testing",
    level: "Senior",
    question: "Do you think AI will replace QA engineers? Why or why not?",
    answer:
      "No. AI assists with repetitive tasks but cannot replace critical thinking, business understanding, risk assessment, exploratory testing, and stakeholder communication.",
  },
  {
    id: 85,
    category: "AI-Driven Testing",
    level: "Senior",
    question: "How would you use AI to create test cases from a user story?",
    answer:
      "Provide the user story, acceptance criteria, and business rules. Ask AI to generate positive scenarios, negative scenarios, edge cases, and security tests. Then review and supplement with business-specific cases.",
  },
  {
    id: 86,
    category: "AI-Driven Testing",
    level: "Senior",
    question: "How would you measure the effectiveness of AI adoption within a QA team?",
    answer:
      "Track time saved, test preparation speed, documentation quality, team satisfaction, and improvements in defect detection.",
  },
  {
    id: 87,
    category: "AI-Driven Testing",
    level: "Senior",
    question:
      "A team member blindly trusts AI-generated bug reports. What risks does this create?",
    answer:
      "Incorrect defects being logged, missing reproduction evidence, misleading information shared with developers, and lost team credibility. All bug reports should be reviewed before submission.",
  },
  {
    id: 88,
    category: "AI-Driven Testing",
    level: "Senior",
    question:
      "A manager proposes replacing manual QA with AI tools. How would you respond?",
    answer:
      "AI augments QA rather than replaces it. Human judgment remains essential, AI improves efficiency, quality ownership stays with the team, and AI is a tool — not a substitute for testing expertise.",
  },

  // ── Automation Theory & Practice ──────────────────────────────────────────
  {
    id: 89,
    category: "Automation Theory & Practice",
    level: "Senior",
    question:
      "What factors do you consider when deciding whether a test case should be automated?",
    answer:
      "Execution frequency, business criticality, stability of functionality, maintenance cost, repeatability, manual effort saved, and ROI.",
  },
  {
    id: 90,
    category: "Automation Theory & Practice",
    level: "Senior",
    question: "Explain the Test Automation Pyramid and why it is important.",
    answer:
      "The pyramid has a large number of unit tests at the base, a smaller number of API/service tests in the middle, and the fewest UI tests at the top. It ensures faster feedback, lower maintenance, and better reliability.",
  },
  {
    id: 91,
    category: "Automation Theory & Practice",
    level: "Senior",
    question: "What causes flaky automated tests?",
    answer:
      "Timing issues, shared test data, environment instability, async operations, poor locators, and external dependencies.",
  },
  {
    id: 92,
    category: "Automation Theory & Practice",
    level: "Senior",
    question: "How should automation be integrated into CI/CD?",
    answer:
      "Run unit tests on every commit, API tests during build, smoke tests after deployment, and regression tests on a schedule or at release.",
  },
  {
    id: 93,
    category: "Automation Theory & Practice",
    level: "Senior",
    question: "What strategies do you use for automated test data?",
    answer:
      "Dedicated test accounts, data generation, cleanup after tests, seed datasets, and mock data.",
  },
  {
    id: 94,
    category: "Automation Theory & Practice",
    level: "Senior",
    question: "What problems does the Page Object Model solve?",
    answer:
      "Reduces duplication, easier maintenance, better readability, and encapsulation of UI element interactions.",
  },
  {
    id: 95,
    category: "Automation Theory & Practice",
    level: "Senior",
    question: "How would you reduce a 6-hour regression suite to under 2 hours?",
    answer:
      "Parallelization, removing duplicates, replacing UI tests with API tests where possible, test prioritization, and test impact analysis.",
  },
  {
    id: 96,
    category: "Automation Theory & Practice",
    level: "Senior",
    question: "When is automation not worth implementing?",
    answer:
      "For rarely executed tests, highly unstable features, or temporary functionality.",
  },
  {
    id: 97,
    category: "Automation Theory & Practice",
    level: "Senior",
    question: "What is contract testing?",
    answer:
      "Validation between consumer and provider services to ensure both sides agree on the API contract.",
  },
  {
    id: 98,
    category: "Automation Theory & Practice",
    level: "Senior",
    question: "Why use mocks in automated testing?",
    answer:
      "To isolate dependencies, achieve faster execution, and produce predictable results.",
  },
  {
    id: 99,
    category: "Automation Theory & Practice",
    level: "Senior",
    question: "What are the advantages and disadvantages of BDD?",
    answer:
      "Advantages: improved collaboration and readability. Disadvantages: maintenance overhead and tests can become documentation-only without real value.",
  },
  {
    id: 100,
    category: "Automation Theory & Practice",
    level: "Senior",
    question: "What security checks can be automated?",
    answer:
      "Authentication checks, authorization checks, input validation, dependency scanning, and vulnerability scanning.",
  },
  {
    id: 101,
    category: "Automation Theory & Practice",
    level: "Senior",
    question:
      "A critical login test fails randomly in CI about 10% of the time but always passes locally. How would you investigate?",
    answer:
      "Analyze logs, screenshots, and videos; compare local and CI environments; review waits and synchronization; check test data dependencies; verify environment stability; and fix the root cause rather than just increasing retries.",
  },
  {
    id: 102,
    category: "Automation Theory & Practice",
    level: "Senior",
    question:
      "Tests pass individually but fail during parallel execution because they modify the same user account. How would you solve this?",
    answer:
      "Create isolated test data, generate unique users dynamically, use test data factories, and implement cleanup mechanisms.",
  },
  {
    id: 103,
    category: "Automation Theory & Practice",
    level: "Senior",
    question:
      "You inherit a framework with no documentation, hardcoded test data, duplicate code, and hundreds of failing tests. What does your first month look like?",
    answer:
      "Understand the existing architecture, stabilize critical flows, remove dead tests, refactor incrementally, add documentation, and establish coding standards.",
  },
  {
    id: 104,
    category: "Automation Theory & Practice",
    level: "Senior",
    question:
      "A checkout process went from 3 seconds to 12 seconds but functional tests still pass. How could automation help detect such issues earlier?",
    answer:
      "Add performance assertions, monitor response times in tests, track trends in CI, create baseline thresholds, and integrate performance testing into the pipeline.",
  },
  {
    id: 105,
    category: "Automation Theory & Practice",
    level: "Senior",
    question:
      "If starting automation from scratch for a new product, how would you structure the automation strategy?",
    answer:
      "Start with a risk assessment, apply the test pyramid (API-first), integrate into CI/CD early, define a test data strategy, set up reporting, establish maintenance ownership, and define metrics and quality gates.",
  },

  // ── Estimation & ROI ──────────────────────────────────────────────────────
  {
    id: 106,
    category: "Estimation & ROI",
    level: "Senior",
    question: "How do you estimate testing effort for a new feature?",
    answer:
      "Consider complexity, scope, risks, integrations, platforms, test data requirements, and automation needs.",
  },
  {
    id: 107,
    category: "Estimation & ROI",
    level: "Senior",
    question: "What estimation techniques have you used?",
    answer:
      "Expert judgment, Planning Poker, Three-Point Estimation, T-shirt sizing, and historical comparisons.",
  },
  {
    id: 108,
    category: "Estimation & ROI",
    level: "Senior",
    question: "What is Three-Point Estimation?",
    answer:
      "Estimating three values — optimistic, most likely, and pessimistic — to manage uncertainty in effort forecasting.",
  },
  {
    id: 109,
    category: "Estimation & ROI",
    level: "Senior",
    question:
      "A developer estimates 1 day, but you estimate 5 days of testing. How do you explain it?",
    answer:
      "Break down the QA effort: functional testing, regression, edge cases, different environments, data setup, and automation updates.",
  },
  {
    id: 110,
    category: "Estimation & ROI",
    level: "Senior",
    question: "What factors typically increase testing effort?",
    answer:
      "Integrations, multiple platforms, complex business logic, security requirements, poor requirements, and large regression impact.",
  },
  {
    id: 111,
    category: "Estimation & ROI",
    level: "Senior",
    question: "What factors reduce testing effort?",
    answer:
      "Good automation, stable requirements, clear acceptance criteria, strong unit testing, and reusable test data.",
  },
  {
    id: 112,
    category: "Estimation & ROI",
    level: "Senior",
    question:
      "A manual regression cycle takes 40h and runs twice/month. Automating it takes 120h to build and 4h/month to maintain, reducing runs to 2h each. Calculate the ROI.",
    answer:
      "Current effort: 80h/month. Automated effort: 4h maintenance + 4h execution = 8h/month. Savings: 72h/month. Payback period ≈ 120 / 72 = ~1.67 months. Additional considerations: stability, release frequency, future maintenance cost, and risk reduction.",
  },
  {
    id: 113,
    category: "Estimation & ROI",
    level: "Senior",
    question:
      "A critical production bug causes 4h outage, affects 200 customers, costs $5k in support and $20k in lost revenue. A preventive automation initiative costs $8k. Is it justified?",
    answer:
      "Yes. The total incident cost ($25k) far exceeds the $8k initiative. ROI = (Costs Avoided − Initiative Cost) / Initiative Cost. Even a 50% reduction in incident likelihood makes it worthwhile.",
  },
  {
    id: 114,
    category: "Estimation & ROI",
    level: "Senior",
    question:
      "Full regression takes 10 days but the release is in 3 days. How do you approach testing?",
    answer:
      "Apply risk-based regression: run smoke tests, perform impact analysis, and prioritize critical business flows.",
  },
  {
    id: 115,
    category: "Estimation & ROI",
    level: "Senior",
    question: "How would you build a quality dashboard for executives?",
    answer:
      "Include release health, escaped defects, quality trends, automation stability, risk areas, and business impact. Avoid overwhelming stakeholders with low-level testing statistics.",
  },
  {
    id: 116,
    category: "Estimation & ROI",
    level: "Senior",
    question:
      "If defect discovery is decreasing near the end of testing, does that mean the product is ready for release?",
    answer:
      "Not necessarily. You need to consider coverage completed, whether risk areas were tested, severity of remaining defects, production readiness, and historical defect patterns.",
  },

  // ── Testing Fundamentals (Middle) ─────────────────────────────────────────
  {
    id: 117,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is software testing?",
    answer: "The process of evaluating software to verify it meets requirements and identify defects.",
  },
  {
    id: 118,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is the difference between Verification and Validation?",
    answer: "Verification checks whether we built the product correctly; Validation checks whether we built the right product.",
  },
  {
    id: 119,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is the purpose of testing?",
    answer: "To reduce risk, identify defects, and provide information about product quality.",
  },
  {
    id: 120,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is a defect?",
    answer: "A deviation between expected and actual behavior.",
  },
  {
    id: 121,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is a test case?",
    answer: "A documented set of steps, data, and expected results used to verify functionality.",
  },
  {
    id: 122,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is a test scenario?",
    answer: "A high-level description of what should be tested.",
  },
  {
    id: 123,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is the difference between a test case and a test scenario?",
    answer: "Scenarios are high-level descriptions; test cases contain detailed steps, data, and expected results.",
  },
  {
    id: 124,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is exploratory testing?",
    answer: "Simultaneous learning, test design, and execution without predefined scripts.",
  },
  {
    id: 125,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is regression testing?",
    answer: "Testing existing functionality after changes to ensure nothing has broken.",
  },
  {
    id: 126,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is the difference between retesting and regression testing?",
    answer: "Retesting verifies that a specific bug has been fixed; regression testing checks that existing functionality still works after changes.",
  },
  {
    id: 127,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is smoke testing?",
    answer: "Basic validation that the build is stable enough for further testing.",
  },
  {
    id: 128,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is sanity testing?",
    answer: "Focused verification of a specific change or fix without testing the whole system.",
  },
  {
    id: 129,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is acceptance testing?",
    answer: "Testing whether software satisfies business requirements and is ready for delivery.",
  },
  {
    id: 130,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What is a test plan?",
    answer: "A document describing scope, strategy, resources, and schedule for a testing effort.",
  },
  {
    id: 131,
    category: "Testing Fundamentals",
    level: "Middle",
    question: "What should be included in a bug report?",
    answer: "Summary, environment, steps to reproduce, expected result, actual result, and attachments (screenshots/logs).",
  },

  // ── Test Design Techniques (Middle) ──────────────────────────────────────
  {
    id: 132,
    category: "Test Design Techniques",
    level: "Middle",
    question: "What is Equivalence Partitioning?",
    answer: "Dividing inputs into groups expected to behave similarly, so one value from each group represents the whole group.",
  },
  {
    id: 133,
    category: "Test Design Techniques",
    level: "Middle",
    question: "What is Boundary Value Analysis?",
    answer: "Testing values at and just around the boundaries of valid input ranges, since defects often occur at edges.",
  },
  {
    id: 134,
    category: "Test Design Techniques",
    level: "Middle",
    question: "What is Decision Table Testing?",
    answer: "Testing combinations of conditions and their corresponding outcomes in a structured table.",
  },
  {
    id: 135,
    category: "Test Design Techniques",
    level: "Middle",
    question: "What is State Transition Testing?",
    answer: "Verifying system behavior as it moves between different states based on events or conditions.",
  },
  {
    id: 136,
    category: "Test Design Techniques",
    level: "Middle",
    question: "What is Pairwise Testing?",
    answer: "Testing all possible combinations of pairs of parameters to maximize coverage while minimizing the number of test cases.",
  },
  {
    id: 137,
    category: "Test Design Techniques",
    level: "Middle",
    question: "Give an example of boundary values for a field accepting 1–100.",
    answer: "Test values: 0 (invalid), 1 (min valid), 2 (just above min), 99 (just below max), 100 (max valid), 101 (invalid).",
  },
  {
    id: 138,
    category: "Test Design Techniques",
    level: "Middle",
    question: "What is error guessing?",
    answer: "Using experience and intuition to predict likely defects and design tests targeting those areas.",
  },
  {
    id: 139,
    category: "Test Design Techniques",
    level: "Middle",
    question: "What is positive testing?",
    answer: "Verifying that the system behaves correctly with valid inputs.",
  },
  {
    id: 140,
    category: "Test Design Techniques",
    level: "Middle",
    question: "What is negative testing?",
    answer: "Verifying that the system handles invalid inputs and edge cases gracefully.",
  },
  {
    id: 141,
    category: "Test Design Techniques",
    level: "Middle",
    question: "How would you test a date field?",
    answer: "Test valid dates, invalid dates (e.g. Feb 30), boundary dates, leap year dates, different formats, and empty input.",
  },
  {
    id: 142,
    category: "Test Design Techniques",
    level: "Middle",
    question: "Design test scenarios for a Login page.",
    answer: "Valid login, invalid password, invalid username, empty username, empty password, both fields empty, password case sensitivity, remember me, account lockout after failed attempts, and session timeout.",
  },
  {
    id: 143,
    category: "Test Design Techniques",
    level: "Middle",
    question: "Create test scenarios for a Search feature.",
    answer: "Exact match, partial match, no results found, special characters input, very long text, case sensitivity, and empty search field.",
  },
  {
    id: 144,
    category: "Test Design Techniques",
    level: "Middle",
    question: "Design test scenarios for user registration.",
    answer: "Valid registration, existing email, invalid email format, weak password, password mismatch, and mandatory field validation.",
  },
  {
    id: 145,
    category: "Test Design Techniques",
    level: "Middle",
    question: "Design test scenarios for a file upload feature.",
    answer: "Valid file format and size, invalid file extension, file exceeding max size, empty file, corrupted file, and duplicate upload.",
  },
  {
    id: 146,
    category: "Test Design Techniques",
    level: "Middle",
    question: "Design test scenarios for pagination.",
    answer: "First page, last page, empty result page, next/previous navigation, and page size changes.",
  },

  // ── API Testing (Middle) ──────────────────────────────────────────────────
  {
    id: 147,
    category: "API Testing",
    level: "Middle",
    question: "What is REST?",
    answer: "An architectural style for web services that uses standard HTTP methods and stateless communication.",
  },
  {
    id: 148,
    category: "API Testing",
    level: "Middle",
    question: "What is the difference between GET and POST?",
    answer: "GET retrieves data without modifying state; POST creates or submits data and may change server state.",
  },
  {
    id: 149,
    category: "API Testing",
    level: "Middle",
    question: "What is the difference between PUT and PATCH?",
    answer: "PUT replaces the entire resource; PATCH partially updates specific fields.",
  },
  {
    id: 150,
    category: "API Testing",
    level: "Middle",
    question: "What is the difference between authentication and authorization?",
    answer: "Authentication verifies who the user is; authorization determines what they are allowed to do.",
  },
  {
    id: 151,
    category: "API Testing",
    level: "Middle",
    question: "What do HTTP status codes 200, 201, 400, 401, 403, and 404 mean?",
    answer: "200 = OK, 201 = Created, 400 = Bad Request, 401 = Unauthorized, 403 = Forbidden, 404 = Not Found.",
  },
  {
    id: 152,
    category: "API Testing",
    level: "Middle",
    question: "What should be tested in a Login API?",
    answer: "Valid credentials, invalid credentials, empty fields, locked account behavior, and basic security (e.g. SQL injection attempts).",
  },
  {
    id: 153,
    category: "API Testing",
    level: "Middle",
    question: "How would you test a Create User API?",
    answer: "Validate required fields, test with invalid data, test duplicate email, verify successful creation response, and validate the response schema.",
  },
  {
    id: 154,
    category: "API Testing",
    level: "Middle",
    question: "An API returns a 500 status code. How would you investigate?",
    answer: "Check server logs, review the request payload, check dependencies (DB, external services), and verify the environment is stable.",
  },
  {
    id: 155,
    category: "API Testing",
    level: "Middle",
    question: "How would you test a DELETE endpoint?",
    answer: "Test deleting an existing entity, deleting a non-existing entity (expect 404), authorization checks, and attempting multiple deletes of the same resource.",
  },
  {
    id: 156,
    category: "API Testing",
    level: "Middle",
    question: "What should be validated besides status codes in API testing?",
    answer: "Response body schema, field values, data types, business rules, headers, and response time.",
  },

  // ── Database Testing (Middle) ─────────────────────────────────────────────
  {
    id: 157,
    category: "Database Testing",
    level: "Middle",
    question: "What is a primary key?",
    answer: "A unique identifier for a record in a database table; it cannot be null or duplicated.",
  },
  {
    id: 158,
    category: "Database Testing",
    level: "Middle",
    question: "What is a foreign key?",
    answer: "A column that references the primary key of another table to enforce relational integrity.",
  },
  {
    id: 159,
    category: "Database Testing",
    level: "Middle",
    question: "What is the difference between INNER JOIN and LEFT JOIN?",
    answer: "INNER JOIN returns only matching rows from both tables; LEFT JOIN returns all rows from the left table plus matches from the right.",
  },
  {
    id: 160,
    category: "Database Testing",
    level: "Middle",
    question: "How would you find duplicate email addresses in a users table?",
    answer: "SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;",
  },
  {
    id: 161,
    category: "Database Testing",
    level: "Middle",
    question: "How would you count users created today?",
    answer: "SELECT COUNT(*) FROM users WHERE created_at = CURRENT_DATE;",
  },
  {
    id: 162,
    category: "Database Testing",
    level: "Middle",
    question: "How would you find users who have never placed an order?",
    answer: "SELECT u.* FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.id IS NULL;",
  },
  {
    id: 163,
    category: "Database Testing",
    level: "Middle",
    question: "What is data integrity?",
    answer: "The accuracy, consistency, and reliability of data throughout its lifecycle.",
  },
  {
    id: 164,
    category: "Database Testing",
    level: "Middle",
    question: "Data shown in the UI differs from the database. How would you investigate?",
    answer: "Validate the API response, check field mapping logic, check for caching issues, and review the database query.",
  },

  // ── Web Testing (Middle) ──────────────────────────────────────────────────
  {
    id: 165,
    category: "Web Testing",
    level: "Middle",
    question: "What is the difference between Local Storage, Session Storage, and Cookies?",
    answer: "Local Storage persists until explicitly cleared. Session Storage is cleared when the tab closes. Cookies are small browser-stored values with configurable expiration, often used for authentication.",
  },
  {
    id: 166,
    category: "Web Testing",
    level: "Middle",
    question: "What is CORS?",
    answer: "Cross-Origin Resource Sharing — a browser security mechanism that controls how web pages can request resources from a different domain.",
  },
  {
    id: 167,
    category: "Web Testing",
    level: "Middle",
    question: "What can be inspected in the browser Network tab?",
    answer: "HTTP requests and responses, headers, status codes, payload, timing, and response size.",
  },
  {
    id: 168,
    category: "Web Testing",
    level: "Middle",
    question: "A cookie disappears after page refresh. How would you investigate?",
    answer: "Check the cookie expiration, Secure and HttpOnly flags, domain/path configuration, and browser settings.",
  },
  {
    id: 169,
    category: "Web Testing",
    level: "Middle",
    question: "A user remains logged in after clicking logout. What would you check?",
    answer: "Verify that the session is invalidated server-side, cookies are cleared, and any auth tokens are revoked.",
  },
  {
    id: 170,
    category: "Web Testing",
    level: "Middle",
    question: "A page loads slowly. How would you investigate?",
    answer: "Analyze the Network tab for slow API calls, large assets, or missing caching. Check server response times and third-party resource loading.",
  },
  {
    id: 171,
    category: "Web Testing",
    level: "Middle",
    question: "A button is visible but not clickable. How would you investigate?",
    answer: "Check for an overlay covering the button, whether it is in a disabled state, CSS pointer-events, and JavaScript errors in the console.",
  },
  {
    id: 172,
    category: "Web Testing",
    level: "Middle",
    question: "Search works in Chrome but not in Firefox. How would you investigate?",
    answer: "Check browser compatibility issues, JavaScript API support differences, CSS rendering differences, and browser console errors in Firefox.",
  },

  // ── Mobile Testing (Middle) ───────────────────────────────────────────────
  {
    id: 173,
    category: "Mobile Testing",
    level: "Middle",
    question: "What is the difference between a Native and a Hybrid app?",
    answer: "A Native app uses platform-specific code (Swift/Kotlin) for one OS. A Hybrid app shares code across platforms using web technologies wrapped in a native shell.",
  },
  {
    id: 174,
    category: "Mobile Testing",
    level: "Middle",
    question: "What mobile interruptions should be tested?",
    answer: "Incoming calls, SMS messages, push notifications, low battery alerts, and other app notifications.",
  },
  {
    id: 175,
    category: "Mobile Testing",
    level: "Middle",
    question: "What is offline testing on mobile?",
    answer: "Verifying app behavior without an internet connection — including error messages, cached data display, and recovery after reconnection.",
  },
  {
    id: 176,
    category: "Mobile Testing",
    level: "Middle",
    question: "An app crashes after screen rotation. How would you approach this?",
    answer: "Test orientation changes in various app states, verify state is preserved after rotation, and test across different device models.",
  },
  {
    id: 177,
    category: "Mobile Testing",
    level: "Middle",
    question: "Push notifications are missing. How would you investigate?",
    answer: "Check device notification permissions, app-level notification settings, and the notification service or backend delivery logs.",
  },

  // ── Agile & SDLC (Middle) ─────────────────────────────────────────────────
  {
    id: 178,
    category: "Agile & SDLC",
    level: "Middle",
    question: "What is Scrum?",
    answer: "An Agile framework for iterative software development using time-boxed sprints and defined ceremonies.",
  },
  {
    id: 179,
    category: "Agile & SDLC",
    level: "Middle",
    question: "What is a Sprint?",
    answer: "A time-boxed development iteration (typically 1–2 weeks) with a defined goal and deliverable increment.",
  },
  {
    id: 180,
    category: "Agile & SDLC",
    level: "Middle",
    question: "What Scrum ceremonies should a QA participate in?",
    answer: "Sprint Planning (scope definition), Daily Standup (progress and blockers), Sprint Review (demo of completed work), and Retrospective (process improvement).",
  },
  {
    id: 181,
    category: "Agile & SDLC",
    level: "Middle",
    question: "What is the Definition of Done?",
    answer: "A shared agreement on the criteria that must be met before a feature or story is considered complete.",
  },
  {
    id: 182,
    category: "Agile & SDLC",
    level: "Middle",
    question: "What is backlog refinement?",
    answer: "A session where the team clarifies, estimates, and prepares upcoming backlog items before the next sprint.",
  },

  // ── Metrics & Quality (Middle) ────────────────────────────────────────────
  {
    id: 183,
    category: "Metrics & Quality",
    level: "Middle",
    question: "What is the difference between Defect Leakage and Defect Escape?",
    answer: "Defect Leakage is a defect found in a later phase than where it should have been caught. Defect Escape specifically refers to a defect reaching production.",
  },
  {
    id: 184,
    category: "Metrics & Quality",
    level: "Middle",
    question: "What is Test Coverage?",
    answer: "A measure of how much of the functionality or requirements has been tested.",
  },
  {
    id: 185,
    category: "Metrics & Quality",
    level: "Middle",
    question: "What is Defect Density?",
    answer: "The number of defects relative to the size of the system (e.g., per module or per feature).",
  },
  {
    id: 186,
    category: "Metrics & Quality",
    level: "Middle",
    question: "What is Shift Left in QA?",
    answer: "Starting quality activities earlier in the development lifecycle to catch and prevent defects sooner.",
  },
  {
    id: 187,
    category: "Metrics & Quality",
    level: "Middle",
    question: "What is Quality Debt?",
    answer: "Accumulated quality-related shortcuts — such as skipped tests or deferred fixes — that create risk over time.",
  },

  // ── Communication & Ownership (Middle) ────────────────────────────────────
  {
    id: 188,
    category: "Communication & Ownership",
    level: "Middle",
    question: "What is the difference between Severity and Priority?",
    answer: "Severity describes the impact of the defect on functionality. Priority describes how urgently it needs to be fixed.",
  },
  {
    id: 189,
    category: "Communication & Ownership",
    level: "Middle",
    question: "A developer disagrees with your bug severity rating. What do you do?",
    answer: "Discuss based on objective impact evidence. Severity should be evidence-based, not a matter of opinion.",
  },
  {
    id: 190,
    category: "Communication & Ownership",
    level: "Middle",
    question: "The release is tomorrow and testing is incomplete. What do you do?",
    answer: "Communicate the current test status, identify remaining high-risk areas, and clearly present the risks to stakeholders so they can make an informed decision.",
  },
  {
    id: 191,
    category: "Communication & Ownership",
    level: "Middle",
    question: "How do you handle an unreproducible bug?",
    answer: "Gather logs, environment details, screenshots, and any other available evidence. Try to reproduce under varied conditions and document all findings.",
  },
  {
    id: 192,
    category: "Communication & Ownership",
    level: "Middle",
    question: "How do you prioritize testing when time is limited?",
    answer: "Prioritize based on risk, business impact, and usage frequency — focusing on critical paths and revenue-impacting features first.",
  },
  {
    id: 193,
    category: "Communication & Ownership",
    level: "Middle",
    question: "How do you handle changing requirements mid-sprint?",
    answer: "Assess the impact on existing test cases, update tests accordingly, and communicate any risks introduced by the change.",
  },
  {
    id: 194,
    category: "Communication & Ownership",
    level: "Middle",
    question: "A developer says a bug is low severity but the customer considers it critical. How do you evaluate?",
    answer: "Evaluate business impact, user impact, frequency of occurrence, and data loss risk. Severity should be determined by evidence, not by either party's opinion alone.",
  },
  {
    id: 195,
    category: "Communication & Ownership",
    level: "Middle",
    question: "A production issue is reported. What are your first steps?",
    answer: "Gather evidence to reproduce the issue, assess its impact on users, communicate status to stakeholders, and support investigation.",
  },
];