import { Component } from '@angular/core';

@Component({
  selector: 'app-group-detail',
  imports: [],
  templateUrl: './group-detail.html',
  styleUrl: './group-detail.css',
})
export class GroupDetail {
  stats = [
    {
      label: 'Posts Today',
      value: '342',
      icon: 'forum',
      bgColor: 'bg-[#1392ec]/10',
      iconColor: 'text-[#1392ec]',
    },
    {
      label: 'Safety Tips',
      value: '1.2k',
      icon: 'verified_user',
      bgColor: 'bg-emerald-500/10',
      iconColor: 'text-emerald-500',
    },
    {
      label: 'Meetups Active',
      value: '12',
      icon: 'calendar_month',
      bgColor: 'bg-amber-500/10',
      iconColor: 'text-amber-500',
    },
    {
      label: 'Hostel Reviews',
      value: '850+',
      icon: 'hotel',
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
    },
  ];

  destinations = [
    {
      name: 'Kyoto, Japan',
      desc: 'Perfect for introspective solo journeys and temple hopping.',
      safety: '9.8',
      status: 'Very Safe',
      price: '$$$',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCwBUuAJfMX6cmwJvKx64--RUW5FPYHjkaBNXo2J6QjvzNXfHc8r_OTndtv22i_uSjSG3Bdlnzi-KdeTQduaIzdljTaV--mRLHVwhioJNh1AbNoSD1n9TeybmWdg2hMV7vtakYo60RGMYOhYxivaPKvAZWYCMLs5iv6Fzpq5aI84zncq_xhTNKEm3n0EhQ3IvsLrpJRtEMuVT69sUb4r-KHaU7gy1kTII7ox6maXKvuFdvJ2oKwtukTQ5FwCJZuP3Z--U-LDhNd9mTI',
    },
    {
      name: 'Reykjavik, Iceland',
      desc: 'One of the safest cities globally with stunning natural wonders.',
      safety: '9.9',
      status: 'Very Safe',
      price: '$$$$',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAtvuWuoaXn0AOU-4PqtDY30DrpetJLjzuuUT0Svvjw8OCY6cWTBrgCFNtspeJ5p45v0CZ1eiUW0Xb-Wue9pNJXqrW4KDw3cXWcNq3UIG8O7SOieseaAI7Sy-zVzcFhJFUD-MJHWVnKXM7vG5RKkCkT4jpdhHa2KygQAObNmiaUDGgxHCAA3QWu3tJ87Gs15a1QPnmIrcqz6QN1qdVCZl24ib2SdkjxdjaOk4M4ckxmSJckl-aospqEURTbI1Sf6AaZU-pl_5LtSilb',
    },
    {
      name: 'Algarve, Portugal',
      desc: 'Great social hostel scene and incredible beach trails.',
      safety: '9.2',
      status: 'Safe',
      price: '$$',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDWOyZL0ZOeqeG-P-9yon4B25D3OBOeB7WsT5_TDFfqTcoq5AmTP_PtVK67HqFeMNAzBow_JQzctZoREhWX3glCiiRWIcYrUenk_kW55OZ8PSYxX98Mjg1IzhMBw6D6QWPyYfmoxcUD51br5R9l-mK9XABCYCKxd07X7cSX0EYroKiBbTUjxMYbUTjLVfP4NCcIOJyuSLL0tI-VOANrcwTrsZgKgw-ahdFpWGRkWpmIAtDrSx2D-aqZ7wOn3tsXFrQ6-jri_t2pBq2n',
    },
  ];

  posts = [
    {
      id: 1,
      user: 'Elena Rodriguez',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCPH4gqfSnURIvt3LVmTPivoCfQfBQlrtaOoTLXc5q_sRIdJW_EWL24iwQur-Bj-lRXD9Wx0rYcOpYW9Qg-n0KGrZyL4hfkdxP6-TvLAa_6SdAhnPnF7ywbv6JBefNvPKNEV6-w8EoiZ-0gygIWebJvDWHA7VmY0ngzjwjUmye47Kw8re2YsV3MCP_DMEEQWOevfw4CXhjwWt52WLv6jedXmXgvXBlvcQmVK3TlzKCcgltc6ZtaFQpVBG3cen5hAh5uHBLFUPdwDk3O',
      time: '2 hours ago',
      tag: 'Safety Tip',
      location: 'Chiang Mai, Thailand',
      title: 'My top 5 tips for solo night trains in SE Asia',
      content:
        "Just finished my 3rd solo sleeper train trip from Bangkok to Chiang Mai. Here's what I learned about staying safe and actually getting some sleep! Number one: always book the bottom bunk near the attendant's station...",
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDHoMSuNS-_5UcxWtkvO2LE6_5N8PWMVtsK1T1IH-5P0TRzDm-eJeDxi0AytqNQrjOI8PcF9iWGgqjKy2kRr9grKWhLsMwXkzsYjFyxgTkEe1MXis9ISB1augwA7wrej2UXsGmLL0G6iPMn3iahYb42pVngr_LCNA7VeYqYAkM2SBRD1Zi9VUchyEQsK43kmw1d7goo9Q6d-KhgzCDIhsZcNNvaiZbd8kktFENUnGg5R7TKpihI1UjA4rONLYxQU82GTCw9Ne5OtZ0E',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCOrVi_4BIdGMWzEk4nGED7NImakmmHnfY1UzMJ-cP5JN9-aupePhBMr48vWpnDi5A1nwSK24QbU07zXgVky_htrR6nnVEbFW08pnUhBUeCGKAiVhT66ZFVsXaMa04tJEZ-H2KUVeWjFGzhZYMfO0_emK0zZPypKlvkIFB7CUU_2kpsSPYyyvH-ntiyLuiW23_pppgOLyX6WBRkp1TdP3w-gP3PBcB3HSHuveE0gVMuwSsRPikF4VlYpLeA0XzKzIjlbgxnIHlEqyRS',
      ],
      likes: 128,
      comments: 42,
    },
    {
      id: 2,
      user: 'Marcus Vane',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCshgNn_4jc8nrryZe1hLopLTQTDlUoaa_JHcyNo7l4c_H2VjAerHzS6N1E7fucTrb3NJTZwK3H8TtNz-6M1gZNNxlmtLAGGK45FtCYmfz05PWniXtgFb5TgCcfueMQFb9TS4XnT8gSKnfT6wG7zjzvW1-Fwy4ghQzMETFCGhCQTMeOQifHBXRIpj-UBY2dj1tiDuCHn1VRNp3VsbtlBzHOm1EUKcqU16QcaK0Pnc6SvsJJYPwlshsYlXiA2uMXT22E7dD0muy1RVpX',
      time: '5 hours ago',
      tag: 'Meetup Review',
      location: 'Lisbon, Portugal',
      title: 'Hostel recommendation for digital nomads in Lisbon',
      content:
        "If you're traveling solo but need a solid workspace, I cannot recommend Selina Secret Garden enough. Just finished a 2-week stay there. Great vibe and very easy to meet other travelers!",
      likes: 85,
      comments: 19,
    },
  ];

  meetups = [
    {
      month: 'Oct',
      day: '24',
      title: 'Coffee & Trip Planning',
      location: 'Hanoi, Vietnam',
      time: '10:00 AM',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAwWgn_gWpZ-2zdWdtycxxwcZG2dkkUeNR1SATk8vzMjZ1NYVfdAx2OCMv_ktUOWJOI6lHBBTzjkaOXHuTjF57to2OjQmcMR_XlBYxfKCZZIZX8qXMzIEya_I0sV0N9cIs5fj5q-_wXR5n3A7vxxF3-541i9lVoskWa7GQh4xPK-hdlnYsTUDWUAw-hVXODM6Se7XeHJoyLaKJ2yOXWeWzw4rcZR9tgSXZS8eGbMj8Xotwa_0BXHTcGW4z0bvIgKGFpEByOLxvZ81K9',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAZSzTAGWeHbx26cdEPuMZrMgM3udyyJ9B72XZjJ_PPZ4h3hjMQKxSQSPsZWASzkRdQaZdDcjkB5Bw70nK_pxSi0Ja7t3IIuZivmu5twvOlR5sr3hJ7BBOAyXWmOnfnQNC9k48oAK_055RlT0Lpj2IqUdVsoP-J4ASplB_EQuXgOA7lugFRwO4x8WJWVxjpOU-x9rthYkNszTB913eOUk6G4YuwrJado6RSvt4NnAw-Pe6QdMH9A8RzNWl9M38_twnxJSK7CUTFsdrP',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCrcPc7dlggQMdRL2S22oR96GUXp_IbuVSv5HNHr74VhTo57zLWu3VpGlBjzb4F9cvy10U9OTl3UJU4ctEZoLZcMjP6zLr9WTuok-7qMpt9Uo7fyS9EmgRcsOYiMg15B_UZAh9EGUAPfUqmRdyyy_LuF36w5nJ9AoeGFlixSadB5Il7UdwGjtOu-INgyHvZmbmOfhTTsIVdNJ34HsQuBDkKTcHGwAGq1qSW2_QfancUVjePX4ALV1h_X0eUrE745nyyBU_l9YR-C5uF',
      ],
      extra: 8,
    },
    {
      month: 'Oct',
      day: '28',
      title: 'Sunset Beach Trek',
      location: 'Bali, Indonesia',
      time: '4:30 PM',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBU_8kf24EovA48oVziY0JMUGKNr3ys_BFSpCn96mzUu1taXrStLc7ciRucEMU-_VTG56zqtEnJ2fSTQ2DvWdfEXiEYCRK5UAyTaw1LhJodGxOm-9XVG8DFddOxklimKhTGmOfbAq513lJH7wxk-1MtEWd5ez1vEwho-SMezRC0EnSlx7LPObHtvZ50-ny0SCQ_x1GJpuJfjpum-rKYgPjDtv7gbm1rsnGQScFa-FSVpdMrQJ9lPGzcqq1HJTYCKztQx3QxUPROiHUa',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDLFm6l9I-DdIKdrHRpCMTvct_Uwsd9U5i1kRtbnfA1vVvzDgNVsPL8I5bT1zW9MmaPrNCDJ0qms65bXfDnYmnPf4MwNujBHuFrqLXMI-ihu_lHKdAmpKGHDCmVw52s5tD6SslsI-M1ZGX725nqeFhFSi0eUeSy_yBEL41Ud-zNhM9XnFYCm8Zvr8y1_JVaQsubHXiSv1rbZ2D0Czaql8As_MZY6bqkXVUx8ZiVtTPC5otXQAIqJHySgj_g9Cbm_vJYm7XPWt5akvLh',
      ],
      extra: 15,
    },
  ];

  contributors = [
    {
      name: 'Sarah Jenkins',
      title: 'Explorer Pro',
      pts: '2.4k',
      rank: 1,
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCoFsvhNWwXjtHU4kKbtFiQBZ1FqPuKaAuF7qM2kiNjW3NPzs2Lw-qkBRh3-HxHnZNO1EMsnFDAABd_Jj2D6_Lw2jzTN5aJxy-tyutr6xxwvhLX3g4FWIZO2wOjiatgTT0aWZy59uQXG3rgJEEsY_BU8LpbEP16NJIf3DHIfisWckHjiRI8LuDa-yYyO2LjFiVo-L2vaWKreUaw4LjbPHKLx9__uJRbOnyo3Nz1XKYpCKMLQPbWXZusg2trIHg3Jk8VRFAgdNqeZkbd',
      badgeColor: 'bg-amber-400',
    },
    {
      name: 'Marcus Vane',
      title: 'Safety Guru',
      pts: '1.8k',
      rank: 2,
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDxcqnAMMKn1sDfzYw4VEs9cR4g4QlZSKIFQNoGV-8CduUQN7P6Ad1T_MdP7Db9b_ZOgnFFNzGnfdBpy4HkeS-nkGhiv-5WGoNkyYkb3GdOnXYYyZ4yZGq3wWpRsM8uRA-VJK5HJOSUP8vwitd-6CCJWNyZvNbd1fIgCMMrPt2xu-Vtrd1R2V8QudSXO9cQEx6140ItZotI7NJjIbI-hKpZ1Sa_yrK2J4nf_T_6-qetEmaG7EI0chyKBxlHpzUfUK4y7o9avfiPkYn9',
      badgeColor: 'bg-slate-400',
    },
    {
      name: 'Elena Rodriguez',
      title: 'Reviewer Elite',
      pts: '1.5k',
      rank: 3,
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA6_Z5vgLOU5zbdsCk1QnLJm6QqBePlopDU3SkfygmmU76Sisc9QU2WZ_d4XMAGAG8ND70iGMzH69sQSYII8zV107RzCnJWeyPbPwh8a9-XfydBq0vJsVKowq-6LhzTq2l1MloVC-iZyyI1ACI3i6fCtGDrYgiI1Mu0jScOn1YivoR37ZsA7zev9P7vL6ttueoM8D7f9a6mL-KU2yoP_CLIEvwcIpM5hoc0bWo4aUP16bE_O46IqsiM7G_JSA4hDv1kZ10tFtLQ0CWP',
      badgeColor: 'bg-amber-700',
    },
  ];
}
