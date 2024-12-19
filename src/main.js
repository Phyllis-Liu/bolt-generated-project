import { LitElement, html, css } from 'lit';
import './components/header-nav.js';
import './components/banner-carousel.js';

class LayoutApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }

    .solution {
      background-color: #d0d0d0;
      padding: 80px;
      text-align: center;
    }

    .news {
      background-color: #c0c0c0;
      padding: 80px;
      text-align: center;
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
      <div class="solution">Solution</div>
      <div class="news">News</div>
      <div class="event">Event</div>
      <div class="footer">Footer</div>
    `;
  }
}

customElements.define('layout-app', LayoutApp);
