import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private localStorageKey = 'currentLanguage';
  private _currentLanguage: boolean = true;

  constructor() {
    this._currentLanguage = this.getStoredLanguage();
  }

  private getStoredLanguage(): boolean {
    const storedLanguage = localStorage.getItem(this.localStorageKey);
    return storedLanguage ? JSON.parse(storedLanguage) : true;
  }

  get currentLanguage(): boolean {
    return this._currentLanguage;
  }

  set currentLanguage(value: boolean) {
    this._currentLanguage = value;
    localStorage.setItem(this.localStorageKey, JSON.stringify(value));
  }
}