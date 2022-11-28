fx_version 'adamant'

game 'gta5'

client_scripts {
	'functions.lua', 		-- Global Functions / Events / Debug and Locale start.
	'Locale/*.lua', 				-- Locales.
	'config.lua',			-- Configuration.
	'client/variations.lua',		-- Variants, this is where you wanan change stuff around most likely.
	'client/clothing.lua',
	'client/client.lua',
    'GUI.lua'
}

ui_page 'ui/index.html'

files {
    'ui/css/*.css',
    'ui/js/*.js',
    'ui/img/*.png',
    'ui/*.html'
}