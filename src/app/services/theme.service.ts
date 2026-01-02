import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'sea-wave' | 'warm-luxury' | 'midnight-elegance' | 'desert-sand';

export interface ThemeInfo {
  id: ThemeMode;
  name: string;
  nameAr: string;
  icon: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  
  // All available themes
  readonly themes: ThemeInfo[] = [
    {
      id: 'sea-wave',
      name: 'Sea Wave',
      nameAr: 'موجة البحر',
      icon: '🌊',
      description: 'الثيم الأساسي - أزرق بحري وذهبي'
    },
    {
      id: 'warm-luxury',
      name: 'Warm Luxury',
      nameAr: 'الدفء الفاخر',
      icon: '🍷',
      description: 'بورجندي مع ذهبي وردي'
    },
    {
      id: 'midnight-elegance',
      name: 'Midnight Elegance',
      nameAr: 'أناقة منتصف الليل',
      icon: '🌙',
      description: 'أسود داكن مع بلاتيني'
    },
    {
      id: 'desert-sand',
      name: 'Desert Sand',
      nameAr: 'رمال الصحراء',
      icon: '🏜️',
      description: 'ألوان صحراوية عربية'
    }
  ];

  // Current theme signal
  currentTheme = signal<ThemeMode>('sea-wave');

  constructor() {
    // Load saved theme on init
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('dahya-theme') as ThemeMode;
      if (savedTheme && this.themes.find(t => t.id === savedTheme)) {
        this.currentTheme.set(savedTheme);
      }
      
      // Apply theme whenever it changes
      effect(() => {
        const theme = this.currentTheme();
        this.applyTheme(theme);
        localStorage.setItem('dahya-theme', theme);
      });
    }
  }

  setTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);
  }

  getThemeInfo(themeId: ThemeMode): ThemeInfo | undefined {
    return this.themes.find(t => t.id === themeId);
  }

  getCurrentThemeInfo(): ThemeInfo {
    return this.themes.find(t => t.id === this.currentTheme()) || this.themes[0];
  }

  private applyTheme(theme: ThemeMode): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Remove all theme classes
    document.documentElement.classList.remove(
      'theme-sea-wave',
      'theme-warm-luxury',
      'theme-midnight-elegance',
      'theme-desert-sand'
    );
    
    // Add current theme class
    document.documentElement.classList.add(`theme-${theme}`);
  }

  // Cycle to next theme
  nextTheme(): void {
    const currentIndex = this.themes.findIndex(t => t.id === this.currentTheme());
    const nextIndex = (currentIndex + 1) % this.themes.length;
    this.setTheme(this.themes[nextIndex].id);
  }
}
