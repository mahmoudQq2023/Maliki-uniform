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
  shopName = signal('داهية');
  shopTagline = signal('فن الأناقة في كل غرزة');
  currentYear = signal(new Date().getFullYear());

  quickLinks = signal([
    { label: 'الرئيسية', href: '#home' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'الأقمشة', href: '#fabrics' },
    { label: 'آراء العملاء', href: '#testimonials' }
  ]);

  contactInfo = signal([
    { icon: '📍', text: 'الخريطيات - منطقة 71، شارع 550، مبنى 561، محل رقم 11 - قطر' },
    { icon: '📞', text: '+974 44788977' },
    { icon: '📱', text: '+974 77888832' },
    { icon: '✉️', text: 'info@dahya.online' }
  ]);

  socialLinks = signal([
    { icon: '📸', label: 'Instagram', href: 'https://www.instagram.com/dahia_qa/' },
    { icon: '🎵', label: 'TikTok', href: 'https://www.tiktok.com/@dahia_qa' }
  ]);

  workingHours = signal([
    { day: 'السبت - الخميس', hours: '9 صباحاً - 10 مساءً' },
    { day: 'الجمعة', hours: 'مغلق' }
  ]);
}
