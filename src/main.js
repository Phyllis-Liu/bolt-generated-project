import { LitElement, html, css } from 'lit';
import './components/header-nav.js';
import './components/banner-carousel.js';
import './components/solution-section.js';
import './components/news-section.js';
import './components/event-section.js';
import './components/footer-section.js';

class LayoutApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }
  `;

  render() {
    return html`
      <header-nav></header-nav>
      <banner-carousel></banner-carousel>
      <solution-section></solution-section>
      <news-section></news-section>
      <event-section></event-section>
      <footer-section></footer-section>
    `;
  }
}

customElements.define('layout-app', LayoutApp);
