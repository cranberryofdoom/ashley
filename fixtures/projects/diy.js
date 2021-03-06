import React from "react";
import moment from "moment";
const DIYCampsCourseBrochure = require("../../images/DIY-Camps-Course-Brochure.png");
const DIYCampsRegistrationOfferSelectKid = require("../../images/DIY-Camps-Registration-Offer-Select-Kid.png");
const JAM10Chat = require("../../images/JAM-1.0-Chat-In-Progress.png");
const JAM15Chat = require("../../images/JAM-1.5-Chat.png");
const JAM20Cards = require("../../images/JAM-2.0-Cards.png");
const JAM20Packs = require("../../images/JAM-2.0-Packs.png");
const JAM30AccountManagment = require("../../images/JAM-3.0-Account-Management.png");
const JAM30Filmstrip = require("../../images/JAM-3.0-Drawing-Filmstrip.png");

const projects = [
  {
    name: "JAM",
    links: [
      {
        cta: "Website",
        url: "https://jam.com"
      },
      {
        cta: "Component Library",
        url: "https://diy.github.io/nimbus"
      },
      {
        cta: "Architectural Overview & Design Patterns",
        url:
          "https://paper.dropbox.com/doc/JAM-Frontend-Web-Overview--ASm9NJQHmAwbpFvVO3_MYQptAg-gSOdAxWwHo4s9Yu35i8G0"
      }
    ],
    description: (
      <span>
        <p>
          JAM is an online learning community where kids can be their most
          creative selves through online courses in subjects they can't get in
          school, like drawing, animation, cooking, and engineering.
        </p>
        <p>
          I've been the lead frontend engineer for our core revenue-earning
          product since its conception in 2016, overseeing not only
          mission-critical areas like our core learning features and
          registration flows, but our internal content moderation/course
          administration tools, subscription management tools, and marketing
          pages.
        </p>
      </span>
    ),
    inline: true,
    gallery: [
      {
        images: [
          {
            src: JAM30Filmstrip,
            caption: "2018 Course Playlist"
          },
          {
            src: JAM30AccountManagment,
            caption: "2018 Account Management"
          },
          {
            src: JAM20Packs,
            caption: "2017 Course Topics"
          },
          {
            src: JAM20Cards,
            caption: "2017 Card Learning Interface"
          },
          {
            src: JAM15Chat,
            caption: "2016 Chat Learning Interface Version 2"
          },
          {
            src: JAM10Chat,
            caption: "2016 Chat Learning Interface Version 1"
          }
        ]
      }
    ]
  },
  {
    name: "DIY Camps",
    description: (
      <span>
        <p>
          DIY Camps was the experimental precursor to JAM, where we offered
          real-time online camps for kids to attend during the summer. I built
          the camp brochure previews, registration flows and the account
          management pages for the product.
        </p>
      </span>
    ),
    gallery: [
      {
        images: [
          {
            src: DIYCampsCourseBrochure,
            caption: "2015 Course Brochure"
          },
          {
            src: DIYCampsRegistrationOfferSelectKid,
            caption: "2015 Account Management"
          }
        ]
      }
    ]
  }
];

export default projects;
