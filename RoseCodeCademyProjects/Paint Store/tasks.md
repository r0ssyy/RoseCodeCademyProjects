# Paint Store - CSS Styling Tasks

## Project Overview
Improve a web page for a home paint business by enhancing color styling using hex values, RGBA transparency, and HSL colors.

The page is almost ready to be published. You’ll be making the following color-related changes:

Exchange some named colors with hexadecimal color values.
Add some semi-transparent overlays to the banner and footer using RGBA.
Fill in the first color column of the swatch samples using HSL colors.
The website’s existing index.html and style.css document files are displayed in the text editor.
## Project Files
- `index.html`
- `style.css`

## Core Requirements
- Replace named colors with hex values
- Add semi-transparent overlays
- Implement HSL color formatting
- Complete color swatch patterns

## Detailed Tasks

### 1. Replace Named Colors 
- [ ] Replace all instances of `orange` with hex `#ff8000`:
  ```css
  header { background: #ff8000; }
  #color-guide h2 { color: #ff8000; }
  footer .button { color: #ff8000; }
  ```

### 2. Add Title Transparency
- [ /] Make main title semi-transparent black:
  ```css
  h1 { color: rgba(0, 0, 0, 0.7); }
  ```

### 3. Header Overlay
- [/ ] Add semi-transparent orange overlay:
  ```css
  #banner:before { background-color: rgba(255, 128, 0, 0.75); }
  ```

### 4. Footer Overlay
- [/] Add matching semi-transparent black overlay:
  ```css
  footer:before { background-color: rgba(0, 0, 0, 0.7); }
  ```

### 5. Subtitle Styling
- [/ ] Update subtitle text colors to light gray:
  ```css
  .color .swatches h4 { color: #9b9b9b; }
  ```

### 6. HSL Color Implementation
- [/] Convert base colors from hex to HSL format:
  ```css
  .reds .base-color { color: hsl(350, 100%, 50%); }
  /* Convert green and blue sections similarly */
  ```

### 7. Complete Color Patterns
- [/ ] Fill in missing HSL values following established patterns:
  ```css
  /* Pattern: Decrease lightness by 15% */
  .reds .lightness .color-1 { background-color: hsl(350, 100%, 80%); }
  ```

## Notes
- Follow patterns carefully in each color section
- Maintain consistent transparency levels
- Use provided color values exactly as specified

---
*To mark a task complete, replace `[ ]` with `[x]`*