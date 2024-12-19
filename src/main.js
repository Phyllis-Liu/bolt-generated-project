import { LitElement, html, css } from 'lit';
import './components/header-nav.js';
import './components/banner-carousel.js';
import './components/solution-section.js';
import './components/news-section.js';

class LayoutApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }

    .event {
      background-color: #b0b0b0;
      padding: 80px;
      text-align: center;
    }

    .footer {
      background-color: #a0a0a0;
      padding: 20px;
      text-align: center;
    }
  `;

  render() {
    return html`
      <header-nav></header-nav>
      <banner-carousel></banner-carousel>
      <solution-section></solution-section>
      <news-section></news-section>
      <div class="event">Event</div>
      <div class="footer">Footer</div>
    `;
  }
}

customElements.define('layout-app', LayoutApp);
