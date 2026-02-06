# Component Showcase Guide

The Component Showcase page (`src/pages/ComponentShowcase.jsx`) displays all components in the project for visual testing.

## Adding a New Component to the Showcase

When you create a new component, follow these steps to add it to the showcase:

### Step 1: Import the Component
Add the import statement at the top of `ComponentShowcase.jsx`:

```jsx
import YourNewComponent from '../components/YourNewComponent'
```

### Step 2: Add a Section
Add a new section in the component's return statement:

```jsx
<section className="mb-16" id="your-component-name">
  <div className="mb-8">
    <h2 className="font-heading text-3xl lg:text-4xl text-gray-900 mb-2">
      YourComponentName
    </h2>
    <p className="font-body text-gray-600">
      Brief description of what the component does.
    </p>
  </div>

  <div className="space-y-8">
    {/* Example 1 */}
    <div>
      <h3 className="font-body text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Example 1: Description
      </h3>
      <YourNewComponent 
        prop1="value1"
        prop2="value2"
      />
    </div>

    {/* Add more examples as needed */}
  </div>
</section>
```

### Step 3: Test It
Run the dev server and navigate to the showcase page to verify your component displays correctly.

## Current Components

- **PortfolioCard**: Portfolio project cards with image, text, tags, and optional overlay
- **ExperienceCard**: Work experience cards with background image and centered text

## Tips

- Use placeholder images or gradients for testing
- Include multiple examples showing different use cases
- Test responsive behavior at different screen sizes
- Ensure accessibility features are working
