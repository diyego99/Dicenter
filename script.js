// LISTA DE PRODUCTOS - Agregamos el campo 'precio' a cada uno
const productos = [
    { codigo: "39339", nombre: "Abridor de Vino Quanta Blue LED QTAVE91 - Gris", cat: "Hogar y Decoración", precio: "130.000", fotos: ["39339_1.jpg", "39339_2.jpg", "39339_3.jpg"] },
    { codigo: "17683", nombre: "Adaptador Bluetooth Dongle CSR 4.0 BT / USB / PC", cat: "Adaptadores Wifi y Bluetooth", precio: "35.000", fotos: ["17683_1.jpg", "17683_2.jpg", "17683_3.jpg"] },
    { codigo: "35087", nombre: "Adaptador Bluetooth TP-Link UB5A BT 5.3 / USB - Negro", cat: "Adaptadores Wifi y Bluetooth", precio: "55.000", fotos: ["35087_1.jpg", "35087_2.jpg", "35087_3.jpg"] },
    { codigo: "20890", nombre: "Adaptador Bluetooth Dongle CSR 5.0 BT / USB / PC", cat: "Adaptadores Wifi y Bluetooth", precio: "42.000", fotos: ["20890_1.jpg", "20890_2.jpg", "20890_3.jpg"] },
    { codigo: "20211", nombre: "Adaptador Conector HDMI Doble Hembra", cat: "Cables y Adaptadores", precio: "30.000", fotos: ["20211_1.jpg", "20211_2.jpg", "20211_3.jpg"] },
    { codigo: "13539", nombre: "Adaptador Conversor HDMI2AV Full HD 1080 HDMI / RCA - Blanco", cat: "Cables y Adaptadores", precio: "65.000", fotos: ["13539_1.jpg", "13539_2.jpg", "13539_3.jpg"] },
    { codigo: "13896", nombre: "Adaptador Extender / RJ45 Bege", cat: "Cables y Adaptadores", precio: "10.000", fotos: ["13896_1.jpg", "13896_2.jpg", "13896_3.jpg"] },
    { codigo: "49827", nombre: "Adaptador Extender Satellite A-HD132 / HDMI / Wireless / 1080P / 150M", cat: "Red y Internet", precio: "725.000", fotos: ["49827_1.jpg", "49827_2.jpg", "49827_3.jpg"] },
    { codigo: "51946", nombre: "Moldura de Contacto para Procesador Thermalright Secure Frame V2 AM5 - Negro", cat: "Accesorios para Cooler", precio: "88.000", fotos: ["51946_1.jpg", "51946_2.jpg", "51946_3.jpg"] },
    { codigo: "51947", nombre: "Moldura de Contato para Processador Thermalright LGA1700-BCF - Negro", cat: "Accesorios para Cooler", precio: "88.000", fotos: ["51947_1.jpg", "51947_2.jpg", "51947_3.jpg"] },
    { codigo: "30272", nombre: "Adaptador Receiver de Audio 3.5MM / Bluetooth Quanta QTRABT10", cat: "Electrónicos", precio: "56.000", fotos: ["30272_1.jpg", "30272_2.jpg", "30272_3.jpg"] },
    { codigo: "53347", nombre: "Adaptador Tomada Tp-Link Tapo P110 Smart Plug / Alexa - Blanco", cat: "Electrónicos", precio: "70.000", fotos: ["53347_1.jpg", "53347_2.jpg", "53347_3.jpg"] },
    { codigo: "43599", nombre: "Depilador Nasal Quanta QTCET21 - Negro (Kit 2 en 1)", cat: "Electrónicos", precio: "50.000", fotos: ["43599_1.jpg", "43599_2.jpg", "43599_3.jpg"] },
    { codigo: "45871", nombre: "Apresentador Laser Quanta QTPLEC20 - Negro", cat: "Periféricos", precio: "77.000", fotos: ["45871_1.jpg", "45871_2.jpg", "45871_3.jpg"] },
    { codigo: "45870", nombre: "Apresentador Laser Quanta QTPLM30 - Negro", cat: "Periféricos", precio: "215.000", fotos: ["45870_1.jpg", "45870_2.jpg", "45870_3.jpg"] },
    { codigo: "49083", nombre: "Apresentador Laser Satellite LR-25R - Negro", cat: "Periféricos", precio: "60.000", fotos: ["49083_1.jpg", "49083_2.jpg", "49083_3.jpg"] },
    { codigo: "48916", nombre: "Apresentador Laser Satellite LR-26R - Negro", cat: "Periféricos", precio: "0", fotos: ["48916_1.jpg", "48916_2.jpg", "48916_3.jpg"] },
    { codigo: "54790", nombre: "Presentador Laser Satellite LR-27R - Negro", cat: "Periféricos", precio: "0", fotos: ["54790_1.jpg", "54790_2.jpg", "54790_3.jpg"] },
    { codigo: "54791", nombre: "Presentador Laser Satellite LR-28R - Negro", cat: "Periféricos", precio: "0", fotos: ["54791_1.jpg", "54791_2.jpg", "54791_3.jpg"] },
    { codigo: "48536", nombre: "Ar Acondicionado Portátil Midea MD115V-12PORMID 12000BTU", cat: "Electrónicos", precio: "0", fotos: ["48536_1.jpg", "48536_2.jpg", "48536_3.jpg"] },
    { codigo: "56049", nombre: "Aire Acondicionado Split Amenews Wi-Fi Kit 12000BTU Frio - Inverter", cat: "Electrónicos", precio: "0", fotos: ["56049_1.jpg", "56049_2.jpg", "56049_3.jpg"] },
    { codigo: "56050", nombre: "Aire Acondicionado Split Amenews Wi-Fi Kit 18000BTU Frio - Inverter", cat: "Electrónicos", precio: "0", fotos: ["56050_1.jpg", "56050_2.jpg", "56050_3.jpg"] },
    { codigo: "56051", nombre: "Aire Acondicionado Split Amenews Wi-Fi Kit 24000BTU Frio - Inverter", cat: "Electrónicos", precio: "0", fotos: ["56051_1.jpg", "56051_2.jpg", "56051_3.jpg"] },
    { codigo: "56052", nombre: "Aire Acondicionado Split Amenews Wi-Fi Kit 30000BTU Frio - Inverter", cat: "Electrónicos", precio: "0", fotos: ["56052_1.jpg", "56052_2.jpg", "56052_3.jpg"] },
    { codigo: "53181", nombre: "Aire Condicionado Split Black+Decker 12K-T Kit 12000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["53181_1.jpg", "53181_2.jpg", "53181_3.jpg"] },
    { codigo: "53183", nombre: "Aire Condicionado Split Black+Decker 18K-T Kit 18000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["53183_1.jpg", "53183_2.jpg", "53183_3.jpg"] },
    { codigo: "53184", nombre: "Aire Condicionado Split Black+Decker 24K-T Kit 24000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["53184_1.jpg", "53184_2.jpg", "53184_3.jpg"] },
    { codigo: "55367", nombre: "Aire Acondicionado Split Geminis GS-INV12BR Kit 12000BTU", cat: "Electrónicos", precio: "0", fotos: ["55367_1.jpg", "55367_2.jpg", "55367_3.jpg"] },
    { codigo: "51287", nombre: "Aire Acondicionado Split HYE AC12INV-BR Kit 12000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["51287_1.jpg", "51287_2.jpg", "51287_3.jpg"] },
    { codigo: "51288", nombre: "Aire Acondicionado Split HYE AC12PY Kit 12000BTU / 220V", cat: "Electrónicos", precio: "0", fotos: ["51288_1.jpg", "51288_2.jpg", "51288_3.jpg"] },
    { codigo: "55472", nombre: "Aire Acondicionado Split Midea MD-12000INVMD Kit 12000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["55472_1.jpg", "55472_2.jpg", "55472_3.jpg"] },
    { codigo: "48539", nombre: "Aire Acondicionado Split Midea MD-12MID Kit 12000BTU", cat: "Electrónicos", precio: "0", fotos: ["48539_1.jpg", "48539_2.jpg", "48539_3.jpg"] },
    { codigo: "56693", nombre: "AR CONDICIONADO SPLIT MIDEA MDIA-12INV AI KIT 12000BTU INVERTER", cat: "Electrónicos", precio: "0", fotos: ["56693_1.jpg", "56693_2.jpg", "56693_3.jpg"] },
    { codigo: "55682", nombre: "Aire Acondicionado Split Midea MDIA-18INV AI Kit 18000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["55682_1.jpg", "55682_2.jpg", "55682_3.jpg"] },
    { codigo: "55428", nombre: "Aire Acondicionado Split Smartfy AR01 Kit 12000BTU 220V", cat: "Electrónicos", precio: "0", fotos: ["55428_1.jpg", "55428_2.jpg", "55428_3.jpg"] },
    { codigo: "55429", nombre: "Aire Acondicionado Split Smartfy AR01I Kit 12000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["55429_1.jpg", "55429_2.jpg", "55429_3.jpg"] },
    { codigo: "56404", nombre: "Aspirador 4LIFE FL102PB Sopravac Vacuum Portátil - Negro", cat: "Electrónicos", precio: "0", fotos: ["56404_1.jpg", "56404_2.jpg", "56404_3.jpg"] },
    { codigo: "56406", nombre: "Aspirador 4LIFE FL102PW Sopravac Vacuum Portátil - Blanco", cat: "Electrónicos", precio: "0", fotos: ["56406_1.jpg", "56406_2.jpg", "56406_3.jpg"] },
    { codigo: "54684", nombre: "Aspiradora Roborock Q7 BF Q7BF02-00 Robotic Vacuum Cleaner", cat: "Electrónicos", precio: "0", fotos: ["54684_1.jpg", "54684_2.jpg", "54684_3.jpg"] },
    { codigo: "43426", nombre: "Aspirador Tp-Link Robot Vacuum-mop Cleaner Tapo RV10 - Blanco", cat: "Electrónicos", precio: "0", fotos: ["43426_1.jpg", "43426_2.jpg", "43426_3.jpg"] },
    { codigo: "56680", nombre: "ASPIRADOR XIAOMI 5 OV31GL BHR0831US MI ROBOT VACUUM 110V", cat: "Electrónicos", precio: "0", fotos: ["56680_1.jpg", "56680_2.jpg", "56680_3.jpg"] },
    { codigo: "56279", nombre: "Aspirador Xiaomi Mi Robot Vacuum 5 OV31GL / 220V - Blanco", cat: "Electrónicos", precio: "0", fotos: ["56279_1.jpg", "56279_2.jpg", "56279_3.jpg"] },
    { codigo: "39360", nombre: "Aspirador Xiaomi Mi Robot Vacuum E10 B112 / Bivolt - Blanco", cat: "Electrónicos", precio: "0", fotos: ["39360_1.jpg", "39360_2.jpg", "39360_3.jpg"] },
    { codigo: "50544", nombre: "Aspirador Xiaomi Mi Vacuum Cleaner G20 D205 - Blanco", cat: "Electrónicos", precio: "0", fotos: ["50544_1.jpg", "50544_2.jpg", "50544_3.jpg"] },
    { codigo: "47462", nombre: "Aspirador Portátil Xiaomi Mi Vacuum Cleaner G20 Lite C203 - Blanco", cat: "Electrónicos", precio: "0", fotos: ["47462_1.jpg", "47462_2.jpg", "47462_3.jpg"] },
    { codigo: "50545", nombre: "Aspirador Xiaomi Mi Vacuum Cleaner G20 Max - Gris", cat: "Electrónicos", precio: "0", fotos: ["50545_1.jpg", "50545_2.jpg", "50545_3.jpg"] },
    { codigo: "54209", nombre: "Aspiradora Xiaomi Mi Robot Vacuum H40 OV51 / 220V - Blanco", cat: "Electrónicos", precio: "0", fotos: ["54209_1.jpg", "54209_2.jpg", "54209_3.jpg"] },
    { codigo: "55736", nombre: "Aspirador Xiaomi Mi Robot Vacuum H40 OV51 / 110V - Blanco", cat: "Electrónicos", precio: "0", fotos: ["55736_1.jpg", "55736_2.jpg", "55736_3.jpg"] },
    { codigo: "47760", nombre: "Aspirador Xiaomi Mi Robot Vacumm S20+ B108GL / Bivolt - Blanco", cat: "Electrónicos", precio: "0", fotos: ["47760_1.jpg", "47760_2.jpg", "47760_3.jpg"] },
    { codigo: "54186", nombre: "Aspirador Xiaomi Mi Robot Vacuum S40 OV81 / Bivolt - Blanco", cat: "Electrónicos", precio: "0", fotos: ["54186_1.jpg", "54186_2.jpg", "54186_3.jpg"] },
    { codigo: "55735", nombre: "Aspirador Xiaomi Mi Robot Vacuum S40 Pro OV71GL / Bivolt - Blanco", cat: "Electrónicos", precio: "0", fotos: ["55735_1.jpg", "55735_2.jpg", "55735_3.jpg"] },
    { codigo: "53992", nombre: "Aspiradora Xiaomi Mi Robot Vacuum S40C E101 / Bivolt - Blanco", cat: "Electrónicos", precio: "0", fotos: ["53992_1.jpg", "53992_2.jpg", "53992_3.jpg"] },
    { codigo: "53017", nombre: "Aspiradora Xiaomi Mi Robot Vacuum S40C E101 / Bivolt - Blanco", cat: "Electrónicos", precio: "0", fotos: ["53017_1.jpg", "53017_2.jpg", "53017_3.jpg"] },
    { codigo: "25578", nombre: "Aspirador Portátil Xiaomi Mi Vacuum Cleaner Mini SSXCQ01XY", cat: "Electrónicos", precio: "0", fotos: ["25578_1.jpg", "25578_2.jpg", "25578_3.jpg"] },
    { codigo: "49251", nombre: "Aspirador Xiaomi Mi Robot Vacumm X20 Max D109DL / 220V - Negro", cat: "Electrónicos", precio: "0", fotos: ["49251_1.jpg", "49251_2.jpg", "49251_3.jpg"] },
    { codigo: "49176", nombre: "Aspirador Xiaomi Mi Robot Vacumm X20 Pro D102GL / 110V - Blanco", cat: "Electrónicos", precio: "0", fotos: ["49176_1.jpg", "49176_2.jpg", "49176_3.jpg"] },
    { codigo: "49057", nombre: "Aspirador Xiaomi Mi Robot Vacumm X20 Pro D102GL / 220V - Blanco", cat: "Electrónicos", precio: "0", fotos: ["49057_1.jpg", "49057_2.jpg", "49057_3.jpg"] },
    { codigo: "45919", nombre: "Aspirador Xiaomi Mi Robot Vacuum X20+ C102 / 220V - Blanco", cat: "Electrónicos", precio: "0", fotos: ["45919_1.jpg", "45919_2.jpg", "45919_3.jpg"] },
    { codigo: "45942", nombre: "Aspirador Xiaomi Mi Robot Vacumm X20+ C102 / 110V - Blanco", cat: "Electrónicos", precio: "0", fotos: ["45942_1.jpg", "45942_2.jpg", "45942_3.jpg"] },
    { codigo: "56252", nombre: "Balanza Digital FTX KS-101 Cocina - 10KG", cat: "Hogar y Decoración", precio: "0", fotos: ["56252_1.jpg", "56252_2.jpg", "56252_3.jpg"] },
    { codigo: "44770", nombre: "Balanza Digital KRAB KBDC10 Cocina - 10KG", cat: "Hogar y Decoración", precio: "0", fotos: ["44770_1.jpg", "44770_2.jpg", "44770_3.jpg"] },
    { codigo: "34196", nombre: "Balanza Digital Comercial Quanta QTBD250 - 40KG", cat: "Electrónicos", precio: "0", fotos: ["34196_1.jpg", "34196_2.jpg", "34196_3.jpg"] },
    { codigo: "55681", nombre: "Balanza Digital Quanta QTBD250 Comercial 40KG + SF-400", cat: "Electrónicos", precio: "0", fotos: ["55681_1.jpg", "55681_2.jpg", "55681_3.jpg"] },
    { codigo: "52201", nombre: "Balanza Digital Satellite A-WS8801 - 180KG", cat: "Electrónicos", precio: "0", fotos: ["52201_1.jpg", "52201_2.jpg", "52201_3.jpg"] },
    { codigo: "52202", nombre: "Balanza Digital Satellite A-WS8811 Bluetooth / Negro", cat: "Electrónicos", precio: "0", fotos: ["52202_1.jpg", "52202_2.jpg", "52202_3.jpg"] },
    { codigo: "52204", nombre: "Balanza Digital Satellite A-WS8821 Negro - 180KG", cat: "Electrónicos", precio: "0", fotos: ["52204_1.jpg", "52204_2.jpg", "52204_3.jpg"] },
    { codigo: "52206", nombre: "Balanza Digital Satellite A-WS8831 Negro - 180KG", cat: "Electrónicos", precio: "0", fotos: ["52206_1.jpg", "52206_2.jpg", "52206_3.jpg"] },
    { codigo: "52207", nombre: "Balanza Digital Satellite A-WS8832 Blanco - 180KG", cat: "Electrónicos", precio: "0", fotos: ["52207_1.jpg", "52207_2.jpg", "52207_3.jpg"] },
    { codigo: "52220", nombre: "Balanza Digital Xiaomi Smart Scale S200 MJTZC02YM", cat: "Electrónicos", precio: "0", fotos: ["52220_1.jpg", "52220_2.jpg", "52220_3.jpg"] },
    { codigo: "52669", nombre: "Balanza Digital Xiaomi Smart Scale S200 MJTZC02YM - Gris", cat: "Electrónicos", precio: "0", fotos: ["52669_1.jpg", "52669_2.jpg", "52669_3.jpg"] },
    { codigo: "55167", nombre: "Banco de Corrida Fanatec Clubsport GT Cockpit - Blanco", cat: "Periféricos", precio: "0", fotos: ["55167_1.jpg", "55167_2.jpg", "55167_3.jpg"] },
    { codigo: "55165", nombre: "Banco de Corrida Fanatec Clubsport GT Cockpit - Negro", cat: "Periféricos", precio: "0", fotos: ["55165_1.jpg", "55165_2.jpg", "55165_3.jpg"] },
    { codigo: "35106", nombre: "Barbeador Quanta QTAPK20 Recargable - Gris (Kit 12 en 1)", cat: "Electrónicos", precio: "0", fotos: ["35106_1.jpg", "35106_2.jpg", "35106_3.jpg"] },
    { codigo: "48058", nombre: "Barbeador Quanta QTCAT55 Recargable - Negro", cat: "Electrónicos", precio: "0", fotos: ["48058_1.jpg", "48058_2.jpg", "48058_3.jpg"] },
    { codigo: "39552", nombre: "Barbeador Quanta QTCBA9200 Recargable / Bivolt - Negro", cat: "Electrónicos", precio: "0", fotos: ["39552_1.jpg", "39552_2.jpg", "39552_3.jpg"] },
    { codigo: "54160", nombre: "Barbeador Xiaomi S200 Mi Electric Shaver - Gris", cat: "Electrónicos", precio: "0", fotos: ["54160_1.jpg", "54160_2.jpg", "54160_3.jpg"] },
    { codigo: "55180", nombre: "Base Volante Direct Drive Fanatec CSL DD QR2 5NM - Negro", cat: "Periféricos", precio: "0", fotos: ["55180_1.jpg", "55180_2.jpg", "55180_3.jpg"] },
    { codigo: "51448", nombre: "Palo Selfie Quanta QTBSM310 Multuso - Negro (3x1)", cat: "Celulares y Tablets", precio: "0", fotos: ["51448_1.jpg", "51448_2.jpg", "51448_3.jpg"] },
    { codigo: "51486", nombre: "Pila Ecopower Alkaline Power 9V - 6LR61", cat: "Electrónicos", precio: "0", fotos: ["51486_1.jpg", "51486_2.jpg", "51486_3.jpg"] },
    { codigo: "54838", nombre: "Pila Mox Alkaline MO-23A Ultra / 12V - Kit 5", cat: "Electrónicos", precio: "0", fotos: ["54838_1.jpg", "54838_2.jpg", "54838_3.jpg"] },
    { codigo: "54534", nombre: "Batería Mox MO-2016 Lithium CR2016 / 3V", cat: "Electrónicos", precio: "0", fotos: ["54534_1.jpg", "54534_2.jpg", "54534_3.jpg"] },
    { codigo: "54535", nombre: "Batería Mox MO-2025 Lithium CR2025 / 3V", cat: "Electrónicos", precio: "0", fotos: ["54535_1.jpg", "54535_2.jpg", "54535_3.jpg"] },
    { codigo: "54536", nombre: "Batería Mox MO-2032 Lithium CR2032 / 3V", cat: "Electrónicos", precio: "0", fotos: ["54536_1.jpg", "54536_2.jpg", "54536_3.jpg"] },
    { codigo: "54537", nombre: "Batería Recargable Mox MO9V32 320MAH / 9V", cat: "Electrónicos", precio: "0", fotos: ["54537_1.jpg", "54537_2.jpg", "54537_3.jpg"] },
    { codigo: "49688", nombre: "Pila Philips Alkaline Power 9V - 6LR61P1B/97", cat: "Electrónicos", precio: "0", fotos: ["49688_1.jpg", "49688_2.jpg", "49688_3.jpg"] },
    { codigo: "56382", nombre: "Bicicleta Eléctrica Bluhan Ebike BK31 Hitway - Negro", cat: "Electrónicos", precio: "0", fotos: ["56382_1.jpg", "56382_2.jpg", "56382_3.jpg"] },
    { codigo: "56380", nombre: "Bicicleta Eléctrica Bluhan Ebike BK15 Evercross - Negro", cat: "Electrónicos", precio: "0", fotos: ["56380_1.jpg", "56380_2.jpg", "56380_3.jpg"] },
    { codigo: "56379", nombre: "Bicicleta Eléctrica Bluhan Ebike V8 Max - Negro", cat: "Electrónicos", precio: "0", fotos: ["56379_1.jpg", "56379_2.jpg", "56379_3.jpg"] },
    { codigo: "56476", nombre: "Cabina de Comando Fanatec Cockpit Clubsport GT Kit - Negro", cat: "Periféricos", precio: "0", fotos: ["56476_1.jpg", "56476_2.jpg", "56476_3.jpg"] },
    { codigo: "35907", nombre: "Cable Adaptador HDMI para VGA / Áudio - Negro Kolke KCA-429", cat: "Periféricos", precio: "0", fotos: ["35907_1.jpg", "35907_2.jpg", "35907_3.jpg"] },
    { codigo: "17791", nombre: "Cable Adaptador Conversor VGA Macho para HDMI Femea", cat: "Periféricos", precio: "0", fotos: ["17791_1.jpg", "17791_2.jpg", "17791_3.jpg"] },
    { codigo: "52524", nombre: "Cable Adaptador FTX HDMI Macho para VGA Hembra - Gris", cat: "Periféricos", precio: "0", fotos: ["52524_1.jpg", "52524_2.jpg", "52524_3.jpg"] },
    { codigo: "28401", nombre: "Cabo Adaptador HDMI Macho para VGA Hembra - Quanta", cat: "Periféricos", precio: "0", fotos: ["28401_1.jpg", "28401_2.jpg", "28401_3.jpg"] },
    { codigo: "52538", nombre: "Cable Adaptador FTX USB-C Macho para HDMI Hembra 4K", cat: "Periféricos", precio: "0", fotos: ["52538_1.jpg", "52538_2.jpg", "52538_3.jpg"] },
    { codigo: "51918", nombre: "Cable Adaptador Satellite AL-80 USB-C Macho para HDMI 4K", cat: "Periféricos", precio: "0", fotos: ["51918_1.jpg", "51918_2.jpg", "51918_3.jpg"] },
    { codigo: "19635", nombre: "Cable Adaptador USB-C Macho para USB 3.0 Hembra OTG", cat: "Periféricos", precio: "0", fotos: ["19635_1.jpg", "19635_2.jpg", "19635_3.jpg"] },
    { codigo: "52530", nombre: "Cable Adaptador FTX USB-C Macho para USB 3.0 Hembra OTG", cat: "Periféricos", precio: "0", fotos: ["52530_1.jpg", "52530_2.jpg", "52530_3.jpg"] },
    { codigo: "42266", nombre: "Cable Adaptador USB-C Macho para USB 3.0 Hembra Satellite", cat: "Periféricos", precio: "0", fotos: ["42266_1.jpg", "42266_2.jpg", "42266_3.jpg"] },
    { codigo: "42262", nombre: "Cable Adaptador USB-C Macho para Audio 3.5mm Hembra", cat: "Periféricos", precio: "0", fotos: ["42262_1.jpg", "42262_2.jpg", "42262_3.jpg"] },
    { codigo: "21775", nombre: "Cable Adaptador USB 3.0 para HDMI Hembra - Negro", cat: "Periféricos", precio: "0", fotos: ["21775_1.jpg", "21775_2.jpg", "21775_3.jpg"] },
    { codigo: "40174", nombre: "Cable Adaptador USB 3.0 para HDMI Hembra / VGA Hembra 2K", cat: "Periféricos", precio: "0", fotos: ["40174_1.jpg", "40174_2.jpg", "40174_3.jpg"] },
    { codigo: "55719", nombre: "Cable Apple Lightning A USB MD819FE/A 2M - Blanco", cat: "Apple", precio: "0", fotos: ["55719_1.jpg", "55719_2.jpg", "55719_3.jpg"] },
    { codigo: "35488", nombre: "Cable Apple USB-C Macho A USB-C MLL82ZM/A 2M", cat: "Apple", precio: "0", fotos: ["35488_1.jpg", "35488_2.jpg", "35488_3.jpg"] },
    { codigo: "32023", nombre: "Cable Apple USB-C Macho A Lightning MM0A3AM/A 1M", cat: "Apple", precio: "0", fotos: ["32023_1.jpg", "32023_2.jpg", "32023_3.jpg"] },
    { codigo: "49729", nombre: "Cable Apple USB-C Macho A Lightning MQGH2FE/A 2M", cat: "Apple", precio: "0", fotos: ["49729_1.jpg", "49729_2.jpg", "49729_3.jpg"] },
    { codigo: "56519", nombre: "CABO APPLE MQKJ3ZE/A TYPE-C MACHO / TYPE-C MACHO 1M", cat: "Apple", precio: "0", fotos: ["56519_1.jpg", "56519_2.jpg", "56519_3.jpg"] },
    { codigo: "44262", nombre: "Cable Apple USB-C Macho A USB-C MU2G3ZE/A 2M", cat: "Apple", precio: "0", fotos: ["44262_1.jpg", "44262_2.jpg", "44262_3.jpg"] },
    { codigo: "48563", nombre: "Cable Apple USB-C Macho A Lightning MUQ93ZM/A 1M", cat: "Apple", precio: "0", fotos: ["48563_1.jpg", "48563_2.jpg", "48563_3.jpg"] },
    { codigo: "54040", nombre: "Cable Apple MW2R3ZE/A USB-C a Lightning / 2M", cat: "Apple", precio: "0", fotos: ["54040_1.jpg", "54040_2.jpg", "54040_3.jpg"] },
    { codigo: "51040", nombre: "Cable Apple USB-C Macho A USB-C Macho MW493ZM/A / 1M", cat: "Apple", precio: "0", fotos: ["51040_1.jpg", "51040_2.jpg", "51040_3.jpg"] },
    { codigo: "52319", nombre: "Cable Apple USB-C Macho para USB-C MYQT3ZM/A 2M", cat: "Apple", precio: "0", fotos: ["52319_1.jpg", "52319_2.jpg", "52319_3.jpg"] },
    { codigo: "35278", nombre: "Cable Áudio Estereo 2 Macho para 1 Áudio Hembra", cat: "Periféricos", precio: "0", fotos: ["35278_1.jpg", "35278_2.jpg", "35278_3.jpg"] },
    { codigo: "52542", nombre: "Cable Auxiliar Audio Estereo FTX 1M / 3.5MM - Negro", cat: "Periféricos", precio: "0", fotos: ["52542_1.jpg", "52542_2.jpg", "52542_3.jpg"] },
    { codigo: "52540", nombre: "Cabo Auxiliar Audio Estereo FTX 1.8M / 3.5MM - Negro", cat: "Periféricos", precio: "0", fotos: ["52540_1.jpg", "52540_2.jpg", "52540_3.jpg"] },
    { codigo: "52543", nombre: "Cable Auxiliar Audio Estereo FTX 3M / 3.5MM - Negro", cat: "Periféricos", precio: "0", fotos: ["52543_1.jpg", "52543_2.jpg", "52543_3.jpg"] },
    { codigo: "17248", nombre: "Cable de Energia para fuente y Gabinete - 1.3M", cat: "Periféricos", precio: "0", fotos: ["17248_1.jpg", "17248_2.jpg", "17248_3.jpg"] },
    { codigo: "45747", nombre: "Cable de alimentación para fuente y Gabinete - 1.5M", cat: "Periféricos", precio: "0", fotos: ["45747_1.jpg", "45747_2.jpg", "45747_3.jpg"] }
];

const grid = document.getElementById('productGrid');
const counter = document.getElementById('productCounter');

// FUNCIÓN PARA RENDERIZAR LA GRID
function render(items) {
    if (!grid) return;
    counter.innerText = `Mostrando ${items.length} productos`;
    
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="abrirModal('${p.codigo}')">
            <p class="code-tag">CÓDIGO: ${p.codigo}</p>
            <img src="assets/productos/${p.fotos[0]}" onerror="this.src='https://via.placeholder.com/200?text=DICENTER'">
            <h3 style="font-size:14px; margin: 10px 0; height: 40px; overflow: hidden;">${p.nombre}</h3>
            <div class="product-price">Gs. ${p.precio}</div>
            <button class="btn-whatsapp-small">Consultar Disponibilidad</button>
        </div>
    `).join('');
}

// FUNCIÓN PARA FILTRAR POR CATEGORÍA O BÚSQUEDA
function filtrar(termino) {
    const filtrados = productos.filter(p => 
        p.cat.toLowerCase().includes(termino.toLowerCase()) || 
        p.nombre.toLowerCase().includes(termino.toLowerCase())
    );
    render(filtrados);
}

// FUNCIÓN PARA ABRIR EL MODAL DE DETALLES
function abrirModal(cod) {
    const p = productos.find(prod => prod.codigo === cod);
    if(!p) return;
    
    const mainImg = document.getElementById('modalImg');
    document.getElementById('modalTitle').innerText = p.nombre;
    document.getElementById('modalCode').innerText = "CÓDIGO: " + p.codigo;
    
    // Mostramos el precio en el modal
    const modalPriceElement = document.getElementById('modalPrice');
    if(modalPriceElement) modalPriceElement.innerText = "Gs. " + p.precio;
    
    mainImg.src = "assets/productos/" + p.fotos[0];
    
    // Generamos las miniaturas
    const thumbsContainer = document.getElementById('modalThumbs');
    thumbsContainer.innerHTML = "";
    p.fotos.forEach(foto => {
        const imgThumb = document.createElement('img');
        imgThumb.src = "assets/productos/" + foto;
        imgThumb.onclick = () => { mainImg.src = imgThumb.src; };
        imgThumb.onerror = () => { imgThumb.style.display = 'none'; };
        thumbsContainer.appendChild(imgThumb);
    });

    // Acción del botón de WhatsApp: Consulta Directa con detalles
    document.getElementById('waBtn').onclick = () => {
        const msg = encodeURIComponent(`¡Hola DICENTER! Consulto por: ${p.nombre} (Cod: ${p.codigo}) por Gs. ${p.precio}. ¿Tienen disponibilidad?`);
        window.open(`https://wa.me/5959XXXXXXXX?text=${msg}`, '_blank'); // REEMPLAZA LAS X CON TU NÚMERO
    };
    
    document.getElementById('productModal').style.display = "block";
}

// CERRAR MODAL
function cerrarModal() {
    document.getElementById('productModal').style.display = "none";
}

// EVENTO DE BÚSQUEDA EN TIEMPO REAL
document.getElementById('mainSearch').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(val) || 
        p.codigo.toLowerCase().includes(val)
    );
    render(filtrados);
});

// CERRAR MODAL AL CLICKEAR FUERA DEL CUADRO
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) cerrarModal();
}

// INICIO INMEDIATO
render(productos);