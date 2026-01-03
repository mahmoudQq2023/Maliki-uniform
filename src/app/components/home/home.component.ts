import { Component, signal, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  // Shop Info - الاسم الصحيح: الزي المالكي
  shopName = signal('الزي المالكي');
  shopTagline = signal('فن الأناقة في كل غرزة');
  shopDescription = signal('نصنع لك ثوبك بأعلى معايير الجودة والدقة، لتعكس شخصيتك الفريدة بلمسة من الفخامة والأناقة');

  // Hero Stats
  heroStats = signal([
    { number: '2019', label: 'تأسست', icon: '📅' },
    { number: '5+', label: 'سنوات خبرة', icon: '✨' },
    { number: '100%', label: 'جودة مضمونة', icon: '⭐' }
  ]);

  // Services - الخدمات الفعلية
  services = signal([
    {
      image: 'assets/Photo/service_thobe_1767461430978.png',
      title: 'تفصيل ثياب صيفية وشتوية',
      description: 'بأفضل أنواع الأقمشة',
      color: 'baby-blue'
    },
    {
      image: 'assets/Photo/service_pajamas_1767461446477.png',
      title: 'تفصيل بجايم نوم',
      description: 'بتصاميم مريحة وفاخرة',
      color: 'champagne'
    },
    {
      image: 'assets/Photo/service_jalabiya_1767461461346.png',
      title: 'تفصيل جلابيات',
      description: 'بتصاميم عصرية وكلاسيكية',
      color: 'lavender'
    },
    {
      image: 'assets/Photo/service_linen_thobe_1767461478179.png',
      title: 'تفصيل ثياب اللينن',
      description: 'بلمسات راقية تناسب مختلف المناسبات',
      color: 'mint'
    },
    {
      image: 'assets/Photo/service_linen_shirt_1767461493087.png',
      title: 'تفصيل قمصان اللينن',
      description: 'بأرقى الخامات والتفاصيل الدقيقة',
      color: 'blush'
    },
    {
      image: 'assets/Photo/service_kids_girgian_1767461522666.png',
      title: 'تفصيل ليس القرقيعان',
      description: 'بلمسات تراثية تناسب احتفالاتنا الجميلة',
      color: 'peach'
    },
    {
      image: 'assets/Photo/service_accessories_1767461538750.png',
      title: 'بيع المستلزمات الرجالية',
      description: 'من أجود الماركات',
      color: 'sky-blue'
    },
    {
      image: 'assets/Photo/service_misbaha_1767461552480.png',
      title: 'بيع مسابيح',
      description: 'لمحبي الفخامة والتميز',
      color: 'sage'
    },
    {
      image: 'assets/Photo/service_shemagh_1767461568545.png',
      title: 'إكسسوارات رجالية',
      description: 'شماغ وعقال وغترة من أفخم الماركات',
      color: 'burgundy'
    }
  ]);

  // Fabric Types
  fabrics = signal([
    { name: 'قماش إيطالي', image: 'assets/Photo/fabric_italian_1767461597915.png', color: '#1e5f8a' },
    { name: 'قماش إنجليزي', image: 'assets/Photo/fabric_english_1767461612797.png', color: '#2c7ab8' },
    { name: 'قماش فرنسي', image: 'assets/Photo/fabric_french_1767461628048.png', color: '#4da3d9' },
    { name: 'قماش ياباني', image: 'assets/Photo/fabric_japanese_1767461643410.png', color: '#6ec4f5' }
  ]);


  // Features
  features = signal([
    { icon: '🎯', title: 'دقة متناهية', desc: 'قياسات دقيقة بتقنية حديثة' },
    { icon: '💎', title: 'أقمشة فاخرة', desc: 'مستوردة من أفضل المصانع العالمية' },
    { icon: '🚚', title: 'توصيل مجاني', desc: 'لجميع أنحاء المملكة' },
    { icon: '♻️', title: 'ضمان الجودة', desc: 'استرجاع أو تعديل مجاني' }
  ]);

  // Testimonials
  testimonials = signal([
    {
      name: 'أحمد محمد',
      text: 'أفضل خياط تعاملت معه، جودة عالية ودقة في المواعيد',
      rating: 5
    },
    {
      name: 'خالد العتيبي',
      text: 'خامات ممتازة وخياطة احترافية، أنصح بالتعامل معهم',
      rating: 5
    },
    {
      name: 'فهد السعيد',
      text: 'تجربة رائعة من البداية للنهاية، سأعود بالتأكيد',
      rating: 5
    }
  ]);

  // Particles for background animation
  particles = signal<{ x: number; y: number; size: number; delay: number }[]>([]);

  ngOnInit(): void {
    // Generate random particles for background animation
    const particleCount = 50;
    const generatedParticles = [];
    for (let i = 0; i < particleCount; i++) {
      generatedParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5
      });
    }
    this.particles.set(generatedParticles);
  }

  ngAfterViewInit(): void {
    // Add intersection observer for scroll animations
    this.initScrollAnimations();
  }

  private initScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });
  }

  // Scroll to services section
  scrollToServices(): void {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
