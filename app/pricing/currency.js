export const BASE_CURRENCY = "INR";

const COUNTRY_CURRENCY_TABLE =
  "AD:EUR AE:AED AF:AFN AG:XCD AI:XCD AL:ALL AM:AMD AO:AOA AR:ARS AS:USD AT:EUR AU:AUD AW:AWG AX:EUR AZ:AZN " +
  "BA:BAM BB:BBD BD:BDT BE:EUR BF:XOF BG:EUR BH:BHD BI:BIF BJ:XOF BL:EUR BM:BMD BN:BND BO:BOB BQ:USD BR:BRL " +
  "BS:BSD BT:BTN BV:NOK BW:BWP BY:BYN BZ:BZD CA:CAD CC:AUD CD:CDF CF:XAF CG:XAF CH:CHF CI:XOF CK:NZD CL:CLP " +
  "CM:XAF CN:CNY CO:COP CR:CRC CU:CUP CV:CVE CW:XCG CX:AUD CY:EUR CZ:CZK DE:EUR DJ:DJF DK:DKK DM:XCD DO:DOP " +
  "DZ:DZD EC:USD EE:EUR EG:EGP EH:MAD ER:ERN ES:EUR ET:ETB FI:EUR FJ:FJD FK:FKP FM:USD FO:DKK FR:EUR GA:XAF " +
  "GB:GBP GD:XCD GE:GEL GF:EUR GG:GBP GH:GHS GI:GIP GL:DKK GM:GMD GN:GNF GP:EUR GQ:XAF GR:EUR GS:GBP GT:GTQ " +
  "GU:USD GW:XOF GY:GYD HK:HKD HM:AUD HN:HNL HR:EUR HT:HTG HU:HUF ID:IDR IE:EUR IL:ILS IM:GBP IN:INR IO:USD " +
  "IQ:IQD IR:IRR IS:ISK IT:EUR JE:GBP JM:JMD JO:JOD JP:JPY KE:KES KG:KGS KH:KHR KI:AUD KM:KMF KN:XCD KP:KPW " +
  "KR:KRW KW:KWD KY:KYD KZ:KZT LA:LAK LB:LBP LC:XCD LI:CHF LK:LKR LR:LRD LS:LSL LT:EUR LU:EUR LV:EUR LY:LYD " +
  "MA:MAD MC:EUR MD:MDL ME:EUR MF:EUR MG:MGA MH:USD MK:MKD ML:XOF MM:MMK MN:MNT MO:MOP MP:USD MQ:EUR MR:MRU " +
  "MS:XCD MT:EUR MU:MUR MV:MVR MW:MWK MX:MXN MY:MYR MZ:MZN NA:NAD NC:XPF NE:XOF NF:AUD NG:NGN NI:NIO NL:EUR " +
  "NO:NOK NP:NPR NR:AUD NU:NZD NZ:NZD OM:OMR PA:USD PE:PEN PF:XPF PG:PGK PH:PHP PK:PKR PL:PLN PM:EUR PN:NZD " +
  "PR:USD PS:ILS PT:EUR PW:USD PY:PYG QA:QAR RE:EUR RO:RON RS:RSD RU:RUB RW:RWF SA:SAR SB:SBD SC:SCR SD:SDG " +
  "SE:SEK SG:SGD SH:SHP SI:EUR SJ:NOK SK:EUR SL:SLE SM:EUR SN:XOF SO:SOS SR:SRD SS:SSP ST:STN SV:USD SX:XCG " +
  "SY:SYP SZ:SZL TC:USD TD:XAF TF:EUR TG:XOF TH:THB TJ:TJS TK:NZD TL:USD TM:TMT TN:TND TO:TOP TR:TRY TT:TTD " +
  "TV:AUD TW:TWD TZ:TZS UA:UAH UG:UGX UM:USD US:USD UY:UYU UZ:UZS VA:EUR VC:XCD VE:VES VG:USD VI:USD VN:VND " +
  "VU:VUV WF:XPF WS:WST XK:EUR YE:YER YT:EUR ZA:ZAR ZM:ZMW ZW:USD";

export const COUNTRY_CURRENCY = Object.fromEntries(
  COUNTRY_CURRENCY_TABLE.split(" ").map((pair) => pair.split(":")),
);

// Exact IANA zones first, then area prefixes for countries that span many zones.
const TIMEZONE_TABLE =
  "Asia/Kolkata:IN Asia/Calcutta:IN Asia/Dubai:AE Asia/Kabul:AF Europe/Tirane:AL Asia/Yerevan:AM Africa/Luanda:AO " +
  "Europe/Vienna:AT Asia/Baku:AZ Europe/Sarajevo:BA America/Barbados:BB Asia/Dhaka:BD Asia/Dacca:BD Europe/Brussels:BE " +
  "Africa/Ouagadougou:BF Europe/Sofia:BG Asia/Bahrain:BH Africa/Bujumbura:BI Africa/Porto-Novo:BJ Atlantic/Bermuda:BM " +
  "Asia/Brunei:BN America/La_Paz:BO America/Nassau:BS Asia/Thimphu:BT Africa/Gaborone:BW Europe/Minsk:BY " +
  "America/Belize:BZ Africa/Kinshasa:CD Africa/Lubumbashi:CD Africa/Bangui:CF Africa/Brazzaville:CG Europe/Zurich:CH " +
  "Africa/Abidjan:CI Pacific/Rarotonga:CK America/Santiago:CL Pacific/Easter:CL Africa/Douala:CM Asia/Shanghai:CN " +
  "Asia/Urumqi:CN Asia/Chongqing:CN America/Bogota:CO America/Costa_Rica:CR America/Havana:CU Atlantic/Cape_Verde:CV " +
  "America/Curacao:CW Asia/Nicosia:CY Asia/Famagusta:CY Europe/Nicosia:CY Europe/Prague:CZ Europe/Berlin:DE " +
  "Europe/Busingen:DE Africa/Djibouti:DJ Europe/Copenhagen:DK America/Santo_Domingo:DO Africa/Algiers:DZ " +
  "America/Guayaquil:EC Pacific/Galapagos:EC Europe/Tallinn:EE Africa/Cairo:EG Africa/El_Aaiun:EH Africa/Asmara:ER " +
  "Europe/Madrid:ES Africa/Ceuta:ES Atlantic/Canary:ES Africa/Addis_Ababa:ET Europe/Helsinki:FI Pacific/Fiji:FJ " +
  "Atlantic/Stanley:FK Atlantic/Faroe:FO Europe/Paris:FR Africa/Libreville:GA Europe/London:GB Europe/Belfast:GB " +
  "Asia/Tbilisi:GE America/Cayenne:GF Europe/Guernsey:GG Africa/Accra:GH Europe/Gibraltar:GI America/Nuuk:GL " +
  "America/Godthab:GL Africa/Banjul:GM Africa/Conakry:GN America/Guadeloupe:GP Africa/Malabo:GQ Europe/Athens:GR " +
  "America/Guatemala:GT Pacific/Guam:GU Africa/Bissau:GW America/Guyana:GY Asia/Hong_Kong:HK America/Tegucigalpa:HN " +
  "Europe/Zagreb:HR America/Port-au-Prince:HT Europe/Budapest:HU Asia/Jakarta:ID Asia/Makassar:ID Asia/Jayapura:ID " +
  "Asia/Pontianak:ID Europe/Dublin:IE Asia/Jerusalem:IL Asia/Tel_Aviv:IL Europe/Isle_of_Man:IM Asia/Baghdad:IQ " +
  "Asia/Tehran:IR Atlantic/Reykjavik:IS Europe/Rome:IT Europe/Jersey:JE America/Jamaica:JM Asia/Amman:JO Asia/Tokyo:JP " +
  "Africa/Nairobi:KE Asia/Bishkek:KG Asia/Phnom_Penh:KH Pacific/Tarawa:KI Indian/Comoro:KM Asia/Pyongyang:KP " +
  "Asia/Seoul:KR Asia/Kuwait:KW America/Cayman:KY Asia/Almaty:KZ Asia/Qostanay:KZ Asia/Aqtobe:KZ Asia/Aqtau:KZ " +
  "Asia/Atyrau:KZ Asia/Oral:KZ Asia/Qyzylorda:KZ Asia/Vientiane:LA Asia/Beirut:LB Europe/Vaduz:LI Asia/Colombo:LK " +
  "Africa/Monrovia:LR Africa/Maseru:LS Europe/Vilnius:LT Europe/Luxembourg:LU Europe/Riga:LV Africa/Tripoli:LY " +
  "Africa/Casablanca:MA Europe/Monaco:MC Europe/Chisinau:MD Europe/Podgorica:ME Indian/Antananarivo:MG " +
  "Pacific/Majuro:MH Europe/Skopje:MK Africa/Bamako:ML Asia/Yangon:MM Asia/Rangoon:MM Asia/Ulaanbaatar:MN " +
  "Asia/Macau:MO America/Martinique:MQ Africa/Nouakchott:MR Europe/Malta:MT Indian/Mauritius:MU Indian/Maldives:MV " +
  "Africa/Blantyre:MW Asia/Kuala_Lumpur:MY Asia/Kuching:MY Africa/Maputo:MZ Africa/Windhoek:NA Pacific/Noumea:NC " +
  "Africa/Niamey:NE Pacific/Norfolk:NF Africa/Lagos:NG America/Managua:NI Europe/Amsterdam:NL Europe/Oslo:NO " +
  "Asia/Kathmandu:NP Asia/Katmandu:NP Pacific/Nauru:NR Pacific/Niue:NU Pacific/Auckland:NZ Pacific/Chatham:NZ " +
  "Asia/Muscat:OM America/Panama:PA America/Lima:PE Pacific/Tahiti:PF Pacific/Port_Moresby:PG Asia/Manila:PH " +
  "Asia/Karachi:PK Europe/Warsaw:PL America/Puerto_Rico:PR Asia/Gaza:PS Asia/Hebron:PS Europe/Lisbon:PT " +
  "Atlantic/Madeira:PT Atlantic/Azores:PT Pacific/Palau:PW America/Asuncion:PY Asia/Qatar:QA Indian/Reunion:RE " +
  "Europe/Bucharest:RO Europe/Belgrade:RS Africa/Kigali:RW Asia/Riyadh:SA Pacific/Guadalcanal:SB Indian/Mahe:SC " +
  "Africa/Khartoum:SD Europe/Stockholm:SE Asia/Singapore:SG Europe/Ljubljana:SI Europe/Bratislava:SK " +
  "Africa/Freetown:SL Europe/San_Marino:SM Africa/Dakar:SN Africa/Mogadishu:SO America/Paramaribo:SR Africa/Juba:SS " +
  "Africa/Sao_Tome:ST America/El_Salvador:SV Asia/Damascus:SY Africa/Mbabane:SZ Africa/Ndjamena:TD Africa/Lome:TG " +
  "Asia/Bangkok:TH Asia/Dushanbe:TJ Asia/Dili:TL Asia/Ashgabat:TM Africa/Tunis:TN Pacific/Tongatapu:TO " +
  "Europe/Istanbul:TR Asia/Istanbul:TR America/Port_of_Spain:TT Pacific/Funafuti:TV Asia/Taipei:TW " +
  "Africa/Dar_es_Salaam:TZ Europe/Kyiv:UA Europe/Kiev:UA Europe/Simferopol:UA Europe/Uzhgorod:UA " +
  "Europe/Zaporozhye:UA Africa/Kampala:UG America/Montevideo:UY Asia/Tashkent:UZ Asia/Samarkand:UZ Europe/Vatican:VA " +
  "America/Caracas:VE Asia/Ho_Chi_Minh:VN Asia/Saigon:VN Pacific/Efate:VU Pacific/Apia:WS Asia/Aden:YE " +
  "Indian/Mayotte:YT Africa/Johannesburg:ZA Africa/Lusaka:ZM Africa/Harare:ZW America/Mexico_City:MX " +
  "America/Cancun:MX America/Merida:MX America/Monterrey:MX America/Matamoros:MX America/Chihuahua:MX " +
  "America/Ciudad_Juarez:MX America/Ojinaga:MX America/Mazatlan:MX America/Bahia_Banderas:MX America/Hermosillo:MX " +
  "America/Tijuana:MX America/Sao_Paulo:BR America/Manaus:BR America/Fortaleza:BR America/Recife:BR " +
  "America/Belem:BR America/Bahia:BR America/Cuiaba:BR America/Campo_Grande:BR America/Porto_Velho:BR " +
  "America/Rio_Branco:BR America/Boa_Vista:BR America/Maceio:BR America/Araguaina:BR America/Santarem:BR " +
  "America/Noronha:BR America/Eirunepe:BR America/Toronto:CA America/Vancouver:CA America/Edmonton:CA " +
  "America/Winnipeg:CA America/Halifax:CA America/St_Johns:CA America/Regina:CA America/Montreal:CA " +
  "America/Moncton:CA America/Whitehorse:CA America/Yellowknife:CA America/Iqaluit:CA America/Glace_Bay:CA " +
  "America/Goose_Bay:CA America/Dawson_Creek:CA America/Fort_Nelson:CA America/Swift_Current:CA America/Dawson:CA " +
  "America/Rankin_Inlet:CA America/Cambridge_Bay:CA America/Inuvik:CA America/Resolute:CA America/Atikokan:CA " +
  "America/Blanc-Sablon:CA America/Creston:CA Europe/Moscow:RU Europe/Kaliningrad:RU Europe/Samara:RU " +
  "Europe/Volgograd:RU Europe/Saratov:RU Europe/Ulyanovsk:RU Europe/Astrakhan:RU Europe/Kirov:RU " +
  "Asia/Yekaterinburg:RU Asia/Omsk:RU Asia/Novosibirsk:RU Asia/Barnaul:RU Asia/Tomsk:RU Asia/Novokuznetsk:RU " +
  "Asia/Krasnoyarsk:RU Asia/Irkutsk:RU Asia/Chita:RU Asia/Yakutsk:RU Asia/Khandyga:RU Asia/Vladivostok:RU " +
  "Asia/Ust-Nera:RU Asia/Magadan:RU Asia/Sakhalin:RU Asia/Srednekolymsk:RU Asia/Kamchatka:RU Asia/Anadyr:RU " +
  "America/Anchorage:US America/Adak:US America/Boise:US America/Chicago:US America/Denver:US America/Detroit:US " +
  "America/Juneau:US America/Los_Angeles:US America/New_York:US America/Phoenix:US America/Sitka:US " +
  "America/Menominee:US America/Metlakatla:US America/Nome:US America/Yakutat:US Pacific/Honolulu:US " +
  "America/Argentina/Buenos_Aires:AR America/Buenos_Aires:AR";

const TIMEZONE_COUNTRY = Object.fromEntries(
  TIMEZONE_TABLE.split(" ").map((pair) => pair.split(":")),
);

const TIMEZONE_PREFIX = [
  ["Australia/", "AU"],
  ["America/Argentina/", "AR"],
  ["America/Indiana/", "US"],
  ["America/Kentucky/", "US"],
  ["America/North_Dakota/", "US"],
  ["US/", "US"],
  ["Canada/", "CA"],
  ["Brazil/", "BR"],
];

export function countryFromTimezone() {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (TIMEZONE_COUNTRY[zone]) return TIMEZONE_COUNTRY[zone];
    const prefix = TIMEZONE_PREFIX.find(([start]) => zone.startsWith(start));
    return prefix ? prefix[1] : null;
  } catch {
    return null;
  }
}

// Called from the browser so the lookup sees the visitor's own IP, including a VPN exit.
const IP_LOOKUPS = [
  ["https://get.geojs.io/v1/ip/country.json", (data) => data?.country],
  ["https://api.country.is/", (data) => data?.country],
];

export async function countryFromIp() {
  for (const [url, pick] of IP_LOOKUPS) {
    try {
      const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(2500) });
      if (!response.ok) continue;
      const country = String(pick(await response.json()) || "").toUpperCase();
      if (/^[A-Z]{2}$/.test(country)) return country;
    } catch {}
  }
  return null;
}

export function countryFromLocale() {
  if (typeof navigator === "undefined") return null;
  for (const tag of navigator.languages || [navigator.language]) {
    const region = tag && tag.split("-")[1];
    if (region && region.length === 2 && COUNTRY_CURRENCY[region.toUpperCase()]) {
      return region.toUpperCase();
    }
  }
  return null;
}

export function currencyForCountry(country) {
  return (country && COUNTRY_CURRENCY[country.toUpperCase()]) || BASE_CURRENCY;
}

/** Converts a base-currency price and rounds it to a tidy local amount. */
export function convertPrice(price, rate) {
  if (!price) return 0;
  const value = price * rate;
  if (value < 10) return Math.round(value * 10) / 10;
  if (value < 1000) return Math.round(value);
  const step = 10 ** (Math.floor(Math.log10(value)) - 2);
  return Math.round(value / step) * step;
}

/** Splits a formatted price into its currency symbol and number for display. */
export function formatPrice(amount, currency) {
  const locale = currency === "INR" ? "en-IN" : "en";
  let parts;
  try {
    parts = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      currencyDisplay: "symbol",
      minimumFractionDigits: 0,
      maximumFractionDigits: amount < 10 && amount % 1 ? 1 : 0,
    }).formatToParts(amount);
  } catch {
    return { symbol: `${currency} `, value: String(amount) };
  }
  const symbol = parts
    .filter((part) => part.type === "currency")
    .map((part) => part.value)
    .join("");
  const value = parts
    .filter((part) => part.type !== "currency" && part.type !== "literal")
    .map((part) => part.value)
    .join("");
  return { symbol, value };
}
