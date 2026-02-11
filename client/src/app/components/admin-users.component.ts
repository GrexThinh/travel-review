
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex h-screen w-full font-display bg-background-light text-slate-900 overflow-hidden relative">
      <!-- Sidebar -->
      <aside class="w-64 bg-white border-r border-slate-200 flex-shrink-0 hidden lg:flex flex-col justify-between p-4 z-10">
        <div class="flex flex-col gap-8">
            <div class="flex items-center gap-3 px-2">
                <div class="bg-primary/10 rounded-lg size-10 flex items-center justify-center text-primary"><span class="material-symbols-outlined text-2xl">travel_explore</span></div>
                <div class="flex flex-col">
                    <h1 class="text-slate-900 text-base font-bold leading-tight">Admin Panel</h1>
                    <p class="text-slate-500 text-xs font-medium">Travel Review App</p>
                </div>
            </div>
            <nav class="flex flex-col gap-1">
                <a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors group">
                    <span class="material-symbols-outlined text-[24px] text-slate-400 group-hover:text-primary transition-colors">dashboard</span>
                    <span class="text-sm font-medium">Dashboard</span>
                </a>
                <a class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary">
                    <span class="material-symbols-outlined text-[24px] fill-1">group</span>
                    <span class="text-sm font-bold">User Management</span>
                </a>
            </nav>
        </div>
        <div class="flex items-center gap-3 px-3 py-3 border-t border-slate-200 mt-auto">
            <div class="bg-center bg-no-repeat bg-cover rounded-full size-9" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwYUvy-ZsRPbecbrXBOtwvjSCbjlq5OBftOp4h_dn71X4H2uTT0Rm9-zJk1kGAWkkJZuo6gwD0ehf4p31ot0318yhsDAiL0a9IYjGN16o2vCmNsGdQtbhS4IUH65FXzDwhAlMtd8G7ZD9yYWjROGrjKbZ4FgHQttokQCFMROtYF4HgigcieEQpNsQ6J7P_d9qcKB_PswOpZ0AJxnzmL0t6ODrhBMJ40QvEzWCd-Lj7-M_7QFo7ccLfg22vUQb0aTqO_kjBnKaAezPc");'></div>
            <div class="flex flex-col">
                <p class="text-sm font-semibold text-slate-900">Admin User</p>
                <p class="text-xs text-slate-500">Super Admin</p>
            </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 flex flex-col h-full relative overflow-hidden">
        <header class="flex-shrink-0 px-6 py-5 border-b border-slate-200 bg-white flex flex-wrap justify-between items-center gap-4">
            <div class="flex flex-col gap-1">
                <h2 class="text-2xl font-extrabold tracking-tight text-slate-900">User Management</h2>
                <p class="text-slate-500 text-sm">Manage registered users, review activity, and permissions.</p>
            </div>
            <button class="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition-colors border border-slate-200">
                <span class="material-symbols-outlined text-[20px]">download</span> Download CSV
            </button>
        </header>

        <div class="flex-1 overflow-y-auto p-6">
            <div class="max-w-[1200px] mx-auto flex flex-col gap-6">
                <!-- Filters -->
                <div class="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <div class="relative w-full md:w-96 group">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><span class="material-symbols-outlined">search</span></span>
                        <input class="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primary text-sm" placeholder="Search by username or email..."/>
                    </div>
                </div>

                <!-- Table -->
                <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[800px] text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50 border-b border-slate-200">
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Username</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Email</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Join Date</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Reviews</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200">
                                <tr class="group hover:bg-primary/5 transition-colors cursor-pointer" (click)="toggleDrawer()">
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="size-9 rounded-full bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcKRgvNIBbmLkeYAt5v3RE8EhoNZJaK-oLlqzRALslqng91Xr9MEPqUI3Iav7EjcgJcXDnPeZ4ig-GAw1MoT-37uGPS5xHh-2Wjw4KG0OR27rE6-pGoluWwITf_c8rGOnyAMw-f28rAcS9_9O4O1jvDDUQ9z30uWGD5I7qgWb9WA1UNPJwOKJGl9uQvUJPbjO9pvwOjq6EWjlU8jBpFwej_8vRWHE4oCwG-M23xZjHFwasbg2G8j44T8tB7RWIi77q4i0ycz87P4hO");'></div>
                                            <span class="font-semibold text-slate-900">TravelBug99</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500">alex@example.com</td>
                                    <td class="px-6 py-4 text-sm text-slate-500 tabular-nums">Oct 24, 2023</td>
                                    <td class="px-6 py-4 text-sm font-medium text-slate-700 text-center tabular-nums">42</td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">Active</span></td>
                                    <td class="px-6 py-4 text-right"><button class="text-slate-400 hover:text-primary"><span class="material-symbols-outlined text-[20px]">more_vert</span></button></td>
                                </tr>
                                <!-- More rows would go here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </main>

      <!-- Drawer Overlay -->
      @if (drawerOpen()) {
        <div class="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-20" (click)="toggleDrawer()"></div>
        <div class="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-30 transform transition-transform border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-300">
             <div class="flex items-center justify-between px-6 py-5 border-b border-slate-200">
                <h3 class="text-lg font-bold text-slate-900">User Details</h3>
                <button class="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100" (click)="toggleDrawer()"><span class="material-symbols-outlined">close</span></button>
            </div>
            <div class="flex-1 overflow-y-auto p-6 space-y-8">
                <div class="flex flex-col items-center text-center">
                    <div class="relative">
                        <div class="w-24 h-24 rounded-full bg-cover bg-center ring-4 ring-slate-100 mb-4" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxk1FGceW8uCdzUr71ZsG9VwOkCrV-ht7NTukVEdpIJjMWFm9YiiXV0JIBS9VZUtG-X03XFDrhYtBWm6dwRXg7A5puMIOAyvVFIgs4w8ASWIShARUdftb7pv3tzz9seTVBqHGrlwaDbYHDJT_zcpxnbvAQ3rjYG40PNwbPQbWuwEWcAW0yeNRbPjF7IrjL6hiakalUPpKQZx1q5ISFErpq4EOCJqvtgCjEqt0LslHmQEoN9STQJzqBZjqXa7Ylx-feMcEfgmG8_i_9");'></div>
                        <div class="absolute bottom-4 right-0 bg-green-500 size-5 border-4 border-white rounded-full"></div>
                    </div>
                    <h4 class="text-xl font-bold text-slate-900">TravelBug99</h4>
                    <p class="text-slate-500 text-sm">alex@example.com</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                        <p class="text-2xl font-black text-slate-900 mb-1">42</p>
                        <p class="text-xs font-medium text-slate-500 uppercase tracking-wide">Reviews</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                         <div class="flex items-center justify-center gap-1 mb-1">
                            <p class="text-2xl font-black text-slate-900">4.8</p>
                            <span class="material-symbols-outlined text-yellow-500 text-xl fill-1">star</span>
                        </div>
                        <p class="text-xs font-medium text-slate-500 uppercase tracking-wide">Avg Rating</p>
                    </div>
                </div>
            </div>
            <div class="p-6 border-t border-slate-200 bg-slate-50">
                <div class="flex gap-3">
                    <button class="flex-1 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-bold text-sm" (click)="toggleDrawer()">Cancel</button>
                    <button class="flex-1 px-4 py-2.5 bg-primary text-white rounded-lg font-bold text-sm shadow-lg shadow-primary/30">Save Changes</button>
                </div>
            </div>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUsersComponent {
  drawerOpen = signal(false);
  toggleDrawer() {
    this.drawerOpen.update(v => !v);
  }
}
