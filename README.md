# earthLings

Corpus-based language mapping with the following features:


## Demographics

*Per_Capita_GDP*: Countries by UN GDP figures for the population

*Percent_Internet*: Countries by the percent of estimated internet availability

*Population*: Raw population numbers from the UN

*Pct_Population*: Countries by their percentage of the world’s population

*N_Words_TW*: Countries by number of words total in the Twitter corpus

*Pct_Words_TW*: Countries by their relative share of the Twitter corpus

*N_Words_CC4*: Countries by number of words total in the web corpus

*Pct_Words_CC4*: Countries by their relative share of the web corpus

*Population_Adjusted_TW*: Difference between actual population and a country’s relative share of the Twitter corpus

*Population_Adjusted_CC4*: Difference between actual population and a country’s relative share of the web corpus

*GDP_Adjusted_Population*: (Per_Capita_GDP x PCT_Population) 

*GDP_Adjusted_TW*: Twitter corpus adjusted to reflect wealth distribution

*GDP_Adjusted_CC4*: Web corpus adjusted to reflect wealth distribution

*Internet_Adjusted_TW*: Twitter corpus if everyone had internet access

*Internet_Adjusted_CC4*: Web corpus if everyone had internet access

## Languages

For every country, the percent of the Twitter / Web Corpus that is made up of a specific language (these account for 99% of both datasets):
	
English (eng), Spanish (spa), French (fra), Arabic (ara), Portuguese (por), Russian (rus), Indonesian (ind), Turkish (tur), German (deu), Hindi (hin), Tagalog (tgl), Italian (ita), Dutch (nld), Urdu (urd), Serbo-Croatian (hbs), Thai (tha), Greek (ell), Farsi (fas), Polish (pol), Japanese (jpn), Korean (kor), Swedish (swe), Finnish (fin), Bengali (ben), Czech (ces), Danish (dan), Macedonian (mkd), Swahili (swa), Slovenian (slv), Nepali (nep), Romanian (ron), Tamil (tam), Albanian (sqi), Catalan (cat), Vietnamese (vie), Latvian (lav), Hebrew (heb), Hungarian (hun), Bulgarian (bul), Sinhala (sin), Azerbaijani (aze), Ukrainian (ukr), Armenian (hye), Estonian (est), Marathi (mar), Haitian (hat), Mandarin (zho), Norwegian (nor), Mongolian (mon), Javanese (jav), Telugu (tel), Lithuanian (lit), Slovak (slk)

## Dialects

*For English and Spanish*: F1 on web corpus, F1 on Twitter, Uniqueness values on web corpus

*For French and Russian*: F1 on web corpus, Uniqueness values on web corpus

*For German and Portuguese*: F1 on web corpus

*For Arabic*: F1 on combined Twitter and web corpus
	
