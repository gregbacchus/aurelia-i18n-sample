import {I18N} from 'aurelia-i18n';

export class App {
  static inject = [I18N];

  message = 'Hello World!';

  constructor(readonly i18n: I18N) {
    this.i18n
      .setLocale('en-US')
      .then(() => {
        // locale is loaded
        console.log(this.i18n.getLocale());
        console.log(this.i18n.tr('friend'));
      });
  }
}
