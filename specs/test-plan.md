# Test Plan: SauceLabs AURA Registration Landing Page

## 1. Test Plan Overview
- Application URL tested: https://info.saucelabs.com/260819-meet-aura.html
- Date of exploration: 2026-08-15
- Browser scope: Chrome only
- Objective: Validate the event registration landing page for the AURA virtual launch event against the story requirements and confirm that key user journeys, page content, form validation, and privacy/consent behaviors work as expected in the live production environment.
- Tools used: Playwright browser automation and manual exploratory validation

## 2. Application Exploration Summary
### Discovered page modules and flows
- Header/logo navigation with link back to saucelabs homepage
- Hero banner with event messaging and key value proposition copy
- Event timeline text showing the VIRTUAL EVENT details
- Agenda section containing multiple numbered session cards
- Speaker section with executive profile summaries
- Registration form card with email, first name, last name, consent checkbox, and submit action

### User flow observed
1. Visitor lands on event page after clicking Register Now from the SauceLabs homepage.
2. Visitor reads event details and value proposition.
3. Visitor scrolls through agenda and presenter information.
4. Visitor fills the registration form.
5. Visitor submits or validates required fields in the form.
6. Visitor can access the privacy notice from the consent checkbox language.

### Key observations from live exploration
- The page renders on the production URL without authentication.
- The form uses standard HTML field names: Email, FirstName, LastName, and the consent checkbox named sauceLabsContactConsent.
- The Privacy Notice link resolves to the Sauce Labs privacy policy.
- Browser-native validation triggers inline error text for malformed email input, matching the live DOM.
- The submit button is present and enabled by default; actual back-end submission behavior was not verifiable without a real registration endpoint or success handler.

## 3. Test Scenarios

### Module A: Page Load and Navigation

#### TC_AURA_001: Landing page loads with core event content
- Category: Happy Path
- Priority: High
- Preconditions: Browser is open and stable internet connectivity is available.
- Test Data: None required.
- Steps:
  1. Open https://info.saucelabs.com/260819-meet-aura.html
  2. Wait for the page to finish loading.
  3. Observe the banner, top navigation, event timestamp, form header, and agenda region.
- Expected Result:
  - The page loads successfully.
  - Event text "VIRTUAL EVENT · AUGUST 19 · 9AM PDT / 12PM EDT" is visible.
  - The page contains the agenda section and the registration form heading "Save your seat."
  - The SauceLabs brand/logo is visible in the header.
- Screenshot Reference: specs/screenshots/aura-registration-page.png

#### TC_AURA_002: Header logo links back to SauceLabs homepage
- Category: Navigation
- Priority: High
- Preconditions: Event page is loaded.
- Test Data: None required.
- Steps:
  1. Click the SauceLabs logo in the header.
  2. Observe the destination.
- Expected Result:
  - The target URL resolves to the SauceLabs homepage.
  - User returns to the SauceLabs home experience without error.

#### TC_AURA_003: Register Now anchor navigates to the form section
- Category: Navigation
- Priority: High
- Preconditions: Page is loaded and header link navigation is available.
- Test Data: None required.
- Steps:
  1. Click the top-level Register Now link in the header.
  2. Observe the scroll/focus behavior.
- Expected Result:
  - The page scrolls or jumps to the registration form section.
  - The form is accessible without reloading.

### Module B: Registration Form Validation

#### TC_AURA_004: Valid email format is accepted by the browser form
- Category: Happy Path
- Priority: High
- Preconditions: Form is loaded.
- Test Data: Email = test.user@example.com; first name = Jane; last name = Doe.
- Steps:
  1. Enter a valid email address in Email Address.
  2. Enter first and last names.
  3. Submit the form.
- Expected Result:
  - The browser accepts the email format as valid.
  - No inline error appears for email format.
  - The form proceeds to the expected next step based on backend behavior.

#### TC_AURA_005: Malformed email triggers inline validation
- Category: Negative
- Priority: High
- Preconditions: Form is loaded.
- Test Data: Email = bad-email
- Steps:
  1. Enter bad-email into the Email Address field.
  2. Enter non-empty first and last names.
  3. Click Submit.
- Expected Result:
  - The email field is marked invalid by the browser.
  - The validation text "Must be valid email." is displayed.
  - The entered values remain present after validation.

#### TC_AURA_006: Empty required fields trigger validation and maintain entered values
- Category: Negative
- Priority: High
- Preconditions: Form is loaded.
- Test Data: First name = Jane; last name = Doe; email left blank.
- Steps:
  1. Leave Email Address empty and fill other fields.
  2. Click Submit.
  3. Observe field states.
- Expected Result:
  - The empty required field is flagged.
  - Form submission is blocked.
  - Existing values in other fields are preserved.

#### TC_AURA_007: Consent checkbox can be toggled using mouse and keyboard
- Category: UI Validation
- Priority: Medium
- Preconditions: Form is loaded.
- Test Data: None required.
- Steps:
  1. Click the consent checkbox.
  2. Use keyboard focus to return to it and press Space.
- Expected Result:
  - Checkbox toggles checked/unchecked state correctly via mouse and keyboard.
  - The consent text remains visible and readable.

### Module C: Privacy and Consent

#### TC_AURA_008: Privacy Notice link is visible and resolves to the privacy policy
- Category: Navigation
- Priority: Medium
- Preconditions: Form is loaded.
- Test Data: None required.
- Steps:
  1. Locate the Privacy Notice text under the checkbox.
  2. Click the link.
- Expected Result:
  - The privacy-policy URL opens in a new tab or page.
  - The destination matches the Sauce Labs privacy-policy page.

### Module D: Layout and Responsive Behavior

#### TC_AURA_009: Desktop layout preserves content hierarchy and spacing
- Category: UI Validation
- Priority: Medium
- Preconditions: Browser viewport set to 1280x1200.
- Test Data: None required.
- Steps:
  1. Load the page on a desktop size.
  2. Inspect the hero area, agenda, and form card.
- Expected Result:
  - Content does not overlap.
  - Form card remains visually distinct.
  - Two-column or equivalent layout is stable and readable.

#### TC_AURA_010: Tablet/mobile layout stacks without overflow
- Category: UI Validation
- Priority: Medium
- Preconditions: Browser viewport set to 768x1024 and 390x844.
- Test Data: None required.
- Steps:
  1. Resize the page to tablet width.
  2. Resize to mobile width.
  3. Inspect the layout and scroll behavior.
- Expected Result:
  - Content stacks correctly without horizontal overflow.
  - The form remains usable and readable.

### Module E: Accessibility and Non-Functional Checks

#### TC_AURA_011: Keyboard navigation reaches all form controls in logical order
- Category: UI Validation
- Priority: High
- Preconditions: Form is loaded.
- Test Data: None required.
- Steps:
  1. Press Tab repeatedly from the top of the page.
  2. Navigate through the form controls.
- Expected Result:
  - Focus order is logical and visible.
  - Email, first name, last name, and checkbox are each reachable by keyboard.

#### TC_AURA_012: Browser console and network errors are absent or non-blocking
- Category: UI Validation
- Priority: Medium
- Preconditions: Page is loaded in Chrome.
- Test Data: None required.
- Steps:
  1. Open browser devtools console.
  2. Load the page and reproduce key interactions.
- Expected Result:
  - No critical JavaScript errors stop page rendering.
  - No blocking network failures occur on primary page load.

## 4. Cross-Cutting Observations
- Accessibility: Live controls are accessible via standard HTML form elements; the registration form supports native validation and keyboard interaction.
- Console errors: No blocking errors were seen in targeted runtime checks. The page loads cleanly in Chrome during live exploration.
- Performance: The page loads quickly and renders the main copy and form without obvious delays; no performance issues were observed during this focused test cycle.

## 5. Exploration Limitations / Assumptions
- The story describes an expected submission confirmation and duplicate-registration handling, but the live form behavior depends on backend processing not exposed in this public page.
- The “required” status for the marketing consent checkbox is not explicitly enforced by the page; the current implementation treats it as optional from the DOM and browser perspective.
- The story describes content and styling that may differ slightly from the current production implementation; the live page reflects the actual state at the time of validation.

## 6. Additional Exploratory Scenarios from Both User Stories

### Cross-Story Journey Scenarios

#### TC_COMBO_001: Homepage Register Now CTA opens the AURA event page correctly
- Category: Exploratory / Navigation
- Priority: High
- Preconditions: Homepage is open in Chrome.
- Test Data: None.
- Steps:
  1. Open the SauceLabs homepage.
  2. Trigger the green announcement banner CTA.
  3. Confirm the destination and landing content.
- Expected Result:
  - The visitor reaches the event registration page without a broken redirect or dead URL.
  - Event messaging loads immediately after navigation.

#### TC_COMBO_002: Browser back/forward state is preserved across journey transitions
- Category: Exploratory / Navigation
- Priority: Medium
- Preconditions: Homepage and event page are both accessible.
- Steps:
  1. Open the homepage.
  2. Navigate to the event page.
  3. Use browser Back and Forward controls.
- Expected Result:
  - Content state is preserved without stale data or broken layout.
  - No anchor or form state is lost unexpectedly.

#### TC_COMBO_003: Form data survives navigation away and back from privacy notice
- Category: Exploratory / UI Validation
- Priority: High
- Preconditions: Event form is partially populated.
- Steps:
  1. Fill email, first name, and last name.
  2. Click Privacy Notice.
  3. Return to the registration page.
- Expected Result:
  - If the app keeps the form state in-session, the values remain available.
  - If the page resets, the reset is intentional and clearly communicated.

### Homepage Expansion Scenarios

#### TC_HOME_016: Dropdown menus behave correctly on hover and keyboard focus
- Category: Exploratory / UI Validation
- Priority: High
- Steps:
  1. Hover over Why SauceLabs, Products, Solutions, Developers, and Resources.
  2. Repeat with keyboard Tab and Enter/Space.
- Expected Result:
  - Menus appear and dismiss correctly.
  - Focus ring is visible and order remains logical.

#### TC_HOME_017: Mobile navigation stays usable and readable at narrow widths
- Category: Exploratory / Responsive UI
- Priority: High
- Steps:
  1. Resize to mobile widths.
  2. Open main navigation and inspect CTA buttons.
- Expected Result:
  - Navigation remains accessible without clipped text or layout overlap.
  - Primary actions remain tap-friendly.

#### TC_HOME_018: Hero CTA focus and hover states remain visible
- Category: Exploratory / Accessibility
- Priority: Medium
- Steps:
  1. Tab to Start Free and Book a Demo.
  2. Inspect hover and focus styling.
- Expected Result:
  - Focus ring is visible and contrast remains accessible.
  - CTA buttons are clearly visible across states.

### Event Registration Expansion Scenarios

#### TC_AURA_013: Duplicate submission handling is graceful and predictable
- Category: Exploratory / Negative
- Priority: High
- Preconditions: A valid submission path exists or a test environment is available.
- Steps:
  1. Submit the same valid email twice.
  2. Observe the result.
- Expected Result:
  - The system either rejects duplicates clearly or treats them as intentional repeat registrations with a defined message.

#### TC_AURA_014: Empty form submission indicates which required fields are missing
- Category: Exploratory / Negative
- Priority: High
- Steps:
  1. Leave all fields blank.
  2. Click Submit.
- Expected Result:
  - All required fields are explicitly flagged.
  - No partial or silent acceptance occurs.

#### TC_AURA_015: Validation errors do not wipe previously entered values
- Category: Exploratory / Negative
- Priority: High
- Steps:
  1. Fill first name and last name correctly.
  2. Enter an invalid email.
  3. Submit.
- Expected Result:
  - Other valid fields remain populated.
  - Only the invalid field is corrected by the user.

#### TC_AURA_016: Keyboard-only registration flow works end-to-end
- Category: Exploratory / Accessibility
- Priority: High
- Steps:
  1. Tab through all controls in order.
  2. Complete the form using keyboard only.
- Expected Result:
  - Focus order is logical and visible.
  - Checkbox toggles via Space and submission is possible without a mouse.

#### TC_AURA_017: Agenda content completeness across scrolling depth
- Category: Exploratory / UI Validation
- Priority: Medium
- Steps:
  1. Scroll the full event page.
  2. Review the agenda and speaker content.
- Expected Result:
  - All agenda cards render in the intended order and without missing entries.
  - The page remains readable without clipping or overlap.

#### TC_AURA_018: Event date accuracy and stale campaign check
- Category: Exploratory / Business Logic
- Priority: Medium
- Steps:
  1. Compare the displayed date and time with the actual event calendar.
  2. Review whether the page would still be valid after the event date passes.
- Expected Result:
  - The event date is accurate and the page is updated or retired appropriately when the event is past.

## 7. Deliverable Confirmation
- Test plan saved at: specs/test-plan.md
- Screenshots saved under: specs/screenshots/
