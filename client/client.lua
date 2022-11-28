ESX	= nil

-- Citizen Threads

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
end)

RegisterCommand('menu', function()
    print('hi')
    SendNUIMessage({type = 'openNUI'})
end, false)

Citizen.CreateThread(function()
	while true do 
        Wait(0)
		if not Config.GUI.Toggle then
			if IsControlJustPressed(1, Config.GUI.Key) then
				local Ped = PlayerPedId() 
				if Check(Ped) then 
                    SendNUIMessage({type = 'openNUI'})
                    SetNuiFocus(true, true)
                end
			end

		else
			if IsControlJustPressed(1, Config.GUI.Key) then
				print('bro')
			end
		end
	end
end)

RegisterNUICallback('close', function()
    SetNuiFocus(false, false)
	Config.GUI.Toggle = false
end)

RegisterNUICallback('changeClothesState', function(data)
	local types = {
		top = ToggleClothing("top"),
		gloves = ToggleClothing("gloves"),
		visor = ToggleProps("visor"),
		bag = ToggleClothing("bag"),
		shoes = ToggleClothing("shoes"),
		vest = ToggleClothing("vest"),
		hair = ToggleClothing("hair"),
		hat = ToggleProps("hat"),
		glasses = ToggleProps("glasses"),
		ear = ToggleProps("ear"),
		neck = ToggleClothing("neck"),
		watch = ToggleProps("watch"),
		bracelet = ToggleProps("bracelet"),
		mask = ToggleClothing("mask"),

	}
end)