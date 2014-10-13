require 'spec_helper'

feature 'Authentication', js: true do
  before do
		@user = FactoryGirl.create(:confirmed_user)
    @login_page = LoginPage.new
    @login_page.visit
  end

  feature 'login' do
    scenario 'with valid inputs' do
      @login_page.sign_in(@user.email, @user.password)
      expect(page).to have_content('Sign out')
    end

    scenario 'with invalid credentials' do
      @login_page.sign_in('invalid@lol.com', 'not the actual password')
      expect(page).to have_content('Invalid login credentials. Please try again.')
    end

    scenario 'redirect after login' do
      @login_page.sign_in(@user.email, @user.password)
      expect(page).to have_content('This is the home page.')
    end
  end
end
