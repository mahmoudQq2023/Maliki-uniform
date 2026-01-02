import { Component, inject, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemeMode } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-switcher" [class.open]="isOpen()">
      <!-- Toggle Button -->
      <button class="theme-toggle" (click)="toggleMenu()" [title]="'تغيير الثيم: ' + themeService.getCurrentThemeInfo().nameAr">
        <span class="theme-icon">{{ themeService.getCurrentThemeInfo().icon }}</span>
        <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      
      <!-- Dropdown Menu -->
      @if (isOpen()) {
        <div class="theme-dropdown" [@fadeIn]>
          <div class="dropdown-header">اختر الثيم</div>
          @for (theme of themeService.themes; track theme.id) {
            <button 
              class="theme-option" 
              [class.active]="themeService.currentTheme() === theme.id"
              (click)="selectTheme(theme.id)">
              <span class="option-icon">{{ theme.icon }}</span>
              <div class="option-content">
                <span class="option-name">{{ theme.nameAr }}</span>
                <span class="option-desc">{{ theme.description }}</span>
              </div>
              @if (themeService.currentTheme() === theme.id) {
                <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              }
            </button>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .theme-switcher {
      position: relative;
    }
    
    .theme-toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: rgba(0, 0, 0, 0.05);
      border: 1px solid var(--border-light, #e2e8f0);
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: 'Tajawal', sans-serif;
      
      .theme-icon {
        font-size: 1.25rem;
      }
      
      .chevron {
        transition: transform 0.3s ease;
      }
      
      &:hover {
        background: rgba(0, 0, 0, 0.08);
        border-color: var(--primary, #1e5f8a);
      }
    }
    
    .theme-switcher.open .theme-toggle .chevron {
      transform: rotate(180deg);
    }
    
    .theme-dropdown {
      position: absolute;
      top: calc(100% + 0.5rem);
      left: 0;
      min-width: 260px;
      background: var(--bg-primary, #ffffff);
      border: 1px solid var(--border-light, #e2e8f0);
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      padding: 0.5rem;
      z-index: 1000;
      animation: fadeInDown 0.2s ease;
    }
    
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .dropdown-header {
      padding: 0.75rem 1rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-muted, #64748b);
      border-bottom: 1px solid var(--border-light, #e2e8f0);
      margin-bottom: 0.5rem;
    }
    
    .theme-option {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
      padding: 0.75rem 1rem;
      background: transparent;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
      text-align: right;
      font-family: 'Tajawal', sans-serif;
      
      .option-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
      }
      
      .option-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
      }
      
      .option-name {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-primary, #0d2137);
      }
      
      .option-desc {
        font-size: 0.75rem;
        color: var(--text-muted, #64748b);
      }
      
      .check-icon {
        color: var(--primary, #1e5f8a);
        flex-shrink: 0;
      }
      
      &:hover {
        background: var(--bg-tertiary, #f1f5f9);
      }
      
      &.active {
        background: rgba(30, 95, 138, 0.08);
        
        .option-name {
          color: var(--primary, #1e5f8a);
        }
      }
    }
    
    /* Mobile Responsive */
    @media (max-width: 900px) {
      .theme-dropdown {
        right: 0;
        left: auto;
      }
    }
  `]
})
export class ThemeSwitcherComponent {
  themeService = inject(ThemeService);
  private elementRef = inject(ElementRef);
  
  isOpen = signal(false);

  toggleMenu(): void {
    this.isOpen.update(v => !v);
  }

  selectTheme(themeId: ThemeMode): void {
    this.themeService.setTheme(themeId);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
}
