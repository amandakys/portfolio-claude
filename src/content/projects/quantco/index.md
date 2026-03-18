---
title: Re-imagining insurance from claim to payout with AI
date: "2025-06-01"
thumbnail: ./quantco-background.png
description: "As the founding designer at QuantCo, I lead design for their product efforts, integrating AI into insurance claim handling processes from claim to payout"
casestudy: true
showOnHomepage: false
tags: ["design", "AI", "product"]
workplace: QuantCo
protected: true
---

## The Context

<a href="https://www.quantco.com/" target="_blank" rel="noopener noreferrer">QuantCo</a> is a data integration consultancy specialising in insurance. For the last 7 years, they have deployed data scientists and ML engineers into clients to build models and better leverage their data.

Having serviced many clients, QuantCo is trying to productise their offering, transitioning from a service model to SaaS.

## My Role

My team is 10 data scientists and 10 engineers who leverage LLMs and more traditional ML methods to streamline claim processing with the end goal of significant automation.

My role bridges the product and design functions to take these capabilities and wrap them into a product that we can sell to clients independent of our integration services.

<div class="not-prose my-12 rounded-xl overflow-hidden shadow-lg">
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="bg-[#F5F0E8] p-8 md:p-10">
      <h3 class="font-heading text-[#19224D] text-3xl sm:text-4xl mb-6">Product</h3>
      <ul class="space-y-4 text-[#19224D] font-body text-base sm:text-lg leading-relaxed">
        <li class="flex gap-2"><span>•</span><span>turned a client delivery team into a product team</span></li>
        <li class="flex gap-2"><span>•</span><span>established a product development roadmap</span></li>
        <li class="flex gap-2"><span>•</span><span>balanced client delivery goals with product goals</span></li>
        <li class="flex gap-2"><span>•</span><span>aligned product vision with business strategy</span></li>
        <li class="flex gap-2"><span>•</span><span>integrated data analytics and translated data insights into product direction</span></li>
      </ul>
    </div>
    <div class="bg-[#FDFBF5] p-8 md:p-10 border-t md:border-t-0 md:border-l border-[#E8E3D9]">
      <h3 class="font-heading text-[#19224D] text-3xl sm:text-4xl mb-6">Design</h3>
      <ul class="space-y-4 text-[#19224D] font-body text-base sm:text-lg leading-relaxed">
        <li class="flex gap-2"><span>•</span><span>worked across UIs to bring consistency</span></li>
        <li class="flex gap-2"><span>•</span><span>worked with engineers to expose AI features</span></li>
        <li class="flex gap-2"><span>•</span><span>championed user needs, and good research practices</span></li>
        <li class="flex gap-2"><span>•</span><span>introduced sustainable AI-assisted design practices</span></li>
      </ul>
    </div>
  </div>
</div>

---

## Product Challenge

### Client delivery → Product Team

When I joined, my team had only ever worked on client delivery projects, delivering data integrations and optimisations based on one specific client's needs.

They had never worked with a designer before. They were used to doing all the discovery and research themselves then building directly.

They had never built a re-usable "product" with a wider vision before.

<figure>

![What do designers really do - explaining the design process and what's been missing](./design-explanation.png)

<figcaption>Breaking down the design process for a team that had never worked with a designer before</figcaption>
</figure>

### Establishing process

Since they were used to working on the client's timelines, and the project was fresh out of "demo" stage. There was no roadmap, no plan on what we were going to deliver and how.

### Managing Client vs Product

It was up to me start building the systems and frameworks that would help us manage both delivering something the client wanted without overfitting, and building out a re-usable product at the same time.

- Separate client-specific user needs from product-relevant needs
- Designing with the long term vision in mind
- Maintain a user research repository

<figure>

![Product Roadmap and Prioritisation process](./product-roadmap.png)

<figcaption>Led the creation of a product roadmap and a prioritisation framework to help balance client delivery with product development</figcaption>
</figure>

### Creating a Product Vision

Beyond the demo we had pitched, it was important for our team to align on what our short and long term goals were for Case Studio beyond simple document viewing.

#### Building team alignment

Since almost all our data scientists had direct and regular access to the customer and the clearest insight into what was possible technologically, their input was key to defining mid-term scope.

I ran a series of workshops to help us discuss our ideas in structured format.

<figure>

![What is the Goal of Case Studio - workshop output](./casestudio-vision.png)

<figcaption>Output from a team vision workshop exploring what Case Studio could become</figcaption>
</figure>

#### Building business alignment

It was also important to contextualise what we wanted to build with the wider business strategy. For this I worked with senior business leadership and client relations to take our team's vision and align it with what we thought customers would be interested in buying.

This also included working on a incremental adoption strategy, and short vs long term pitch for partnerships.

---

## Design Challenge

### The User Problem

Claim handlers must match invoices with their initial quotes in order to decide whether to pay out an invoice. A claim can contain 100s of documents, received at different times, multiple quotes, multiple repairs and long email chains with attachments.

This can be very time consuming and imprecise as invoice values don't always match quote values exactly.

### The Technical Solution

Using OCR, we can extract invoice and quote items line by line. We can then compare pairs of documents and give them a similarity score.

Given one quote, we can provide a list of documents that are likely to be the matching invoice. This was built to advance the payment automation workstream.

### Problem Statement

**Engineers:** How do we expose this information to claim handlers?

**Me:** What do we actually want claim handlers to *do* with this information?

### Research

- Weekly virtual shadowing sessions
- Weekly feedback with 6 pilot users
- Bi-weekly in-person sessions

#### Outcomes

- A better understanding of claim handlers' decision making processes
- Understand when claim handlers must have input in the invoice-quote lifecycle
- Insights into what other types of document relationships would be useful

#### Important constraints

- Our UI was 'read-only', claim handling actions could only be done via the approved third-party solution
- Invoice-quote relationships were only the start. The automation workstream was likely to create more useful relationships
- We want claim handlers to help validate our model outputs

<figure>

![Mapping the lifecycle of invoices and quotes](./quotelifecycle.png)

<figcaption>Mapping the lifecycle of invoices and quotes, to understand where they fit into the claim handling process</figcaption>
</figure>

---

## Solution

### Goal

Help claim handlers decide whether to pay out an invoice as quickly as possible.

<figure>

![Annotated Case Studio interface showing key design decisions](./casestudio-highlights.png)

<figcaption>Annotated Case Studio interface highlighting AI-enhanced features and design decisions</figcaption>
</figure>

### New Workflow

1. Open document viewer to view invoice
2. See related quotes in the inspector with match ratio
3. Open related quote in side by side view
4. Verify match
5. Return to third-party application to pay

### Key Design Decisions

- Purple is used to highlight information that comes from our models
- Displaying matches as 15/25 as a comprehensible way to explain "uncertainty"
- Availability of matches should be visible even if inspector isn't open

### Where it's at now

- Feature-complete with original document viewer
- Released to 300 users
- Integrated data analytics pipeline with Countly
- Established user research pipeline with built-in feedback forms
- Expanded pilot to 30 users

### Outcomes

- Dynamic document grouping
- Enhanced metadata
- Smart search and filter
