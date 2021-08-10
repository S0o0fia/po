import { Component, LOCALE_ID, Inject } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebUniFront';
  public textDir:string = "ltr";
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ar');
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
    // {
    //   if(event.lang == 'ar')
    //   {
    //     this.textDir = 'rtl';
    //   }
    //   else
    //   {
    //     this.textDir = 'ltr';
    //   }
    // });
  }

}
