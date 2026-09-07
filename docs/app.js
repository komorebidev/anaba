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
            BZ: { name: "Belize", flag: "🇧🇿" },
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

const DESCRIPTION_PLACEHOLDER =
    "Description unavailable.";

const ADDRESS_PLACEHOLDER =
    "Address unavailable.";

const IMAGE_PLACEHOLDER_CLASS =
    "place-image-empty";


// ============================================================
// APPLICATION STATE
// ============================================================

let places = [];

let currentCountry = "JP";

let currentCategory = "all";

let map = null;

let markers = [];

let countryDetectionFinished = false;


// All information discovered through APIs is kept here.
// Nothing needs to be added to places.json.
const placeCache = {};


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

        const response =
            await fetch("places.json");

        if (!response.ok) {
            throw new Error(
                "Could not load places.json"
            );
        }

        places =
            await response.json();

        initializeApplication();

    } catch (error) {

        console.error(error);

        if (placesContainer) {

            placesContainer.innerHTML = `
                <div class="empty-state">
                    <h3>Unable to load places</h3>
                    <p>
                        Please check that places.json
                        is available.
                    </p>
                </div>
            `;
        }
    }
}


// ============================================================
// INITIALIZE
// ============================================================

function initializeApplication() {

    initializeMap();

    setupCategoryButtons();

    setupRegionSelector();

    setupCountrySelector();

    const urlCountry =
        getCountryFromURL();

    const urlCategory =
        getCategoryFromURL();

    /*
     * Explicit URL country takes priority.
     *
     * Otherwise we'll detect the visitor's
     * country in the background.
     */
    if (
        urlCountry &&
        countryExists(urlCountry)
    ) {

        currentCountry =
            urlCountry;

        countryDetectionFinished = true;

    } else {

        /*
         * Start with Japan temporarily so
         * the interface can render while
         * country detection happens.
         */
        currentCountry = "JP";

        detectVisitorCountry();
    }

    if (
        urlCategory &&
        categories.includes(urlCategory)
    ) {

        currentCategory =
            urlCategory;
    }

    populateRegionForCountry(
        currentCountry
    );

    updateCountryDisplay();

    updateCategoryButtons();

    /*
     * Render immediately.
     */
    render();
}


// ============================================================
// COUNTRY DETECTION
// ============================================================

async function detectVisitorCountry() {

    try {

        const response =
            await fetch(
                "https://ipapi.co/json/"
            );

        if (!response.ok) {
            throw new Error(
                `Country detection HTTP ${response.status}`
            );
        }

        const data =
            await response.json();

        const detectedCountry =
            String(
                data.country || ""
            ).toUpperCase();

        /*
         * Don't override an explicit URL.
         */
        const urlCountry =
            getCountryFromURL();

        if (
            !urlCountry &&
            countryExists(detectedCountry)
        ) {

            currentCountry =
                detectedCountry;

            populateRegionForCountry(
                currentCountry
            );

            updateCountryDisplay();

            updateURL();

            render();
        }

    } catch (error) {

        console.warn(
            "Country detection failed:",
            error
        );

    } finally {

        countryDetectionFinished = true;
    }
}


// ============================================================
// MAP
// ============================================================

function initializeMap() {

    const mapElement =
        document.getElementById("map");

    if (!mapElement) {
        return;
    }

    map =
        L.map("map").setView(
            [35.6812, 139.7671],
            3
        );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,

            attribution:
                '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        }
    ).addTo(map);
}


// ============================================================
// CATEGORY BUTTONS
// ============================================================

function setupCategoryButtons() {

    const buttons =
        document.querySelectorAll(
            ".category-button"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                currentCategory =
                    button.dataset.category;

                updateCategoryButtons();

                updateURL();

                render();
            }
        );
    });
}


function updateCategoryButtons() {

    const buttons =
        document.querySelectorAll(
            ".category-button"
        );

    buttons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.category ===
                currentCategory
        );
    });
}


// ============================================================
// REGION
// ============================================================

function setupRegionSelector() {

    if (!regionSelect) {
        return;
    }

    regionSelect.addEventListener(
        "change",
        function () {

            const region =
                this.value;

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

            setCountry(
                countryCodes[0]
            );
        }
    );
}


function populateCountries(regionKey) {

    if (!countrySelect) {
        return;
    }

    countrySelect.innerHTML =
        `<option value="">Select country</option>`;

    if (
        !regionKey ||
        !countryRegions[regionKey]
    ) {
        return;
    }

    const countries =
        countryRegions[regionKey].countries;

    Object.entries(countries)
        .forEach(
            ([code, country]) => {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    code;

                option.textContent =
                    `${country.flag} ${country.name}`;

                countrySelect.appendChild(
                    option
                );
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

    currentCountry =
        countryCode;

    updateCountryDisplay();

    updateURL();

    render();
}


function updateCountryDisplay() {

    const info =
        getCountryInfo(currentCountry);

    if (!info) {
        return;
    }

    if (countryNameElement) {

        countryNameElement.textContent =
            info.name;
    }

    if (countryFlagElement) {

        countryFlagElement.textContent =
            info.flag;
    }

    if (countrySelect) {

        countrySelect.value =
            currentCountry;
    }

    if (regionSelect) {

        regionSelect.value =
            info.region;
    }
}


function populateRegionForCountry(
    countryCode
) {

    const info =
        getCountryInfo(countryCode);

    if (!info) {
        return;
    }

    if (regionSelect) {

        regionSelect.value =
            info.region;
    }

    populateCountries(
        info.region
    );

    if (countrySelect) {

        countrySelect.value =
            countryCode;
    }
}


// ============================================================
// COUNTRY HELPERS
// ============================================================

function countryExists(countryCode) {

    if (!countryCode) {
        return false;
    }

    for (
        const regionKey in countryRegions
    ) {

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

    for (
        const regionKey in countryRegions
    ) {

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

    return info
        ? info.name
        : "";
}


// ============================================================
// FILTERING
// ============================================================

function getCandidatePlaces() {

    /*
     * Meetups are detected from their URL.
     *
     * You do NOT have to add "meetups"
     * to their categories.
     */
    if (
        currentCategory === "meetups"
    ) {

        return places.filter(
            place => isMeetup(place)
        );
    }

    if (
        currentCategory === "all"
    ) {

        return places;
    }

    return places.filter(place =>
        Array.isArray(place.categories) &&
        place.categories.includes(
            currentCategory
        )
    );
}


// ============================================================
// RENDER
// ============================================================

function render() {

    renderCards();

    renderMarkers();

    /*
     * Load API information after rendering.
     */
    loadVisiblePlaceData();
}


// ============================================================
// BACKGROUND LOADING
// ============================================================

async function loadVisiblePlaceData() {

    const candidates =
        getCandidatePlaces();

    for (const place of candidates) {

        /*
         * If this place has already been
         * fully resolved, don't request it again.
         */
        if (
            placeCache[place.id] &&
            placeCache[place.id].loaded
        ) {

            continue;
        }

        /*
         * Don't start another request if
         * this place is currently loading.
         */
        if (
            placeCache[place.id] &&
            placeCache[place.id].loading
        ) {

            continue;
        }

        await loadPlaceData(place);

        /*
         * Update the UI immediately.
         */
        renderCards();

        renderMarkers();

        /*
         * Nominatim's public service has
         * rate limits, so don't hammer it.
         */
        await delay(1100);
    }
}


// ============================================================
// LOAD ALL DATA FOR ONE PLACE
// ============================================================

async function loadPlaceData(place) {

    if (!placeCache[place.id]) {

        placeCache[place.id] = {
            loading: false,
            loaded: false,
            location: null,
            description: null,
            image: null
        };
    }

    const cache =
        placeCache[place.id];

    if (cache.loading || cache.loaded) {
        return;
    }

    cache.loading = true;

    try {

        /*
         * 1. Find location
         */
        cache.location =
            await getPlaceLocation(
                place,
                currentCountry
            );

        /*
         * 2. Find Wikipedia description
         */
        cache.description =
            await getWikipediaDescription(
                place,
                currentCountry
            );

        /*
         * 3. Find Wikimedia Commons image
         */
        cache.image =
            await getWikimediaImage(
                place,
                currentCountry
            );

        cache.loaded = true;

    } catch (error) {

        console.error(
            `Failed to load ${place.name}:`,
            error
        );

        if (!cache.location) {

            cache.location = {
                address:
                    ADDRESS_PLACEHOLDER,

                lat: null,

                lng: null,

                country: null
            };
        }

        if (!cache.description) {

            cache.description =
                DESCRIPTION_PLACEHOLDER;
        }

        /*
         * null means:
         * leave image area blank.
         */
        cache.image = null;

        cache.loaded = true;

    } finally {

        cache.loading = false;
    }
}


// ============================================================
// NOMINATIM
// ============================================================

async function getPlaceLocation(
    place,
    countryCode
) {

    const countryName =
        getCountryName(countryCode);

    let searchText =
        place.name;

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

            return {
                address:
                    ADDRESS_PLACEHOLDER,

                lat: null,

                lng: null,

                country: null
            };
        }

        const result =
            results[0];

        const country =
            result.address &&
            result.address.country_code
                ? result.address.country_code.toUpperCase()
                : null;

        return {

            address:
                result.display_name ||
                ADDRESS_PLACEHOLDER,

            lat:
                result.lat
                    ? parseFloat(result.lat)
                    : null,

            lng:
                result.lon
                    ? parseFloat(result.lon)
                    : null,

            country
        };

    } catch (error) {

        console.error(
            `Nominatim error for ${place.name}:`,
            error
        );

        return {

            address:
                ADDRESS_PLACEHOLDER,

            lat: null,

            lng: null,

            country: null
        };
    }
}


// ============================================================
// WIKIPEDIA DESCRIPTION
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
            searchData.pages.find(
                page =>
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
            encodeURIComponent(
                matchingPage.key
            );

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
// WIKIMEDIA COMMONS IMAGE
// ============================================================

async function getWikimediaImage(
    place,
    countryCode
) {

    try {

        const countryName =
            getCountryName(countryCode);

        /*
         * Search the place name together with
         * the country to improve matching.
         */
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

        if (!data.query || !data.query.pages) {

            return null;
        }

        const pages =
            Object.values(
                data.query.pages
            );

        if (!pages.length) {
            return null;
        }

        /*
         * Try to find the best title match.
         */
        const normalizedPlaceName =
            place.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, " ")
                .trim();

        let bestPage = null;

        let bestScore = -Infinity;

        for (const page of pages) {

            const title =
                String(
                    page.title || ""
                )
                .replace(
                    /^File:/i,
                    ""
                )
                .toLowerCase();

            let score = 0;

            if (
                title.includes(
                    normalizedPlaceName
                )
            ) {

                score += 10;
            }

            const words =
                normalizedPlaceName
                    .split(" ")
                    .filter(Boolean);

            words.forEach(word => {

                if (title.includes(word)) {
                    score += 1;
                }
            });

            if (score > bestScore) {

                bestScore =
                    score;

                bestPage =
                    page;
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

        /*
         * Prefer the thumbnail because it is
         * much more appropriate for a card.
         */
        return (
            imageInfo.thumburl ||
            imageInfo.url ||
            null
        );

    } catch (error) {

        console.error(
            `Wikimedia image error for ${place.name}:`,
            error
        );

        /*
         * Returning null means the image
         * area stays blank.
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
// EXTERNAL LINKS
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
                class="place-link"
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
// CARDS
// ============================================================

function renderCards() {

    if (!placesContainer) {
        return;
    }

    const candidates =
        getCandidatePlaces();

    /*
     * Only show places whose resolved location
     * belongs to the selected country.
     */
    const visiblePlaces =
        candidates.filter(place => {

            const cache =
                placeCache[place.id];

            if (!cache || !cache.location) {
                return false;
            }

            return (
                cache.location.country ===
                currentCountry
            );
        });

    /*
     * Places not yet resolved.
     */
    const pendingPlaces =
        candidates.filter(place => {

            const cache =
                placeCache[place.id];

            return (
                !cache ||
                !cache.location
            );
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

    /*
     * While API requests are happening,
     * don't leave the page looking broken.
     */
    if (
        visiblePlaces.length === 0 &&
        pendingPlaces.length > 0
    ) {

        placesContainer.innerHTML = `
            <div class="empty-state">
                <h3>Finding places...</h3>
                <p>
                    Loading recommendations for
                    ${escapeHTML(
                        getCountryName(
                            currentCountry
                        )
                    )}.
                </p>
            </div>
        `;

        return;
    }

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

        const location =
            cache.location;

        const description =
            cache.description ||
            DESCRIPTION_PLACEHOLDER;

        const image =
            cache.image;

        const card =
            document.createElement("article");

        card.className =
            "place-card";

        /*
         * IMAGE
         *
         * If Wikimedia found an image:
         * show it.
         *
         * If it didn't:
         * leave the image area blank.
         */
        let imageHTML = `
            <div class="${IMAGE_PLACEHOLDER_CLASS}">
            </div>
        `;

        if (image) {

            imageHTML = `
                <div class="place-image">
                    <img
                        src="${escapeHTML(image)}"
                        alt="${escapeHTML(place.name)}"
                        loading="lazy"
                        referrerpolicy="no-referrer"
                    >
                </div>
            `;
        }

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

        const externalLinkHTML =
            getExternalLinkHTML(place);

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

                    ${externalLinkHTML}

                    <button
                        class="copy-button"
                        type="button"
                    >
                        Copy address
                    </button>

                    ${
                        location.lat !== null &&
                        location.lng !== null
                            ? `
                                <button
                                    class="map-button"
                                    type="button"
                                >
                                    View on map
                                </button>
                            `
                            : ""
                    }

                </div>

            </div>
        `;

        /*
         * Copy address
         */
        const copyButton =
            card.querySelector(
                ".copy-button"
            );

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

        /*
         * View on map
         */
        const mapButton =
            card.querySelector(
                ".map-button"
            );

        if (mapButton) {

            mapButton.addEventListener(
                "click",
                () => {

                    focusPlaceOnMap(
                        place
                    );
                }
            );
        }

        placesContainer.appendChild(card);
    });
}


// ============================================================
// MAP MARKERS
// ============================================================

function renderMarkers() {

    if (!map) {
        return;
    }

    markers.forEach(marker => {

        map.removeLayer(marker);
    });

    markers = [];

    const candidates =
        getCandidatePlaces();

    const visiblePlaces =
        candidates.filter(place => {

            const cache =
                placeCache[place.id];

            if (!cache || !cache.location) {
                return false;
            }

            const location =
                cache.location;

            return (
                location.country ===
                currentCountry &&
                typeof location.lat === "number" &&
                typeof location.lng === "number"
            );
        });

    visiblePlaces.forEach(place => {

        const location =
            placeCache[place.id].location;

        const marker =
            L.marker([
                location.lat,
                location.lng
            ]).addTo(map);

        marker.bindPopup(`
            <strong>
                ${escapeHTML(place.name)}
            </strong>

            <br>

            <span>
                ${escapeHTML(
                    location.address ||
                    ADDRESS_PLACEHOLDER
                )}
            </span>
        `);

        markers.push({
            marker,
            place
        });
    });

    if (!markers.length) {
        return;
    }

    if (markers.length === 1) {

        const location =
            placeCache[
                markers[0].place.id
            ].location;

        map.setView(
            [
                location.lat,
                location.lng
            ],
            14
        );

        return;
    }

    const bounds =
        L.latLngBounds(
            markers.map(item =>
                item.marker.getLatLng()
            )
        );

    map.fitBounds(
        bounds,
        {
            padding: [30, 30],
            maxZoom: 13
        }
    );
}


// ============================================================
// FOCUS MAP ON PLACE
// ============================================================

function focusPlaceOnMap(place) {

    if (!map) {
        return;
    }

    const cache =
        placeCache[place.id];

    if (
        !cache ||
        !cache.location ||
        cache.location.lat === null ||
        cache.location.lng === null
    ) {

        return;
    }

    const location =
        cache.location;

    map.setView(
        [
            location.lat,
            location.lng
        ],
        15
    );

    const existing =
        markers.find(
            item =>
                item.place.id === place.id
        );

    if (existing) {

        existing.marker.openPopup();
    }

    /*
     * On mobile, scroll the map into view.
     */
    const mapElement =
        document.getElementById("map");

    if (mapElement) {

        mapElement.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


// ============================================================
// COPY ADDRESS
// ============================================================

async function copyAddress(
    address,
    button
) {

    try {

        await navigator.clipboard.writeText(
            address
        );

        const originalText =
            button.textContent;

        button.textContent =
            "✓ Copied";

        button.classList.add(
            "copied"
        );

        setTimeout(() => {

            button.textContent =
                originalText;

            button.classList.remove(
                "copied"
            );

        }, 1500);

    } catch {

        window.prompt(
            "Copy this address:",
            address
        );
    }
}


// ============================================================
// URL
// ============================================================

function getCountryFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return (
        params.get("country") || ""
    ).toUpperCase();
}


function getCategoryFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return (
        params.get("category") || ""
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
        .replace(/\b\w/g, letter =>
            letter.toUpperCase()
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
// DELAY
// ============================================================

function delay(milliseconds) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                milliseconds
            )
    );
}


// ============================================================
// START
// ============================================================

loadPlaces();