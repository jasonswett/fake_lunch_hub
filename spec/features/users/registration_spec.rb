require 'spec_helper'

feature "Registration", js: true do
  let(:email) { Faker::Internet.email }
  let(:password) { Faker::Internet.password }

  before do
    visit "/sign_up"
    fill_in "Email", with: email
    fill_in "Password", with: password
    fill_in "Password confirmation", with: password
    click_on "Register"
  end

  scenario "account creation" do
    find("a", text: "Sign out").click
    login_page = LoginPage.new
    login_page.visit
    login_page.sign_in(email, password)
    expect(page).to have_content('Sign out')
  end

  scenario "sign-in upon account creation" do
    expect(page).to have_content('Sign out')
  end
end
