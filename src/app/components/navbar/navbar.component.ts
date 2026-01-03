import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  shopName = signal('الزي المالكي');
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = signal([
    { label: 'الرئيسية', route: '/', icon: '🏠' },
    { label: 'خدماتنا', route: '/services', icon: '✂️' },
    { label: 'الأقمشة', route: '/fabrics', icon: '🧵' },
    { label: 'من نحن', route: '/about', icon: '👔' },
    { label: 'تواصل معنا', route: '/contact', icon: '📞' }
  ]);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
