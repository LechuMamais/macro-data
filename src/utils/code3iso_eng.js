const countriesWithCodes = [
    { name: "Afghanistan", code3iso: "AFG" },
    { name: "Albania", code3iso: "ALB" },
    { name: "Algeria", code3iso: "DZA" },
    { name: "Andorra", code3iso: "AND" },
    { name: "Angola", code3iso: "AGO" },
    { name: "Antigua and Barbuda", code3iso: "ATG" },
    { name: "Argentina", code3iso: "ARG" },
    { name: "Armenia", code3iso: "ARM" },
    { name: "Australia", code3iso: "AUS" },
    { name: "Austria", code3iso: "AUT" },
    { name: "Azerbaijan", code3iso: "AZE" },
    { name: "Bahamas", code3iso: "BHS" },
    { name: "Bahrain", code3iso: "BHR" },
    { name: "Bangladesh", code3iso: "BGD" },
    { name: "Barbados", code3iso: "BRB" },
    { name: "Belarus", code3iso: "BLR" },
    { name: "Belgium", code3iso: "BEL" },
    { name: "Belize", code3iso: "BLZ" },
    { name: "Benin", code3iso: "BEN" },
    { name: "Bhutan", code3iso: "BTN" },
    { name: "Bolivia", code3iso: "BOL" },
    { name: "Bosnia and Herzegovina", code3iso: "BIH" },
    { name: "Botswana", code3iso: "BWA" },
    { name: "Brazil", code3iso: "BRA" },
    { name: "Brunei", code3iso: "BRN" },
    { name: "Bulgaria", code3iso: "BGR" },
    { name: "Burkina Faso", code3iso: "BFA" },
    { name: "Burundi", code3iso: "BDI" },
    { name: "Cabo Verde", code3iso: "CPV" },
    { name: "Cambodia", code3iso: "KHM" },
    { name: "Cameroon", code3iso: "CMR" },
    { name: "Canada", code3iso: "CAN" },
    { name: "Central African Republic", code3iso: "CAF" },
    { name: "Chad", code3iso: "TCD" },
    { name: "Chile", code3iso: "CHL" },
    { name: "China", code3iso: "CHN" },
    { name: "Colombia", code3iso: "COL" },
    { name: "Comoros", code3iso: "COM" },
    { name: "Congo (Congo-Brazzaville)", code3iso: "COG" },
    { name: "Costa Rica", code3iso: "CRI" },
    { name: "Croatia", code3iso: "HRV" },
    { name: "Cuba", code3iso: "CUB" },
    { name: "Cyprus", code3iso: "CYP" },
    { name: "Czechia (Czech Republic)", code3iso: "CZE" },
    { name: "Denmark", code3iso: "DNK" },
    { name: "Djibouti", code3iso: "DJI" },
    { name: "Dominica", code3iso: "DMA" },
    { name: "Dominican Republic", code3iso: "DOM" },
    { name: "Ecuador", code3iso: "ECU" },
    { name: "Egypt", code3iso: "EGY" },
    { name: "El Salvador", code3iso: "SLV" },
    { name: "Equatorial Guinea", code3iso: "GNQ" },
    { name: "Eritrea", code3iso: "ERI" },
    { name: "Estonia", code3iso: "EST" },
    { name: "Eswatini (fmr. Swaziland)", code3iso: "SWZ" },
    { name: "Ethiopia", code3iso: "ETH" },
    { name: "Fiji", code3iso: "FJI" },
    { name: "Finland", code3iso: "FIN" },
    { name: "France", code3iso: "FRA" },
    { name: "Gabon", code3iso: "GAB" },
    { name: "Gambia", code3iso: "GMB" },
    { name: "Georgia", code3iso: "GEO" },
    { name: "Germany", code3iso: "DEU" },
    { name: "Ghana", code3iso: "GHA" },
    { name: "Greece", code3iso: "GRC" },
    { name: "Grenada", code3iso: "GRD" },
    { name: "Guatemala", code3iso: "GTM" },
    { name: "Guinea", code3iso: "GIN" },
    { name: "Guinea-Bissau", code3iso: "GNB" },
    { name: "Guyana", code3iso: "GUY" },
    { name: "Haiti", code3iso: "HTI" },
    { name: "Honduras", code3iso: "HND" },
    { name: "Hungary", code3iso: "HUN" },
    { name: "Iceland", code3iso: "ISL" },
    { name: "India", code3iso: "IND" },
    { name: "Indonesia", code3iso: "IDN" },
    { name: "Iran", code3iso: "IRN" },
    { name: "Iraq", code3iso: "IRQ" },
    { name: "Ireland", code3iso: "IRL" },
    { name: "Israel", code3iso: "ISR" },
    { name: "Italy", code3iso: "ITA" },
    { name: "Jamaica", code3iso: "JAM" },
    { name: "Japan", code3iso: "JPN" },
    { name: "Jordan", code3iso: "JOR" },
    { name: "Kazakhstan", code3iso: "KAZ" },
    { name: "Kenya", code3iso: "KEN" },
    { name: "Kiribati", code3iso: "KIR" },
    { name: "Kosovo", code3iso: "XKX" },
    { name: "Kuwait", code3iso: "KWT" },
    { name: "Kyrgyzstan", code3iso: "KGZ" },
    { name: "Laos", code3iso: "LAO" },
    { name: "Latvia", code3iso: "LVA" },
    { name: "Lebanon", code3iso: "LBN" },
    { name: "Lesotho", code3iso: "LSO" },
    { name: "Liberia", code3iso: "LBR" },
    { name: "Libya", code3iso: "LBY" },
    { name: "Liechtenstein", code3iso: "LIE" },
    { name: "Lithuania", code3iso: "LTU" },
    { name: "Luxembourg", code3iso: "LUX" },
    { name: "Madagascar", code3iso: "MDG" },
    { name: "Malawi", code3iso: "MWI" },
    { name: "Malaysia", code3iso: "MYS" },
    { name: "Maldives", code3iso: "MDV" },
    { name: "Mali", code3iso: "MLI" },
    { name: "Malta", code3iso: "MLT" },
    { name: "Marshall Islands", code3iso: "MHL" },
    { name: "Mauritania", code3iso: "MRT" },
    { name: "Mauritius", code3iso: "MUS" },
    { name: "Mexico", code3iso: "MEX" },
    { name: "Micronesia", code3iso: "FSM" },
    { name: "Moldova", code3iso: "MDA" },
    { name: "Monaco", code3iso: "MCO" },
    { name: "Mongolia", code3iso: "MNG" },
    { name: "Montenegro", code3iso: "MNE" },
    { name: "Morocco", code3iso: "MAR" },
    { name: "Mozambique", code3iso: "MOZ" },
    { name: "Myanmar (formerly Burma)", code3iso: "MMR" },
    { name: "Namibia", code3iso: "NAM" },
    { name: "Nauru", code3iso: "NRU" },
    { name: "Nepal", code3iso: "NPL" },
    { name: "Netherlands", code3iso: "NLD" },
    { name: "New Zealand", code3iso: "NZL" },
    { name: "Nicaragua", code3iso: "NIC" },
    { name: "Niger", code3iso: "NER" },
    { name: "Nigeria", code3iso: "NGA" },
    { name: "North Korea", code3iso: "PRK" },
    { name: "North Macedonia", code3iso: "MKD" },
    { name: "Norway", code3iso: "NOR" },
    { name: "Oman", code3iso: "OMN" },
    { name: "Pakistan", code3iso: "PAK" },
    { name: "Palau", code3iso: "PLW" },
    { name: "Palestine State", code3iso: "PSE" },
    { name: "Panama", code3iso: "PAN" },
    { name: "Papua New Guinea", code3iso: "PNG" },
    { name: "Paraguay", code3iso: "PRY" },
    { name: "Peru", code3iso: "PER" },
    { name: "Philippines", code3iso: "PHL" },
    { name: "Poland", code3iso: "POL" },
    { name: "Portugal", code3iso: "PRT" },
    { name: "Qatar", code3iso: "QAT" },
    { name: "Romania", code3iso: "ROU" },
    { name: "Russia", code3iso: "RUS" },
    { name: "Rwanda", code3iso: "RWA" },
    { name: "Saint Kitts and Nevis", code3iso: "KNA" },
    { name: "Saint Lucia", code3iso: "LCA" },
    { name: "Saint Vincent and the Grenadines", code3iso: "VCT" },
    { name: "Samoa", code3iso: "WSM" },
    { name: "San Marino", code3iso: "SMR" },
    { name: "Sao Tome and Principe", code3iso: "STP" },
    { name: "Saudi Arabia", code3iso: "SAU" },
    { name: "Senegal", code3iso: "SEN" },
    { name: "Serbia", code3iso: "SRB" },
    { name: "Seychelles", code3iso: "SYC" },
    { name: "Sierra Leone", code3iso: "SLE" },
    { name: "Singapore", code3iso: "SGP" },
    { name: "Slovakia", code3iso: "SVK" },
    { name: "Slovenia", code3iso: "SVN" },
    { name: "Solomon Islands", code3iso: "SLB" },
    { name: "Somalia", code3iso: "SOM" },
    { name: "South Africa", code3iso: "ZAF" },
    { name: "South Korea", code3iso: "KOR" },
    { name: "South Sudan", code3iso: "SSD" },
    { name: "Spain", code3iso: "ESP" },
    { name: "Sri Lanka", code3iso: "LKA" },
    { name: "Sudan", code3iso: "SDN" },
    { name: "Suriname", code3iso: "SUR" },
    { name: "Sweden", code3iso: "SWE" },
    { name: "Switzerland", code3iso: "CHE" },
    { name: "Syria", code3iso: "SYR" },
    { name: "Tajikistan", code3iso: "TJK" },
    { name: "Tanzania", code3iso: "TZA" },
    { name: "Thailand", code3iso: "THA" },
    { name: "Timor-Leste", code3iso: "TLS" },
    { name: "Togo", code3iso: "TGO" },
    { name: "Tonga", code3iso: "TON" },
    { name: "Trinidad and Tobago", code3iso: "TTO" },
    { name: "Tunisia", code3iso: "TUN" },
    { name: "Turkey", code3iso: "TUR" },
    { name: "Turkmenistan", code3iso: "TKM" },
    { name: "Tuvalu", code3iso: "TUV" },
    { name: "Uganda", code3iso: "UGA" },
    { name: "Ukraine", code3iso: "UKR" },
    { name: "United Arab Emirates", code3iso: "ARE" },
    { name: "United Kingdom", code3iso: "GBR" },
    { name: "United States of America", code3iso: "USA" },
    { name: "Uruguay", code3iso: "URY" },
    { name: "Uzbekistan", code3iso: "UZB" },
    { name: "Vanuatu", code3iso: "VUT" },
    { name: "Vatican City (Holy See)", code3iso: "VAT" },
    { name: "Venezuela", code3iso: "VEN" },
    { name: "Vietnam", code3iso: "VNM" },
    { name: "Yemen", code3iso: "YEM" },
    { name: "Zambia", code3iso: "ZMB" },
    { name: "Zimbabwe", code3iso: "ZWE" }
  ];
  
  export default countriesWithCodes;
  