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
    { src: 'assets/Photo/SnapInsta.to_565383426_17904483921257273_5509457446621203635_n.jpg', category: 'thobe', title: 'ثوب سعودي فاخر' },
    { src: 'assets/Photo/SnapInsta.to_565978193_17904483825257273_6504702778402835964_n.jpg', category: 'bisht', title: 'بشت ملكي' },
    { src: 'assets/Photo/SnapInsta.to_566165246_17904238347257273_3724277592639613377_n_1290.jpg', category: 'thobe', title: 'ثوب كلاسيكي' },
    { src: 'assets/Photo/SnapInsta.to_566453319_17904483867257273_6992801448637388140_n.jpg', category: 'thobe', title: 'ثوب عصري' },
    { src: 'assets/Photo/SnapInsta.to_567338312_17904483789257273_6785174343688129656_n.jpg', category: 'thobe', title: 'تفصيل دقيق' },
    { src: 'assets/Photo/SnapInsta.to_564775821_17904239256257273_6752545678912854933_n.jpg', category: 'thobe', title: 'ثوب رسمي' },
    { src: 'assets/Photo/SnapInsta.to_564827457_17904240813257273_4013692855792975104_n.jpg', category: 'thobe', title: 'ثوب مميز' },
    { src: 'assets/Photo/SnapInsta.to_565620994_17904378132257273_1714740066703947314_n.jpg', category: 'bisht', title: 'بشت فاخر' },
    { src: 'assets/Photo/SnapInsta.to_565671516_17904378114257273_5628468379481334935_n.jpg', category: 'bisht', title: 'بشت تقليدي' },
    { src: 'assets/Photo/SnapInsta.to_566426451_17904480684257273_489123685168039121_n.jpg', category: 'accessories', title: 'إكسسوارات' },
    { src: 'assets/Photo/SnapInsta.to_566433521_17904480609257273_1844562005473264174_n.jpg', category: 'accessories', title: 'شماغ فاخر' },
    { src: 'assets/Photo/SnapInsta.to_567002306_17904480714257273_8311706251620070151_n.jpg', category: 'thobe', title: 'قماش فاخر' },
    { src: 'assets/Photo/SnapInsta.to_567639530_17904480627257273_1422862193725711200_n.jpg', category: 'thobe', title: 'تطريز يدوي' },
    { src: 'assets/Photo/SnapInsta.to_482986111_17878152261257273_702489763322980760_n.jpg', category: 'thobe', title: 'ثوب أطفال' },
    { src: 'assets/Photo/SnapInsta.to_482549747_17878027077257273_6241564638686211320_n.jpg', category: 'thobe', title: 'تصميم حديث' },
    { src: 'assets/Photo/SnapInsta.to_482593232_17877525126257273_9129614711002718618_n.jpg', category: 'thobe', title: 'ثوب أنيق' },
    { src: 'assets/Photo/SnapInsta.to_482169640_17877524985257273_8877047341389515255_n.jpg', category: 'thobe', title: 'خياطة متقنة' },
    { src: 'assets/Photo/SnapInsta.to_481774425_17877503184257273_5792347191084804191_n.jpg', category: 'thobe', title: 'ثوب فخم' },
    { src: 'assets/Photo/SnapInsta.to_481922882_17877503145257273_8487871291994754186_n.jpg', category: 'thobe', title: 'تفصيل راقي' },
    { src: 'assets/Photo/SnapInsta.to_482034819_17877525261257273_1182828934528825341_n.jpg', category: 'thobe', title: 'ثوب مميز' },
    { src: 'assets/Photo/SnapInsta.to_482036401_17877503163257273_5168097681670044964_n.jpg', category: 'thobe', title: 'جودة عالية' },
    { src: 'assets/Photo/SnapInsta.to_482044924_17877503436257273_7302260845545179890_n.jpg', category: 'thobe', title: 'ثوب عربي' },
    { src: 'assets/Photo/SnapInsta.to_482222565_17877503265257273_8436658548935969348_n.jpg', category: 'thobe', title: 'أناقة رجالية' },
    { src: 'assets/Photo/SnapInsta.to_482386413_17877503208257273_4998162196254424000_n.jpg', category: 'thobe', title: 'ثوب احتفالي' },
    { src: 'assets/Photo/SnapInsta.to_482439979_17878030623257273_3648905373921772970_n.jpg', category: 'accessories', title: 'إكسسوار فاخر' },
    { src: 'assets/Photo/SnapInsta.to_482842195_17878030536257273_7191485797602957893_n.jpg', category: 'accessories', title: 'تفاصيل دقيقة' },
    { src: 'assets/Photo/SnapInsta.to_482939123_17877920700257273_2334206230467715554_n.jpg', category: 'thobe', title: 'صناعة يدوية' },
    { src: 'assets/Photo/SnapInsta.to_606987827_17912219169257273_2014495659770099525_n.jpg', category: 'thobe', title: 'ثوب رجالي' },
    { src: 'assets/Photo/SnapInsta.to_607387802_17912219322257273_3385940068816222202_n.jpg', category: 'thobe', title: 'تصميم أنيق' },
    { src: 'assets/Photo/SnapInsta.to_607968892_17912219637257273_7971796818797258619_n.jpg', category: 'thobe', title: 'ثوب حديث' },
    // New images
    { src: 'assets/Photo/SnapInsta.to_559696119_18026501513751045_5470337663988367950_n.jpg', category: 'thobe', title: 'ثوب أنيق' },
    { src: 'assets/Photo/SnapInsta.to_574011122_18109899532523439_6922637611425939458_n.jpg', category: 'thobe', title: 'ثوب فاخر' },
    { src: 'assets/Photo/SnapInsta.to_462721598_1219845072624615_8698368884315808718_n.jpg', category: 'thobe', title: 'ثوب عصري' },
    { src: 'assets/Photo/SnapInsta.to_462770059_549946780853708_4023540320037133353_n.jpg', category: 'thobe', title: 'خياطة دقيقة' },
    { src: 'assets/Photo/SnapInsta.to_467611683_17864410365257273_6789189380897279487_n.jpg', category: 'thobe', title: 'تفصيل متقن' },
    { src: 'assets/Photo/SnapInsta.to_467621935_17864410380257273_5660260347000733159_n.jpg', category: 'thobe', title: 'ثوب راقي' },
    { src: 'assets/Photo/SnapInsta.to_482046286_17877501717257273_4958203746083719266_n.jpg', category: 'thobe', title: 'جودة ممتازة' },
    { src: 'assets/Photo/SnapInsta.to_482126517_17877501741257273_1657069207348570911_n.jpg', category: 'thobe', title: 'ثوب كلاسيكي' },
    { src: 'assets/Photo/SnapInsta.to_482440902_17877501501257273_6069824242940889658_n.jpg', category: 'accessories', title: 'إكسسوار راقي' },
    { src: 'assets/Photo/SnapInsta.to_482470110_17877501783257273_5966689746450320763_n.jpg', category: 'thobe', title: 'تفصيل فاخر' },
    { src: 'assets/Photo/SnapInsta.to_482748984_17877920682257273_6947387869195041240_n.jpg', category: 'thobe', title: 'ثوب مميز' },
    { src: 'assets/Photo/SnapInsta.to_482851442_17877899094257273_5222167777214624477_n.jpg', category: 'thobe', title: 'خياطة احترافية' },
    { src: 'assets/Photo/SnapInsta.to_482953679_17878030527257273_8796397875056476066_n.jpg', category: 'thobe', title: 'تصميم عصري' },
    { src: 'assets/Photo/SnapInsta.to_483048733_17878519608257273_8105053075357993711_n.jpg', category: 'accessories', title: 'إكسسوار أنيق' },
    { src: 'assets/Photo/SnapInsta.to_483375888_17878519725257273_6715666732205291344_n.jpg', category: 'thobe', title: 'ثوب عربي فاخر' },
    { src: 'assets/Photo/SnapInsta.to_483809749_17878519917257273_4245200287785756162_n.jpg', category: 'thobe', title: 'تفصيل راقي' },
    { src: 'assets/Photo/SnapInsta.to_489013858_17882315328257273_3773912251143323654_n.jpg', category: 'thobe', title: 'ثوب احتفالي' },
    { src: 'assets/Photo/SnapInsta.to_491462416_17882960460257273_5499399336332999660_n.jpg', category: 'accessories', title: 'تفاصيل جميلة' },
    { src: 'assets/Photo/SnapInsta.to_491520057_17882960304257273_4978425440672439766_n.jpg', category: 'thobe', title: 'ثوب أنيق' }
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
