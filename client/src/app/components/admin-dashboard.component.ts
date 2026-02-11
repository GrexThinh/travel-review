
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Forced Dark Mode Container -->
    <div class="dark w-full h-screen bg-[#101a22] text-white font-display flex overflow-hidden">
        <!-- Sidebar -->
        <aside class="hidden w-64 flex-col border-r border-[#233948] bg-[#111b22] md:flex">
            <div class="flex h-16 items-center px-6 border-b border-[#233948]">
                <div class="flex flex-col">
                    <h1 class="text-white text-lg font-bold leading-tight">TravelAdmin</h1>
                    <p class="text-[#92b2c9] text-xs font-normal">Management Console</p>
                </div>
            </div>
            <div class="p-4">
                <nav class="flex flex-col gap-2">
                    <a class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white"><span class="material-symbols-outlined text-[20px]">dashboard</span><span class="text-sm font-medium">Dashboard</span></a>
                    <a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92b2c9] hover:bg-[#233948]"><span class="material-symbols-outlined text-[20px]">group</span><span class="text-sm font-medium">User Management</span></a>
                    <a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92b2c9] hover:bg-[#233948]"><span class="material-symbols-outlined text-[20px]">bar_chart</span><span class="text-sm font-medium">Analytics</span></a>
                </nav>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex h-full flex-1 flex-col overflow-hidden bg-[#101a22]">
            <header class="flex h-16 items-center justify-between border-b border-[#233948] bg-[#111b22] px-6 py-3">
                <div class="hidden md:flex flex-1 max-w-lg relative">
                     <span class="material-symbols-outlined text-[#92b2c9] absolute top-2 left-2">search</span>
                     <input class="block w-full rounded-lg border-0 bg-[#233948] py-2 pl-10 pr-3 text-sm text-white placeholder:text-[#92b2c9] focus:ring-2 focus:ring-primary" placeholder="Search..."/>
                </div>
                <div class="flex items-center gap-4 ml-auto">
                    <button class="relative p-1 text-[#92b2c9]"><span class="material-symbols-outlined">notifications</span><span class="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span></button>
                    <div class="h-8 w-8 rounded-full bg-slate-700 bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTsUPs0_vJz-IqizaOtgwfWaq7cN0ZEofcHfHk7On50428vBVDxqUjDDMu6iEmcl2IWr6BTyMGLSyR5EsGRBAGuR5z9vjXwu_pWmExlmeq0Q7juweqAFydVUxekcMIAHYDSElbknCken_DcaVFJ7J543XkrOvOEV-NQZT5EPGzzE0y4vD8PCudhav75lZ-I9WcCD4Hm1pPVt4zNuOikaWQ3GgnOVqTtl2r2nvWcm_C3-AOawQKmcFw_mU-1kbWm37Y12M-NzbfgYTZ");'></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-8">
                <div class="mx-auto max-w-7xl flex flex-col gap-6">
                    <div class="flex items-center gap-2 text-sm"><span class="text-[#92b2c9]">Dashboard</span> <span class="text-[#587489]">/</span> <span class="font-medium text-white">Overview</span></div>
                    
                    <!-- KPI Cards -->
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div class="rounded-xl border border-[#325167] bg-[#1d2830] p-6">
                            <div class="flex justify-between"><p class="text-sm font-medium text-[#92b2c9]">Total Users</p><span class="material-symbols-outlined text-[#92b2c9]">group</span></div>
                            <div class="mt-4 flex items-baseline gap-2"><p class="text-3xl font-bold text-white">12,450</p><span class="text-green-500 text-sm">+5%</span></div>
                        </div>
                        <div class="rounded-xl border border-[#325167] bg-[#1d2830] p-6">
                            <div class="flex justify-between"><p class="text-sm font-medium text-[#92b2c9]">Active Reviews</p><span class="material-symbols-outlined text-[#92b2c9]">rate_review</span></div>
                            <div class="mt-4 flex items-baseline gap-2"><p class="text-3xl font-bold text-white">45,200</p><span class="text-green-500 text-sm">+12%</span></div>
                        </div>
                        <div class="rounded-xl border border-[#325167] bg-[#1d2830] p-6">
                            <div class="flex justify-between"><p class="text-sm font-medium text-[#92b2c9]">Flagged</p><span class="material-symbols-outlined text-orange-500">flag</span></div>
                            <div class="mt-4 flex items-baseline gap-2"><p class="text-3xl font-bold text-white">14</p><span class="text-green-500 text-sm">-2%</span></div>
                        </div>
                    </div>

                    <!-- Chart -->
                    <div class="rounded-xl border border-[#325167] bg-[#1d2830] p-6">
                        <div class="flex justify-between mb-6">
                            <h3 class="text-lg font-semibold text-white">Activity Growth</h3>
                            <div class="flex bg-[#233948] rounded p-1"><button class="px-3 py-1 text-xs font-medium text-[#92b2c9]">7d</button><button class="bg-[#325167] px-3 py-1 text-xs font-medium text-white rounded">30d</button></div>
                        </div>
                        <div class="relative h-64 w-full">
                            <svg class="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
                                <path class="drop-shadow-lg" d="M0 180 C 100 150, 200 200, 300 120 C 400 50, 600 80, 800 20 L 1200 40" fill="none" stroke="#1392ec" stroke-width="3"></path>
                                <path class="opacity-20" d="M0 180 C 100 150, 200 200, 300 120 C 400 50, 600 80, 800 20 L 1200 40 V 256 H 0 Z" fill="#1392ec"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- Table -->
                    <div class="rounded-xl border border-[#325167] bg-[#1d2830] overflow-hidden">
                        <div class="border-b border-[#325167] px-6 py-4"><h3 class="text-lg font-semibold text-white">Flagged Content</h3></div>
                        <table class="w-full text-left text-sm text-[#92b2c9]">
                            <thead class="bg-[#233948] text-xs uppercase text-[#92b2c9]">
                                <tr><th class="px-6 py-3">Content</th><th class="px-6 py-3">Reason</th><th class="px-6 py-3 text-right">Actions</th></tr>
                            </thead>
                            <tbody class="divide-y divide-[#325167]">
                                <tr class="hover:bg-[#233948]/50">
                                    <td class="px-6 py-4"><div class="text-white">Hotel California Review</div><div class="text-xs">ID: #REV-2094</div></td>
                                    <td class="px-6 py-4"><span class="text-red-400">Spam</span></td>
                                    <td class="px-6 py-4 text-right flex justify-end gap-2">
                                        <button class="text-green-400 hover:text-green-300"><span class="material-symbols-outlined">check</span></button>
                                        <button class="text-red-400 hover:text-red-300"><span class="material-symbols-outlined">delete</span></button>
                                    </td>
                                </tr>
                                 <tr class="hover:bg-[#233948]/50">
                                    <td class="px-6 py-4"><div class="text-white">Best Sushi in Tokyo</div><div class="text-xs">ID: #PST-8402</div></td>
                                    <td class="px-6 py-4"><span class="text-orange-400">Inappropriate</span></td>
                                    <td class="px-6 py-4 text-right flex justify-end gap-2">
                                        <button class="text-green-400 hover:text-green-300"><span class="material-symbols-outlined">check</span></button>
                                        <button class="text-red-400 hover:text-red-300"><span class="material-symbols-outlined">delete</span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent {}
