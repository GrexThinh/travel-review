import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900 transition-colors duration-200 font-display"
    >
      <!-- Navigation -->
      <header
        class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-6 py-3 lg:px-10"
      >
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-3 text-slate-900">
            <div class="size-8 flex items-center justify-center text-primary">
              <span class="material-symbols-outlined text-3xl">travel_explore</span>
            </div>
            <h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">TravelReviews</h2>
          </div>
          <div class="hidden lg:flex items-center gap-9">
            <a
              class="text-slate-900 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer"
              >Destinations</a
            >
            <a
              class="text-slate-900 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer"
              >Food</a
            >
            <a
              class="text-slate-900 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer"
              >Hotels</a
            >
            <a
              class="text-slate-900 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer"
              >Flights</a
            >
            <a
              class="text-slate-900 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer"
              >Community</a
            >
          </div>
        </div>
        <div class="flex flex-1 justify-end gap-4 lg:gap-8">
          <label class="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
            <div
              class="flex w-full flex-1 items-stretch rounded-xl h-full focus-within:ring-2 focus-within:ring-primary/50"
            >
              <div
                class="text-slate-500 flex border-none bg-slate-100 items-center justify-center pl-4 rounded-l-xl border-r-0"
              >
                <span class="material-symbols-outlined text-xl">search</span>
              </div>
              <input
                class="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 border-none bg-slate-100 focus:border-none h-full placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                placeholder="Search"
                value=""
              />
            </div>
          </label>
          <button
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white"
            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJOLEdeHdqDXgTmXaRdFUw2VDLzVXimDxpoVJl0zKXcAGOaYB7B86sqUn7NEuZJXjdf53GtS7M5hQ18grltOpaLR7AMW_9qzwrhZPeSanfJ_4g1Meec5yVWAxx9jSFXzmc9TNEtoNp-XrafrBW1Qiy3kxgkDkSm3yqd-vAT8ipGo8LddKrUpCprfSMQT0Bu4RyfcWLclKRCIF1YGj5CyXphF0Ss3-gu2F6Pwb1ODA0Hxm2hteGlYhI_Q74UGwH2TvS38vDwNjPScrE");'
          ></button>
        </div>
      </header>

      <main class="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-8 py-6">
        <!-- Breadcrumbs -->
        <div class="flex flex-wrap gap-2 py-4 mb-2">
          <a
            class="text-slate-500 text-sm font-medium leading-normal hover:text-primary cursor-pointer"
            >Home</a
          >
          <span class="text-slate-400 text-sm font-medium leading-normal">/</span>
          <a
            class="text-slate-500 text-sm font-medium leading-normal hover:text-primary cursor-pointer"
            >Japan</a
          >
          <span class="text-slate-400 text-sm font-medium leading-normal">/</span>
          <a
            class="text-slate-500 text-sm font-medium leading-normal hover:text-primary cursor-pointer"
            >Kyoto</a
          >
          <span class="text-slate-400 text-sm font-medium leading-normal">/</span>
          <span class="text-slate-900 text-sm font-medium leading-normal">Food & Drink</span>
        </div>

        <!-- Hero -->
        <div class="relative w-full rounded-2xl overflow-hidden min-h-[400px] mb-8 group">
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuABEosZR_m1SPjUpzq0xedDo4c6_mpzG9xhLDrDoRJRPNpaBWYhquuJMZIZP_cOfdud0SIC1Ao9aGoiIcXQkxTM4EeRYIvM-dzt6dv2KRTFjD8vt6dF-7dO1UzGJJTtYB6YIQS6ou3DlYyEa_OuvcReG_j-AThG1_jpO7te0Eufg7bqnTkYcZ6P4iMtpfv4F92CIm0f_dQb_aA2tSqftrJ7_ZE2D9Js7RBMPqlEvPxbzt6pEAqFPQhjDnyF8LpXmLV8WjjBOEBRuaKu");'
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
          ></div>
          <div class="absolute bottom-0 left-0 p-6 md:p-10 w-full max-w-4xl">
            <div class="flex items-center gap-2 mb-3">
              <span
                class="bg-primary text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider"
                >Top Rated</span
              >
              <div class="flex text-yellow-400 gap-0.5">
                <span class="material-symbols-outlined fill text-sm">star</span>
                <span class="material-symbols-outlined fill text-sm">star</span>
                <span class="material-symbols-outlined fill text-sm">star</span>
                <span class="material-symbols-outlined fill text-sm">star</span>
                <span class="material-symbols-outlined fill text-sm">star_half</span>
              </div>
              <span class="text-white/90 text-sm font-medium ml-1">4.8 (124 reviews)</span>
            </div>
            <h1 class="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
              The Hidden Gem of Kyoto: A Ramen Experience
            </h1>
            <div class="flex items-center gap-4 text-white/80 text-sm md:text-base">
              <div class="flex items-center gap-2">
                <div
                  class="size-8 rounded-full bg-cover bg-center border border-white/30"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYbrNoYSxzz8rKt6ocw0Z3lR_ka9Taa9JQ56IKjAsKeliC2eRqLcsCMWhPrCCxSusSY9_9h89kruvHH_Rum0yXJHfqsi0cEArOj7Kr_6pJK-sPd8t8Uqnn7UEUmahd6c3gLTpRuDfyBP5M8eNPWZYAlazvHVEjYUYYMRZUI7L-rEE9rpiHNh7LicRbb1hr9gTAN_EoMP_oJ8lxayRBvuWkvEigPush7dENVdFSsLVXVDPU6kLzWV_mUR402y9AthIYqmpmuIJLzPUn");'
                ></div>
                <span class="font-medium text-white">Sarah Jenkins</span>
              </div>
              <span class="size-1 bg-white/50 rounded-full"></span>
              <span>October 12, 2023</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-8 flex flex-col gap-10">
            <div class="prose prose-slate max-w-none">
              <h2 class="text-2xl font-bold text-slate-900 mb-4">
                Delicious Broth & Cozy Atmosphere
              </h2>
              <p class="text-slate-600 text-lg leading-relaxed mb-6">
                Tucked away in the narrow alleys of Pontocho, this ramen shop is easy to miss but
                impossible to forget. As soon as you slide open the wooden door, the rich aroma of
                tonkotsu broth envelops you, promising a meal that comforts the soul. The interior
                is intimate, with only about eight counter seats.
              </p>
              <p class="text-slate-600 text-lg leading-relaxed mb-6">
                I ordered their signature "Rich Soy Tonkotsu" with an extra marinated egg. The broth
                was creamy without being overly heavy, striking a perfect balance of savory umami
                and pork richness.
              </p>
              <blockquote class="border-l-4 border-primary pl-4 italic text-slate-700 text-lg my-6">
                "The chashu pork was the star of the show—melt-in-your-mouth tender with a slight
                char that added a smoky depth."
              </blockquote>
            </div>

            <!-- Rating Breakdown -->
            <div class="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 class="text-xl font-bold text-slate-900 mb-6">Rating Breakdown</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="flex flex-col gap-2 justify-center">
                  <div class="flex items-end gap-3 mb-1">
                    <span class="text-5xl font-black text-slate-900 leading-none">4.8</span>
                    <span class="text-slate-500 mb-1.5">out of 5</span>
                  </div>
                  <div class="flex gap-1 text-primary">
                    <span class="material-symbols-outlined fill text-2xl">star</span>
                    <span class="material-symbols-outlined fill text-2xl">star</span>
                    <span class="material-symbols-outlined fill text-2xl">star</span>
                    <span class="material-symbols-outlined fill text-2xl">star</span>
                    <span class="material-symbols-outlined fill text-2xl">star_half</span>
                  </div>
                  <p class="text-slate-500 text-sm mt-1">Based on 124 verified reviews</p>
                </div>
                <div class="flex flex-col gap-3">
                  <div class="flex items-center gap-3 text-sm">
                    <span class="w-3 text-slate-700 font-bold">5</span>
                    <div class="h-2.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                      <div class="h-full bg-primary rounded-full" style="width: 78%"></div>
                    </div>
                    <span class="w-8 text-right text-slate-500">78%</span>
                  </div>
                  <!-- Other bars simulated -->
                  <div class="flex items-center gap-3 text-sm">
                    <span class="w-3 text-slate-700 font-bold">4</span>
                    <div class="h-2.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                      <div class="h-full bg-primary rounded-full" style="width: 15%"></div>
                    </div>
                    <span class="w-8 text-right text-slate-500">15%</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Location -->
            <div class="flex flex-col gap-4">
              <h3 class="text-xl font-bold text-slate-900">Location</h3>
              <div class="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden group">
                <div
                  class="absolute inset-0 bg-cover bg-center"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDp6_czxkpN0g278gcPc_8bA2zaZvOxnPL8OepuHdUqarAcBGFBQB9F2TPOg0vvD2gkJcFe_Sgmue1T7i9KH1oYbim32EQi7AyEH8hWAbvBO4LZibyPOWUCfTORaTstiW4JMHZUfsRBGlb4EPjJZdcdx4zlAwDP4SHrgBy7SHr-wLARBiEgm_lvkcv9Yz8G3TC81ObPhxs5I53zKsUJCBgzFK8A4uoR71sxDBdcerHbFC8zPbMErOmXr4xdv94Hj-rlAH7VHkls_A2b");'
                ></div>
                <div
                  class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"
                ></div>
                <div
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                >
                  <span class="material-symbols-outlined fill text-red-500 text-5xl drop-shadow-md"
                    >location_on</span
                  >
                  <div
                    class="bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg mt-1 whitespace-nowrap"
                  >
                    Ramen Sen No Kaze
                  </div>
                </div>
                <button
                  class="absolute bottom-4 right-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <span class="material-symbols-outlined text-lg">directions</span>
                  Get Directions
                </button>
              </div>
            </div>

            <!-- Comments -->
            <div class="pt-8 border-t border-slate-200">
              <h3 class="text-xl font-bold text-slate-900 mb-6">Community (24)</h3>
              <div class="flex gap-4 mb-10">
                <div
                  class="size-10 rounded-full bg-cover bg-center shrink-0"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-HhWfV_ORBqgBapmIknGqEJP6fyIthIWuEJOilK3AhgLfNYa59Hdq68lc4mV1V7m9bva-7DZvsDNTYvhHQbXLfCutIw77lzVjMHAVvZSK-CbYPm0BbyyX3Bg7pUx0P7BxXMJ26UnQ__MZh4BRlY0Lhe7M877cSyOI00wzu-LARcLzV68rHF2j0vUCmBJe5bHyaoFXeM3mAAIza690tvBOJegX-V8xdFrSUfXpEyxw-fWShhFTHjwPk_lw33hqT4VY6APj0M8YVsUH");'
                ></div>
                <div class="flex-1">
                  <textarea
                    class="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary resize-y min-h-[100px]"
                    placeholder="Share your experience..."
                  ></textarea>
                  <div class="flex justify-end mt-2">
                    <button
                      class="bg-primary hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition-colors"
                    >
                      Post Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="lg:col-span-4 space-y-6">
            <div class="sticky top-24 space-y-6">
              <div
                class="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-200/50"
              >
                <h3 class="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
                  At a Glance
                </h3>
                <ul class="space-y-4">
                  <li class="flex items-start gap-4">
                    <div class="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                      <span class="material-symbols-outlined text-xl">payments</span>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-400 uppercase tracking-wide">
                        Price Range
                      </p>
                      <p class="text-slate-900 font-medium">$$ (Moderate)</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-4">
                    <div class="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                      <span class="material-symbols-outlined text-xl">schedule</span>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-400 uppercase tracking-wide">Hours</p>
                      <p class="text-slate-900 font-medium">11:00 AM - 10:00 PM</p>
                      <p class="text-slate-500 text-xs mt-0.5">Open Daily</p>
                    </div>
                  </li>
                </ul>
                <div class="mt-8 flex gap-3">
                  <button
                    class="flex-1 bg-primary hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span class="material-symbols-outlined fill text-xl">bookmark</span> Save
                  </button>
                  <button
                    class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <span class="material-symbols-outlined text-xl">share</span> Share
                  </button>
                </div>
              </div>

              <div class="bg-primary text-white rounded-2xl p-6 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-8 opacity-10">
                  <span class="material-symbols-outlined text-9xl">flight</span>
                </div>
                <h3 class="text-lg font-bold mb-2 relative z-10">Planning a trip?</h3>
                <p class="text-white/80 text-sm mb-4 relative z-10">
                  Find the best hotels near Pontocho Alley with exclusive deals.
                </p>
                <button
                  class="w-full bg-white text-primary font-bold py-2.5 rounded-lg text-sm relative z-10 hover:bg-slate-50 transition-colors"
                >
                  View Hotels Nearby
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewDetailComponent {}
