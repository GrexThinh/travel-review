import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-post',
  imports: [],
  templateUrl: './destination-post.html',
  styleUrl: './destination-post.css',
})
export class DestinationPost {
  regions = [
    { name: 'All Regions', icon: 'public', active: true },
    { name: 'Europe', active: false },
    { name: 'Asia', active: false },
    { name: 'Americas', active: false },
    { name: 'Africa', active: false },
    { name: 'Oceania', active: false },
  ];

  trending = [
    {
      title: 'Kyoto, Japan',
      rating: '9.8',
      reviews: '2.4k',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBS-y7b9hi6R6Feu9Eywn6oBqVF8I3FgriHXE0s7a79D9B9gZRI6UrzhhJlO1kHi0IKqQpPB_tvy6-FD6ymZKHW9P8J3BK_mV67Bwgxp94UCUpZacfGDrb3d_VcrIVt-U8JWkfT5SZvWdkfNhjQI-_yNm3jdtrnNw6DHrrTmb1bzrRoMskLpa4hnkJFO3Zq0eNSKFCsheAA7XoI_joHXdXr_MOTPqm9yJ9uBY0aSihDz7WXX5IkHLN9DQ6MSNMsKPbssmZXcy31PyxH',
      tag: 'Top Rated',
    },
    {
      title: 'Santorini, Greece',
      rating: '9.7',
      reviews: '1.8k',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAcFDlvFp8uJEoxhle3PowN_QDSooAw_M9QVgx9f3_iaAaEs0RCVjlGYUX1rUkwUcnQP84XNy7qgseGf0lDhoS-tEs859Wyc4gO0WKLHhccxvHem5zpET5zAONlTwPb6xmcq4kCm-o7aUNHShsHLiO5PT6d7FF7dKBRTaaIKf8jxIbpudZzUU-GEgMq5uPlh17zhNWC7I1vB96HxXD1y99AIRjkqp4s38GCwz9B7sXEhWrcllc9NNYWbAAG0nWdeGjzRRd-uUHMzFtu',
    },
    {
      title: 'Amalfi Coast, Italy',
      rating: '9.5',
      reviews: '3.1k',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB19tb80fgqODDYeAiKpEZUyS_xU7EPKp3cgXfSzEffyd538E815ZtFg3e9G2e0CGdmetkrrgozSgqmUaaLZipcJabhbSNXFdHvALYjGCypCPDwE5st7_423eKE15viu-ynA90MDQ8rLQTIXDRTzzrNJK4asHuYR1CRcZ-3f4KdFFN_nezOV8HlVo40hjyHIa7f4zvfTx_DANzPvjs7BZnWtmPLZ_4qOpyk0KIk06XKroOvsJl4a7LEnObIADpU8yE_hEuwxD4p9vls',
    },
    {
      title: 'Bali, Indonesia',
      rating: '9.4',
      reviews: '4.2k',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDydYxNHFp_0QK-98YG1QRYeRPMJEir9bncUspVRGcQ27hSMC_fKhNkOL8G1zcSR8vi2yv3Hm_V2TGaRFsrza6_lmhA4OAf5xLz2mAgB32-Y3oUdSI2vJm6VICFs63h093_aZ2LnyBqoMlJSg7WOvZFf8Alq86JlwMOf_M4Q45Eigb5F7p0fRlIZrwXB5ag9LvZN_UdqkyxkZXNmgLtlBdrRp64LaLNhl-plfj4l-07qKmP3QUWA_qk3RZxBCvYhWkdFQIq2LWBjTeO',
      tag: 'Eco Friendly',
    },
  ];

  gems = [
    {
      title: 'The Dolomites, Italy',
      rating: '4.9',
      quote: 'Absolutely breathtaking mountains. Great for hiking in summer or skiing in winter!',
      category: 'Adventure • Mountains',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC8L6ZOei5Y8BK4XvwvgWYudcr7xarX0A4Gv2SbfNerhOv8VrWuy_qcBRO6TkGL5LD1aPkwckVE-b7Izu4ll1QTGIvxytfeAJ4iPzTWksyqxzpgozHda9WjDXFI3t1N0H1O4_QT2D2JeWkTTNgN63tIYTY5N5XqiPcHmLuphyPiCrthN4SKnpU5e7MSwLJzUX0wDXBN7pRF9hb13EhTEI2YqSBzmEkKeIlMphfHl8HtMUGKuZfZDoCjb7Kckkq0hic2ry8mAT_8lz1G',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuADjOj3RQALrFylYaNRztCFjpAUGhCJnbmDvHHGMWxEWO9nZDkU6EzA0KLqFbj0mKzI-aiAi-iUwBP7PSEDdxjuVsto9uTt8uEpj4Nyt-UBJOoWAPSS62zes6YERyS9mx5HIoCwOr48wNljZ1vF5WVN5VQJmebl9GgAbNfI8UanUmTH2Zrf8aC-1wfxDHWHUmXxNE2La5_Osee-U46T-8CZdiTyw_4hcgEBlhnz4Cpesn4FxosMO8BJlQtz8GRIL7v0svd-wYo8BlwE',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBocU_eU8nNjKGO00llFEhfspt3f1UTOdwokJzEbZAO-cieDpczG0rxpbk-2UZVPTWxa-sk1BxdxAYgwLeQmKQEk2Qnro3FrIqyb7jeq07smVsVsYAtCQ20CHqnfrco0Iokm-LF5qmra0kOv--3kkP3wP0WLmA9YdIlr9cCVf1wagO3SDDsozT94UjGtCsCpn0vJN09p-qi4Hbtbs9RYb1dj_K83A99nwpTME5q1RQrns61dmlqlIdArshaFYvS-CHPg1zKwGToAxck',
      ],
      moreCount: 12,
    },
    {
      title: 'Agra, India',
      rating: '4.8',
      quote: 'The Taj Mahal is even more impressive in person. Go early to beat the crowds!',
      category: 'Culture • History',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCk0-F7_XVZJBY11kStjShPinLYdYeNNxqBGvieHC4xVDIrwgCN9MmmZi-2DRLEjIZ24hRtWjElV4owY_rgn8DafY2T84ob8TcUrAv1gn0k7exzQ6GgGXD6PUG7-EJPl9v66c2nVQvyFzohCOZ7MGNti09VyoEo73vm5RwkDXNw5TTSpj7SHQ9ovp_NCziU3yluRNSvW6YK68f49O0UsQANuSCX2sqh7PU8E9GxaIO4fD1e8N__5PWBCtCw02mhLnRh85ldIKFbKSXm',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAwzC8Xrmg9cpnVgfySQEOhG35xkc4PToHAzFbHN2Ls9polwNfrvax0Kjjts_kRtj13eEP29MSjim_jlCIn6_peD8UzzYL-pC0fQmeS3YOLxfLg-sAHE0vVmSFfPBlDoAcGn1QZ_HkygSg9msX96lW8A2YORBMqdLUIBwYf3BSoPDEXS8XexTKmSvVITfMa9zUpauGoybwt_zE6NkCARM7qfoP8GgBTj57QjZ7IWpzdGbp0mdQpCd-ICgeLOk-zLY0SKEFBxcB4OkoP',
      ],
      moreCount: 8,
    },
    {
      title: 'Paris, France',
      rating: '4.7',
      quote: 'Endless charm in every street. The bakeries are life-changing!',
      category: 'City • Romance',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD0NizJE05YsDO1eO6Gw1d1v-UaOGSY3vy3hGkD-4aRpanOYV85CcLXsiA2N37gmi3DLIiVU2oftYXa3jJ1Du7oxfLrkDwkMoxJ0JuzPIsE5p1Inz-HqCnY1tE6oOlZawyVC4C-u3eRVifqzHtJpXBaBHsPfoXFBCWCBDqZCIvCQ_YcMA3WSEf8gzVclwhghirxyiph15X2RUN83K8G0wvVI9gBqx92XT9h4x9vksy43HISAmKKqabgUCqi-34yVSN2lbSBfD10l4tK',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA9Ipl-LgofpVGSRmPomaDP9478CAFmEpFCaq6tDYw_xuXPyRQaOh7mTQixmnYpDj1PzBhYkqkEvpQcprFe1vXpK9lqw-2BMspMaMY-cmY_h8PIpr92hoYQM9FeFaE1n3m4qDaD9EjiqsvbwRMrI5DCJAFEXpBbo68bi395toLl8Ib67wflBg1nzb3VF0ZLenDw91ezaWXSusqsFsa-8zjePN-cuTQB4X34x9jVxYTaNOk1eonYrv5i7OYg4_BM5_iEh4cxLeLxYknw',
      ],
      moreCount: 25,
    },
  ];
}
