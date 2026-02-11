import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastMessage {
  private messageService = inject(MessageService);

  success(summary: string, detail: string): void {
    this.messageService.add({ severity: 'success', summary: summary, detail: detail });
  }

  info(summary: string, detail: string): void {
    this.messageService.add({ severity: 'info', summary: summary, detail: detail });
  }

  warn(summary: string, detail: string): void {
    this.messageService.add({ severity: 'warn', summary: summary, detail: detail });
  }

  error(summary: string, detail: string): void {
    this.messageService.add({ severity: 'error', summary: summary, detail: detail });
  }

  clear(): void {
    this.messageService.clear();
  }
}
