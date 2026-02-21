import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-post',
  imports: [],
  templateUrl: './hotel-post.html',
  styleUrl: './hotel-post.css',
})
export class HotelPost {
  hotels = [
    {
      name: 'Azure Bay Resort & Spa',
      location: 'Oia, Santorini',
      score: '9.4',
      scoreText: 'Excellent',
      reviews: '1,240',
      price: '$345',
      oldPrice: '$420',
      tag: 'Top Rated for Couples',
      quote:
        'The view from the balcony was breathtaking. Service was impeccable, they really go above and beyond for their guests...',
      quoteAuthor: 'Sarah J., Oct 2023',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBvOlv_oHddsLrTY07qi9-B8vImMgJsuYZPF5v6i5FQI8lb7T1cCZTknno_EVejkXTIcT8LH0XnojhtAbxMHenyIpcAsW_GEnK1ds5DhgpLX90xEiyJJvI6M_5f2ZjMXhmdeRSZJJ7tzYjiqmHyBRx1reCgLdqpuULaYVOC8ogsys8L-h9gulNmGyCwmezs4YB1wy8g-F3Rh4rah1Z0maMSEMFvVBKjFM5BtjYb1fRxw3Zou0RjKoVFH0tYrizIJKnMiAEL9vUAeKwc',
      amenities: [
        { icon: 'wifi', name: 'Free Wi-Fi' },
        { icon: 'pool', name: 'Infinity Pool' },
        { icon: 'spa', name: 'Luxury Spa' },
      ],
    },
    {
      name: 'Caldera Cliff Boutique Hotel',
      location: 'Imerovigli, Santorini',
      score: '8.7',
      scoreText: 'Very Good',
      reviews: '856',
      price: '$215',
      quote:
        'Great value for money. The breakfast spread was amazing and the staff were very helpful with tour bookings...',
      quoteAuthor: 'Michael T., Sep 2023',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAAAEEEkQjHDNA0DlxOr5eS-AAexL_Q5Klwl6MKZQsoOMq5vH3sEI08i1Q7wdE1CNbFxu8N3GSRQ1lwJMlMNF0ZHoNt_NdqHQ5GosNncbznbCw4p1uBzOnj3nWMdpjtaSxiMX9fvZglV-ulbsB1NCt-oustXQF7_CqGP15iSbbZYUIV0kVrpYr7G92ifbjO2JdOwdtiTlCYFrLU-fKnOqoU65vQ-uXYjNoeQE2goXYo3IM3wY53Hs970i_uBRehwRrYQr2eMVZSZUEC',
      amenities: [
        { icon: 'ac_unit', name: 'Air Conditioning' },
        { icon: 'restaurant', name: 'Breakfast Incl.' },
      ],
    },
  ];
}
