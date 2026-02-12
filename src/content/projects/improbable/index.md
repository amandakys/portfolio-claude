---
title: Building developer tools and SPAs
date: "2019-12-10"
thumbnail: ./improbable-background.png
description: "Worked across Games and Defence teams to design and build customer-facing web applications for a game development platform and a military decision-support tool, translating complex technical systems into usable interfaces"
casestudy: true
showOnHomepage: false
tags: ["design", "UX", "engineering"]
workplace: Improbable Worlds Ltd.
---

## My Role

I was a **User Experience Engineer** on the Web UIs team at <a href="https://improbable.io" target="_blank" rel="noopener noreferrer"> Improbable</a>. As part of my role, I developed single page applications used to develop with Improbable software SpatialOS. The main technology stack is React, Typescript, Redux, Webpack.

Other responsibilities include:

<ul>
    <li> Research, design and build new features </li>
    <li>Conduct usability tests on new designs and action feedback in follow up releases.</li>
    <li>Build and maintain internal library of reusable components and design frameworks for rapid prototyping</li>
    <li>Liaise with API teams to expose new API functionality in the UI.</li>
    <li>Collaborate with other teams to provide front end skill expertise to other engineering teams </li>
    <li>Mentor non-engineering staff in front end technology skill development </li>
</ul>

## Projects

I have written up two case studies from my work at Improbable: [Design Improvements for a Cloud Deployment](improbable-ux-improvements) and [Understanding User Management](improbable-user-management). Below is a higher level overview of the type of projects I've worked on: [Designing the Create Deployment Flow](#create), [Scalable Search](#search), [Redesigning for Brand Alignment](#brand), [Redesigning a Web App for Scale](#scale)

<a name="create" style="display: block; position: relative; top: -9vw"></a>

## Designing The Create Deployment Flow

I was asked to propose a UI flow for creating a new deployment, a process currently only possible using a command line tool. This required investigation into this CLI process and what information a user was expected to provide when creating a deployment.

With a list of required user inputs, I began to design a UI wizard to guide users through the process. For certain stages, user inputs were more complex than just text and dropdowns. For example, users needed to be able to select from a list of available snapshots and assemblies or upload their own zip files. The launch configuration was a JSON file that also needed to be uploaded, but users expressed strong interest in being able to modify and generate the file through the UI.

As a result, a secondary task of building a JSON file generator UI was cut from the main task. This UI would be integrated into the Config step of the Create a Deployment wizard.

![create-modal.png](./create-modal.png)

<p align="center" style="font-size: 0.8em; ">As users fill in basic deployment information, the overview on the right updates. The navigation bar on top shows them the steps they have to take to create a deployment and what stage they are at.</p>

![create-modal-snapshot.png](./create-modal-snapshot.png)

<p align="center" style="font-size: 0.8em; ">The snapshot step, like assemblies and config requires more complex user inputs</p>

<a name="search" style="display: block; position: relative; top: -9vw"></a>

## Scalable Search

Following the redesign of the Console to support large numbers of deployments (10,000+), a need for the ability to search and filter these deployments quickly became evident.

I worked with the API team to design compatible server side filtering functionality. I researched and designed the UI for basic and advanced search. I also implemented the feature and managed the internal and external release to users.

Some of the main design challenges I faced were centred around different user groups having very different use cases for the feature. For example, some users wanted the search to default to certain filters, while others wanted to be able to save their filters and reapply them later. Balancing all these requirements to build one product required flexibility and compromise.

![search.png](./search.png)

<p align="center" style="font-size: 0.8em; ">Mock up for advanced search functionality</p>

<a name="brand" style="display: block; position: relative; top: -9vw"></a>

## Redesigning For Brand Alignment

New brand guidelines were supplied by the marketing team and the team was tasked with updating our web applications to better suit the new style. The challenge was that the guidelines were designed for print and media use rather than UI. The 'boxy' style when used for UI threatened to look too old-school, dated rather than modern. Below are a few of the investigations I came up with.

![dpl2_original.png](./dpl2_original.png)

<p align="center" style="font-size: 0.8em; ">Current design</p>

![brand.png](./brand.png)

<p align="center" style="font-size: 0.8em; ">Example of the new brand's visual look used for inspiration</p>

![dpl2_redesign_1.png](./dpl2_redesign1.png)

<p align="center" style="font-size: 0.8em; ">Redesign Option 1</p>

![dpl2_redesign_2.png](./dpl2_redesign2.png)

<p align="center" style="font-size: 0.8em; ">Redesign Option 2</p>

<a name="scale" style="display: block; position: relative; top: -9vw"></a>

## Redesigning A Web App For Scale

The aim of this project was to improve load times for the Console, a web app used by SpatialOS developers to manage their cloud deployments.

The current web app had poor loading times for users with large numbers of deployments because the API used did not page data, instead waiting to receive one large segment of data before loading the page.

New APIs had been built, and our team was tasked with reimplementing the web app to hit these APIs, focusing on ensuring that it would still work well when users had 10,000 deployments.

A structural redesign of the sitemap was also needed to reflect changes in how the API stored deployment data. We wanted users to focus on viewing different runs of the same deployment, rather than different deployments in their project. This was due to the realisation that external customers often only had one project, so the multi-project focused view was only useful internally. This change in the information hierarchy we wanted to present was central to our work in redesigning for the Console to work at scale.

![pfc-old.png](./pfc-old.png)

<p align="center" style="font-size: 0.8em; ">Original landing page, showing a user all their projects, then drilling down into the deployments in that project, runs were not visible.</p>

![pfc_original.png](./pfc_original.png)

<p align="center" style="font-size: 0.8em; ">Current design of the new page, with support for 10,000 deployments</p>

![create.png](./create.png)

<p align="center" style="font-size: 0.8em; ">Prospective stylistic redesign based on new brand guidelines</p>
