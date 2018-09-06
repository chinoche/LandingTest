import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  slides = ["https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?cs=srgb&dl=achievement-agreement-arms-1068523.jpg&fm=jpg",
    "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  ];

  introData: any = {
    heroUrl: '../../../assets/hero.jpg',
    introFeatures: [
      {
        description: 'Enterprise-ready performance and controls.',
        feautureImagePath: '../../../assets/data.svg',
        title: 'Keep your Data'
      },
      {
        description: '24/7 proactive threat scanning to prevent attacks.',
        feautureImagePath: './../../assets/proto.svg',
        title: 'Prototype your project'
      },
      {
        description: '24/7 proactive threat scanning to prevent attacks.',
        feautureImagePath: '../../../assets/smart.svg',
        title: 'Create Smart Texts'
      }
    ]
  };

  pricingData: any = {
    plans: [
      {
        bestDeal: false,
        title: 'Basic',
        productDescription: 'Give it a try',
        price: '0',
        description: 'Always Free',
        extendedDescription: 'How to boost the design and developing process with help of our paws',
        features: [
          {
            active: true,
            description: '2GB of space'
          },
          {
            active: true,
            description: '30 days of file recovery'
          },
          {
            active: true,
            description: 'MS Office 365 Integration'
          },
          {
            active: false,
            description: 'Unlimited 3rd-party integrations'
          },
          {
            active: false,
            description: 'Remote wipe'
          },
        ]
      },
      {
        bestDeal: false,
        title: 'Professional',
        productDescription: 'Make individual product',
        price: '8.99',
        description: 'Per month',
        extendedDescription: 'Computer War Games. How to Estimate. Decisions Made By C C Trainees.',
        features: [
          {
            active: true,
            description: '2GB of space'
          },
          {
            active: true,
            description: '30 days of file recovery'
          },
          {
            active: true,
            description: 'MS Office 365 Integration'
          },
          {
            active: true,
            description: 'Unlimited 3rd-party integrations'
          },
          {
            active: false,
            description: 'Remote wipe'
          },
        ]
      },
      {
        bestDeal: true,
        title: 'Business',
        productDescription: 'For Big Companies',
        price: '18.99',
        description: 'Per Month',
        extendedDescription: 'Direct Mail Advertising. How I make 47 325 In 30 Days By Mailing',
        features: [
          {
            active: true,
            description: '2GB of space'
          },
          {
            active: true,
            description: '30 days of file recovery'
          },
          {
            active: true,
            description: 'MS Office 365 Integration'
          },
          {
            active: true,
            description: 'Unlimited 3rd-party integrations'
          },
          {
            active: true,
            description: 'Remote wipe'
          },
        ]
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
