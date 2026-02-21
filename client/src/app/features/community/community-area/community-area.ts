import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-community-area',
  imports: [RouterLink],
  templateUrl: './community-area.html',
  styleUrl: './community-area.css',
})
export class CommunityArea {
  filters = [
    { label: 'All Circles', icon: 'apps', active: true },
    { label: 'Solo Travelers', icon: 'person', active: false },
    { label: 'Luxury Seekers', icon: 'diamond', active: false },
    { label: 'Budget Backpackers', icon: 'backpack', active: false },
    { label: 'Foodie Explorers', icon: 'restaurant', active: false },
    { label: 'Digital Nomads', icon: 'laptop_mac', active: false },
    { label: 'Adventure Junkies', icon: 'terrain', active: false },
  ];

  groups = [
    {
      title: 'Solo Travelers',
      members: '12.4k',
      desc: 'Connect with independent adventurers worldwide. Share solo tips and find travel partners for your next journey.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCa1qCjcOguruyCClEZbB-LAaWFw8h4V37YdcsETHwjKyz505XhVcRbl82KTFeA6ZR0sYWtxX9B-_FG3McIhastBW7Drk9B3oyetIH-8xbXzhuBjFoZZ6HHV_snmN3kPD3j-2llDL6J3Chj4JGyrM3KVjiAFVQvTF6f53WxRj7HzmNq57fzxnLKhVVTFVjfN307Wopr3QMeuoVwzyKiXn7oRvXhTqc8C8yHwiqkVD-eX9BgYouF7bcPtl3C1XvrTycPcdsme8Yt8kji',
      active: true,
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCTZcKHUcb2puME0AlBwBTA3u5lD8XdIOsX43sIkt9LDyrQqobmUlqAWm7KysS-yWOEJOlr9DpWOeHwSLX0mqvcgsFBojeQ_XznobScCEsUuPTeXDpCeKugMTttS7Uh-U1fH4H7s3145Hd4TYyN_jdFY4wyW2SRaRAUcja2njedynpQ6GDw2zmqWm0Den-GUBjbWx0cD51jwu1EkAhCVj2hIK1HW2FhV33VtSkppZuaN31vTKp9Wq_PC-1dksLdb1FPIFx46dCSy116',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDL5DgPuDDdW7Gm7mfjjyaVa0GywXr5O7xqMEEbb4AIeU-GCdjOYo2hm8IBP8urzIHwpqoSuzJzg4pkUDJc-XJvr894sCtzPhUeQl9nyjYn-cI12yNwCBZ9YmU9TQiSZ8kshvH2z3pa7CFN0j6Lzq62_85RHYa8oL0rkURM3zGQ9NnKo2KgLML0qddksgT1xcA_AwWDjrBLqv1gYHWOwcJ98R36AHrhIGlHcm3eMvkAl6259ruXPrJlMfUyh4DKMqiupUkwG576hTYW',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBIIhKz4ZdOQ1CnMSMb0NBd16oKHo46edlnhIcN4jpDcYqWXeEdDot0dZFlPBwdfp_C5ZySGg6eaA-cCwyTTJXWd9G1jyuEu-S06j9deZl8lZiUUrv3O4cuBq2Jd14hoH5QPn-x46zRTCviHO2YAHvC9gY0NkH62W_5uO6hSBqg5tuim7Xrk6KLHGrsVo-J4c4MCGCfdf_XO1AEFBpgT85KF92XyfyYNOlgGxl9U1HwHk5crDTj4x6rzO7-YeiaDEF8-Pj_6-98XQX2',
      ],
      extra: '2k',
    },
    {
      title: 'Luxury Seekers',
      members: '8.2k',
      desc: "Discover the world's most exclusive destinations. Reviews of luxury resorts, first-class lounges, and more.",
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAOEhnkhtGO8NdYscIy8TFOzl4-gtOO0zl9rcQ2wUY5cFcafqNNtgidrijY13SgxmXAOI-TEuwcvHFfe2V13GteaWWLzB-6t6XEaeyI5s0mgHzEBKW_OtJzvJqPHHXQnDgVsQw52xW6xFz7UJYYFJwLi-0okxx3gdn9ilcYSpgNzL51GSZNCH1jI27c8B6dVoE3TOb7YPxNxPGkTOL6Cy82vVrPlGWLeW9RH4OXUEJCTCoRfO1pnMLUnbDx5x1Jp91TgemberKsl02B',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCjncOcLQQdc5j4ONEQ8Rw3_dj_kJfHchhNVoozx2LeVcz4J1I_SuBgxE1ZHcFMjwzW_wpihjTVXpMYlxqoQFDYQDA87HMeHoItUNlms7C-cHdWr8lmGqrQB-bERsS4hOrsfiUSAKkmjGAkO6MIBiYlwi5jPvQbhJfjrTwjXYyxuJ0rvgrOHRXRgOTima1wIfscJq0ky8D8q29U9-eqbu5JCM_SmKyutDd7VSAUSgmTjCvHy2q2RxyP1xTEkd3ADmXryNczUUJnj4ME',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBjhIWz5eR-r6IfwHr2kJr3l6KnXqfty1zdsLkvP3tX_BZWAVoFbAqCpsbwy2BJ2VHAaW-GrV6_74yi9fcYKdzyYP0KI-4BZa-wMezdLHYTOe6lRyDLrSYx1cJFtKaTfRgGpSxpQLO10694b80_4kBHuIWuKZ7tazIrweCO60Gb5DEhh2quUZamT3mg2PkCH1fMl5vtuJfP7JErbEKonWDPm8s5i-OMNSGxYdEK-EtODAN7MpZGIqnc3B_BByBqiihBsgHp4hqmqnmf',
      ],
      extra: '500',
    },
    {
      title: 'Foodie Explorers',
      members: '18.9k',
      desc: 'Find the best hidden street food gems and local culinary secrets. A group for travelers who eat their way through cities.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA8MV3IzIGiy83TGukBmHa5IqCdy3v2SSABOUwQUsWcikeZ6-lOr80OSKbp2GZ9zLax39mUtIN2l-Tyx7X11DcALr8hKN4lSMwOWWbA31eu501dz-L4T8fUe0hgTjkXs08zXBW9ktOHccCS5QUtg43ILIqNCy7nwg1yY672xEItfWrOMjq-qNBm0qkox7zETQplo7WErWMda9vhAnpJ7OE3PKBPGCwK9i3NeLADk22cLq3U1RrwRrPK99YxEJqA2jzLUE-osVG47jmP',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBIoOuvQDtSi8m3jA2M1v36Kk-LeMaMRqIrtDN-AXMka2EHxT6-Vwm7gGuwVmmXEtqF9VWCl37WtRpbJQC9WX7RFNfm7WMLquI7QtlIZxfJ0Mt5tPHhAw-ezcoYi4vMxOxcaO4BY2ZwrYSfxH4PGA3xayEkx3kLXLesn6vl0XKiQZqsUYzRsR0uXmgcQNvQKBDUrBDiwrCzS5ReR2GzmanqGMeHqiCUdTCbP1nrnt8zSlxFrihnB8xF58Qs6OoPy0LdNDAdLWXlOrvW',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC1TvqE4XoZob3bpC1SIk4LPfiGMhBmLY4LDqPf0ERplHxubTo34d-Zzdx0EdagISifcp4h3D561kWsRdv8mS6cVJ1EhwDdFTjTsm2cVQpaNSlC1gKc8Sg2pB-uDv0GSs-ROaydpaBQA2v2ABjvrP1apJLpCqDxgWBc-aG4wPp-cghQXmKhoRXlm0jTreIrMsQ_Dx4aHJaXIzv1cM5C6d5P-WThwPzLZPj-ADac8rrGUJpV43vOxB4DHzfMrNaQt6WILTwtGoX6v50s',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCzvShr4XZLhM7JwdkBMfmKUCWeCsDSZClblDn48DgPJabSSRp6j0wpQxooRdNEfncstvljnsUFygywPAcXN5IRhFxUPn-6DV1h46iMVYj_9RQsB1bj1wl4BfcKiPIoFeqehHyxhoBmOJSW0hK9b90nTXvOf-jvU7GFFDcGDwiT3wFZ2BE3xKJ3UHgWOKWklebwj4_KaKnpeY3vjqFuZuR9kDvsMb6IT-hh7gRee5_UhgR-ISdFJERBx7QSF14KnMxvZb4UtT8NpcnA',
      ],
      extra: '5k',
    },
    {
      title: 'Budget Backpackers',
      members: '25.1k',
      desc: 'Travel further for less with expert budget tips and hostel recommendations for the ultimate adventure on a budget.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAEd7kyvNmWyg43jJXNLt57XxQA4yRaAsAIcOY7CztTQo82yn1cO3oUc2p-XYVR5OuFXq1_CMjE39FruyQkq98hehQnP50gvFpW5TKUfZokTQVYWgvxRrs5yA8se1X5K8by8QFi5l0qqHTAtykm-NcyQZifahwl75u3y-XeuQF1V1Ffayf9JKLqfdkmVTGszbS94b8I8GIkv4YmUY_ux3w71aB1iBYme7sH4-4AE8rnMm_n1TRqVOxjjB9N8LYnMSbiw_ZMrBGbX2xc',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVQPjOKRz1lF60GNOeG9NIqIeb-nXe-jsP0JV7I0kbuz43VHoacTJBd_XTNpxWVjIV2VEgTbkezheLNSlizCiaHfHx8b4H1WpMu-juxiEgIBkoXXAcMnRfI_zOscXzXGV-iBiVxpWVpK1Dh3QEzQ-_hvY2zxbsiE3LsQu748pgACIFKbLoT1aqirtvGfFcqVzoOqD3cFme1TgtiC2EXd7dzLUvUh0SzciDfulTqwPa0pNV3OwnX1Nd2PFzKHRutpUzbxUVuVMCiWK',
      ],
      extra: '10k',
    },
    {
      title: 'Digital Nomads',
      members: '10.5k',
      desc: 'Work and travel guides for the modern nomad. Tips on co-working spaces, visas, and long-term accommodation.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAT66eqjFxo1FSzt2Euq02vNdHq11x3UZ4b6j4HnPijA7n2N8o6PudglUfjNXgYoSVWZXxS3U21z8sipFc0_X-rRLgMf7S_rxUXpH-cQrnj-khY6qxBKK5wURmqoZNr-o6ZPluiROdyYcTxGqY2XM9KRQH1RcWGD_I6Q4rk9RGdaWNsCXQikfncg7JIWZJYumD375j1ab0P-hOjUxTHn65V43GDtS2C4VIp2xi1Gh4sGeXMHJdmX-u9lSXfjv2oFtmblGs3XrlJwbtH',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAEc72z5qum5O1ZnrcR2dHccjeFqCvoYM8nJiV_sYxP9D7Og06zDLY7YyuCLqSNuFhuWiR4gRXfoxkdLteLA6rcELqWlQCGjUMPKcB3Gtoe6GOlDFMaRzK41CwAxYTFMehwc4MSazErocGspogzbpImkh2RG7SMYYqhCwk95Yt4b1nmwzbZosjNlYcaZxzvNreni-GMrvOj1QXuxSNAHjdHn4S51jHyRMaDp_R_Hvqw33LLFngCOWkCUCVTvXyRwtUYyl1GUrWaW7Rx',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB-SFB63d8VfIlWxsRuYNIPlCWAmYbU7j0VUALjZShDHancIMKBJFbfRnneOw_PXEcV1VG2mKvmQeFzSzZcc6sbSHPiGhRUKEMgq6XUsU3qegqY81ascU2zwZxf26kRc4qjJQCJV9EVhWcRXdh72jy5nkK31vUmJDhqdddlxNZ9YevS5jYqtAUQvoIKOw-GSSSUfgGzc0YWkjuVlj0qkOlLfHYMaqy9zrA6ZG9iw0Hd_RL4mC1SZaBN2X3nmBrKuu89dx4ZpIOGkuqo',
      ],
      extra: '1k',
    },
    {
      title: 'Adventure Junkies',
      members: '14.2k',
      desc: 'For those who seek adrenaline and off-road paths. Share your most daring stories and extreme sports locations.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB8x-bhIPe8ZZ6e3zkQhsS7CJBKsfjXC1vDFJnI_wiou0qPrg6bGf-XFJiqGtJEtc7zevDT7DHR-iwwyWlFXudvJDiZyKh_EG1g35gA-YEO5TEJxQxdfExyTDcMdWG2Ln-l3oOb_ogoN1_xhV-kmooqFj5TA3OPMLRPqhPpHFo9tc5-cY5jbyiHsqJhvlKQsYU74nznQSlneUBrrvD1dSGnEnYC3idCj1lYu6_pxHsnv-0w42m-utmXNw-2PTtnEItd_Ub3JzaP91sH',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAyRx64D5Im6Iqxajp7GlhycFTTVkh0PdXo45hKgu3vgNy9-OGX40Q1b_Lz2t3WwYLreRtCbnnEftnyUgnOX7BOJbCrSlLQu6-unaXfJwbWlags_tH6GASTrTGrb_xQLU4WsSUhcP1d33RK0xonfPtchH-tlVqjE3ZxX6xv02r_MEH4Du5Dzn90YqafRislSUqZ_XdUC25BHg2DAzMwLsdt9Hll9b4tKKde9W4tG2uMA7quvlFXNnQRxjES3l3jYLOfFhwDITLeEwIT',
      ],
      extra: '3k',
    },
  ];
}
