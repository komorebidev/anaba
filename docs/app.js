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

    render();

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
// SPECIAL API EXCLUSION
// ============================================================

function skipContentAPIs(place) {

    return (
        Array.isArray(place.categories) &&
        (
            place.categories.includes("restaurants") ||
            place.categories.includes("hobbies")
        )
    ) || isMeetup(place);
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
     * Restaurants, hobbies, and meetups:
     *
     * - Address/location API is still required.
     * - Wikipedia is NOT called.
     * - Wikimedia Commons is NOT called.
     */
    if (skipContentAPIs(place)) {

        const location =
            await getPlaceLocation(
                place,
                countryForRequest
            );

        /*
         * Ignore a stale request if the user changed
         * countries while the API was running.
         */
        if (currentCountry !== countryForRequest) {

            cache.loading = false;

            return;
        }

        cache.location = location;

        cache.description = null;

        cache.image = null;

        cache.countryCode =
            countryForRequest;

        cache.loaded = true;

        cache.loading = false;

        renderCards();

        return;
    }

    /*
     * All other categories:
     *
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

        let detectedCountry =
            address.country_code
                ? String(address.country_code)
                    .trim()
                    .toUpperCase()
                : null;

        if (
            !detectedCountry &&
            address.country
        ) {

            detectedCountry =
                countryNameToISO(
                    address.country
                );
        }

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