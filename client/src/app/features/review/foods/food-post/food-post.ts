import { Component } from '@angular/core';

@Component({
  selector: 'app-food-post',
  imports: [],
  templateUrl: './food-post.html',
  styleUrl: './food-post.css',
})
export class FoodPost {
  restaurants = [
    {
      name: 'Mizumi Tokyo',
      price: '$$$',
      reviews: 128,
      category: 'Fine Dining',
      quote:
        'The best sushi experience in Shinjuku. The fatty tuna literally melts on your tongue.',
      statusIcon: 'verified',
      statusText: 'Verified Visit',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAueEi-O2X71qhj5Pn6PGiw380TSWFmsVFEHBVePoWrFsxqKDMmWA5OHOfogYDHbHqwEY5x-E9QYFbao3_TffAJnkvooNi9dwbduo9fNNpiSQKYRy84TvfIPdK8rees74BpMrC3Yphnz--BX79QdfG8WIQgUR0J8oNO9vbqTlSRPGrjwatQAWYKa7bB4E0OpOCMwGpbCQWBPdw78sbWldpp6XHaR_Ww2hIm0Sqrfdo26k7iagkBAyu0SiShlVoW7uFk6uwNa00XEtj4',
    },
    {
      name: 'Green Leaf Bistro',
      price: '$$',
      reviews: 245,
      category: 'Vegetarian',
      quote:
        'Excellent farm-to-table options. The gluten-free pasta is surprisingly authentic and flavorful.',
      statusIcon: 'verified',
      statusText: 'Verified Visit',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDpYiXDXd3H9WbpYAamlHGwU6b9l3QTFI-i311HP6fRDnvlbxf3RmxDEXiCX4Ga-J85ESDsA-xmeEMvuszCDA_rxYtJcx_7c3JFTb4wHOfWcuM9HnPEWcfdNMYmRJYxNcOexTGBn7mkrdRhtFGXwBc8UtMqkeJsPfXWPfhexXMWDzJ6dIvIQFzdWFUwgFqWTb3LlSvVpRP7Td8R07AiF4kTh6JL3K6SshxAvYhtyS4uyo9W48B8zM_1YDGZ-w3nTqXOfeOZjBgm4zhM',
    },
    {
      name: 'Taquería El Pastor',
      price: '$',
      reviews: 892,
      category: 'Street Food',
      quote: "Don't let the line fool you, it moves fast. Best tacos in Mexico City, hands down.",
      statusIcon: 'local_fire_department',
      statusText: 'Trending Now',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC6ZVU2emNbo8sxglKUkJ02KR3bGK7Oyb342TQ2dfLaqgPJe24a8Eut6v_AzEGbal472rVrfmKNg5S7UbaejiyrGy8RPcSLI1yG9Sb5l-ooDrXmCuBtDaGg-Zn8n8iNJOYTqUHz3_EhwB5EoLiGC6y1rKr6Ug7bXMIYzS7ocH5aulC-JbjRpwUJXjjciszsuexegGTXhJgcXQve8uBnLsOXRa0xizYaRc9FAt9-zkf5PdD1steVL0x03b_5aTLPU8wMDcA5q_hcg6jg',
    },
    {
      name: 'La Trattoria Roma',
      price: '$$',
      reviews: 512,
      category: 'Family Owned',
      quote: 'Simple, authentic, and hearty. The carbonara is exactly how Nonna makes it.',
      statusIcon: 'verified',
      statusText: 'Verified Visit',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ7djAdW_0135-f7u0-8zroSysqsHP77xC9dCoVe_0VIO8V8pTUQyDJnOnD0eTx8-iVsDnhjXP8jyDBBLg91uPUqqFRmDJllrYds5UzunZGt0IOL9EK3o5lYoquHJ0LNYKyWfxzQl1SinuGML9vFMU0tOJ1rzZftRnahXaG4leXzNhqClm27VIhXKjJiETbsLgcC9CpaUz6LZiG7apM_itwsHsO3yKsZgwTHsBtjrLlRasYDZGDlU5EqhpaiKPx_3HQA_DrHYAl77Z',
    },
  ];

  tours = [
    {
      title: 'Tuscany Sunset Wine & Cheese Tasting',
      price: '$85',
      rating: '4.9',
      reviews: '1.2k',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD3TZH6f3vPGjNsgVG81roJ8emcIK3FlAoyTPnd6K0AEK5wlRnrAWnEOmBwOBrH1Wu8LLG3CwgjPisCVHkllGZ7Eg_6A9-zRBi3TePzTCKTFYjYmsYjfXLUzlaYft9iqTcHmqZmWOw62ixotOYgQRtZZfRLhjS070ZMP50oAzrPlgqsgwqdQmThFKjJlOR1zJKYXKr2IWEbsoasXpM_lcRPTZBecjR_MJBi9WNnxuRkJj8RQBtAx2GRUvlFcvEE7DpElpBQKU24bQAY',
    },
    {
      title: 'Authentic Pasta Making in Rome',
      price: '$60',
      rating: '5.0',
      reviews: '850',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDQXayepxMKXRbQ3lwv2zpsEOgS6xqUhmLII8slERMW9gce1Gh70uFEvgQuE3mCz_PeyT0SOC3tOninvTtjArsB9nXh6gfeOeYcQuvS79v97MllRtUnpcZwnLvBK7AJNQgyrIqXio7Jz8UikM2TLRT9p4Iveg20dupNp19ifzZikIaLjUZALqwutUFTDOfXQXOzOVdmZ9mudQaGHhKInwK4EkQNFWixCH_W39IVCehVe2xdaunZUK6eTAlIz-z2-2-LcDcSaoOWzpab',
    },
    {
      title: 'Osaka Night Market Food Crawl',
      price: '$45',
      rating: '4.8',
      reviews: '2.4k',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAXtfJPSSTLg-FhpU2O_nUY_aNfONJRdrUh_TytyaKOw0ooPxKPlBOK-JbQGsWtSfhnD735_znnsX60YJBs5Q1dtmbUxNOdKl7Rd-atQH_YAG9lj-gxrackWv1P-Kgwdn1gFuHR1u73eY50PC5MEuEZqm5XEsUoVg49_i93gsXnz1ZZlCYc-CUA5GjmPW_3Qp_ayvdqUpnhzomZF6LemoVJfJbEJr_-lLDuFG8RuE57pperyAdBQ81qo5yftBoQ4i6uLReJDVJq3u1o',
    },
  ];
}
