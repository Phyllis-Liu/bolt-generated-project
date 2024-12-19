import { LitElement, html, css } from 'lit';

class HeaderNav extends LitElement {
  static properties = {
    isDropdownOpen: { type: Boolean },
    selectedLanguage: { type: String }
  };

  constructor() {
    super();
    this.isDropdownOpen = false;
    this.selectedLanguage = 'EN';
  }

  static styles = css`
    :host {
      display: block;
      background-color: #000;
      padding: 1rem 2rem;
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo {
      color: #fff;
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-svg {
      height: 40px;
      width: 120px;
    }

    .nav-container {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-item {
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      transition: color 0.3s;
      white-space: nowrap;
    }

    .nav-item:hover {
      color: #ff0000;
    }

    .web360-btn {
      background-color: #fff;
      color: #000;
      padding: 8px 16px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
    }

    .language-select {
      color: #fff;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `;

  render() {
    return html`
      <div class="header-container">
        <a href="/" class="logo">
          <svg class="logo-svg" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" x="0" y="0" fill="#ff0000"/>
            <rect width="70" height="12" x="45" y="5" fill="#ffffff"/>
            <rect width="50" height="12" x="45" y="23" fill="#ffffff"/>
          </svg>
        </a>
        
        <div class="nav-container">
          <a href="/about" class="nav-item">ABOUT US</a>
          <a href="/news" class="nav-item">NEWS</a>
          <a href="/product" class="nav-item">PRODUCT</a>
          <a href="/solution" class="nav-item">SOLUTION</a>
          <a href="/support" class="nav-item">TECH SUPPORT</a>
          <a href="/contact" class="nav-item">CONTACT US</a>
          <a href="/web360" class="web360-btn">WEB360</a>
          <div class="language-select">
            <span>🌐</span>
            <span>TW</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('header-nav', HeaderNav);
