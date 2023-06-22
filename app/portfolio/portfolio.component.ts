import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
websites=[{
  id:1,
  name:"cv",
  link:"https://github.com/sujata1102/cv.github.io",
  category:"web-designing",
  date:"13-05-2022",
  image:"assets/work-img1.jpg"
},
{
  id:2,
  name:"web designing",
  link:"https://github.com/sujata1102/webdesigning",
  category:"web-designing",
  date:"25-09 mn -2022",
  image:"assets/work-img2.jpg"
},
{
  id:3,
  name:"Employee Management",
  link:"https://github.com/sujata1102/Employee_management_flask",
  category:"Flask",
  date:"28-10-2022",
  image:"assets/work-img3.jpg"
},
{
  id:4,
  name:"Library Management",
  link:"https://github.com/sujata1102/Library-Management-System",
  category:"Django",
  date:"29-12-2022",
  image:"assets/work-img4.jpg"
},
{
  id:5,
  name:"digi Blog",
  link:"https://github.com/sujata1102/blog-websie",
  category:"Django",
  date:"21-12-2022",
  image:"assets/work-img5.jpg"
},
{
  id:6,
  name:"mysite",
  link:"https://github.com/sujata1102/mysite",
  category:"Angular10",
  date:"23-03-2023",
  image:"assets/work-img6.jpg"
},
{
  id:7,
  name:"TwistedToppings",
  link:"https://github.com/sujata1102/sujata1102Twisted.github.io",
  category:"Angular10",
  date:"27-03-2023",
  image:"assets/work-img7.jpg"
}
]
}
