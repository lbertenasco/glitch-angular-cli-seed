import { GlitchAngularCliSeedPage } from './app.po';

describe('glitch-angular-cli-seed App', () => {
  let page: GlitchAngularCliSeedPage;

  beforeEach(() => {
    page = new GlitchAngularCliSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
