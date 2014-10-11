require 'spec_helper'

feature 'Groups', js: true do
  scenario 'view' do
    visit '/groups'
    expect(page).to have_content('Group One')
  end
end
