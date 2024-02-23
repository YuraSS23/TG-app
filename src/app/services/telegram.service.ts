import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

interface TGButton {
  show(): void
  hide(): void
  setText(text: string): void
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private _window;
  tg;
  constructor(@Inject(DOCUMENT) private _document) {
    this._window = this._document.defaultView;
    this.tg = this._window.Telegram.WebApp;
  }
  get MainButton() {
    return this.tg.MainButton
  }
}
