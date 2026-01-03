import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  pageTitle = signal('تواصل معنا');
  pageSubtitle = signal('نحن هنا لمساعدتك، تواصل معنا في أي وقت');

  contactInfo = signal([
    { icon: '📍', label: 'العنوان', value: 'الدوحة، قطر' },
    { icon: '📞', label: 'الهاتف', value: '+974 44788977' },
    { icon: '📱', label: 'الجوال', value: '+974 77888832' },
    { icon: '✉️', label: 'البريد الإلكتروني', value: 'info@alzayalmalaki.com' },
    { icon: '🕐', label: 'ساعات العمل', value: 'السبت - الخميس: 9 صباحاً - 10 مساءً' }
  ]);

  socialLinks = signal([
    { icon: '📸', label: 'Instagram', url: 'https://www.instagram.com/alzay_almalaki/' },
    { icon: '🎵', label: 'TikTok', url: 'https://www.tiktok.com/@alzay_almalaki' }
  ]);

  formData = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  };

  services = signal([
    'تفصيل ثياب صيفية وشتوية',
    'تفصيل بجايم نوم',
    'تفصيل جلابيات',
    'تفصيل ثياب اللينن',
    'تفصيل ليس القرقيعان',
    'بيع المستلزمات الرجالية',
    'أخرى'
  ]);

  isSubmitting = signal(false);
  isSubmitted = signal(false);

  async submitForm(): Promise<void> {
    this.isSubmitting.set(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    this.isSubmitting.set(false);
    this.isSubmitted.set(true);
    
    // Reset form
    this.formData = {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    };
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      this.isSubmitted.set(false);
    }, 5000);
  }
}
