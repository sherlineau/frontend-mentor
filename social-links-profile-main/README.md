# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [frontendmentor.io](https://www.frontendmentor.io/solutions/mobile-first-approach-with-css-grid-7Gdv0QlE4j)
- Live Site URL: [Render](https://fm-social-links.onrender.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

### What I learned

Utilizing document selectors to determine the height of a specific div.  Taking that information and dynamically calculating the height of my main container to fill the screen and account for other sections to prevent overflow/the vertical scrollbar.

```css
section {
  height: calc(100dvh - var(--sl-attribution-height));
}
```
```js
 function checkAttributionHeight () {
      const div = document.querySelector(".attribution");
      const styles = window.getComputedStyle(div);
      const divHeight = styles.height

      document.documentElement.style.setProperty("--sl-attribution-height",divHeight)
    }
    addEventListener("resize",checkAttributionHeight);
    addEventListener("orientationchange",checkAttributionHeight);
    checkAttributionHeight();
```

## Author
- Website - [Sherline Au](https://www.sherlineau.com/)
- Frontend Mentor - [@sherlineau](https://www.frontendmentor.io/profile/sherlineau)