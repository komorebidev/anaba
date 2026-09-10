#!/usr/bin/env python3

import argparse
import sys
import requests
from urllib.parse import urlencode


QUERIES = [
    # RIGOLETTO Shibuya
    ("rigoletto-shibuya", "THERIGOLETTO"),
    ("rigoletto-shibuya", "RIGOLETTO Shibuya"),
    ("rigoletto-shibuya", "リゴレット渋谷"),
    ("rigoletto-shibuya", "リゴレット"),

    # RIGOLETTO Marunouchi
    ("rigoletto-otemachi", "リゴレット丸の内"),
    ("rigoletto-otemachi", "リゴレット"),
    ("rigoletto-otemachi", "RIGOLETTO WINE BAR AND GRILL"),
    ("rigoletto-otemachi", "RIGOLETTO Marunouchi"),
    ("rigoletto-otemachi", "リゴレット丸の内店"),

    # Rooftop Bar Piro Ginza
    ("rooftop-bar-piro-ginza", "ルーフトップバーピロギンザ"),
    ("rooftop-bar-piro-ginza", "ルーフトップバー ピロ 銀座"),
    ("rooftop-bar-piro-ginza", "PIRO Ginza"),
    ("rooftop-bar-piro-ginza", "Rooftop Bar Piro Ginza"),
    ("rooftop-bar-piro-ginza", "PIRO"),

    # Ippudo Komazawa Daigaku
    ("ippudo-komazawa-daigaku", "一風堂駒沢大学店"),
    ("ippudo-komazawa-daigaku", "一風堂 駒沢大学店"),
    ("ippudo-komazawa-daigaku", "一風堂"),
    ("ippudo-komazawa-daigaku", "IPPUDO Komazawa"),
    ("ippudo-komazawa-daigaku", "駒沢大学 ラーメン"),

    # Ramen Express Hakata Ramen Ippudo Tokyo Solamachi
    ("ramen-express-hakata-ramen-ippudo-tokyo-solamachi",
     "RAMENEXPRESS博多一風堂東京ソラマチ店"),
    ("ramen-express-hakata-ramen-ippudo-tokyo-solamachi",
     "Ramen Express Hakata Ramen Ippudo"),
    ("ramen-express-hakata-ramen-ippudo-tokyo-solamachi",
     "博多一風堂東京ソラマチ店"),
    ("ramen-express-hakata-ramen-ippudo-tokyo-solamachi",
     "一風堂東京ソラマチ"),
    ("ramen-express-hakata-ramen-ippudo-tokyo-solamachi",
     "一風堂"),

    # Frijoles Shibuya Dogenzaka
    ("frijoles-shibuya-dogenzaka", "フリホーレス渋谷道玄坂店"),
    ("frijoles-shibuya-dogenzaka", "フリホーレス 渋谷道玄坂店"),
    ("frijoles-shibuya-dogenzaka", "フリホーレス"),
    ("frijoles-shibuya-dogenzaka", "FRIJOLES Shibuya"),
    ("frijoles-shibuya-dogenzaka", "フリホーレス道玄坂"),
]


def search_yahoo(client_id, query, results=10):
    url = "https://map.yahooapis.jp/search/local/V1/localSearch"

    params = {
        "appid": client_id,
        "query": query,
        "ac": "JP",
        "output": "json",
        "results": results,
        "sort": "match",
    }

    response = requests.get(url, params=params, timeout=15)

    response.raise_for_status()

    return response.json()


def extract_results(data):
    """
    Yahoo's response structure can vary.
    Try to extract the feature list safely.
    """

    # Typical Yahoo Local Search structure
    if isinstance(data, dict):
        result = data.get("Result", data)

        if isinstance(result, dict):
            feature = result.get("Feature", [])

            if isinstance(feature, list):
                return feature

            if isinstance(feature, dict):
                return [feature]

    return []


def print_result(index, total, place_id, query, data):
    results = extract_results(data)

    print("=" * 100)
    print(f"[{index}/{total}] {place_id}")
    print(f"Query : {query}")
    print(f"Hits  : {len(results)}")

    if not results:
        print("RESULT: NO MATCHES")
        return

    print("RESULT: MATCHES FOUND")

    for i, item in enumerate(results, 1):
        name = item.get("Name", "")
        gid = item.get("Gid", "")
        category = item.get("Category", "")
        property_data = item.get("Property", {})

        print(f"\n  {i}. {name}")

        if gid:
            print(f"     Gid      : {gid}")

        if category:
            print(f"     Category : {category}")

        if property_data:
            address = property_data.get("Address", "")
            tel = property_data.get("Tel1", "")

            if address:
                print(f"     Address  : {address}")

            if tel:
                print(f"     Tel      : {tel}")


def main():
    parser = argparse.ArgumentParser(
        description="Test Yahoo Japan Local Search queries."
    )

    parser.add_argument(
        "client_id",
        help="Yahoo API Client ID / App ID"
    )

    parser.add_argument(
        "--results",
        type=int,
        default=10,
        help="Number of results per query (default: 10)"
    )

    args = parser.parse_args()

    print(f"Yahoo Local Search test")
    print(f"Client ID: {args.client_id}")
    print(f"Queries  : {len(QUERIES)}")
    print()

    successful = 0
    failed = 0
    no_matches = 0

    for index, (place_id, query) in enumerate(QUERIES, 1):

        try:
            data = search_yahoo(
                args.client_id,
                query,
                args.results
            )

            results = extract_results(data)

            if results:
                successful += 1
            else:
                no_matches += 1

            print_result(
                index,
                len(QUERIES),
                place_id,
                query,
                data
            )

        except requests.exceptions.HTTPError as e:
            failed += 1

            print("=" * 100)
            print(f"[{index}/{len(QUERIES)}] {place_id}")
            print(f"Query : {query}")
            print(f"ERROR : HTTP {e.response.status_code}")

            try:
                print(f"Body  : {e.response.text}")
            except Exception:
                pass

        except requests.exceptions.RequestException as e:
            failed += 1

            print("=" * 100)
            print(f"[{index}/{len(QUERIES)}] {place_id}")
            print(f"Query : {query}")
            print(f"ERROR : {e}")

        except Exception as e:
            failed += 1

            print("=" * 100)
            print(f"[{index}/{len(QUERIES)}] {place_id}")
            print(f"Query : {query}")
            print(f"ERROR : {e}")

    print()
    print("=" * 100)
    print("SUMMARY")
    print("=" * 100)
    print(f"Queries executed : {len(QUERIES)}")
    print(f"With matches     : {successful}")
    print(f"No matches       : {no_matches}")
    print(f"Errors           : {failed}")
    print("=" * 100)


if __name__ == "__main__":
    main()