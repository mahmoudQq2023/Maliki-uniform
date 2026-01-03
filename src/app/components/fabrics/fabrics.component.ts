import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fabrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fabrics.component.html',
  styleUrl: './fabrics.component.scss'
})
export class FabricsComponent {
  pageTitle = signal('الأقمشة والمعرض');
  pageSubtitle = signal('استعرض أحدث أعمالنا وتشكيلتنا المميزة من الأقمشة الفاخرة');

  categories = signal([
    { id: 'all', label: 'الكل' },
    { id: 'thobe', label: 'الثياب' },
    { id: 'bisht', label: 'البشوت' },
    { id: 'accessories', label: 'الإكسسوارات' }
  ]);

  activeCategory = signal('all');

  // All gallery images
  galleryImages = signal([
    // Thobes
    { src: 'assets/Photo/gallery_thobe_1_1767461685579.png', category: 'thobe', title: 'ثوب سعودي فاخر' },
    { src: 'assets/Photo/gallery_thobe_2_1767461701666.png', category: 'thobe', title: 'ثوب كلاسيكي' },
    { src: 'assets/Photo/gallery_thobe_3_1767461715793.png', category: 'thobe', title: 'ثوب عصري' },
    { src: 'assets/Photo/service_thobe_1767461430978.png', category: 'thobe', title: 'ثوب أبيض فاخر' },
    { src: 'assets/Photo/service_linen_thobe_1767461478179.png', category: 'thobe', title: 'ثوب لينن' },
    { src: 'assets/Photo/service_jalabiya_1767461461346.png', category: 'thobe', title: 'جلابية راقية' },
    // Bishts
    { src: 'assets/Photo/gallery_bisht_1_1767461730530.png', category: 'bisht', title: 'بشت ملكي أسود' },
    { src: 'assets/Photo/gallery_bisht_2_1767461748879.png', category: 'bisht', title: 'بشت بني فاخر' },
    { src: 'assets/Photo/gallery_bisht_3_1767461763984.png', category: 'bisht', title: 'بشت أزرق ملكي' },
    // Accessories
    { src: 'assets/Photo/gallery_accessory_1_1767461810298.png', category: 'accessories', title: 'غترة وعقال' },
    { src: 'assets/Photo/gallery_accessory_2_1767461824759.png', category: 'accessories', title: 'أزرار أكمام' },
    { src: 'assets/Photo/gallery_accessory_3_1767461839613.png', category: 'accessories', title: 'حزام ومحفظة' },
    { src: 'assets/Photo/service_shemagh_1767461568545.png', category: 'accessories', title: 'شماغ فاخر' },
    { src: 'assets/Photo/service_misbaha_1767461552480.png', category: 'accessories', title: 'مسابيح' },
    { src: 'assets/Photo/service_accessories_1767461538750.png', category: 'accessories', title: 'إكسسوارات رجالية' },
    // Work
    { src: 'assets/Photo/gallery_work_1_1767461854260.png', category: 'thobe', title: 'خياطة يدوية' },
    { src: 'assets/Photo/gallery_work_2_1767461868545.png', category: 'thobe', title: 'قياسات دقيقة' },
    { src: 'assets/Photo/gallery_work_3_1767461885278.png', category: 'thobe', title: 'ثوب جاهز' },
    // Fabrics
    { src: 'assets/Photo/fabric_italian_1767461597915.png', category: 'thobe', title: 'قماش إيطالي' },
    { src: 'assets/Photo/fabric_english_1767461612797.png', category: 'thobe', title: 'قماش إنجليزي' },
    { src: 'assets/Photo/fabric_french_1767461628048.png', category: 'thobe', title: 'قماش فرنسي' },
    { src: 'assets/Photo/fabric_japanese_1767461643410.png', category: 'thobe', title: 'قماش ياباني' }
  ]);

  setCategory(categoryId: string): void {
    this.activeCategory.set(categoryId);
  }

  getFilteredImages() {
    const category = this.activeCategory();
    if (category === 'all') {
      return this.galleryImages();
    }
    return this.galleryImages().filter(img => img.category === category);
  }

  selectedImage = signal<string | null>(null);

  openLightbox(src: string): void {
    this.selectedImage.set(src);
  }

  closeLightbox(): void {
    this.selectedImage.set(null);
  }
}
