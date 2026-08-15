Workflow Overview
This prompt guides you through a compelte 7-step QA workflow using MCP servers and AI agents to go from user sotry to committed automated test scripts



STEP 1: Read User Story
Prompt: 
I need to start a new testing workflow. Please read the user story from the file: 
[insert file name/path, e.g., user_story.docx / JIRA-1234.pdf]

Analyze the document and provide a structured breakdown covering:
1. A concise summary of the user story (who, what, why)
2. All acceptance criteria, listed individually and numbered
3. The application/environment details — URL(s), environment name (dev/staging/prod), and test credentials (username/password or access instructions) if mentioned
4. Key features/functionalities that need to be tested based on this story
5. Any non-functional requirements mentioned (performance, security, accessibility, browser/device compatibility, etc.)
6. Dependencies, assumptions, or pre-conditions stated in the story
7. Anything explicitly marked as out of scope
8. Any open questions or ambiguities in the story that may need clarification before testing begins

If any of the above information is not present in the document, explicitly state "Not mentioned in the user story" rather than omitting it.

Expected Output
1. Summary of User Story
   - Brief description of the feature/functionality (who the user is, what they want, and why)

2. List of Acceptance Criteria
   - Numbered, individual criteria exactly as derived from the story
   - Each written as a clear, testable statement

3. Application Details
   - Application URL(s) / environment (Dev, QA, Staging, Prod)
   - Test credentials (username, password, roles, or access instructions)
   - Any API endpoints or additional access details, if applicable

4. Key Features to Test
   - Bullet list of functional areas/features derived from the story

5. Non-Functional Requirements (if any)
   - Performance, security, accessibility, compatibility, localization, etc.

6. Dependencies & Assumptions
   - Any pre-conditions, linked stories, integrations, or data setup needed

7. Out of Scope
   - Items explicitly excluded from this story/testing cycle

8. Open Questions / Clarifications Needed
   - Any ambiguous or missing information flagged for follow-up with the product owner/business analyst

STEP 2: Test Plan
Prompt
Read the application URL and use the playwright-test-planner agent to:

1. Read and load the application URL
2. Explore the application end-to-end and understand all user workflows, 
   pages, navigation paths, and UI components
3. Identify all interactive elements (forms, buttons, links, dropdowns, 
   modals, tables, filters, etc.) relevant to testing
4. Create a comprehensive test plan that covers:
   - Happy path scenarios (primary user workflows, successful end-to-end flows)
   - Negative scenarios (validation errors, empty/missing fields, invalid data 
     formats, incorrect credentials, unauthorized actions)
   - Edge cases and boundary conditions (min/max field lengths, special 
     characters, boundary values, large data sets, concurrent actions)
   - Navigation flow tests (menu links, breadcrumbs, back/forward browser 
     navigation, deep links, redirects, 404/error pages)
   - UI element validation (labels, placeholders, tooltips, alignment, 
     responsiveness, disabled/enabled states, loading states)
   - Cross-cutting checks: accessibility (keyboard navigation, ARIA labels), 
     basic performance/load observations, and browser console errors 
     encountered during exploration

5. While exploring, capture screenshots of key pages/workflows to support 
   the test plan and store them under: specs/screenshots/

6. Save the final test plan as: specs/test-plan.md

Ensure each test scenario in the plan includes:
- A unique Test Case ID
- A clear, descriptive test case title
- Priority (High/Medium/Low)
- Preconditions (if any)
- Detailed step-by-step instructions
- Expected result for each step (not just the final outcome)
- Test data requirements (specific values, formats, or datasets needed)
- Associated screenshot reference (if applicable)

Group scenarios by feature/module and by test type (Happy Path, Negative, 
Edge Case, Navigation, UI Validation) for easy traceability. If any workflow, 
page, or feature could not be fully explored (e.g., blocked by login, 
missing test data, third-party integration), explicitly list it under an 
"Exploration Limitations / Assumptions" section rather than omitting it.

Ensure each test scenario includes
- Clear test case title
- Detailed step by step instructions
- Expectedresults for each step
- Test data requirements

Expected Output: 1. Test Plan Overview
   - Application URL tested
   - Date of exploration
   - Scope and objective of the test plan
   - Tools/agent used (playwright-test-planner)

2. Application Exploration Summary
   - List of pages/modules/workflows discovered
   - Sitemap or flow diagram (if applicable)
   - Screenshots captured during exploration (stored in specs/screenshots/, 
     referenced inline in the plan)

3. Test Scenarios (organized by module/feature, then by category)

   For each scenario:
   - Test Case ID (e.g., TC_LOGIN_001)
   - Test Case Title
   - Category: Happy Path / Negative / Edge Case / Navigation / UI Validation
   - Priority: High / Medium / Low
   - Preconditions
   - Test Data Requirements
   - Step-by-Step Instructions (numbered)
   - Expected Result (per step, and overall expected outcome)
   - Screenshot Reference (if applicable)

   Coverage includes:
   a. Happy Path Scenarios — successful end-to-end workflows
   b. Negative Scenarios — validation errors, empty fields, invalid/malformed 
      data, incorrect credentials, unauthorized access attempts
   c. Edge Cases & Boundary Conditions — min/max lengths, special characters, 
      boundary numeric values, empty states, large inputs
   d. Navigation Flow Tests — menu/link navigation, browser back/forward, 
      deep linking, redirects, broken/invalid URLs, 404 handling
   e. UI Element Validation — labels, placeholders, alignment, responsive 
      behavior, enabled/disabled/loading states, tooltips

4. Cross-Cutting Observations
   - Accessibility notes (keyboard navigation, ARIA labels, focus states)
   - Console errors/warnings observed during exploration
   - Any performance/load observations

5. Exploration Limitations / Assumptions
   - Workflows or pages not fully accessible/testable during exploration
   - Assumptions made due to missing test data or credentials

6. Deliverable Confirmation
   - File saved at: specs/test-plan.md
   - Screenshots saved at: specs/screenshots/

STEP 3: Perform Exploratory Testing
Prompt
I need to perform manual exploratory testing using the Playwright MCP browser tools.

1. Read the test plan from: specs/test-plan.md

2. For each test scenario in the test plan, execute it live in the browser 
   using the Playwright MCP tools:
   - Navigate to the application URL and follow the preconditions listed 
     for the test case
   - Follow the step-by-step instructions exactly as written in the test case
   - Use the specified test data (or reasonable equivalent if the exact 
     data is unavailable — note this as an assumption)
   - After each step, capture the actual result and compare it against the 
     documented expected result
   - Take a screenshot at each key step (page load, form submission, 
     validation message, error state, final outcome) and save it under: 
     specs/execution-screenshots/<TC_ID>/
   - Record the Pass / Fail / Blocked status for each test case, with a 
     reason for any Fail or Blocked status

3. While executing, also perform light exploratory testing around each 
   scenario (not just scripted steps) — try unexpected inputs, rapid 
   navigation, browser back/forward, and note anything unusual even if 
   it's outside the documented test case

4. For the entire story, explicitly exercise all exploratory test categories 
   below to ensure comprehensive coverage beyond the happy path:
   - Positive cases: valid data, expected inputs, successful workflows, 
     standard user journeys, proper navigation, successful confirmation or 
     submission actions
   - Negative cases: missing required fields, invalid formats, wrong 
     credentials, unauthorized access attempts, duplicate entries, failed 
     validations, malformed data, network issues, and unsupported actions
   - Boundary value cases: minimum and maximum allowed lengths, extreme 
     numeric values, edge dates, empty and near-empty strings, largest 
     supported payloads, maximum item counts, and limits at the threshold
   - Edge cases: browser refresh/reload, back/forward navigation, multiple 
     rapid clicks, partial form completion, stale session behavior, locale/
     timezone variations, disabled states, accessibility focus order, and 
     UI states after interruption or retries
   - Record each finding against the relevant category so coverage is 
     defensible and traceable back to the story requirements

5. Document all findings, including:
   - Test execution results (per test case: status, actual vs expected, 
     timestamp)
   - Any UI inconsistencies (misalignment, broken styling, inconsistent 
     labels/wording, responsiveness issues)
   - Missing validations or functional bugs discovered (with steps to 
     reproduce, severity, and screenshot evidence)
   - Console errors or network failures observed in the browser during 
     execution
   - Screenshots as evidence for every finding, bug, or notable result

5. If a test case cannot be executed (e.g., blocked by a prior failure, 
   missing environment access, unavailable feature), mark it as "Blocked" 
   with a clear reason rather than skipping it silently

6. Save the execution report as: specs/test-execution-report.md

Expected Output
1. Execution Summary
   - Application URL tested, date/time of execution
   - Total test cases executed / passed / failed / blocked
   - Overall pass rate (%)
   - Tools used: Playwright MCP browser tools
   - Exploratory coverage summary: Positive / Negative / Boundary / Edge 
     cases executed and mapped to the relevant features or user story 
     requirements

2. Detailed Test Execution Results (per test case, in same order/grouping 
   as the test plan)
   - Test Case ID and Title
   - Status: Pass / Fail / Blocked
   - Step-by-step actual results vs expected results
   - Screenshot references (specs/execution-screenshots/<TC_ID>/)
   - Notes/observations for that test case

3. Bugs & Issues Discovered
   - Bug ID
   - Title/summary
   - Severity (Critical/High/Medium/Low)
   - Steps to reproduce
   - Expected vs Actual behavior
   - Screenshot evidence
   - Related Test Case ID

4. Exploratory Coverage Matrix
   - Positive Cases: list of scenarios validated with success status
   - Negative Cases: list of invalid, blocked, or failed scenarios 
     encountered with actual result
   - Boundary Value Checks: list of min/max or threshold validations 
     performed
   - Edge Cases: list of unusual, recovery, or resilience scenarios 
     executed
   - Coverage gap: any category not executed or not testable, with reason

5. UI Inconsistencies
   - List of visual/UX inconsistencies found (with screenshots), 
     independent of pass/fail status

6. Exploratory Findings (beyond scripted test cases)
   - Any additional issues, edge behaviors, or observations found during 
     free-form exploration around each test case

7. Console / Network Errors Log
   - Any JavaScript console errors or failed network requests observed 
     during execution, mapped to the test case/page where they occurred

8. Blocked / Not Executed Test Cases
   - Test Case ID, reason for block, impact on overall coverage

9. Review Checklist for Exploratory Testing
   - Confirm positive, negative, boundary, and edge cases were explicitly 
     covered across the story
   - Confirm no feature area is left without at least one exploratory check
   - Confirm all test findings are mapped to the actual UI behavior and 
     evidence captured
   - Confirm any gaps are explicitly documented instead of being assumed away

10. Deliverable Confirmation
   - Execution report saved at: specs/test-execution-report.md
   - All screenshots saved at: specs/execution-screenshots/

STEP 4: Generate Automation Scripts
Prompt
Create automated test scripts using the playwright-test-generator agent.

1. Review the test plan from: specs/test-plan.md
2. Review the exploratory testing results from Step 3: specs/test-execution-report.md 
   (including screenshots under specs/execution-screenshots/)

Using insights from the manual exploratory testing:
- Leverage the element selectors and locators that were successfully used 
  and verified during Step 3
- Prioritize stable, resilient element properties in this order: 
  test IDs/data attributes (data-testid) > ARIA roles/accessible names > 
  unique IDs > text content. Avoid brittle selectors (auto-generated CSS 
  classes, XPath, nth-child positioning) unless no stable alternative exists
- Replicate the actual UI behavior and timing observed during manual 
  testing (e.g., loading spinners, animations, async form submissions, 
  toast/notification timing, page transitions)
- Incorporate any workarounds discovered for UI quirks, flaky elements, 
  or non-standard behavior noted in the execution report
- Only automate scenarios that passed or were explicitly validated during 
  exploratory testing; for scenarios marked "Blocked" or "Failed" in Step 3,

Expected Output: 
- Test suite files created in tests/application-checkout/, organized by 
  feature/module, based on test plan scenarios
- playwright.config.js configured for Chromium, Firefox, and WebKit
- Scripts using robust, resilient selectors (prioritizing data-testid/roles)
- All scripts following Playwright best practices (POM/fixtures, proper 
  hooks, web-first assertions, no arbitrary sleeps)
- Test names traceable back to test plan Test Case IDs
- Every scenario from the approved test plan, including exploratory 
  scenarios (Positive, Negative, Boundary, and Edge cases), must be 
  represented in automation coverage; there must be no unautomated 
  scenario left behind
- Coverage must reach 100% of the test plan scope before moving to the 
  next step. If any scenario remains uncovered, blocked, or explicitly 
  excluded without justification, the workflow must stop and the gap must 
  be resolved first
- A test execution summary confirming initial run results (pass/fail/skip 
  count per browser), with any remaining known issues clearly documented

Closure / Go-No-Go gate for Step 4:
- Do not proceed to Step 5 until automation coverage is confirmed at 100% 
  against the Test Plan, including exploratory scenarios
- Coverage evidence must include a scenario-to-script mapping showing each 
  Positive, Negative, Boundary, and Edge case is either automated or 
  explicitly marked as Not Applicable with a valid reason
- Any unexecuted or unautomated scenario is treated as a release blocker for 
  progression to the next step


Step 5: Execute and Heal Automation Tests
Prompt:
Execute the generated automation test scripts and heal any failures using 
the playwright-test-healer-agent.

1. Run all automation scripts in: tests/application-checkout/ across all 
   configured browsers (Chromium, Firefox, WebKit) as defined in 
   playwright.config.js
2. Before execution, confirm the automation suite covers 100% of the test
   plan scope, including all exploratory categories and all documented 
   scenarios; if coverage is below 100%, stop and address the gap before 
   proceeding
3. Capture the full initial run results: total tests, pass count, fail 
   count, skipped count, and execution time — per browser and overall
4. For every failing test, capture the failure artifacts before healing:
   - Error message and stack trace
   - Screenshot at point of failure
   - Trace file / video (if configured)
   - The specific step and assertion that failed

4. For each failing test, invoke the playwright-test-healer-agent to:
   - Analyze the root cause of the failure and classify it 
     (selector issue, timing/synchronization issue, assertion mismatch, 
     stale/changed UI, environment/data issue, or genuine application bug)
   - If the failure is due to a genuine application defect (not a script 
     issue), DO NOT force the test to pass — flag it separately as a 
     "Potential Bug" rather than auto-healing it, and leave the assertion 
     reflecting correct expected behavior
   - For script-related issues, auto-heal by:
     - Updating selectors using the same stable-selector priority as 
       Step 4 (data-testid > role/accessible name > ID > text) — never 
       downgrading to a brittle selector to force a pass
     - Replacing arbitrary/hardcoded waits with proper Playwright 
       web-first assertions or explicit waits tied to actual app behavior
     - Adjusting assertions only if the original assertion was incorrect 
       relative to actual, correct application behavior — not to mask 
       a real defect
   - Apply the minimal necessary fix; do not rewrite unrelated parts of 
     the test
   - Add a comment above each healed line explaining what was changed 
     and why

5. Update the test scripts in place under tests/application-checkout/ 
   with the healing fixes

6. Re-run the healed tests (not the full suite, unless a shared 
   fixture/config was changed) to verify they now pass

7. Repeat the analyze → heal → re-run cycle for any tests still failing, 
   up to a maximum of 3 healing attempts per test. If a test still fails 
   after 3 attempts, stop auto-healing it and mark it as 
   "Requires Manual Review" with the full failure analysis and healing 
   attempts documented

8. After all healing cycles complete, run the FULL suite one final time 
   across all browsers to confirm overall stability (including 
   previously-passing tests, to catch any regressions introduced by 
   healing changes)

9. Do not advance to the next workflow step unless the automation coverage is 
   verified as 100% of the approved Test Plan, including exploratory scenarios; 
   any remaining unautomated or unvalidated scenario must be treated as a 
   stop condition and resolved before sign-off

10. Document the full process in: specs/test-healing-report.md, including:
   - Initial test suite results (pass/fail/skip count, per browser)
   - Healing activities performed per test (root cause, fix applied, 
     number of attempts, before/after code snippet)
   - Tests flagged as "Potential Bug" (not healed, genuine app defects) 
     with reproduction steps and evidence
   - Tests marked "Requires Manual Review" (could not be auto-healed 
     after 3 attempts) with full failure history
   - Final test suite results after healing (pass/fail/skip count, 
     per browser)
   - Net stability comparison (before vs after healing)

Do not silently modify test intent to force a pass — healing must preserve 
the original test case's purpose as defined in specs/test-plan.md.

Expected Output:
- All automation tests executed across Chromium, Firefox, and WebKit
- Failing tests identified, root-caused, and healed using the 
  playwright-test-healer-agent (or correctly flagged instead of healed, 
  where appropriate)
- Healed test scripts updated in tests/application-checkout/, with 
  inline comments explaining each fix
- Final stable test execution results confirming pass rate across all 
  browsers
- specs/test-healing-report.md containing:
  - Initial vs final pass/fail/skip counts (per browser)
  - Detailed healing activity log (root cause, fix, attempts)
  - List of tests that could not be auto-healed, with reasons
  - List of potential genuine application bugs discovered (distinct from 
    script issues), with evidence

STEP 6: Create the Test Report
Prompt
I need to create a comprehensive, consolidated test execution report that 
brings together results from manual testing, automation execution, and 
healing activities into a single traceable document.

Please consult and consolidate results from the following prior artifacts:
- Step 2 (Test Plan): specs/test-plan.md
- Step 3 (Manual Exploratory Testing): specs/test-execution-report.md 
  and screenshots under specs/execution-screenshots/
- Step 4 (Automation Script Generation): tests/application-checkout/
- Step 5 (Automated Execution & Healing): specs/test-healing-report.md

Structure and save the report as: test-results/SCRUM-1010-checkout-test-report.md

The report must include:

1. Executive Summary
   - Feature/module under test and Jira reference (SCRUM-1010)
   - Total test cases planned (from the test plan)
   - Total test cases executed — broken down by manual and automated
   - Test cases not executed/out of scope, with reason
   - Overall status: Pass / Fail / Blocked counts and percentages 
     (combined, and separately for manual vs automated)
   - Overall release/quality recommendation (Go / No-Go / Go with caveats)

2. Manual Test Results (from Step 3)
   - Summary table of all manually executed test cases: Test Case ID, 
     Title, Status (Pass/Fail/Blocked)
   - Key observations and exploratory findings noted during manual testing
   - Screenshots as evidence, embedded/linked by Test Case ID 
     (from specs/execution-screenshots/)
   - Issues/bugs found during manual testing (cross-referenced to the 
     Defect Log in Section 4, not duplicated in full)
   - UI inconsistencies noted, separate from functional issues

3. Automated Test Results (from Step 4 & Step 5)
   - Test suite structure overview (spec files under tests/application-checkout/, 
     grouped by feature/module)
   - Initial automated execution results (pre-healing): pass/fail/skip 
     count, per browser (Chromium, Firefox, WebKit)
   - Healing activities summary: number of tests healed, root cause 
     categories (selector/timing/assertion), number of healing attempts, 
     tests that required manual review
   - Final automated execution results (post-healing): pass/fail/skip 
     count, per browser
   - Before vs after comparison table showing stability improvement
   - Pass/Fail count broken down per test suite/spec file

4. Defect Log
   For every failed test case (manual or automated), or every issue 
   flagged as a "Potential Bug" during healing (Step 5):
   - Bug ID (unique, sequential — e.g., BUG-SCRUM-1010-001)
   - Source (Manual / Automated)
   - Related Test Case ID
   - Severity: Critical / High / Medium / Low (with justification)
   - Priority (if distinct from severity)
   - Title and detailed description
   - Steps to reproduce
   - Expected vs Actual behavior
   - Screenshot/video/trace evidence, with file reference
   - Environment details: browser(s) affected, OS, application URL/version, 
     test data used
   - Status: New / Requires Manual Review / Known Issue

5. Test Coverage Analysis
   - Map each Acceptance Criterion (from the original user story, Step 1) 
     to the test case(s) that validate it — flag any AC with zero coverage
   - Coverage breakdown: which scenarios are covered by manual only, 
     automated only, or both (to highlight automation gaps/redundancy)
   - Coverage by test category: Happy Path, Negative, Edge Case, 
     Navigation, UI Validation (% covered per category)
   - Identified gaps in test coverage (untested workflows, browsers, 
     devices, data conditions)
   - Recommendations for additional test scenarios or automation

6. Summary and Recommendations
   - Overall quality assessment of the feature/module
   - Key risk areas (based on defect severity/clustering and coverage gaps)
   - Regression risk introduced by any healing changes
   - Recommended next steps (fix priorities, re-test scope, additional 
     automation candidates, sign-off readiness)

Formatting requirements:
- Use tables wherever listing test cases, bugs, or coverage mappings for 
  scannability
- All statuses must use consistent terminology: Pass / Fail / Blocked / 
  Not Executed
- Every claim of "Pass" or "Fail" must be traceable to a source artifact 
  (Step 3 report, Step 5 report) — do not infer status without evidence
- If any data from a prior step is missing or unavailable, explicitly 
  note it under the relevant section as "Data unavailable" rather than 
  omitting or fabricating results

Expected Result:
- A single, comprehensive report at test-results/SCRUM-1010-checkout-test-report.md 
  covering both manual and automated testing
- Clear, consistent Pass/Fail/Blocked status for every test scenario, 
  fully traceable to source step artifacts
- A complete, well-structured Defect Log with reproducible bug reports
- A full test coverage analysis mapped to acceptance criteria, with 
  explicitly identified gaps
- All relevant screenshots/evidence embedded or linked by reference
- An overall quality assessment with a clear release recommendation

STEP 7: Commit to Git Repositroy
 
Important Pre-Commit Coverage Gate:
- Before any git commit or git push, the agent must explicitly confirm with 
  the user whether the automation coverage is 100% complete as per the 
  approved test plan.
- Coverage must include all scenarios from the test plan, including 
  exploratory Positive, Negative, Boundary, and Edge cases.
- If the coverage is not 100%, the agent must stop and inform the user that 
  the workflow cannot proceed to commit/push until the missing scenarios are 
  either automated or explicitly justified as Not Applicable with a valid 
  reason.
- If the coverage is confirmed as 100%, record that confirmation before 
  staging or pushing any changes.

Important First-Time-Use Rule:
- If this is the first time the agent is being used in the workspace, do not 
  assume any Git remote or repository URL.
- Ask the user to provide the Git repository URL to push the changes.
- If the user provides a URL, use that exact URL as the remote origin for the
  repository before any commit or push.
- Only proceed with pushing after the user has provided and confirmed the Git
  URL; do not hardcode or assume a repository URL in a first-time setup.

Prompt:
Commit all test artifacts to the Git repository using the GitHub MCP server.

Git Repo URL: <to be provided by the user on first use>

Please perform the following Git operations, in order:

1. Verify repository state
   - Check if the local workspace is already a Git repository. If not, 
     initialize it and set the remote origin to the URL provided by the user
   - Confirm the correct remote is configured (verify origin URL matches 
     exactly); if a different remote is already set, flag this before 
     proceeding rather than overwriting it silently
   - Confirm which branch is currently checked out

2. Confirm 100% automation coverage before commit
   - Explicitly tell the user whether the automation coverage is 100% as per 
     the approved test plan
   - Include all exploratory categories in the confirmation: Positive, 
     Negative, Boundary, and Edge cases
   - If the answer is not 100%, stop the workflow and do not commit or push
   - If the answer is 100%, proceed only after the user confirms that the 
     coverage statement is accurate

3. Review before staging
   - List all new, modified, and deleted files in the workspace 
     (git status)
   - Check for a .gitignore file; if one doesn't exist, create one that 
     excludes: node_modules/, playwright-report/, test-results/*.zip or 
     raw trace/video artifacts not meant for version control, .env files, 
     and any credentials/tokens — confirm no secrets or access tokens are 
     present in any file about to be committed
   - Exclude the following from being committed if present: any file 
     containing a Personal Access Token, API key, or GitLab/Atlassian 
     credential used during earlier steps

4. Stage all relevant files, including at minimum:
   - specs/test-plan.md
   - specs/test-execution-report.md
   - specs/execution-screenshots/
   - specs/test-healing-report.md
   - tests/application-checkout/ (all automation scripts and 
     playwright.config.js)
   - test-results/SCRUM-1010-checkout-test-report.md
   - Any supporting documentation created in Steps 1–6

5. Create a commit with the following message (conventional commit format):

   feat(tests): add complete test suite for SCRUM-1010 checkout workflow

   - Add user story documentation and acceptance criteria summary
   - Add comprehensive test plan covering happy path, negative, edge 
     case, navigation, and UI validation scenarios
   - Add manual exploratory test execution report with screenshots
   - Add automated Playwright test scripts for the checkout workflow
   - Add test healing report documenting auto-healed and flagged failures
   - Add consolidated test execution report with defect log and 
     coverage analysis
   - Include validation, navigation, and edge case test coverage

   Resolves SCRUM-1010

6. Push the commit to the remote repository
   - Push to the current branch, or if project convention requires it, 
     create a feature branch (e.g., feature/scrum-1010-checkout-tests) 
     and push that instead — confirm branch strategy before pushing if 
     unclear
   - If the push is rejected (e.g., remote has diverging changes), do 
     not force-push; instead report the conflict and ask how to proceed

7. Verify the push succeeded
   - Confirm the commit appears on the remote repository (via GitHub MCP 
     tools — check latest commit SHA/branch state on origin)
   - If a pull request is the expected workflow for this repo, note that 
     and optionally open a PR with a summary description instead of 
     pushing directly to main/master

8. Provide a summary of what was committed, including:
   - List of all files added/modified, grouped by category (docs, test 
     scripts, reports, screenshots)
   - Total file count and approximate size
   - Commit SHA and branch pushed to
   - Direct link to the commit/PR on GitHub
   - Confirmation that no secrets/credentials were included in the commit
   - Confirmation that the user was informed and agreed that automation 
     coverage is 100% before committing

If any step fails (auth error, push rejection, missing GitHub MCP 
permissions), stop and report the exact error rather than retrying with 
elevated or bypassed permissions.

Expected Output:
- Git repository initialized (if needed) and correctly linked to the Git URL
  provided by the user during first-time setup
- All relevant workspace files staged and committed (secrets/credentials 
  explicitly excluded)
- A descriptive commit following conventional commit format, referencing 
  SCRUM-1010
- Confirmation of successful push, including commit SHA and a direct 
  link to view it on GitHub
- A structured summary of all files committed, grouped by category 
  (user story docs, test plan, execution reports, automation scripts, 
  healing report, screenshots)
- Confirmation that the full workflow (Steps 1–7) is complete and all 
  artifacts are version-controlled