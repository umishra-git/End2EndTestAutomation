# Test Plan: SauceLabs Homepage – AURA Platform Hero Section

## 1. Objective
Validate that the SauceLabs homepage presents the AURA platform value proposition clearly and provides working calls to action for prospective visitors. This plan targets the production homepage at https://saucelabs.com and is focused on Google Chrome.

## 2. Scope
- Homepage announcement banner
- Header and navigation behavior
- AURA hero section content and CTA buttons
- Responsive layout behavior on key desktop widths
- Accessibility and keyboard support for major interactive elements

## 3. Test Environment
- URL: https://saucelabs.com
- Browser: Chrome
- Viewports: 1280x720, 1440x900, 1920x1080
- No login required

## 4. Test Data
- Public homepage, no authentication
- No special test accounts required
- Use standard browser default settings

## 5. Test Cases

### TC-01: Announcement banner is visible and contains correct text
**Purpose:** Verify the green promotional banner is displayed and communicates the live event.

**Steps:**
1. Open the homepage.
2. Locate the top announcement banner.
3. Read the displayed banner text.

**Expected Results:**
- The banner is visible near the top of the page.
- Text matches: “Learn about Sauce Labs' AURA platform: live launch event, August 19.”
- A REGISTER NOW link is visible.
- A close button is visible.

### TC-02: Register CTA navigates to event page
**Purpose:** Confirm the event CTA opens the correct registration URL.

**Steps:**
1. Open the homepage.
2. Click the REGISTER NOW button.

**Expected Results:**
- The browser navigates to the event registration page.
- The route is related to the AURA launch event.
- The page loads successfully.

### TC-03: Banner can be dismissed without page reload
**Purpose:** Verify banner dismissal behavior.

**Steps:**
1. Open the homepage.
2. Click the close icon in the banner.

**Expected Results:**
- The banner disappears from the page immediately.
- The page does not reload.
- The rest of the page remains visible and stable.

### TC-04: Dismissed banner does not reappear during session
**Purpose:** Validate session-level persistence.

**Steps:**
1. Open the homepage.
2. Dismiss the banner.
3. Reload the page or navigate within the same session.

**Expected Results:**
- The banner does not reappear during the same session.

### TC-05: Header logo and navigation are visible
**Purpose:** Verify the main header structure and brand placement.

**Steps:**
1. Open the homepage.
2. Observe the top-left logo.
3. Observe the header navigation items.

**Expected Results:**
- SauceLabs logo is visible.
- It links to the homepage.
- The top navigation includes: Why SauceLabs, Products, Solutions, Developers, Resources, Pricing.
- Login and Book a Demo links are visible.

### TC-06: Dropdown menus expand correctly
**Purpose:** Validate navigation submenu behavior.

**Steps:**
1. Hover or click each menu item with a dropdown: Why SauceLabs, Products, Solutions, Developers, Resources.
2. Observe the submenu state.

**Expected Results:**
- Each relevant menu item reveals a submenu.
- The dropdown chevron is visible.
- Submenu content appears and is usable.

### TC-07: Pricing link is direct and does not show a dropdown
**Purpose:** Validate direct-link navigation behavior.

**Steps:**
1. Open the homepage.
2. Locate the Pricing item.

**Expected Results:**
- Pricing is a direct link.
- It does not open a dropdown.
- It navigates to the pricing page.

### TC-08: Login and Book a Demo actions work
**Purpose:** Verify primary header CTAs.

**Steps:**
1. Click Login.
2. Click Book a Demo.

**Expected Results:**
- Login opens the login/authentication flow.
- Book a Demo opens the demo request flow.
- Both actions are accessible and functional.

### TC-09: Hero content appears with correct text
**Purpose:** Confirm the AURA hero section matches the user story content.

**Steps:**
1. Scroll to the hero section.
2. Observe the eyebrow text, heading, and paragraph.

**Expected Results:**
- Eyebrow text reads: “FROM BUSINESS INTENT TO PRODUCTION CONFIDENCE” or equivalent visible phrasing.
- Main headline matches: “Verify AI-generated code at the pace it's written.”
- Supporting text mentions AURA, 90% reduction in incidents, 47% faster shipping, 38% reclaimed engineering capacity, and Selenium/Appium founders credibility.

### TC-10: Start Free CTA is visible and navigates correctly
**Purpose:** Validate the primary black CTA.

**Steps:**
1. Locate Start Free in the hero section.
2. Click it.

**Expected Results:**
- The button is visible and styled as a primary CTA.
- It navigates to the sign-up/free trial flow.
- The destination is appropriate to the story.

### TC-11: Book a Demo CTA is visible and navigates correctly
**Purpose:** Validate the secondary CTA.

**Steps:**
1. Locate the hero Book a Demo button.
2. Click it.

**Expected Results:**
- The button is visible with an appropriate outline style.
- It includes the SauceLabs icon.
- It links to the demo request page.

### TC-12: Keyboard accessibility for CTAs and nav items
**Purpose:** Validate keyboard support.

**Steps:**
1. Use Tab and Shift+Tab to move through interactive elements.
2. Focus the banner CTA, nav buttons, and hero CTAs.

**Expected Results:**
- Interactive elements are reachable via keyboard.
- Focus state is visible.
- Enter/Space activates the link or button correctly.

### TC-13: Hero layout renders correctly at desktop breakpoints
**Purpose:** Check desktop layout integrity.

**Steps:**
1. View at 1280x720.
2. View at 1440x900.
3. View at 1920x1080.

**Expected Results:**
- Text does not overlap or truncate.
- Buttons remain aligned and visible.
- Layout remains visually consistent.

### TC-14: Responsive behavior on smaller widths
**Purpose:** Confirm mobile/tablet responsiveness.

**Steps:**
1. Resize to a tablet width.
2. Resize to a mobile width.

**Expected Results:**
- Navigation adapts appropriately.
- Hero content stacks without overlap.
- CTA buttons remain usable and readable.

### TC-15: Page performance and browser stability
**Purpose:** Validate non-functional acceptance criteria.

**Steps:**
1. Load the page in Chrome.
2. Observe any console errors or broken network requests.

**Expected Results:**
- Page loads within acceptable performance thresholds.
- No major console errors block the page.
- The primary content renders without critical issues.

## 6. Risk Areas
- Banner dismissal behavior may use session storage or cookie logic.
- Dropdown menus may require hover and keyboard support.
- Hero text and CTAs may be visually sensitive to viewport changes.
- Performance may be impacted by marketing resources or third-party scripts.

## 7. Exit Criteria
The homepage passes this plan if all critical user-story acceptance criteria are satisfied in Chrome, and no blocking accessibility or layout issues remain.
