import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-post',
  imports: [],
  templateUrl: './flight-post.html',
  styleUrl: './flight-post.css',
})
export class FlightPost {
  airlines = [
    {
      name: 'Emirates',
      rating: '4.8',
      reviews: '2.4k',
      comfort: '9.2',
      service: '9.5',
      quote:
        "The A380 business class is unmatched. The crew was attentive without being intrusive, and the food was restaurant-quality. Best sleep I've had on a plane.",
      author: 'Sarah M., Frequent Flyer',
      expertChoice: true,
    },
    {
      name: 'Singapore Airlines',
      rating: '4.9',
      reviews: '1.8k',
      comfort: '9.8',
      service: '9.7',
      quote:
        'World-class hospitality. Even in economy, the legroom was generous and the cabin crew was exceptionally polite. Highly recommend for long-haul.',
      author: 'James L., Travel Blogger',
      expertChoice: false,
    },
  ];

  deals = [
    {
      title: 'NYC to London',
      price: '$450',
      oldPrice: '$840',
      desc: 'Round-trip Economy',
      tag: 'DEAL OF THE DAY',
      exp: '04:22:10',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDmPk8X3g535RSBV6msXr95lHmjy34J_CgN8OxejT7Bi33rbt_BU3vAM8zSXPiphZwCuSBY7BFPYu1pzDkKoehvY6vVMvLS7cpFMVohwHhg5bNVa1LBZIzPj_sn7jmhEZeeQuHQfhb47vigCcZSbCgPwkaTeoTW2eVJAokaXbq_tnnntPVuyrjJ3CSSBFRnCz-u0Dj3BMtxiyag9xmXpLaphL9rbrqibUwfg8DikGjxjR1ZMSp-Wyvwizt3yTMAllZT7cTqkg-kpnWh',
    },
    {
      title: 'SF to Tokyo',
      price: '$720',
      oldPrice: '$1,200',
      desc: 'One-way Premium',
      tag: 'TOP SAVER',
      exp: '12:45:00',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD-vzCJQhZovskveyXcEv_DPXzOQ23n4acUnifGuoihkL6ql2jOQeauTeipqASXp_3qQj8CdBRK_lmOGyo7PCxKvaNcgawakJVXNt_x4rZ7jh-7AsUX9P66wHbH0WDKglGcl5gvqKNrCRPAKLCyLbt9QA--1HDea68gygHF8m1jtHNPqpNkRImcHXFfJ6LufVGSal34lvsCdB7N15s4sNtch1vTQ2EMVmV8_wVzZUWRwpZPiSDu6Oa1srF98zhTHcTDbMB2B-8OkLCK',
    },
  ];
}
