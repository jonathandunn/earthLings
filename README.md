# earthLings

## Corpus-based language and dialect mapping

This project visualizes three datasets: 
	
	Twitter Corpus (8 billion words, 2017-2019) 
	Web Corpus (400 billion words, 2013-2019, from the Common Crawl)
	GeoWAC (42 billion words; geographically-balanced gigaword corpora for 48 languages)

The per-country aggregates can be found in the *docs/data* folder as CSV files.

View this project through GitHub Pages: https://jonathandunn.github.io/earthLings/

The full web dataset will be available soon through this repository: 
http://www.earthlings.io/corpus_download.html

For a description of data collection procedures and the language identification component, see this paper: https://jonathandunn.github.io/earthLings/geocomputation.pdf

You can also look at my related repositories:

Language ID: https://github.com/jonathandunn/idNet
	
Web Collection: https://github.com/jonathandunn/common_crawl_corpus

## Demographic variables

The *Demographics* page compares both corpora with ground-truth data about human populations. This helps to understand the strengths and weaknesses of each corpus.

*PER_CAPITA_GDP*: Countries by UN GDP figures for the population

*PERCENT_INTERNET*: Countries by the percent of estimated internet availability

*POPULATION*: Raw population numbers from the UN

*N_WORDS_TW*: Countries by number of words total in the Twitter corpus

*N_WORDS_CC4*: Countries by number of words total in the web corpus

*POPULATION_ADJUSTED_TW*: Difference between actual population and a country’s relative share of the Twitter corpus

*POPULATION_ADJUSTED_CC4*: Difference between actual population and a country’s relative share of the web corpus

*GDP_ADJUSTED_POPULATION*: (Per_Capita_GDP x PCT_Population) 

*GDP_ADJUSTED_TW*: Twitter corpus adjusted to reflect wealth distribution

*GDP_ADJUSTED_CC4*: Web corpus adjusted to reflect wealth distribution

*INTERNET_ADJUSTED_TW*: Twitter corpus if everyone had internet access

*INTERNET_ADJUSTED_CC4*: Web corpus if everyone had internet access

## Major Language Variables

The *Major Languages* page covers the 53 languages that, taken together, account for 99% of both datasets. Here they are listed in order of number of words in the Twitter corpus.

(a) The percent of the corpus for each country that is made up of a specific language

(b) The total corpus size (in words) for each country in each language.
	
	English (eng)
	Spanish (spa)
	French (fra)
	Arabic (ara)
	Portuguese (por)
	Russian (rus)
	Indonesian (ind)
	Turkish (tur)
	German (deu)
	Hindi (hin)
	Tagalog (tgl)
	Italian (ita)
	Dutch (nld)
	Urdu (urd)
	Serbo-Croatian (hbs)
	Thai (tha)
	Greek (ell)
	Farsi (fas)
	Polish (pol)
	Japanese (jpn)
	Korean (kor)
	Swedish (swe)
	Finnish (fin)
	Bengali (ben)
	Czech (ces)
	Danish (dan)
	Macedonian (mkd)
	Swahili (swa)
	Slovenian (slv)
	Nepali (nep)
	Romanian (ron)
	Tamil (tam)
	Albanian (sqi)
	Catalan (cat)
	Vietnamese (vie)
	Latvian (lav)
	Hebrew (heb)
	Hungarian (hun)
	Bulgarian (bul)
	Sinhala (sin)
	Azerbaijani (aze)
	Ukrainian (ukr)
	Armenian (hye)
	Estonian (est)
	Marathi (mar) 
	Haitian (hat) 
	Mandarin (zho) 
	Norwegian (nor) 
	Mongolian (mon) 
	Javanese (jav) 
	Telugu (tel)
	Lithuanian (lit)
	Slovak (slk)

## Dialect Variables

The *Dialects* page maps properties of computational dialect models based on syntactic features. For a full academic description of these dialect models, refer to this paper: https://www.frontiersin.org/articles/10.3389/frai.2019.00015/full

*For English and Spanish*: F1 on web corpus, F1 on Twitter, Uniqueness values on web corpus

*For French and Russian*: F1 on web corpus, Uniqueness values on web corpus

*For German and Portuguese*: F1 on web corpus

*For Arabic*: F1 on combined Twitter and web corpus
	
## Minor Language Variables

The *Minor Languages* page covers those languages which are not common enough to be shown on the *Major Languages* page. Many of these languages are rare in digital contexts. This page includes the 253 languages which have at least 100k words in at least one of the corpora. Languages are listed by their ISO3 codes, which can be found here:

https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Languages/List_of_ISO_639-3_language_codes_(2019)
