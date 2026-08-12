---
title: Re-imagining insurance from claim to payout with AI
pageTitle: A Unified Claims Platform
date: "2025-06-01"
thumbnail: ./quantco-background.png
description: "Equipping insurers with an AI-native platform to process claims, deployed at scale to bring clarity and speed to complex multimodal workflows."
casestudy: true
showOnHomepage: false
tags: ["design", "AI", "product"]
focus: ["AI-native", "Product Strategy"]
workplace: QuantCo
role: "Founding Designer"
year: "2025 —"
questions:
  - "What does AI look like when embedded across every stage of insurance claims processing?"
  - "What does it mean to design an AI-native claims platform from scratch?"
  - "How do you create clarity across tools, teams, and workflows when none exist?"
---

## Framing the challenge

I led the design of the QuantCo Platform from 0 → 1, working closely with engineering leads, AI researchers, and product leadership to transform a fragmented toolset into a coherent product surface. The design challenge was less interface design, more strategic reframing of how our technology was positioned and delivered.

At the time, the tooling landscape was fractured: internal prototypes stitched together by scripts, powerful tools siloed into specific teams or clients, and every project rebuilding the same scaffolding from scratch instead of assembling it from existing work. The product didn't exist yet. But the ambition was clear, to create a modular, extensible platform that made the entire AI-native claims processing workflow observable, governable and composable.

<figure>
<div class="not-prose font-body space-y-3 sm:space-y-4">
<!-- Every layer is the same two-column row: what it is on the left, what it
     contains on the right. Nothing is drawn in the gaps between layers - the
     only connecting lines are inside the data layer, where they join named
     objects to each other. Below lg each row stacks, text over visual. -->

<!-- Layer 1: the two experiences that sit on top of everything else -->
<div class="rounded-[14px] bg-[#19224D]/[0.045] p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 lg:items-center">
<div>
<h3 class="font-heading text-[#19224D] text-2xl sm:text-3xl leading-tight">Unified claims platform</h3>
<p class="text-[#19224D]/55 text-sm sm:text-base leading-snug mt-2 max-w-sm">A platform for managing claims from first notice of loss to payout, built with agentic claims processing in mind.</p>
</div>
<div class="space-y-3">
<div class="rounded-[12px] bg-[#19224D]/[0.035] border border-[#19224D]/[0.08] p-4">
<h4 class="font-heading text-[#19224D] text-lg leading-snug">Claimant experience</h4>
<p class="text-[#19224D]/50 text-[12.5px] leading-snug mt-1">Digital, multi-channel intake to collect structured data about claims.</p>
<div class="grid grid-cols-2 gap-2 mt-3.5">
<div class="rounded-[9px] bg-[#FDFBF5] border border-[#19224D]/[0.07] px-3 py-2.5">
<p class="text-[#19224D]/90 text-[12.5px] leading-snug">Automated follow-ups</p>
</div>
<div class="rounded-[9px] bg-[#FDFBF5] border border-[#19224D]/[0.07] px-3 py-2.5">
<p class="text-[#19224D]/90 text-[12.5px] leading-snug">Inbound voice agents</p>
</div>
<div class="rounded-[9px] bg-[#FDFBF5] border border-[#19224D]/[0.07] px-3 py-2.5">
<p class="text-[#19224D]/90 text-[12.5px] leading-snug">Upfront quality checks</p>
</div>
<div class="rounded-[9px] bg-[#FDFBF5] border border-[#19224D]/[0.07] px-3 py-2.5">
<p class="text-[#19224D]/90 text-[12.5px] leading-snug">Self-service updates</p>
</div>
</div>
</div>
<!-- The surface this case study is about, so it carries the one accent -->
<div class="rounded-[12px] bg-[#19224D]/[0.035] border border-[#FC6B55]/40 p-4">
<h4 class="font-heading text-[#FC6B55] text-lg leading-snug">Claim handler experience</h4>
<p class="text-[#19224D]/50 text-[12.5px] leading-snug mt-1">A human-in-the-loop workspace to process claims in collaboration with our agents.</p>
<div class="grid grid-cols-2 gap-2 mt-3.5">
<div class="rounded-[9px] bg-[#FDFBF5] border border-[#19224D]/[0.07] px-3 py-2.5">
<p class="text-[#19224D]/90 text-[12.5px] leading-snug">Call assistant</p>
</div>
<div class="rounded-[9px] bg-[#FDFBF5] border border-[#19224D]/[0.07] px-3 py-2.5">
<p class="text-[#19224D]/90 text-[12.5px] leading-snug">Document workspace</p>
</div>
<div class="rounded-[9px] bg-[#FDFBF5] border border-[#19224D]/[0.07] px-3 py-2.5">
<p class="text-[#19224D]/90 text-[12.5px] leading-snug">Suggested actions</p>
</div>
<div class="rounded-[9px] bg-[#FDFBF5] border border-[#19224D]/[0.07] px-3 py-2.5">
<p class="text-[#19224D]/90 text-[12.5px] leading-snug">Observability and audit</p>
</div>
</div>
</div>
</div>
</div>

<!-- Layer 2: the agents both surfaces above draw on. Nothing joins them to
     each other - they are self-contained, and the dashed wrapper is the whole
     point: a set to pick from, not a pipeline to run end to end. -->
<div class="rounded-[14px] bg-[#19224D]/[0.045] p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 lg:items-center">
<div>
<h3 class="font-heading text-[#19224D] text-2xl sm:text-3xl leading-tight">Claims agents</h3>
<p class="text-[#19224D]/55 text-sm sm:text-base leading-snug mt-2 max-w-sm">Reusable decision units. Each one stands alone, and a claim draws on whichever it needs.</p>
</div>
<div class="rounded-[12px] border border-dashed border-[#19224D]/20 p-3.5 sm:p-4">
<p class="text-[#19224D]/40 text-[11px] tracking-[0.12em] uppercase leading-none">Any agent, any combination</p>
<div class="flex flex-wrap gap-2 mt-3.5">
<div class="qc-agent">
<span class="qc-agent-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h5" /><path d="M8 12l5-5h6" /><path d="M8 12l5 5h6" /><path d="M17 4l3 3-3 3" /><path d="M17 14l3 3-3 3" /></svg>
</span>
<p>Triage</p>
</div>
<div class="qc-agent">
<span class="qc-agent-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7.2-7 9-4-1.8-7-5-7-9V6l7-3z" /><path d="M9 12l2.2 2.2L15.5 10" /></svg>
</span>
<p>Coverage</p>
</div>
<div class="qc-agent">
<span class="qc-agent-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4V5z" /><path d="M10.4 8.6a1.9 1.9 0 013.3 1.3c0 1.3-1.7 1.5-1.7 2.7" /><path d="M12 15.2h.01" /></svg>
</span>
<p>Question engine</p>
</div>
<div class="qc-agent">
<span class="qc-agent-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6V3z" /><path d="M14 3v4h4" /><path d="M9 11h6" /><path d="M9 14.5h4" /><path d="M9.2 18l1.6 1.6L14 16.4" /></svg>
</span>
<p>Invoice checks</p>
</div>
<div class="qc-agent">
<span class="qc-agent-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12a8 8 0 10-3 6.2" /><path d="M20 5v4h-4" /></svg>
</span>
<p>Recourse</p>
</div>
</div>
</div>
</div>

<!-- Layer 3: the shared data the agents read from. This is the one layer with
     connecting lines, because it's the one layer that is actually about
     things joining: named sources plus whatever else a client runs, all
     landing on one spine, leaving it as the two things the agents read. -->
<div class="rounded-[14px] bg-[#19224D]/[0.045] p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 lg:items-center">
<div>
<h3 class="font-heading text-[#19224D] text-2xl sm:text-3xl leading-tight">Data unification</h3>
<p class="text-[#19224D]/55 text-sm sm:text-base leading-snug mt-2 max-w-sm">One centralised place for everything needed to power the agents.</p>
</div>
<div>
<div class="grid grid-cols-3 gap-1.5">
<p class="text-[#19224D]/60 text-[11.5px] leading-tight text-center">Core claims system</p>
<p class="text-[#19224D]/60 text-[11.5px] leading-tight text-center">Document stores</p>
<p class="text-[#19224D]/60 text-[11.5px] leading-tight text-center">Company wikis</p>
</div>
<div class="qc-flow h-[104px]" aria-hidden="true">
<div class="qc-flow-inner">
<svg class="qc-flow-lines" viewBox="0 0 100 104" preserveAspectRatio="none" fill="none" stroke="#19224D" stroke-width="1">
<!-- The three named sources drop straight out of their labels -->
<g stroke-opacity="0.34">
<path d="M16.7 2V48" vector-effect="non-scaling-stroke" />
<path d="M50 2V48" vector-effect="non-scaling-stroke" />
<path d="M83.3 2V48" vector-effect="non-scaling-stroke" />
</g>
<!-- And the ones not worth naming: whatever else a given client happens to
     run. Same lines, no label, started lower and left much fainter, so they
     read as "and the rest" rather than as four more named systems. -->
<g stroke-opacity="0.15">
<path d="M6 15V48" vector-effect="non-scaling-stroke" />
<path d="M31 21V48" vector-effect="non-scaling-stroke" />
<path d="M40 12V48" vector-effect="non-scaling-stroke" />
<path d="M58 24V48" vector-effect="non-scaling-stroke" />
<path d="M67 17V48" vector-effect="non-scaling-stroke" />
<path d="M94 13V48" vector-effect="non-scaling-stroke" />
</g>
<!-- The spine is the unification itself, so it carries the weight -->
<path d="M4 48H96" stroke-opacity="0.42" stroke-width="3.5" stroke-linecap="round" vector-effect="non-scaling-stroke" />
<!-- Out the other side, as the two things the agents actually read -->
<g stroke-opacity="0.34">
<path d="M50 48V70" vector-effect="non-scaling-stroke" />
<path d="M25 70H75" vector-effect="non-scaling-stroke" />
<path d="M25 70V95" vector-effect="non-scaling-stroke" />
<path d="M75 70V95" vector-effect="non-scaling-stroke" />
</g>
</svg>
<svg class="qc-flow-tip bottom-0 left-[25%]" viewBox="0 0 10 9" fill="none" stroke="#19224D" stroke-opacity="0.42" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5L5 7 8.5 1.5" /></svg>
<svg class="qc-flow-tip bottom-0 left-[75%]" viewBox="0 0 10 9" fill="none" stroke="#19224D" stroke-opacity="0.42" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5L5 7 8.5 1.5" /></svg>
</div>
</div>
<div class="grid grid-cols-2 gap-2">
<div class="rounded-[10px] bg-[#19224D]/[0.035] border border-[#19224D]/[0.08] px-3.5 py-3">
<p class="text-[#19224D]/90 text-[13.5px] leading-tight">Claim data</p>
<p class="text-[#19224D]/45 text-[11.5px] leading-tight mt-1">Calls, photos, documents, policy</p>
</div>
<div class="rounded-[10px] bg-[#19224D]/[0.035] border border-[#19224D]/[0.08] px-3.5 py-3">
<p class="text-[#19224D]/90 text-[13.5px] leading-tight">Agent knowledge</p>
<p class="text-[#19224D]/45 text-[11.5px] leading-tight mt-1">Rules, procedures, exceptions</p>
</div>
</div>
</div>
</div>

<!-- Layer 4: the systems we don't own, at the bottom -->
<div class="rounded-[14px] bg-[#19224D]/[0.045] p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 lg:items-center">
<div>
<h3 class="font-heading text-[#19224D] text-2xl sm:text-3xl leading-tight">Platform integrations</h3>
<p class="text-[#19224D]/55 text-sm sm:text-base leading-snug mt-2 max-w-sm">Connects to existing systems and data sources.</p>
</div>
<div class="grid grid-cols-3 gap-2">
<div class="rounded-[9px] bg-[#FDFBF5] border border-[#19224D]/[0.07] px-3 py-3 text-center">
<p class="text-[#19224D]/85 text-[12.5px] leading-snug">Core claims system</p>
</div>
<div class="rounded-[9px] bg-[#FDFBF5] border border-[#19224D]/[0.07] px-3 py-3 text-center">
<p class="text-[#19224D]/85 text-[12.5px] leading-snug">Document stores</p>
</div>
<div class="rounded-[9px] bg-[#FDFBF5] border border-[#19224D]/[0.07] px-3 py-3 text-center">
<p class="text-[#19224D]/85 text-[12.5px] leading-snug">Company wikis</p>
</div>
</div>
</div>
</div>
<figcaption>The platform in layers: two experiences over a composable set of claims agents, one data layer that draws every source into a single shape, and the existing systems we integrate with</figcaption>
</figure>

---

## Navigating ambiguity, not just complexity

The complexity was at least legible. A claim moves from first notice of loss through triage, coverage, repair, invoicing and recourse, and each stage has its own documents, rules and people. The ambiguity was the harder part. The platform had to bring together the work of many teams across the company, each building tools for a different area of the claims lifecycle, on their own timelines and against their own client commitments — while the agentic technology underneath all of them was still being developed. What an agent could reliably do shifted month to month, so there was no settled capability set to design against.

Nobody had a settled answer for how agentic capability should appear to a claim handler either. An agent that reads, drafts or decides needs a defined place for a person to step in, and in insurance that place isn't a preference — decisions have to be explainable, auditable and attributable to someone, and the bar moves by line of business and jurisdiction. Every question about where an agent hands off to a handler was a product question and a regulatory one at the same time.

So rather than designing screens for capabilities that didn't exist yet, I designed the frame they would arrive into: a modular structure where each tool could feel native to its own users, matching the language, density and pace of their part of the lifecycle, while sitting inside one navigation system, one interaction rhythm and one design language. Teams could build into the platform without inventing their own patterns, and a handler moving between tools didn't have to learn a new product each time. This modular approach let the platform scale without compromising clarity — unlocking both internal velocity and external understanding.

---

## Building the foundation, scaling the team

Throughout, I was responsible for the overall experience architecture, interaction model, and visual language. I embedded product framing into early engineering decisions treating UX not as a surface layer, but as structural. I worked closely with the product team to orchestrate alignment between simulation workflows, model management, and application design.

As the company scaled, so did design. I grew the team from one to three in October 2024, and to seven by April 2025. We developed internal tooling, defined principles tailored to technical UX, and established design rituals that supported both velocity and craft.

---

## Impact and leverage

The platform is now in use across core industries, from aerospace to mining, and has become central to how PhysicsX communicates its value to customers, investors, and partners.

By creating clarity across tools, teams, and workflows, the platform helped PhysicsX shift from fragmented prototypes to a product mindset and from powerful models to composable, visible outcomes.

---

## Reflection

Designing the PhysicsX Platform meant operating across ambiguity and discipline. It required knowing when to formalise, when to stay fluid, and how to hold clarity without collapsing complexity.

It was a platform-level design challenge in the truest sense not just in structure, but in influence.

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
