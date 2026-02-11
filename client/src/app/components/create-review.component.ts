
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-review',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-background-light font-display">
       <!-- Header -->
        <header class="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4 lg:px-10">
            <div class="flex items-center gap-4">
                <a class="flex items-center gap-2 text-slate-900 transition-opacity hover:opacity-80 cursor-pointer">
                    <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span class="material-symbols-outlined text-xl">arrow_back</span>
                    </div>
                </a>
                <div>
                    <h1 class="text-lg font-bold leading-tight tracking-tight">Write a Review</h1>
                    <p class="text-xs text-slate-500">Saved 2 mins ago</p>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <button class="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
                    <span>Publish</span>
                </button>
            </div>
        </header>

        <main class="flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-4xl flex flex-col gap-8">
                <!-- Hero Image Upload -->
                <div class="group relative flex min-h-[320px] w-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 transition-colors hover:border-primary/50 hover:bg-primary/5">
                    <input aria-label="Upload cover photo" class="absolute inset-0 z-10 cursor-pointer opacity-0" type="file"/>
                    <div class="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-slate-400 transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                        <span class="material-symbols-outlined text-3xl">add_photo_alternate</span>
                    </div>
                    <div class="text-center">
                        <h3 class="text-lg font-bold text-slate-900">Add Cover Photo</h3>
                        <p class="mt-1 text-sm text-slate-500">Drag & drop or click to upload high quality image</p>
                    </div>
                </div>

                <!-- Core Details -->
                <div class="flex flex-col gap-6">
                    <input class="w-full border-none bg-transparent px-0 py-2 text-4xl font-extrabold placeholder:text-slate-300 focus:ring-0 text-slate-900 leading-tight" placeholder="Give your review a catchy title..." type="text"/>
                    
                    <div class="flex flex-wrap gap-4">
                        <label class="cursor-pointer group">
                            <input checked="" class="peer sr-only" name="category" type="radio" value="food"/>
                            <div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary group-hover:border-primary/50">
                                <span class="material-symbols-outlined filled">restaurant</span>
                                <span class="font-bold">Food & Drink</span>
                            </div>
                        </label>
                        <label class="cursor-pointer group">
                            <input class="peer sr-only" name="category" type="radio" value="stay"/>
                            <div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-600 transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary group-hover:border-primary/50">
                                <span class="material-symbols-outlined">hotel</span>
                                <span class="font-bold">Stays</span>
                            </div>
                        </label>
                    </div>

                    <div class="relative flex w-full items-center rounded-xl border border-slate-200 bg-white p-1 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all shadow-sm">
                        <div class="flex h-12 w-12 shrink-0 items-center justify-center text-slate-400">
                            <span class="material-symbols-outlined">location_on</span>
                        </div>
                        <input class="h-12 w-full border-none bg-transparent p-0 text-base font-medium placeholder:text-slate-400 focus:ring-0" placeholder="Where did you go? (e.g. Kyoto, The Ritz)" type="text"/>
                    </div>
                </div>

                <hr class="border-slate-200"/>

                <!-- Rich Text Editor -->
                <div class="rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                    <div class="flex flex-wrap items-center gap-1 border-b border-slate-100 p-2">
                         <button class="flex h-8 w-8 items-center justify-center rounded hover:bg-slate-100"><span class="material-symbols-outlined text-[20px]">format_bold</span></button>
                         <button class="flex h-8 w-8 items-center justify-center rounded hover:bg-slate-100"><span class="material-symbols-outlined text-[20px]">format_italic</span></button>
                         <button class="flex h-8 w-8 items-center justify-center rounded hover:bg-slate-100"><span class="material-symbols-outlined text-[20px]">format_list_bulleted</span></button>
                    </div>
                    <div class="editor-content min-h-[300px] w-full resize-none p-6 text-lg leading-relaxed outline-none" contenteditable="true" data-placeholder="Tell us about your experience. What was the highlight? How was the service?"></div>
                </div>

                <!-- Rating -->
                <div class="grid grid-cols-1 gap-8 rounded-2xl bg-white p-8 md:grid-cols-2 shadow-sm border border-slate-100">
                    <div class="flex flex-col items-center justify-center gap-4 text-center">
                        <h3 class="text-xl font-bold text-slate-900">Overall Rating</h3>
                        <div class="flex gap-2">
                             <button class="text-yellow-400 hover:scale-110 transition-transform"><span class="material-symbols-outlined text-4xl fill-current" style="font-variation-settings: 'FILL' 1;">star</span></button>
                             <button class="text-yellow-400 hover:scale-110 transition-transform"><span class="material-symbols-outlined text-4xl fill-current" style="font-variation-settings: 'FILL' 1;">star</span></button>
                             <button class="text-yellow-400 hover:scale-110 transition-transform"><span class="material-symbols-outlined text-4xl fill-current" style="font-variation-settings: 'FILL' 1;">star</span></button>
                             <button class="text-yellow-400 hover:scale-110 transition-transform"><span class="material-symbols-outlined text-4xl fill-current" style="font-variation-settings: 'FILL' 1;">star</span></button>
                             <button class="text-slate-300 hover:text-yellow-400 hover:scale-110 transition-transform"><span class="material-symbols-outlined text-4xl">star</span></button>
                        </div>
                        <p class="text-sm font-medium text-slate-500">4 out of 5 stars</p>
                    </div>
                    <div class="flex flex-col justify-center gap-6 border-t border-slate-100 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                         <div class="space-y-2">
                             <div class="flex justify-between text-sm font-medium text-slate-700"><span>Service</span><span>Excellent</span></div>
                             <input class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-primary" max="5" min="1" type="range" value="5"/>
                         </div>
                         <div class="space-y-2">
                             <div class="flex justify-between text-sm font-medium text-slate-700"><span>Cleanliness</span><span>Good</span></div>
                             <input class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-primary" max="5" min="1" type="range" value="4"/>
                         </div>
                         <div class="space-y-2">
                             <div class="flex justify-between text-sm font-medium text-slate-700"><span>Value</span><span>Average</span></div>
                             <input class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-primary" max="5" min="1" type="range" value="3"/>
                         </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateReviewComponent {}
