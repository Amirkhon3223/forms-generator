import { Component } from '@angular/core';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-anketa-page',
  templateUrl: './anketa-page.component.html',
  styleUrl: './anketa-page.component.scss'
})
export class AnketaPageComponent {
  formData: any = {}

  constructor(private formDataService: FormDataService) {
  }

  onAddUniversity() {
    if (!this.formData.universities) {
      // тут если нет массива universities, то он создает его
      this.formData.universities = [''];
    } else {
      this.formData.universities.push('');
    }
  }

  onSubmitForm() {
    // Отправляем данные на сервер через сервис
    this.formDataService.onSendFromData(this.formData)
      .subscribe(
        response => {
          console.log('Данные успешно отправлены:', response);
        },
        error => {
          console.error('Ошибка при отправке данных:', error);
        }
      );
  }

}
