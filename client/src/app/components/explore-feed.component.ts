
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore-feed',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class="min-h-screen bg-[#f8f9fa] text-slate-900 font-display">
      <header class="sticky top-0 z-50 bg-white border-b border-slate-200 h-16 px-6 flex items-center justify-between shadow-sm">
        <div class="flex items-center gap-8 w-full max-w-7xl mx-auto">
            <div class="flex items-center gap-3 shrink-0">
                <div class="size-8 rounded-lg bg-primary flex items-center justify-center text-white"><span class="material-symbols-outlined">flight_takeoff</span></div>
                <h2 class="text-xl font-bold tracking-tight hidden md:block">TravelReviews</h2>
            </div>
            <div class="hidden md:flex flex-1 max-w-xl mx-auto">
                <label class="relative w-full">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400"><span class="material-symbols-outlined">search</span></span>
                    <input class="block w-full rounded-xl border-none bg-slate-100 py-2.5 pl-10 pr-12 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-primary" placeholder="Where to?" />
                </label>
            </div>
            <div class="flex items-center gap-4 shrink-0">
                 <button class="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full"><span class="material-symbols-outlined">notifications</span><span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span></button>
                 <div class="w-9 h-9 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCBTpVRD6FqSFWg_ZLzFGIph1-3ekobAp9MOf138jEEfpTZkMK1xeEnzvlJZqyoif-nvXpeKnUACTfkn7Tiruc3qNeavQIxxBFQDlaW-laRuUf_YaeU30kQCaPAPHfpwcMRTLk7R80wNJyozuk5-340qoInCSRK5KJ5h_ew25p6noXNXf8-wLvuLMHyQsBppK2XxkIy_s0KGtohpJO2Af1ruTTjcpMxNm3-G22WkZ8HBPPOA7byEchvPjKBUvNwFr5bULoA1iobTzn');"></div>
            </div>
        </div>
      </header>
      
      <div class="flex flex-1 max-w-[1440px] w-full mx-auto">
         <aside class="w-64 shrink-0 hidden lg:block sticky top-16 h-[calc(100vh-64px)] border-r border-slate-200 bg-white p-6">
            <nav class="space-y-8">
                <div>
                    <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Menu</h3>
                    <ul class="space-y-1">
                        <li><a class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/10 text-primary font-medium"><span class="material-symbols-outlined fill-1">home</span><span>Feed</span></a></li>
                        <li><a class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-medium"><span class="material-symbols-outlined">trending_up</span><span>Trending</span></a></li>
                    </ul>
                </div>
                <div>
                     <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Popular Tags</h3>
                     <div class="flex flex-wrap gap-2 px-1">
                        <span class="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">#SushiLovers</span>
                        <span class="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">#BaliResorts</span>
                     </div>
                </div>
            </nav>
         </aside>

         <main class="flex-1 min-w-0 p-4 md:p-8">
            <h1 class="text-2xl font-bold mb-4">Explore Feed</h1>
            
            <div class="columns-1 sm:columns-2 xl:columns-3 gap-6 space-y-6 pb-12">
                 <!-- Card 1 -->
                 <div class="break-inside-avoid bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div class="relative">
                        <div class="w-full h-56 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBinPdQro1V2_OcP9hPIZoH76W0EnlblRjNxKyc17teKYqHqmhMCzWGvggFHFkygAmXiPN_aBzLU9Rhk6X8Vvar_xc3nSfBBOR6yQ1eCQ4kktJsiqv0rvE8-U070efgXxq0OEEXGoZ_WcxT4LlXPL5JgsgFxpdjnsM_d5O4AgzMRsJkGnPCauyo-dit2hkNFL6RBeisDVC4ijGefQgo53GjlzjDLF-dEpebVPtkOQVg090SD3p5kW21vcKzX4fYhOZbWp9C4jZlSEsO');"></div>
                        <span class="absolute top-3 left-3 px-3 py-1 bg-white/90 rounded-lg text-xs font-bold text-primary shadow-sm">Food</span>
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-bold mb-2">The Best Takoyaki in Gion</h3>
                        <p class="text-sm text-slate-500 mb-4">This little stall hidden behind the temple serves the most authentic octopus balls I've ever had.</p>
                        <div class="flex items-center justify-between border-t border-slate-100 pt-4">
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-slate-200 bg-cover" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXiv8qobNQFIxfrTlvmyZj9bmh0YZbIvulHCRD2k8mzoVTZlPDZ_Ysi8gK8kqSZqsWzIOo_TutK-zRFZT26MmMJGWa-8IniBB8i3L5YpFUt1vguZX7GaB-dHIOX-_2BUC0fgq5-EKJmc3yS1-NqsdX1gB4AoqW9Fdnjhj2fK4WnyaNYPkmx83bZ3oBuSVWKmzFFOzT6cPz6H2IjxEMSYoDPZmmL3JMVdmQjHPPRhKboorzbevttMy7TWEhzMm6QiSQv5uwiZv_Y_BA');"></div>
                                <span class="text-xs font-bold">Sarah J.</span>
                            </div>
                        </div>
                    </div>
                 </div>

                 <!-- Card 2 -->
                 <div class="break-inside-avoid bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div class="relative">
                        <div class="w-full h-80 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB989QnJOJZoR90EZ-PQP2zqg52Are7g0PoxrVWv6X2ufWOa0Ko84wpMRcg7icBF1cCVyeOluArcxhESQaiG5iFU-ZXFcaMOTAImeEu1XBPV_-X1ftEiM5jAt66eaDEJR_U7JghQ5A4C4U8nV723jBe_vj8wucZaijTOtm-AtdCJHSJrqVFioq3UCldgPfJ5OdVWpicqZAPqlql9SdwLNWpv84WkPs6wqy-PestyegMtAXvWdM1bp2mSITAAAcYAF-wPF-Fh3l8FdQm');"></div>
                        <span class="absolute top-3 left-3 px-3 py-1 bg-white/90 rounded-lg text-xs font-bold text-primary shadow-sm">Hotel</span>
                        <span class="absolute top-3 right-3 px-2 py-1 bg-black/50 rounded-lg text-xs font-medium text-white">Maldives</span>
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-bold mb-2">Sunrise at the Ocean Villa</h3>
                        <p class="text-sm text-slate-500 mb-4">Waking up to the sound of waves beneath your feet is an indescribable feeling.</p>
                        <div class="flex items-center justify-between border-t border-slate-100 pt-4">
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-slate-200 bg-cover" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsRzgRcfsmUoq1m0qShW781rYamThkX_1ZwSBn5xKAwPJgY-BZT_vG18tNnDYpCIKlUrgzJyzcAyNbSbZ9Mm6YnWBmXcoJT7qs-qS0TqQOlo2djMiNcijUc_jKT7WDyed5T_WW6lf4al-ta9Yn8gBEMXyUJxNh9easkXhvjtskr3Xa7JcTbAv-Bpzh6kLJLvfgHnmkYq3gAOE-Z8Xo2SgB08Xl1_8ChwdBJmm0ksl-CsC6ca2bCBPbLnCeuVQqaXP79mHKAu3kBcpz');"></div>
                                <span class="text-xs font-bold">Marcus T.</span>
                            </div>
                        </div>
                    </div>
                 </div>

                 <!-- Card 3 -->
                  <div class="break-inside-avoid bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div class="relative">
                        <div class="w-full h-48 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3ovGIbxaJ9RmgYKnEqC8m90kowOJ-XhswxwNfVzOclh2cuzRFj3yHltkyHRV2qNJTlz3zvlCfp2jTutC7Rd6lBvtAn1_mI7abgYtlF1tfKpm1V_S12jRNfHzJ3VBnSm__G0yrT348CRXkoOoDmnpZn3w_VqTiCiQi8guoWO-x_aQ6VA0D9jwmH_U6aLtYPBxS2Qu1FWD_Xag_iEHQZpNq8sJPJL3UJ564HvtG-mo2Wk_SzWWJsvk0AfNFY6KOwx-hRnTM6obCC6oH');"></div>
                        <span class="absolute top-3 left-3 px-3 py-1 bg-white/90 rounded-lg text-xs font-bold text-primary shadow-sm">Adventure</span>
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-bold mb-2">Trekking the Andes</h3>
                        <div class="flex items-center justify-between border-t border-slate-100 pt-4">
                             <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-slate-200 bg-cover" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRdWyUgMWKbh_yuldmprCyXRCmOOHXTxPfCkdPD6ysPupMCdk_WznfVpxvkc7fbO2sDfHFc6ypbt0Op2Snh3UhdYAYie6P2lI6hu3XtQyqan3YvKYcpogn30BSUlipBoi8ko3S6cRzBhcpeknubaGiC1wFBno_i1ysD4dHyA1apZGTVAY2LcT864v1MifLN2HAZs-5BtFzzze8doJZxLZ31IyZcadBI1P_jf-xsp9rnyBBcmSGUHwZbHAOCHVleeFUb5qIlM51YhYq');"></div>
                                <span class="text-xs font-bold">Elena R.</span>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
         </main>
      </div>
   </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExploreFeedComponent {}
