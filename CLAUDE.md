# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Rachana Vannala, a Full-Stack Developer. The portfolio is built as a static website using vanilla HTML, CSS, and JavaScript with a modern, responsive design.

## Project Structure

The project follows a simple static website structure:

- `index.html` - Main HTML file containing the complete portfolio structure
- `style.css` - Primary stylesheet with all main styling
- `media.css` - Responsive design styles for mobile devices
- `script.js` - JavaScript functionality for interactive elements
- `assets/` - Directory containing all images, documents, and media files

## Key Features

### Responsive Design
- Desktop navigation with horizontal menu
- Mobile hamburger menu that toggles via JavaScript
- Responsive breakpoint at 1200px width
- CSS transitions for smooth interactions

### Interactive Elements
- Flip cards for project showcases (CSS 3D transforms)
- Hamburger menu toggle functionality
- Smooth scrolling navigation between sections
- Hover effects and transitions throughout

### Content Sections
- Profile/Hero section with social links
- About section with experience and education highlights
- Experience section showcasing frontend and backend skills
- Projects section with interactive flip cards
- Publications and achievements section
- Contact information section

## Technical Implementation

### CSS Architecture
- Uses CSS custom properties and modern flexbox layouts
- Implements CSS 3D transforms for flip card animations
- Responsive design handled through media queries
- Consistent color scheme using RGB values
- Smooth transitions (300ms ease) for interactive elements

### JavaScript Functionality
- Single function `toggleMenu()` in `script.js` for mobile menu
- Uses DOM manipulation to toggle CSS classes
- Event handling through inline onclick attributes in HTML

### Assets Management
- All images stored in `assets/` directory
- PDF resume available for download
- External image URLs used for some icons (vectorstock.com)
- Local image files for logos and personal photos

## Development Workflow

Since this is a static website with no build process:

### Testing
- Open `index.html` directly in a browser
- Test responsive design by resizing browser window
- Verify all links and interactive elements work properly

### Deployment
- Can be deployed directly to any static hosting service
- No build step required
- Ensure all asset paths are relative and accessible

## Code Style and Conventions

### HTML
- Semantic HTML5 structure
- Inline event handlers for simplicity
- Consistent class naming with kebab-case
- Proper alt text for images

### CSS
- Consistent spacing and indentation
- Logical property grouping
- Mobile-first responsive approach
- Descriptive class names

### JavaScript
- Minimal vanilla JavaScript
- No external libraries or frameworks
- Simple DOM manipulation patterns

## Common Tasks

### Adding New Content
- Projects: Add new flip card structure in the projects section
- Publications: Add new publication entry in the publications section
- Update assets: Add new images to the `assets/` directory

### Styling Changes
- Main styles: Edit `style.css`
- Mobile styles: Edit `media.css`
- Maintain consistent color scheme and transition timings

### Asset Updates
- Replace images in `assets/` directory
- Update resume PDF when needed
- Ensure proper file paths in HTML references