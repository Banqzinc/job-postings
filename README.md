# Quidkey Lead Engineer Job Posting

A simple job posting site for Quidkey's Lead Engineer position with a built-in application form.

## Overview

This is a simple, static site that includes:
- A detailed job description
- An application form that sends submissions directly to your email

## Technology Stack

- HTML5
- CSS3
- Netlify for hosting and form handling

## How to Deploy

### Deploy to Netlify

1. Sign up for a [Netlify account](https://app.netlify.com/signup) if you don't have one
2. Push this repository to GitHub
3. In Netlify, click "New site from Git"
4. Choose GitHub and select this repository
5. Leave the build command and publish directory empty
6. Click "Deploy site"

### Setting Up Form Notifications

1. After deployment, go to your site's Netlify dashboard
2. Navigate to "Site settings" > "Forms"
3. You should see "job-application" form created automatically
4. Go to "Form notifications" and set up email notifications to receive applications

## Local Development

To test the site locally, simply open the `index.html` file in your browser. Note that the form submission will only work when deployed to Netlify.

## Customization

- Edit `index.html` to update the job description or form fields
- Modify `style.css` to change the site's appearance

## Form Submissions

All form submissions can be viewed in the Netlify dashboard under the "Forms" tab. You'll also receive email notifications for new applications.

## Free Tier Limits

The Netlify free tier includes:
- 100 form submissions per month
- 300 minutes of build time per month
- 100GB bandwidth per month

This should be sufficient for a job posting site with moderate traffic.
