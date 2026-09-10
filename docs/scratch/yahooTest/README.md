# yahooTest

## Yahoo Local Search API Test

Python script for testing Yahoo! Japan Local Search API queries and finding which search terms successfully resolve a place.

## Requirements

* Python 3.8+
* Yahoo! Japan Maps API Client ID
* `requests`

## Install

```bash
pip install requests
```

## Usage

Pass your Yahoo Client ID as the first argument:

```bash
python test_yahoo_search.py YOUR_CLIENT_ID
```

Example:

```bash
python test_yahoo_search.py dGVzdC1jbGllbnQtaWQ=
```

Specify the number of results with `--results`:

```bash
python test_yahoo_search.py YOUR_CLIENT_ID --results 20
```

## What It Does

The script tests multiple Japanese and English search variations for places such as:

* RIGOLETTO Shibuya
* RIGOLETTO Marunouchi
* Rooftop Bar Piro Ginza
* Ippudo Komazawa Daigaku
* Ippudo Tokyo Solamachi
* Frijoles Shibuya Dogenzaka

For each query it shows:

* Search query
* Number of results
* Place name
* Yahoo `Gid`
* Address
* Telephone number

At the end, a summary shows how many queries returned matches.

## API

Yahoo! Japan Local Search API:

```text
https://map.yahooapis.jp/search/local/V1/localSearch
```

Do not commit your actual Client ID to GitHub.
