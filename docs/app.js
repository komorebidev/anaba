// ============================================================
// COUNTRY REGIONS
// ============================================================

const countryRegions = {
    "north-america": {
        name: "North America",
        countries: {
            US: { name: "United States", flag: "🇺🇸" },
            CA: { name: "Canada", flag: "🇨🇦" },
            MX: { name: "Mexico", flag: "🇲🇽" },
            GT: { name: "Guatemala", flag: "🇬🇹" },
            CR: { name: "Costa Rica", flag: "🇨🇷" },
            PA: { name: "Panama", flag: "🇵🇦" },
            CU: { name: "Cuba", flag: "🇨🇺" },
            DO: { name: "Dominican Republic", flag: "🇩🇴" },
            JM: { name: "Jamaica", flag: "🇯🇲" },
            BS: { name: "Bahamas", flag: "🇧🇸" },
            BB: { name: "Barbados", flag: "🇧🇧" },
            TT: { name: "Trinidad and Tobago", flag: "🇹🇹" }
        }
    },

    europe: {
        name: "Europe",
        countries: {
            GB: { name: "United Kingdom", flag: "🇬🇧" },
            IE: { name: "Ireland", flag: "🇮🇪" },
            FR: { name: "France", flag: "🇫🇷" },
            DE: { name: "Germany", flag: "🇩🇪" },
            ES: { name: "Spain", flag: "🇪🇸" },
            PT: { name: "Portugal", flag: "🇵🇹" },
            IT: { name: "Italy", flag: "🇮🇹" },
            CH: { name: "Switzerland", flag: "🇨🇭" },
            AT: { name: "Austria", flag: "🇦🇹" },
            BE: { name: "Belgium", flag: "🇧🇪" },
            NL: { name: "Netherlands", flag: "🇳🇱" },
            LU: { name: "Luxembourg", flag: "🇱🇺" },
            DK: { name: "Denmark", flag: "🇩🇰" },
            SE: { name: "Sweden", flag: "🇸🇪" },
            NO: { name: "Norway", flag: "🇳🇴" },
            FI: { name: "Finland", flag: "🇫🇮" },
            IS: { name: "Iceland", flag: "🇮🇸" },
            PL: { name: "Poland", flag: "🇵🇱" },
            CZ: { name: "Czechia", flag: "🇨🇿" },
            SK: { name: "Slovakia", flag: "🇸🇰" },
            HU: { name: "Hungary", flag: "🇭🇺" },
            RO: { name: "Romania", flag: "🇷🇴" },
            BG: { name: "Bulgaria", flag: "🇧🇬" },
            GR: { name: "Greece", flag: "🇬🇷" },
            HR: { name: "Croatia", flag: "🇭🇷" },
            SI: { name: "Slovenia", flag: "🇸🇮" },
            EE: { name: "Estonia", flag: "🇪🇪" },
            LV: { name: "Latvia", flag: "🇱🇻" },
            LT: { name: "Lithuania", flag: "🇱🇹" },
            UA: { name: "Ukraine", flag: "🇺🇦" },
            RS: { name: "Serbia", flag: "🇷🇸" },
            AL: { name: "Albania", flag: "🇦🇱" },
            BA: { name: "Bosnia and Herzegovina", flag: "🇧🇦" },
            ME: { name: "Montenegro", flag: "🇲🇪" },
            MK: { name: "North Macedonia", flag: "🇲🇰" },
            MD: { name: "Moldova", flag: "🇲🇩" },
            CY: { name: "Cyprus", flag: "🇨🇾" },
            MT: { name: "Malta", flag: "🇲🇹" }
        }
    },

    asia: {
        name: "Asia",
        countries: {
            JP: { name: "Japan", flag: "🇯🇵" },
            KR: { name: "South Korea", flag: "🇰🇷" },
            CN: { name: "China", flag: "🇨🇳" },
            TW: { name: "Taiwan", flag: "🇹🇼" },
            HK: { name: "Hong Kong", flag: "🇭🇰" },
            MO: { name: "Macau", flag: "🇲🇴" },
            IN: { name: "India", flag: "🇮🇳" },
            TH: { name: "Thailand", flag: "🇹🇭" },
            VN: { name: "Vietnam", flag: "🇻🇳" },
            SG: { name: "Singapore", flag: "🇸🇬" },
            MY: { name: "Malaysia", flag: "🇲🇾" },
            ID: { name: "Indonesia", flag: "🇮🇩" },
            PH: { name: "Philippines", flag: "🇵🇭" },
            KH: { name: "Cambodia", flag: "🇰🇭" },
            LA: { name: "Laos", flag: "🇱🇦" },
            MM: { name: "Myanmar", flag: "🇲🇲" },
            BN: { name: "Brunei", flag: "🇧🇳" },
            NP: { name: "Nepal", flag: "🇳🇵" },
            LK: { name: "Sri Lanka", flag: "🇱🇰" },
            BD: { name: "Bangladesh", flag: "🇧🇩" },
            PK: { name: "Pakistan", flag: "🇵🇰" },
            AE: { name: "United Arab Emirates", flag: "🇦🇪" },
            SA: { name: "Saudi Arabia", flag: "🇸🇦" },
            IL: { name: "Israel", flag: "🇮🇱" },
            TR: { name: "Türkiye", flag: "🇹🇷" },
            QA: { name: "Qatar", flag: "🇶🇦" },
            JO: { name: "Jordan", flag: "🇯🇴" },
            LB: { name: "Lebanon", flag: "🇱🇧" },
            MN: { name: "Mongolia", flag: "🇲🇳" },
            KZ: { name: "Kazakhstan", flag: "🇰🇿" },
            UZ: { name: "Uzbekistan", flag: "🇺🇿" },
            GE: { name: "Georgia", flag: "🇬🇪" },
            AM: { name: "Armenia", flag: "🇦🇲" },
            AZ: { name: "Azerbaijan", flag: "🇦🇿" }
        }
    }
};


// ============================================================
// SETTINGS
// ============================================================

const DESCRIPTION_PLACEHOLDER = "Description unavailable.";
const ADDRESS_PLACEHOLDER = "Address unavailable.";

const placeCache = {};

let places = [];
let currentCountry = "JP";
let currentCategory = "all";


// ============================================================
// DOM
// ============================================================

const countryNameElement =
    document.getElementById("countryName");

const countryFlagElement =
    document.getElementById("countryFlag");

const regionSelect =
    document.getElementById("regionSelect");

const countrySelect =
    document.getElementById("countrySelect");

const placesContainer =
    document.getElementById("placesContainer");

const resultCount =
    document.getElementById("resultCount");


// ============================================================
// CATEGORIES
// ============================================================

const categories = [
    "all",
    "sightseeing",
    "restaurants",
    "nightlife",
    "shopping",
    "experiences",
    "hobbies",
    "meetups"
];


// ============================================================
// LOAD PLACES
// ============================================================

async function loadPlaces() {

    try {

        const response = await fetch("places.json");

        if (!response.ok) {
            throw new Error("Could not load places.json");
        }

        places = await response.json();

        initializeApplication();

    } catch (error) {

        console.error(error);

        placesContainer.innerHTML = `
            <div class="empty-state">
                <h3>Unable to load places</h3>
                <p>
                    Please check that places.json is available.
                </p>
            </div>
        `;
    }
}


// ============================================================
// INITIALIZE
// ============================================================

function initializeApplication() {

    setupCategoryButtons();
    setupRegionSelector();
    setupCountrySelector();

    const urlCountry = getCountryFromURL();
    const urlCategory = getCategoryFromURL();

    if (
        urlCountry &&
        countryExists(urlCountry)
    ) {

        currentCountry = urlCountry;

    } else {

        currentCountry = "JP";

        detectVisitorCountry();
    }

    if (
        urlCategory &&
        categories.includes(urlCategory)
    ) {

        currentCategory = urlCategory;
    }

    populateRegionForCountry(currentCountry);

    updateCountryDisplay();
    updateCategoryButtons();

    /*
     * Render immediately.
     *
     * Cards appear with skeleton placeholders
     * instead of waiting for the APIs.
     */
    render();

    /*
     * Start API loading after the initial render.
     */
    loadVisiblePlaceData();
}


// ============================================================
// COUNTRY DETECTION
// ============================================================

async function detectVisitorCountry() {

    try {

        const response =
            await fetch("https://ipapi.co/json/");

        if (!response.ok) {
            throw new Error(
                `Country detection HTTP ${response.status}`
            );
        }

        const data = await response.json();

        const detectedCountry =
            String(data.country || "").toUpperCase();

        const urlCountry =
            getCountryFromURL();

        if (
            !urlCountry &&
            countryExists(detectedCountry)
        ) {

            currentCountry = detectedCountry;

            populateRegionForCountry(currentCountry);

            updateCountryDisplay();

            updateURL();

            render();

            loadVisiblePlaceData();
        }

    } catch (error) {

        console.warn(
            "Country detection failed:",
            error
        );
    }
}


// ============================================================
// CATEGORY BUTTONS
// ============================================================

function setupCategoryButtons() {

    const buttons =
        document.querySelectorAll(".category-button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            currentCategory =
                button.dataset.category;

            updateCategoryButtons();

            updateURL();

            render();

            loadVisiblePlaceData();
        });
    });
}


function updateCategoryButtons() {

    const buttons =
        document.querySelectorAll(".category-button");

    buttons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.category === currentCategory
        );
    });
}


// ============================================================
// REGION SELECTOR
// ============================================================

function setupRegionSelector() {

    if (!regionSelect) {
        return;
    }

    regionSelect.addEventListener(
        "change",
        function () {

            const region = this.value;

            populateCountries(region);

            if (!region) {
                return;
            }

            const countryCodes =
                Object.keys(
                    countryRegions[region].countries
                );

            if (!countryCodes.length) {
                return;
            }

            setCountry(countryCodes[0]);
        }
    );
}


function populateCountries(regionKey) {

    if (!countrySelect) {
        return;
    }

    countrySelect.innerHTML = `
        <option value="">
            Select country
        </option>
    `;

    if (
        !regionKey ||
        !countryRegions[regionKey]
    ) {
        return;
    }

    const countries =
        countryRegions[regionKey].countries;

    Object.entries(countries).forEach(
        ([code, country]) => {

            const option =
                document.createElement("option");

            option.value = code;

            option.textContent =
                `${country.flag} ${country.name}`;

            countrySelect.appendChild(option);
        }
    );
}


// ============================================================
// COUNTRY SELECTOR
// ============================================================

function setupCountrySelector() {

    if (!countrySelect) {
        return;
    }

    countrySelect.addEventListener(
        "change",
        function () {

            if (!this.value) {
                return;
            }

            setCountry(this.value);
        }
    );
}


function setCountry(countryCode) {

    if (!countryExists(countryCode)) {
        return;
    }

    currentCountry = countryCode;

    /*
     * Location data depends on the selected country,
     * so places need to be loaded again for the new country.
     */
    Object.keys(placeCache).forEach(id => {

        const cache = placeCache[id];

        if (cache) {
            cache.loaded = false;
            cache.loading = false;
            cache.location = null;
            cache.description = null;
            cache.image = null;
        }
    });

    updateCountryDisplay();

    updateURL();

    render();

    loadVisiblePlaceData();
}


function updateCountryDisplay() {

    const info =
        getCountryInfo(currentCountry);

    if (!info) {
        return;
    }

    if (countryNameElement) {
        countryNameElement.textContent = info.name;
    }

    if (countryFlagElement) {
        countryFlagElement.textContent = info.flag;
    }

    if (countrySelect) {
        countrySelect.value = currentCountry;
    }

    if (regionSelect) {
        regionSelect.value = info.region;
    }
}


function populateRegionForCountry(countryCode) {

    const info =
        getCountryInfo(countryCode);

    if (!info) {
        return;
    }

    if (regionSelect) {
        regionSelect.value = info.region;
    }

    populateCountries(info.region);

    if (countrySelect) {
        countrySelect.value = countryCode;
    }
}


// ============================================================
// COUNTRY HELPERS
// ============================================================

function countryExists(countryCode) {

    if (!countryCode) {
        return false;
    }

    for (const regionKey in countryRegions) {

        if (
            countryRegions[regionKey]
                .countries[countryCode]
        ) {
            return true;
        }
    }

    return false;
}


function getCountryInfo(countryCode) {

    for (const regionKey in countryRegions) {

        const region =
            countryRegions[regionKey];

        if (
            region.countries[countryCode]
        ) {

            return {
                ...region.countries[countryCode],
                region: regionKey
            };
        }
    }

    return null;
}


function getCountryName(countryCode) {

    const info =
        getCountryInfo(countryCode);

    return info ? info.name : "";
}


// ============================================================
// FILTER PLACES
// ============================================================

function getCandidatePlaces() {

    if (currentCategory === "meetups") {

        return places.filter(place =>
            isMeetup(place)
        );
    }

    if (currentCategory === "all") {

        return places;
    }

    return places.filter(place => {

        return (
            Array.isArray(place.categories) &&
            place.categories.includes(currentCategory)
        );
    });
}


// ============================================================
// RENDER
// ============================================================

function render() {

    renderCards();
}


// ============================================================
// LOAD API DATA
// ============================================================

async function loadVisiblePlaceData() {

    const candidates =
        getCandidatePlaces();

    /*
     * Only start loading places that haven't
     * already been loaded.
     */
    const placesToLoad =
        candidates.filter(place => {

            return !(
                placeCache[place.id] &&
                (
                    placeCache[place.id].loaded ||
                    placeCache[place.id].loading
                )
            );
        });

    /*
     * Load the places concurrently.
     */
    await Promise.all(
        placesToLoad.map(place =>
            loadPlaceData(place)
        )
    );

    renderCards();
}


// ============================================================
// LOAD ONE PLACE
// ============================================================

async function loadPlaceData(place) {

    if (!placeCache[place.id]) {

        placeCache[place.id] = {
            loading: false,
            loaded: false,
            location: null,
            description: null,
            image: null,
            countryCode: null
        };
    }

    const cache =
        placeCache[place.id];

    if (
        cache.loading ||
        cache.loaded
    ) {
        return;
    }

    cache.loading = true;

    const countryForRequest = currentCountry;

    /*
     * Run the three APIs concurrently.
     */
    const [
        location,
        description,
        image
    ] = await Promise.all([
        getPlaceLocation(place, countryForRequest),
        getWikipediaDescription(place, countryForRequest),
        getWikimediaImage(place, countryForRequest)
    ]);

    /*
     * Ignore a stale request if the user changed
     * countries while the APIs were running.
     */
    if (currentCountry !== countryForRequest) {

        cache.loading = false;

        return;
    }

    cache.location = location;
    cache.description = description;
    cache.image = image;
    cache.countryCode = countryForRequest;

    cache.loaded = true;
    cache.loading = false;

    renderCards();
}


// ============================================================
// NOMINATIM + SECOND GEOCODER
// ============================================================

async function getPlaceLocation(
    place,
    countryCode
) {

    const countryName =
        getCountryName(countryCode);

    let searchText = place.name;

    if (countryName) {
        searchText =
            `${place.name}, ${countryName}`;
    }

    const url =
        "https://nominatim.openstreetmap.org/search" +
        "?q=" +
        encodeURIComponent(searchText) +
        "&format=jsonv2" +
        "&limit=1" +
        "&addressdetails=1";

    try {

        const response =
            await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Nominatim HTTP ${response.status}`
            );
        }

        const results =
            await response.json();

        /*
         * Nominatim found no result.
         *
         * Try the second geocoder.
         */
        if (
            !Array.isArray(results) ||
            results.length === 0
        ) {

            console.warn(
                `Nominatim found no result for "${place.name}". Trying Open-Meteo.`
            );

            const fallback =
                await getCountryFromOpenMeteo(
                    place.name,
                    countryCode
                );

            return {
                address: ADDRESS_PLACEHOLDER,
                lat: fallback?.latitude ?? null,
                lng: fallback?.longitude ?? null,
                country: fallback?.countryCode ?? null
            };
        }

        const result = results[0];

        const address =
            result.address || {};

        /*
         * ------------------------------------------------------
         * FIRST CHOICE
         * Nominatim's ISO country code
         * ------------------------------------------------------
         */
        let detectedCountry =
            address.country_code
                ? String(address.country_code)
                    .trim()
                    .toUpperCase()
                : null;

        /*
         * ------------------------------------------------------
         * SECOND CHOICE
         * Nominatim's country name
         * ------------------------------------------------------
         */
        if (
            !detectedCountry &&
            address.country
        ) {

            detectedCountry =
                countryNameToISO(
                    address.country
                );
        }

        /*
         * ------------------------------------------------------
         * THIRD CHOICE
         * Second geocoder
         *
         * We only use it when Nominatim gave us a
         * location but failed to identify its country.
         * ------------------------------------------------------
         */
        let fallback = null;

        if (!detectedCountry) {

            console.warn(
                `Nominatim could not identify country for "${place.name}". Trying Open-Meteo.`
            );

            fallback =
                await getCountryFromOpenMeteo(
                    place.name,
                    countryCode
                );

            if (fallback?.countryCode) {
                detectedCountry =
                    fallback.countryCode;
            }
        }

        /*
         * Prefer Nominatim's actual address and coordinates.
         *
         * If Nominatim didn't provide coordinates,
         * use Open-Meteo coordinates if available.
         */
        const latitude =
            result.lat
                ? parseFloat(result.lat)
                : (
                    fallback?.latitude ?? null
                );

        const longitude =
            result.lon
                ? parseFloat(result.lon)
                : (
                    fallback?.longitude ?? null
                );

        return {

            address:
                result.display_name ||
                ADDRESS_PLACEHOLDER,

            lat: latitude,

            lng: longitude,

            country: detectedCountry
        };

    } catch (error) {

        console.error(
            `Nominatim error for ${place.name}:`,
            error
        );

        /*
         * Nominatim completely failed.
         *
         * Use Open-Meteo as the second geocoder.
         */
        const fallback =
            await getCountryFromOpenMeteo(
                place.name,
                countryCode
            );

        return {

            address: ADDRESS_PLACEHOLDER,

            lat:
                fallback?.latitude ?? null,

            lng:
                fallback?.longitude ?? null,

            country:
                fallback?.countryCode ?? null
        };
    }
}


// ============================================================
// OPEN-METEO SECOND GEOCODER
// ============================================================

async function getCountryFromOpenMeteo(
    placeName,
    countryCode
) {

    try {

        const url =
            "https://geocoding-api.open-meteo.com/v1/search" +
            "?name=" +
            encodeURIComponent(placeName) +
            "&count=10" +
            "&language=en" +
            "&format=json";

        const response =
            await fetch(url);

        if (!response.ok) {

            throw new Error(
                `Open-Meteo HTTP ${response.status}`
            );
        }

        const data =
            await response.json();

        if (
            !data.results ||
            !Array.isArray(data.results) ||
            data.results.length === 0
        ) {

            return null;
        }

        /*
         * Prefer a result whose country matches
         * the country currently being viewed.
         */
        const matchingResult =
            data.results.find(result => {

                return (
                    result.country_code &&
                    String(result.country_code)
                        .toUpperCase() ===
                    String(countryCode)
                        .toUpperCase()
                );
            });

        if (matchingResult) {

            return {

                countryCode:
                    String(
                        matchingResult.country_code
                    ).toUpperCase(),

                latitude:
                    matchingResult.latitude ?? null,

                longitude:
                    matchingResult.longitude ?? null
            };
        }

        /*
         * Do NOT blindly accept the first result.
         *
         * A generic name such as "Central Park"
         * could exist in multiple countries.
         */
        return null;

    } catch (error) {

        console.error(
            `Open-Meteo error for "${placeName}":`,
            error
        );

        return null;
    }
}


// ============================================================
// COUNTRY NAME → ISO CODE
// ============================================================

function countryNameToISO(countryName) {

    if (!countryName) {
        return null;
    }

    const normalized =
        String(countryName)
            .trim()
            .toLowerCase();

    /*
     * Use the country list that already exists in
     * countryRegions.
     *
     * No separate country database is maintained.
     */
    for (
        const regionKey in countryRegions
    ) {

        const countries =
            countryRegions[regionKey].countries;

        for (
            const [code, country] of
            Object.entries(countries)
        ) {

            if (
                String(country.name)
                    .trim()
                    .toLowerCase() ===
                normalized
            ) {

                return code.toUpperCase();
            }
        }
    }

    /*
     * A few common alternate country names that
     * may appear in geocoder responses.
     */
    const aliases = {

        "united states of america": "US",

        "usa": "US",

        "u.s.a.": "US",

        "south korea": "KR",

        "republic of korea": "KR",

        "korea, republic of": "KR",

        "czech republic": "CZ",

        "czechia": "CZ",

        "russian federation": "RU",

        "turkey": "TR",

        "türkiye": "TR",

        "united kingdom": "GB",

        "great britain": "GB",

        "hong kong": "HK",

        "macao": "MO",

        "macau": "MO"
    };

    return aliases[normalized] || null;
}


// ============================================================
// WIKIPEDIA
// ============================================================

async function getWikipediaDescription(
    place,
    countryCode
) {

    try {

        const countryName =
            getCountryName(countryCode);

        const searchText =
            countryName
                ? `${place.name} ${countryName}`
                : place.name;

        const searchURL =
            "https://en.wikipedia.org/w/rest.php/v1/search/page" +
            "?q=" +
            encodeURIComponent(searchText) +
            "&limit=5";

        const searchResponse =
            await fetch(searchURL);

        if (!searchResponse.ok) {

            throw new Error(
                `Wikipedia HTTP ${searchResponse.status}`
            );
        }

        const searchData =
            await searchResponse.json();

        if (
            !searchData.pages ||
            searchData.pages.length === 0
        ) {

            return DESCRIPTION_PLACEHOLDER;
        }

        const placeName =
            place.name.toLowerCase();

        let matchingPage =
            searchData.pages.find(page =>
                page.title
                    .toLowerCase()
                    .includes(placeName)
            );

        if (!matchingPage) {
            matchingPage =
                searchData.pages[0];
        }

        const summaryURL =
            "https://en.wikipedia.org/api/rest_v1/page/summary/" +
            encodeURIComponent(matchingPage.key);

        const summaryResponse =
            await fetch(summaryURL);

        if (!summaryResponse.ok) {

            throw new Error(
                `Wikipedia summary HTTP ${summaryResponse.status}`
            );
        }

        const summary =
            await summaryResponse.json();

        const description =
            summary.extract ||
            summary.description ||
            "";

        if (
            typeof description !== "string" ||
            !description.trim()
        ) {

            return DESCRIPTION_PLACEHOLDER;
        }

        return description;

    } catch (error) {

        console.error(
            `Wikipedia error for ${place.name}:`,
            error
        );

        return DESCRIPTION_PLACEHOLDER;
    }
}


// ============================================================
// WIKIMEDIA COMMONS
// ============================================================

async function getWikimediaImage(
    place,
    countryCode
) {

    try {

        const countryName =
            getCountryName(countryCode);

        const searchText =
            countryName
                ? `${place.name} ${countryName}`
                : place.name;

        const url =
            "https://commons.wikimedia.org/w/api.php" +
            "?action=query" +
            "&generator=search" +
            "&gsrsearch=" +
            encodeURIComponent(searchText) +
            "&gsrnamespace=6" +
            "&gsrlimit=10" +
            "&prop=imageinfo" +
            "&iiprop=url" +
            "&iiurlwidth=800" +
            "&format=json" +
            "&origin=*";

        const response =
            await fetch(url);

        if (!response.ok) {

            throw new Error(
                `Wikimedia HTTP ${response.status}`
            );
        }

        const data =
            await response.json();

        if (
            !data.query ||
            !data.query.pages
        ) {

            return null;
        }

        const pages =
            Object.values(data.query.pages);

        if (!pages.length) {
            return null;
        }

        const normalizedName =
            place.name
                .toLowerCase()
                .replace(
                    /[^a-z0-9]+/g,
                    " "
                )
                .trim();

        let bestPage = null;
        let bestScore = -Infinity;

        for (const page of pages) {

            const title =
                String(page.title || "")
                    .replace(/^File:/i, "")
                    .toLowerCase();

            let score = 0;

            if (
                title.includes(normalizedName)
            ) {
                score += 10;
            }

            const words =
                normalizedName
                    .split(" ")
                    .filter(Boolean);

            words.forEach(word => {

                if (title.includes(word)) {
                    score += 1;
                }
            });

            if (score > bestScore) {

                bestScore = score;
                bestPage = page;
            }
        }

        if (!bestPage) {
            return null;
        }

        if (
            !bestPage.imageinfo ||
            !bestPage.imageinfo[0]
        ) {

            return null;
        }

        const imageInfo =
            bestPage.imageinfo[0];

        return (
            imageInfo.thumburl ||
            imageInfo.url ||
            null
        );

    } catch (error) {

        console.error(
            `Wikimedia error for ${place.name}:`,
            error
        );

        /*
         * null means there was no usable Wikimedia image.
         *
         * The card renderer can then use the fallback image.
         */
        return null;
    }
}


// ============================================================
// MEETUP DETECTION
// ============================================================

function isMeetup(place) {

    if (!place.url) {
        return false;
    }

    try {

        const hostname =
            new URL(place.url)
                .hostname
                .toLowerCase();

        return (
            hostname === "meetup.com" ||
            hostname.endsWith(".meetup.com")
        );

    } catch {

        return false;
    }
}


// ============================================================
// EXTERNAL LINK
// ============================================================

function getExternalLinkHTML(place) {

    if (!place.url) {
        return "";
    }

    if (isMeetup(place)) {

        return `
            <a
                href="${escapeHTML(place.url)}"
                target="_blank"
                rel="noopener noreferrer"
                class="place-link meetup-link"
            >
                View Meetup →
            </a>
        `;
    }

    return `
        <a
            href="${escapeHTML(place.url)}"
            target="_blank"
            rel="noopener noreferrer"
            class="place-link"
        >
            Visit Website →
        </a>
    `;
}


// ============================================================
// VIEW ON MAP
// ============================================================

function getMapButtonHTML(
    place,
    location
) {

    if (!location) {
        return "";
    }

    if (
        location.lat !== null &&
        location.lng !== null &&
        !isNaN(location.lat) &&
        !isNaN(location.lng)
    ) {

        const coordinates =
            `${location.lat},${location.lng}`;

        const googleMapsURL =
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                coordinates
            )}`;

        return `
            <a
                href="${escapeHTML(googleMapsURL)}"
                target="_blank"
                rel="noopener noreferrer"
                class="map-button"
            >
                View on Map ↗
            </a>
        `;
    }

    if (
        location.address &&
        location.address !== ADDRESS_PLACEHOLDER
    ) {

        const googleMapsURL =
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                location.address
            )}`;

        return `
            <a
                href="${escapeHTML(googleMapsURL)}"
                target="_blank"
                rel="noopener noreferrer"
                class="map-button"
            >
                View on Map ↗
            </a>
        `;
    }

    return "";
}


// ============================================================
// SKELETON HELPERS
// ============================================================

function getSkeletonCardHTML(place) {

    const categoriesHTML =
        Array.isArray(place.categories)
            ? place.categories
                .map(category => `
                    <span class="place-category">
                        ${escapeHTML(
                            formatCategory(category)
                        )}
                    </span>
                `)
                .join("")
            : "";

    const meetupTag =
        isMeetup(place)
            ? `
                <span class="place-category meetup-tag">
                    Meetup
                </span>
            `
            : "";

    return `
        <article class="place-card">

            <div class="place-image-skeleton skeleton">
            </div>

            <div class="place-card-content">

                <div class="skeleton skeleton-title">
                </div>

                <div class="place-categories">
                    ${categoriesHTML}
                    ${meetupTag}
                </div>

                <div class="skeleton skeleton-description">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="skeleton skeleton-address">
                </div>

                <div class="place-actions">

                    <div class="skeleton skeleton-button">
                    </div>

                    <div class="skeleton skeleton-button">
                    </div>

                </div>

            </div>

        </article>
    `;
}


// ============================================================
// RENDER CARDS
// ============================================================

function renderCards() {

    if (!placesContainer) {
        return;
    }

    const candidates =
        getCandidatePlaces();

    /*
     * Once an API lookup has completed:
     *
     * - If the country was identified, use it to filter.
     * - If the country is unknown, do NOT assume it belongs
     *   to another country.
     *
     * This prevents API failure from making cards disappear.
     */
    const visiblePlaces =
        candidates.filter(place => {

            const cache =
                placeCache[place.id];

            if (
                cache &&
                cache.loaded &&
                cache.location
            ) {

                /*
                 * If we know the country, filter normally.
                 */
                if (cache.location.country) {

                    return (
                        cache.location.country ===
                        currentCountry
                    );
                }

                /*
                 * Country could not be identified.
                 *
                 * Keep the card rather than incorrectly
                 * treating it as belonging to another country.
                 */
                return true;
            }

            /*
             * Still loading.
             */
            return true;
        });

    if (resultCount) {

        resultCount.textContent =
            `${visiblePlaces.length} recommendation${
                visiblePlaces.length === 1
                    ? ""
                    : "s"
            }`;
    }

    placesContainer.innerHTML = "";

    if (!visiblePlaces.length) {

        placesContainer.innerHTML = `
            <div class="empty-state">
                <h3>No recommendations</h3>
                <p>
                    There are currently no places
                    matching this selection.
                </p>
            </div>
        `;

        return;
    }

    visiblePlaces.forEach(place => {

        const cache =
            placeCache[place.id];

        /*
         * Not loaded yet:
         * render skeleton card.
         */
        if (
            !cache ||
            !cache.loaded
        ) {

            placesContainer.insertAdjacentHTML(
                "beforeend",
                getSkeletonCardHTML(place)
            );

            return;
        }

        /*
         * Loaded:
         * render real card.
         */
        const location =
            cache.location || {
                address: ADDRESS_PLACEHOLDER,
                lat: null,
                lng: null,
                country: null
            };

        const description =
            cache.description ||
            DESCRIPTION_PLACEHOLDER;

        /*
         * Keep the existing Wikimedia behavior:
         * if Wikimedia doesn't return an image,
         * use the rabbit fallback.
         */
        const image =
            cache.image ||
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggMt-m95pUHuS-ag4Ir8y3uV8XV4z7YRgbjsQGWlZWygFrW0vL0Xx_QMcOwiUBPB8dA7z-Ig8GP_iACAfSHgkHEp4UYunZNutAer2hDee4TZ37MAHtMSCDM2qzZwZ78Wki9Pqv706r81Fl/s800/ojigi_animal_usagi.png";

        const card =
            document.createElement("article");

        card.className =
            "place-card";

        const imageHTML = `
            <div class="place-image">

                <img
                    src="${escapeHTML(image)}"
                    alt="${escapeHTML(place.name)}"
                    loading="lazy"
                    referrerpolicy="no-referrer"
                    onerror="this.onerror=null;this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggMt-m95pUHuS-ag4Ir8y3uV8XV4z7YRgbjsQGWlZWygFrW0vL0Xx_QMcOwiUBPB8dA7z-Ig8GP_iACAfSHgkHEp4UYunZNutAer2hDee4TZ37MAHtMSCDM2qzZwZ78Wki9Pqv706r81Fl/s800/ojigi_animal_usagi.png';"
                >

            </div>
        `;

        const categoriesHTML =
            Array.isArray(place.categories)
                ? place.categories
                    .map(category => `
                        <span class="place-category">
                            ${escapeHTML(
                                formatCategory(category)
                            )}
                        </span>
                    `)
                    .join("")
                : "";

        const meetupTag =
            isMeetup(place)
                ? `
                    <span
                        class="place-category meetup-tag"
                    >
                        Meetup
                    </span>
                `
                : "";

        const externalLinkHTML =
            getExternalLinkHTML(place);

        const mapButtonHTML =
            getMapButtonHTML(
                place,
                location
            );

        card.innerHTML = `

            ${imageHTML}

            <div class="place-card-content">

                <h3 class="place-name">
                    ${escapeHTML(place.name)}
                </h3>

                <div class="place-categories">

                    ${categoriesHTML}

                    ${meetupTag}

                </div>

                <p class="place-description">
                    ${escapeHTML(description)}
                </p>

                <div class="place-address">

                    <span class="address-icon">
                        📍
                    </span>

                    <span>
                        ${escapeHTML(
                            location.address ||
                            ADDRESS_PLACEHOLDER
                        )}
                    </span>

                </div>

                <div class="place-actions">

                    ${mapButtonHTML}

                    ${externalLinkHTML}

                    <button
                        type="button"
                        class="copy-button"
                    >
                        Copy address
                    </button>

                </div>

            </div>
        `;

        const copyButton =
            card.querySelector(".copy-button");

        if (copyButton) {

            copyButton.addEventListener(
                "click",
                () => {

                    copyAddress(
                        location.address ||
                        ADDRESS_PLACEHOLDER,
                        copyButton
                    );
                }
            );
        }

        placesContainer.appendChild(card);
    });
}


// ============================================================
// COPY ADDRESS
// ============================================================

async function copyAddress(
    address,
    button
) {

    try {

        await navigator.clipboard.writeText(address);

        const originalText =
            button.textContent;

        button.textContent =
            "✓ Copied";

        button.classList.add("copied");

        setTimeout(() => {

            button.textContent =
                originalText;

            button.classList.remove("copied");

        }, 1500);

    } catch {

        window.prompt(
            "Copy this address:",
            address
        );
    }
}


// ============================================================
// URL PARAMETERS
// ============================================================

function getCountryFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return (
        params
            .get("country") || ""
    ).toUpperCase();
}


function getCategoryFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return (
        params
            .get("category") || ""
    ).toLowerCase();
}


function updateURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    if (currentCountry) {

        params.set(
            "country",
            currentCountry
        );
    }

    if (
        currentCategory &&
        currentCategory !== "all"
    ) {

        params.set(
            "category",
            currentCategory
        );

    } else {

        params.delete("category");
    }

    const query =
        params.toString();

    const newURL =
        query
            ? `${window.location.pathname}?${query}`
            : window.location.pathname;

    window.history.replaceState(
        {},
        "",
        newURL
    );
}


// ============================================================
// FORMATTING
// ============================================================

function formatCategory(category) {

    return String(category)
        .replace(/-/g, " ")
        .replace(
            /\b\w/g,
            letter => letter.toUpperCase()
        );
}


// ============================================================
// HTML ESCAPING
// ============================================================

function escapeHTML(value) {

    if (
        value === undefined ||
        value === null
    ) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ============================================================
// START APPLICATION
// ============================================================

loadPlaces();