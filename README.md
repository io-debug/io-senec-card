# Custom lovelace Card "SENEC Display"
This custom lovelace Card for Home Assistant aims to rebuild the Display of Senec devices.

![image](https://github.com/io-debug/io-senec-card/assets/139538558/95de9aea-7db2-4a7c-84c4-cf2a01ea6df3)

## Installation
Please install https://github.com/marq24/ha-senec-v3 in order to use this custom Card.
The custom Card is available via HACS. 
Just add the github-Repository under "Home Assistant -> HACS -> Frontend", restart Home Assistant and add the Card to your Dashboard.
A visual editor is provided to make the configuration as easy as possible.

## Notes regarding the current Version
- The Card is currently just available in German
- The LED "Störung" is just an indication. It's set, when the "Systemstatus" contains "Fehler".
- Please note, that custom Cards are often not shown on Mobile Apps.


## Example Configuration
If you should not use the visual editor to configure the custom Card, here an Example-Configuration:

    type: custom:io-senec-card
      entities:
        - sensor.senec_system_state
        - sensor.senec_battery_charge_percent
        - sensor.senec_battery_state_current
        - sensor.senec_battery_state_voltage
        - sensor.senec_battery_state_power
        - sensor.senec_solar_generated_power
        - sensor.senec_house_power
        - sensor.senec_grid_state_power
