import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  pageTitle = signal('من نحن');
  pageSubtitle = signal('الزي المالكي للخياطة الرجالية والتجارة');

  shopStory = signal(`
    تأسَّست شركة الزي المالكي للخياطة الرجالية والتجارة في 23 أكتوبر 2019، 
    لتكون عنوانًا للأناقة والفخامة في عالم الخياطة الرجالية.
    
    نعتزُّ بكوننا وجهة الرجال والأطفال الباحثين عن أرقى التصاميم وأجود الأقمشة، 
    حيث نقدم تفصيل الثياب بتقنيات عالية وجودة لا تُضاهى، 
    مع لمسة من التراث والحداثة تلبي ذوق عملائنا الكرام.
  `);

  features = signal([
    {
      icon: '✂️',
      title: 'خبرة منذ 2019',
      description: 'خبرة متميزة في مجال الخياطة الرجالية الفاخرة'
    },
    {
      icon: '🎯',
      title: 'دقة في القياسات',
      description: 'نستخدم أحدث تقنيات القياس لضمان ملاءمة مثالية'
    },
    {
      icon: '⭐',
      title: 'جودة عالمية',
      description: 'نستورد أفخر الأقمشة من أشهر المصانع العالمية'
    },
    {
      icon: '🤝',
      title: 'خدمة مميزة',
      description: 'فريق محترف يسعى لتحقيق رضاكم التام'
    }
  ]);

  stats = signal([
    { number: '2019', label: 'تأسست' },
    { number: '5+', label: 'سنوات خبرة' },
    { number: '100%', label: 'جودة مضمونة' },
    { number: 'قطر', label: 'الموقع' }
  ]);

  teamImages = signal([
    'assets/Photo/about_reception_1767461920236.png',
    'assets/Photo/about_fabrics_corner_1767461934914.png',
    'assets/Photo/about_tailoring_area_1767461948755.png',
    'assets/Photo/about_storefront_1767461964897.png'
  ]);
}
