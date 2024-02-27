import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

interface TGButton {
  show(): void
  hide(): void
  setText(text: string): void
  onClick(fn: Function): void
  offClick(fn: Function): void
  enable():void
  disable():void
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
  get MainButton(): TGButton {
    return this.tg.MainButton
  }
  get BackButton(): TGButton {
    return this.tg.BackButton
  }

  sendData(data: object) {
    this.tg.sendData(JSON.stringify(data))
  }

  ready() {
    this.tg.ready()
}
}
