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
  shopName = signal('داهية');
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = signal([
    { label: 'الرئيسية', route: '/' },
    { label: 'خدماتنا', route: '/services' },
    { label: 'الأقمشة', route: '/fabrics' },
    { label: 'من نحن', route: '/about' },
    { label: 'تواصل معنا', route: '/contact' }
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
