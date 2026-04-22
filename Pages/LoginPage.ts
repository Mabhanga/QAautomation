import { Page, Locator } from '@playwright/test';

export class LoginPage {   
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly signupLoginLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.signupLoginLink = page.locator('a[href="/login"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://automationexercise.com/', { timeout: 60000 });
    await this.signupLoginLink.click();
  }

  async login(email: string, password: string): Promise<void> {
    await this.usernameInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

