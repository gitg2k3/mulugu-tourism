Discover Mulugu — UI Design System & Web Specification
Project: Discover Mulugu
Tagline: Gateway to Telangana’s Tribal Heritage
This document defines the design tokens, color palette, typography hierarchy, layout, and UI components for Discover Mulugu. The visual direction follows the supplied travel landing page specification, combining heritage architecture, lakes, forests, and tribal cultural accents.
1. Visual Direction
- Use a bright white canvas, generous spacing, rounded cards, and restrained shadows.
- Pair bold sans-serif headings with editorial italic serif destination names.
- Make authentic destination photography the primary visual element.
- Use deep blue for brand identity, electric blue for actions, teal for water accents, green for nature, and ochre for cultural details.
- Keep tribal glyphs and patterns subtle and culturally appropriate.
2. Color Palette
Primary Heritage Colors
Role	Color name	Hex	RGB	Usage
Primary brand	Heritage Deep Blue	#0E3D7D	rgb(14, 61, 125)	Hero accent words, logo, primary headings, active tabs
Primary vibrant	Cobalt Teal	#188BAF	rgb(24, 139, 175)	Interactive links, secondary hero badges, water highlights
Accent primary	Temple Gold / Ochre	#EFA316	rgb(239, 163, 22)	Badges, rating stars, tribal borders, decorative dividers
CTA action	Electric Blue	#1D72FE	rgb(29, 114, 254)	Main action buttons, including Check Availability and Explore Destinations
Accent light	Light Gold	#F8B838	rgb(248, 184, 56)	Supporting gold highlights


Nature & Forest Accents
Role	Color name	Hex	RGB	Usage
Forest leaf	Emerald Green	#258C42	rgb(37, 140, 66)	Availability indicators, active tours, eco-badges
Canopy light	Sprout Green	#6BB33E	rgb(107, 179, 62)	Badge outlines, pill tags, seasonal highlights


Neutrals & Backgrounds
Role	Color name	Hex	Usage
Page canvas	Pristine White	#FFFFFF	Main canvas and card surfaces
Section muted	Fog Gray	#F6F8FA	Trust bar and dropdown surfaces
Border / divider	Soft Slate	#E5E9EE	Input borders, carousel arrows, card outlines
Text primary	Deep Charcoal	#111827	Headings and card titles
Text secondary	Muted Ash	#64748B	Subheadings, dates, helper labels
Navigation text	Slate	#334155	Navigation links
Hero badge	Dark Charcoal	#1A202C	Floating hero badge background


3. Typography
Font Families
- Display, headings, body, navigation: Plus Jakarta Sans; Inter as an alternative; sans-serif fallback.
- Destination names and cultural storytelling: Playfair Display; DM Serif Display as an alternative; serif fallback.
- Load only the selected primary families and required weights. Use supported font weights rather than synthesizing unavailable ones.
Type Hierarchy
Element	Size	Weight / style	Treatment
Hero heading	48–64px desktop	800	Line height 1.1; letter spacing -0.02em; uppercase
Hero accent	Inherits hero size	800	Deep blue or teal; electric blue where appropriate
Destination title	22–26px	Italic serif; approximately 600 where supported	Editorial travel magazine aesthetic
Navigation	14px	500	#334155
Body and subtitle	15–16px	400	#64748B; comfortable reading line height
Booking widget title	18px	700	Charcoal
Section eyebrow	14px	700	Uppercase


4. Layout & Component Specifications
A. Global Navigation Header
Desktop structure:
- Left: Discover Mulugu wordmark with a subtle tribal glyph or tree motif in #0E3D7D.
- Center: Home, Heritage Sites, Eco-Stay & Huts, Tribal Culture, Packages.
- Right: Explore Destinations → pill button.
The right action uses a white background, #E5E9EE border, #0E3D7D text, and fully rounded corners. Keep navigation spacing balanced and align all controls vertically.
B. Hero Section
Floating Badge
- Dark rounded pill with #1A202C background.
- Green accent dot in #258C42.
- Proposed text: “Number 1 Ecotourism & Heritage Hub in Telangana”.
- Trailing arrow link icon.
- Use the ranking claim only with supporting evidence. Otherwise use “Explore Telangana’s Ecotourism & Heritage”.
Hero Title
Center the following three lines:
READY TO DISCOVER
SACRED MULUGU
GATEWAY TO HERITAGE
Use #111827 for the first and third lines. Highlight “SACRED MULUGU” with #0E3D7D or #188BAF.
Hero Subtitle
Experience ancient Kakatiya architecture, pristine canopy lakes, and vibrant tribal sanctuaries.

Center the muted subtitle in a readable width, allowing one or two lines on desktop.
Hero Image
- Full-width panoramic image within the page content container.
- Feature Laknavaram suspension bridge and surrounding green peaks.
- Use high-resolution photography with an intentional focal point.
- Apply 28px rounded corners, emphasizing the curved bottom corners.
- Preserve image proportions with an appropriate cover crop.
C. Floating Booking / Plan Widget
Overlap the bottom of the hero imagery with a white card and this shadow:
box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.12);
Title: “Book Heritage Tour Now!” — bold, 18px.
Control	Placeholder / label	Detail
Date picker	Choose Date	Calendar icon; pill-shaped input
Visitors dropdown	Select Visitors	Group selector; chevron icon
Tour type dropdown	Select Tour Type	Heritage Walk, Lake Eco-Camp, Waterfalls Trek
Primary action	Check Availability	Search icon; #1D72FE background; fully rounded


Use an aligned input grid on desktop. Provide persistent accessible labels, clear selected values, validation messages, and loading, success, empty, and error states. Show actual availability only when a booking data source is connected; otherwise route users into an itinerary or enquiry flow with matching wording.
D. Media & Trust Bar
Use a subtle grayscale strip on #F6F8FA with balanced spacing and consistent visual logo height.
Proposed references:
- UNESCO World Heritage
- Telangana Tourism (TSTDC)
- Incredible India
- National Geographic Traveller
- Ministry of Tribal Affairs
These are proposed visual references, not established partnerships. Display logos, accreditations, or media endorsements only when accurate and permitted. A factual destination credential must not imply endorsement of Discover Mulugu.
E. Destination Showcase Carousel
Section Header
- Eyebrow: ESCAPE TO OUR — charcoal, bold.
- Main heading: SACRED DESTINATIONS — deep blue or teal.
- Subtitle: Introduce Ramappa Temple, Laknavaram Lake, Bogatha Waterfalls, and Tadvai Forest Reserve.
Destination Sequence
Position	Destination	Treatment
1	Ramappa Temple	UNESCO context where verified
2	Laknavaram Hanging Bridge	Lake and suspension bridge photography
3	Bogatha Waterfalls	Initial active center highlight
4	Medaram Sammakka Sarakka Gadde	Cultural destination photography
5	Tadvai Wildwoods & Dolmens	Forest and heritage photography


Card Styling
- Five portrait cards arranged horizontally on wide screens.
- 24px corner radius and subtle ambient shadow.
- Active center card scales to approximately 1.05 with a stronger shadow.
- Reserve enough surrounding space to avoid clipping the elevated card.
- Place italic serif captions below each card, for example “Bogatha Falls”.
- Proposed social proof: green dot and “24k+ Happy Visitors”. Publish visitor counts only when verified; otherwise omit the count or use a factual descriptive badge.
Navigation
- Circular previous and next buttons with white backgrounds and soft gray borders.
- Visible chevron icons and accessible names.
- Bottom pill CTA: Explore All Destinations →.
- Support touch scrolling and keyboard operation. Keep the active item and navigation state consistent.
5. Responsive & Interaction Guidelines
- Desktop: Inline navigation, horizontal booking fields, panoramic hero, five-card destination layout where space permits.
- Tablet: Reduce spacing and visible carousel cards; wrap booking controls when needed.
- Mobile: Use a compact menu, fluid hero typography, stacked booking controls, and a horizontally scrollable carousel with a visible next-card preview.
- On narrow screens, place the booking widget beneath the hero when overlap compromises readability.
- Maintain visible keyboard focus, sufficient text contrast, meaningful image alt text, and comfortably sized touch targets.
- Status dots must be accompanied by text. Respect reduced-motion preferences for transitions and carousel effects.
6. Design Tokens — Tailwind CSS Config Reference
The following preserves the supplied Tailwind configuration format for projects using configuration-based theme extension.
module.exports = {
  theme: {
    extend: {
      colors: {
        mulugu: {
          blue: {
            deep: '#0E3D7D',
            vibrant: '#188BAF',
            action: '#1D72FE',
          },
          gold: {
            DEFAULT: '#EFA316',
            light: '#F8B838',
          },
          forest: {
            DEFAULT: '#258C42',
            light: '#6BB33E',
          },
          neutral: {
            canvas: '#FFFFFF',
            surface: '#F6F8FA',
            border: '#E5E9EE',
            heading: '#111827',
            muted: '#64748B',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'DM Serif Display', 'serif'],
      },
      borderRadius: {
        hero: '28px',
        card: '24px',
      },
    },
  },
};
7. Implementation Acceptance Criteria
- All primary colors, fonts, and radii match this specification.
- The hero, booking widget, trust strip, and destination carousel retain the defined visual hierarchy across screen sizes.
- Navigation, dropdowns, date selection, carousel controls, and CTAs have functional destinations or actions.
- Interactive controls include focus, loading, disabled, and error states as applicable.
- Photography uses responsive sizing and descriptive alt text.
- Claims, visitor counts, accreditation labels, and partner logos are verified before publication.
- The page has no unintended horizontal overflow or clipped active cards.