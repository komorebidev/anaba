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

const DESCRIPTION_PLACEHOLDER = "Description unavailable.";
const ADDRESS_PLACEHOLDER = "Address unavailable.";

const placeCache = {};


// ============================================================
// APPLICATION STATE
// ============================================================

let places = [];
let currentCountry = null;
let currentCategory = "all";

let map = null;
let markers = [];


// ============================================================
// DOM ELEMENTS
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
// MAP
// ============================================================

function initializeMap() {

    map = L.map("map").setView(
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
// LOAD PLACES.JSON
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

        /*
         * Get all API information for every place.
         */
        places =
            await prepareAllPlaces();

        initializeApplication();

    } catch (error) {

        console.error(error);

        if (placesContainer) {

            placesContainer.innerHTML = `
                <div class="empty-state">
                    <h3>Unable to load places</h3>
                    <p>
                        Please check that places.json
                        is valid and available.
                    </p>
                </div>
            `;
        }
    }
}


// ============================================================
// PREPARE ALL PLACES
// ============================================================

async function prepareAllPlaces() {

    /*
     * We process sequentially rather than firing dozens
     * of API requests simultaneously.
     *
     * This is friendlier to the public Nominatim service.
     */

    const preparedPlaces = [];

    for (const place of places) {

        try {

            const prepared =
                await preparePlace(place);

            preparedPlaces.push(prepared);

        } catch (error) {

            console.error(
                `Failed to prepare ${place.name}:`,
                error
            );

            preparedPlaces.push({
                ...place,

                country: null,

                address:
                    ADDRESS_PLACEHOLDER,

                lat: null,

                lng: null,

                description:
                    DESCRIPTION_PLACEHOLDER
            });
        }

        /*
         * Small delay between Nominatim requests.
         */
        await delay(1100);
    }

    return preparedPlaces;
}


// ============================================================
// PREPARE ONE PLACE
// ============================================================

async function preparePlace(place) {

    /*
     * Get geographic information from Nominatim.
     */
    const location =
        await getPlaceLocation(place);

    /*
     * Use the country returned by Nominatim when available.
     */
    const country =
        location.country;

    /*
     * Get description from Wikipedia.
     */
    const description =
        await getWikipediaDescription(
            place,
            country
        );

    return {

        ...place,

        country: country,

        address:
            location.address,

        lat:
            location.lat,

        lng:
            location.lng,

        description:
            description
    };
}


// ============================================================
// NOMINATIM
// ============================================================

async function getPlaceLocation(place) {

    const cacheKey =
        `location:${place.name}`;

    if (placeCache[cacheKey]) {
        return placeCache[cacheKey];
    }

    const url =
        "https://nominatim.openstreetmap.org/search" +
        "?q=" +
        encodeURIComponent(place.name) +
        "&format=jsonv2" +
        "&limit=1" +
        "&addressdetails=1";

    try {

        const response =
            await fetch(url, {
                headers: {
                    "Accept":
                        "application/json"
                }
            });

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

            const result = {
                address:
                    ADDRESS_PLACEHOLDER,

                lat: null,

                lng: null,

                country: null
            };

            placeCache[cacheKey] =
                result;

            return result;
        }

        const result =
            results[0];

        const countryCode =
            result.address &&
            result.address.country_code
                ? result.address.country_code.toUpperCase()
                : null;

        const location = {

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

            country:
                countryCode
        };

        placeCache[cacheKey] =
            location;

        return location;

    } catch (error) {

        console.error(
            `Nominatim error for ${place.name}:`,
            error
        );

        const fallback = {

            address:
                ADDRESS_PLACEHOLDER,

            lat: null,

            lng: null,

            country: null
        };

        placeCache[cacheKey] =
            fallback;

        return fallback;
    }
}


// ============================================================
// WIKIPEDIA
// ============================================================

async function getWikipediaDescription(
    place,
    countryCode
) {

    const cacheKey =
        `description:${place.name}:${countryCode || ""}`;

    if (placeCache[cacheKey]) {
        return placeCache[cacheKey];
    }

    try {

        /*
         * Include the country in the search when available.
         * This helps avoid finding the wrong place with the
         * same name in another country.
         */
        const countryName =
            countryCode
                ? getCountryName(countryCode)
                : "";

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
                `Wikipedia search HTTP ${searchResponse.status}`
            );
        }

        const searchData =
            await searchResponse.json();

        if (
            !searchData.pages ||
            searchData.pages.length === 0
        ) {

            placeCache[cacheKey] =
                DESCRIPTION_PLACEHOLDER;

            return DESCRIPTION_PLACEHOLDER;
        }

        const placeName =
            place.name.toLowerCase();

        /*
         * Try to find a page whose title contains
         * the actual place name.
         */
        let matchingPage =
            searchData.pages.find(
                page =>
                    page.title
                        .toLowerCase()
                        .includes(placeName)
            );

        /*
         * Otherwise use Wikipedia's top result.
         */
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

        /*
         * Prefer the article extract because it gives
         * a useful actual description rather than only
         * a short category label.
         */
        const description =
            summary.extract ||
            summary.description ||
            "";

        if (
            typeof description !== "string" ||
            !description.trim()
        ) {

            placeCache[cacheKey] =
                DESCRIPTION_PLACEHOLDER;

            return DESCRIPTION_PLACEHOLDER;
        }

        placeCache[cacheKey] =
            description;

        return description;

    } catch (error) {

        console.error(
            `Wikipedia error for ${place.name}:`,
            error
        );

        placeCache[cacheKey] =
            DESCRIPTION_PLACEHOLDER;

        return DESCRIPTION_PLACEHOLDER;
    }
}


// ============================================================
// INITIALIZE APPLICATION
// ============================================================

async function initializeApplication() {

    initializeMap();

    setupCategoryButtons();

    setupRegionSelector();

    setupCountrySelector();

    const urlCountry =
        getCountryFromURL();

    const urlCategory =
        getCategoryFromURL();

    if (
        urlCategory &&
        categories.includes(urlCategory)
    ) {

        currentCategory =
            urlCategory;

        updateCategoryButtons();
    }

    /*
     * If URL has a valid country, use it.
     */
    if (
        urlCountry &&
        countryExists(urlCountry)
    ) {

        setCountry(urlCountry);

        populateRegionForCountry(
            urlCountry
        );

    } else {

        /*
         * Otherwise use the first country
         * found in the loaded data.
         */
        const firstPlaceWithCountry =
            places.find(
                place =>
                    place.country &&
                    countryExists(place.country)
            );

        if (firstPlaceWithCountry) {

            setCountry(
                firstPlaceWithCountry.country
            );

            populateRegionForCountry(
                firstPlaceWithCountry.country
            );

        } else {

            /*
             * Default to Japan if no place could
             * be geocoded.
             */
            setCountry("JP");

            populateRegionForCountry("JP");
        }
    }

    await render();
}


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


function setupCategoryButtons() {

    const buttons =
        document.querySelectorAll(
            ".category-button"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                currentCategory =
                    this.dataset.category;

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
// REGION SELECTOR
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

            const firstCountry =
                Object.keys(
                    countryRegions[region].countries
                )[0];

            if (firstCountry) {

                setCountry(
                    firstCountry
                );

                if (countrySelect) {

                    countrySelect.value =
                        firstCountry;
                }

                render();
            }
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

            const country =
                this.value;

            if (!country) {
                return;
            }

            setCountry(country);

            render();
        }
    );
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

    if (!countryCode) {
        return null;
    }

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


function setCountry(countryCode) {

    if (!countryExists(countryCode)) {
        return;
    }

    currentCountry =
        countryCode;

    const info =
        getCountryInfo(countryCode);

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
            countryCode;
    }

    if (regionSelect) {

        regionSelect.value =
            info.region;
    }

    updateURL();
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
// FILTERING
// ============================================================

function getFilteredPlaces() {

    return places.filter(place => {

        if (
            place.country !==
            currentCountry
        ) {
            return false;
        }

        if (
            currentCategory === "all"
        ) {
            return true;
        }

        return (
            Array.isArray(place.categories) &&
            place.categories.includes(
                currentCategory
            )
        );
    });
}


// ============================================================
// RENDER
// ============================================================

async function render() {

    const filteredPlaces =
        getFilteredPlaces();

    renderCount(
        filteredPlaces.length
    );

    renderCards(
        filteredPlaces
    );

    renderMarkers(
        filteredPlaces
    );
}


// ============================================================
// RESULT COUNT
// ============================================================

function renderCount(count) {

    if (!resultCount) {
        return;
    }

    resultCount.textContent =
        `${count} recommendation${count === 1 ? "" : "s"}`;
}


// ============================================================
// PLACE CARDS
// ============================================================

function renderCards(filteredPlaces) {

    if (!placesContainer) {
        return;
    }

    placesContainer.innerHTML = "";

    if (
        filteredPlaces.length === 0
    ) {

        placesContainer.innerHTML = `
            <div class="empty-state">
                <h3>No recommendations yet</h3>
                <p>
                    There are currently no places
                    matching this country and category.
                </p>
            </div>
        `;

        return;
    }

    filteredPlaces.forEach(place => {

        const card =
            document.createElement("article");

        card.className =
            "place-card";

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

        card.innerHTML = `

            <h3 class="place-name">
                ${escapeHTML(place.name)}
            </h3>

            <div class="place-categories">
                ${categoriesHTML}
            </div>

            <p class="place-description">
                ${escapeHTML(
                    place.description ||
                    DESCRIPTION_PLACEHOLDER
                )}
            </p>

            <div class="place-address">
                <span class="address-icon">📍</span>

                <span>
                    ${escapeHTML(
                        place.address ||
                        ADDRESS_PLACEHOLDER
                    )}
                </span>
            </div>

            <button
                class="copy-button"
                type="button"
            >
                Copy address
            </button>
        `;

        const copyButton =
            card.querySelector(
                ".copy-button"
            );

        copyButton.addEventListener(
            "click",
            function () {

                copyAddress(
                    place.address ||
                        ADDRESS_PLACEHOLDER,
                    this
                );
            }
        );

        placesContainer.appendChild(
            card
        );
    });
}


// ============================================================
// MAP MARKERS
// ============================================================

function renderMarkers(filteredPlaces) {

    if (!map) {
        return;
    }

    markers.forEach(marker => {

        map.removeLayer(marker);
    });

    markers = [];

    const placesWithCoordinates =
        filteredPlaces.filter(
            place =>
                typeof place.lat === "number" &&
                typeof place.lng === "number" &&
                !Number.isNaN(place.lat) &&
                !Number.isNaN(place.lng)
        );

    if (
        placesWithCoordinates.length === 0
    ) {
        return;
    }

    placesWithCoordinates.forEach(place => {

        const marker =
            L.marker([
                place.lat,
                place.lng
            ]).addTo(map);

        marker.bindPopup(`
            <strong>
                ${escapeHTML(place.name)}
            </strong>

            <br>

            <span>
                ${escapeHTML(
                    place.address ||
                    ADDRESS_PLACEHOLDER
                )}
            </span>
        `);

        markers.push(marker);
    });

    if (markers.length === 1) {

        map.setView(
            [
                placesWithCoordinates[0].lat,
                placesWithCoordinates[0].lng
            ],
            14
        );

    } else {

        const bounds =
            L.latLngBounds(
                markers.map(
                    marker =>
                        marker.getLatLng()
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

    } catch (error) {

        /*
         * Fallback if clipboard isn't available.
         */
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
// HTML SAFETY
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
// START APPLICATION
// ============================================================

loadPlaces();