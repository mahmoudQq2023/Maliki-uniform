import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  shopName = signal('الزي المالكي');
  shopTagline = signal('فن الأناقة في كل غرزة');
  currentYear = signal(new Date().getFullYear());

  quickLinks = signal([
    { label: 'الرئيسية', href: '#home' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'الأقمشة', href: '#fabrics' },
    { label: 'آراء العملاء', href: '#testimonials' }
  ]);

  contactInfo = signal([
    { icon: '📍', text: 'الدوحة، قطر' },
    { icon: '📞', text: '+974 44788977' },
    { icon: '📱', text: '+974 77888832' },
    { icon: '✉️', text: 'info@alzayalmalaki.com' }
  ]);

  socialLinks = signal([
    { icon: '📸', label: 'Instagram', href: 'https://www.instagram.com/alzay_almalaki/' },
    { icon: '🎵', label: 'TikTok', href: 'https://www.tiktok.com/@alzay_almalaki' }
  ]);

  workingHours = signal([
    { day: 'السبت - الخميس', hours: '9 صباحاً - 10 مساءً' },
    { day: 'الجمعة', hours: 'مغلق' }
  ]);
}
