# Typography - Website Styling Project

## Project Overview
Help novelist Aoife Conleavy improve the typography and readability of her professional website before the launch of her new novel "Tide Blade".

## Project Context
The website features travel writing and stories about real-life characters in Morocco. The goal is to enhance readability through proper typography styling.

## Core Requirements
- Modify font weights
- Adjust line heights
- Implement Google Fonts
- Add custom fonts
- Set appropriate fallback fonts

## Detailed Tasks

### 1. Header Styling
- [ ] The header section of Aoife Conleavy’s site contains the author’s name, along with the text “Travels”, “Fiction”, and “Contact”. Change the font-weight of the header so that the text appears bold.
  ```css

  ```

### 2. Banner Text Weights
- [ ] Moving down the page, the banner section contains a stunning image, two blocks of text, an h2 tag with the text “DEC 20XX”, and an h1 tag with the text “Morocco”.
  Give the h2 tag a font weight of 500 and the h1 tag a font weight of 900.
  ```css

  ```

### 3. Line Height Adjustments
- [ ] 
    After reviewing the project, the author suggests that the line height seems a bit off and needs to be altered throughout the page.
    Work down the page and set line-height of the following page elements as recommended:
    - The paragraph within the journal section should have a line height of 1.4 times the font size.
    - The first letter of the journal section should have a line height of .87 times the font size.
    - The quote should have a line height of 1.2 times the font size.
    - The footer content should have a line height 1.5 times the font size.
  ```css
  .journal p { line-height: 1.4; }
  .journal .first-letter { line-height: 0.87; }
  .quote { line-height: 1.2; }
  footer { line-height: 1.5; }
  ```

### 4. Google Fonts Integration
- [ ] 
The site currently uses common serif and sans-serif fonts found on users’ computers. Since the author first published the site, a number of new font libraries have created fonts that you think would be a better fit for the site.

Using the Google Fonts API, add the following fonts to the index.html file:
- Abril Fatface
- Work Sans in font-weight 400, 500, and 800.
- Merriweather in font-weight 400 and 400 italic
    
You may either link these fonts in a single <link> tag, or three separate <link> tags.
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Work+Sans:wght@400;500;800&family=Merriweather:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
  ```

### 5. Font Family Implementation
- [ ] You can now use the newly added fonts from Google Fonts within our project. Moving down the page again, set the font-family and property as recommended:

- Set the typeface of the h2 tag in the banner section to "Work Sans"
- Set the typeface of the h1 tag in the banner section to "Abril Fatface"
- Set the typeface of the journal section to Work Sans
- Set the typeface of the photo caption to Merriweather
  ```css

  ```

### 6. Fallback Fonts
- [ ] The page looks great, but you also have to account for users who may not be able to access the Google Fonts. Find them several fallback fonts to use in case they are restricted from accessing fonts from a third party:

Set the fallback fonts as follows:

- h2 tag in the banner section: "Arial" and sans-serif
- h1 tag in the banner section: sans-serif
- The journal section: serif
- The photo caption: serif
  ```css

  ```

### 7. Custom Font Face
- [ ] Looking at the page, the author suggests the page would really come together if we used a specific font, CroissantOne-Regular.ttf, in the footer. The files have been downloaded and added to our project within the fonts directory within the styles/ directory where our CSS files are stored.

To complete the task you need to use the @font-face property to make these fonts accessible in the stylesheets. Name the font "Croissant One".

Operate as if this is already downloaded to your device. Use the website tool 
  ```css

  ```

### 8. Footer Font Implementation
- [ ] Now that you have a @font-face rule, set the font-family property of the footer to "Croissant One" with "Merriweather" and serif as the fallback fonts.
  ```css
  
  ```

## Notes
- Ensure all fonts are properly loaded
- Test fallback fonts
- Maintain consistent styling throughout the page

---
*To mark a task complete, replace `[ ]` with `[x]`*