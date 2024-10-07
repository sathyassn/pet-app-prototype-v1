import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme: Theme = 'system';
  private themeSubject = new BehaviorSubject<Theme>('system');

  theme$ = this.themeSubject.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      this.setColorTheme(storedTheme);
    } else {
      this.setColorTheme('system');
    }
  }

  setColorTheme(theme: Theme) {
    this.colorTheme = theme;
    localStorage.setItem('theme', theme);

    if (theme === 'system') {
      this.removeThemeClasses();
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.renderer.addClass(document.body, 'dark');
      } else {
        this.renderer.addClass(document.body, 'light');
      }
    } else {
      this.removeThemeClasses();
      this.renderer.addClass(document.body, theme);
    }

    this.themeSubject.next(theme);
  }

  private removeThemeClasses() {
    this.renderer.removeClass(document.body, 'light');
    this.renderer.removeClass(document.body, 'dark');
  }
}