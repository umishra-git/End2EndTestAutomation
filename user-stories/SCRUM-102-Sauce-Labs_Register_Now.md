User Story: AURA Virtual Launch Event – Registration Landing Page

Title: Event Registration Page for "Meet AURA" Virtual Launch Event

As a visitor who clicked "REGISTER NOW" from the SauceLabs homepage banner,
I want to view event details and register with my information through a simple form,
So that I can save my seat for the AURA virtual launch event and receive event access details.

Description

After clicking "REGISTER NOW," the user is redirected to a dedicated landing page containing: a header/logo, a promotional hero banner for the "Meet AURA" event, event details (date/time), supporting marketing copy, an event agenda section, and a registration form (email, first name, last name, marketing consent checkbox, submit button) to reserve a seat.

Acceptance Criteria

1. Header

The SauceLabs logo should be displayed top-left and should link back to the SauceLabs homepage (saucelabs.com) when clicked.

2. Hero/Banner Section

The banner should display the eyebrow text "THE AI CODE VERIFICATION CRISIS IS HERE:" with "CRISIS" visually highlighted (distinct color).
The banner should display the heading "Meet AURA, the Platform Built to Solve It" in the styled/highlighted font.
The decorative graphic (branching icon pattern) should render correctly within the banner without distortion, across standard desktop viewport widths.

3. Event Details

The page should display "VIRTUAL EVENT · AUGUST 19 · 9AM PDT / 12PM EDT" clearly beneath the banner.
Time zone conversions (PDT/EDT) should be accurate and consistent with the actual event date.
The event date/time text should remain accurate and should be validated as not being in the past (i.e., page shouldn't be reachable/promoted post-event without update).

4. Value Proposition & Body Copy

The stat line "38%+ engineering capacity reclaimed, 47%+ faster release cycles, and a 90%+ reduction in production incidents" should render correctly and match the values used elsewhere on the site (e.g., homepage) for consistency.
The supporting paragraphs (AI code verification crisis, AURA's value proposition, invitation to join SauceLabs leadership) should render fully without truncation or overlap.

5. Agenda Section

An "Agenda" heading should be visible below the body copy.
Each agenda item should display a numbered index (e.g., "01"), a session title, and the speaker's name and title (e.g., "Prince Kohli, CEO, Sauce Labs").
If multiple agenda items exist, they should all render in the correct sequential order without missing or duplicated entries (verify by scrolling/full-page capture, since only item 01 is visible in the current viewport).

6. Registration Form – Field-Level

The form should display the label "REGISTER BELOW" and heading "Save your seat."
Email Address field
Marked as required (indicated by asterisk *).
Should accept only valid email formats and show a validation error for malformed input (e.g., missing "@", missing domain).
Should show an error if left empty on submit.
First Name field
Marked as required (asterisk *).
Should show an error if left empty on submit.
Should reject/flag purely numeric or special-character-only input if validation is intended (needs confirmation from product/business).
Last Name field
Marked as required (asterisk *).
Should show an error if left empty on submit.
All three fields should have visible focus states and should not lose entered data on validation error (i.e., other fields retain their values if one field fails validation).

7. Marketing Consent Checkbox

An unchecked checkbox should be displayed by default with the text: "By checking this box, you agree to receive marketing communications in accordance with our Privacy Notice."
"Privacy Notice" should be a hyperlink (styled in red/highlighted) that opens the actual Privacy Notice page (in a new tab, ideally, so the user doesn't lose form progress).
The checkbox should be optional (needs confirmation — determine whether registration is blocked if left unchecked, since it isn't marked with a required asterisk).
The checkbox state (checked/unchecked) should be togglable via mouse click and keyboard (spacebar when focused).

8. Submit Button

The "SUBMIT" button (green, full-width within the form card) should be present and enabled by default.
Clicking "SUBMIT" with all required fields valid should successfully register the user and show a confirmation (confirmation message, redirect to a thank-you page, or confirmation email — needs confirmation of actual expected behavior).
Clicking "SUBMIT" with one or more required fields empty/invalid should prevent submission and display inline validation errors next to the relevant field(s), without clearing the form.
The button should show a loading/disabled state while the submission request is in progress, to prevent duplicate submissions on double-click.
Duplicate registration (same email submitted twice) should be handled gracefully (either allowed, or shown an appropriate message — needs confirmation of expected behavior).

9. Layout & Responsive Design

The two-column layout (event details on the left, registration form on the right) should be visually correct on desktop.
On tablet/mobile breakpoints, the layout should stack responsively (form below or above content) without overlapping elements or horizontal scroll.
The registration form card should remain visually distinct (white card with shadow) against the page background across breakpoints.

10. Non-Functional

All form fields and the checkbox should be accessible via keyboard navigation (Tab/Shift+Tab) in a logical order, and screen-reader accessible (proper <label> associations, ARIA attributes where needed).
Error messages should be announced to screen readers (e.g., via aria-live or aria-describedby).
Page should load within acceptable performance thresholds and render correctly across major browsers (Chrome, Firefox, Safari, Edge).
Personal data submitted (email, name) should be transmitted securely (HTTPS) and handled per the linked Privacy Notice.