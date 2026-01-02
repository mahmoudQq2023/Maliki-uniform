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
  // Shop Info - الاسم الصحيح: داهية
  shopName = signal('داهية');
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
      image: 'assets/Photo/SnapInsta.to_565383426_17904483921257273_5509457446621203635_n.jpg',
      title: 'تفصيل ثياب صيفية وشتوية',
      description: 'بأفضل أنواع الأقمشة',
      color: 'baby-blue'
    },
    {
      image: 'assets/Photo/SnapInsta.to_566453319_17904483867257273_6992801448637388140_n.jpg',
      title: 'تفصيل بجايم نوم',
      description: 'بتصاميم مريحة وفاخرة',
      color: 'champagne'
    },
    {
      image: 'assets/Photo/SnapInsta.to_565671516_17904378114257273_5628468379481334935_n.jpg',
      title: 'تفصيل جلابيات',
      description: 'بتصاميم عصرية وكلاسيكية',
      color: 'lavender'
    },
    {
      image: 'assets/Photo/SnapInsta.to_482386413_17877503208257273_4998162196254424000_n.jpg',
      title: 'تفصيل ثياب اللينن',
      description: 'بلمسات راقية تناسب مختلف المناسبات',
      color: 'mint'
    },
    {
      image: 'assets/Photo/SnapInsta.to_482169640_17877524985257273_8877047341389515255_n.jpg',
      title: 'تفصيل قمصان اللينن',
      description: 'بأرقى الخامات والتفاصيل الدقيقة',
      color: 'blush'
    },
    {
      image: 'assets/Photo/SnapInsta.to_482439979_17878030623257273_3648905373921772970_n.jpg',
      title: 'تفصيل ليس القرقيعان',
      description: 'بلمسات تراثية تناسب احتفالاتنا الجميلة',
      color: 'peach'
    },
    {
      image: 'assets/Photo/SnapInsta.to_482403528_17877900567257273_907571987329740189_n.jpg',
      title: 'بيع المستلزمات الرجالية',
      description: 'من أجود الماركات',
      color: 'sky-blue'
    },
    {
      image: 'assets/Photo/SnapInsta.to_482481048_17877934863257273_438153747828572486_n.jpg',
      title: 'بيع مسابيح',
      description: 'لمحبي الفخامة والتميز',
      color: 'sage'
    },
    {
      image: 'assets/Photo/SnapInsta.to_482046286_17877501717257273_4958203746083719266_n.jpg',
      title: 'إكسسوارات رجالية',
      description: 'شماغ وعقال وغترة من أفخم الماركات',
      color: 'burgundy'
    }
  ]);

  // Fabric Types
  fabrics = signal([
    { name: 'قماش إيطالي', image: 'assets/Photo/SnapInsta.to_479652626_17896247971257273_2088971847396093888_n.jpg', color: '#1e5f8a' },
    { name: 'قماش إنجليزي', image: 'assets/Photo/SnapInsta.to_481008538_17896247590257273_1091626685195420108_n.jpg', color: '#2c7ab8' },
    { name: 'قماش فرنسي', image: 'assets/Photo/SnapInsta.to_481227891_17896247773257273_3667556654785389977_n.jpg', color: '#4da3d9' },
    { name: 'قماش ياباني', image: 'assets/Photo/SnapInsta.to_480890549_17896247917257273_844626757596259988_n.jpg', color: '#6ec4f5' }
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
