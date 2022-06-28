'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e55a0dc3d08c1ad657a972d2c8fc134c",
"assets/assets/images/afg-1.gif": "301bcc9a373e8b684cee2e72c37fdeaf",
"assets/assets/images/afg-2.gif": "1a9ea67366d35afacff3114c65ac9ff7",
"assets/assets/images/afg-3.gif": "9a30a871490bcd607decf7a9ebfc22c8",
"assets/assets/images/afg-4.gif": "f211bb44f9beb4c85e450b14bacd4a05",
"assets/assets/images/AkarIconsLinkedinv2Fill.svg": "1b416664cb15878d5bf3401887698d5a",
"assets/assets/images/App%2520Mockups%252046.png": "6b0ada239840f15f91acb26ba675b736",
"assets/assets/images/App%2520Mockups%252051.jpg": "b2390ff5003c1616bb98d25353c61f60",
"assets/assets/images/App%2520Mockups%252053.png": "9efd0f3b6b549c67cb99b5494da17a25",
"assets/assets/images/App%2520Mockups%252054.png": "b8a09d324127980d2063019d8ff7eccd",
"assets/assets/images/facebook-svgrepo-com.svg": "2ed17a73eb526ac19cf64edbd1001af2",
"assets/assets/images/game_app.jpg": "ca767fad4b0d67dd561a4f53fe8ce651",
"assets/assets/images/home_page+photo.jpg": "c6ff6cd73b5568122f07ce5fcf254cb4",
"assets/assets/images/IMG-20210811-WA0000.jpg": "59b665a13a89210a1b99170b50ed5a6c",
"assets/assets/images/IMG-20210811-WA0001.jpg": "9ef0ca8e071df2d331ee72f81a318372",
"assets/assets/images/IMG-20210811-WA0002.jpg": "a9de1c6e899a10950a0b3d29b93523e3",
"assets/assets/images/IMG-20210811-WA0003.jpg": "6ceae17461cfc9e2269928cfbe26bda0",
"assets/assets/images/IMG-20210813-WA0000.jpg": "d336e3e425834c5be40b519a81dd0248",
"assets/assets/images/IMG-20210813-WA0001.jpg": "c5e6145e6d0874dd7b7f3e5f76ab9a42",
"assets/assets/images/IMG-20210813-WA0003.jpg": "4acff5b3a70eec995c8bfe9912d1fa13",
"assets/assets/images/IMG-20210813-WA0004.jpg": "b7a6964904b5c6a360622de103e8d386",
"assets/assets/images/IMG-20210825-WA0007.jpg": "2c9184c83eb15261581747915f907750",
"assets/assets/images/IMG-20210825-WA0024.jpg": "58c8a1142813fa8346fc204cf513ee9f",
"assets/assets/images/IMG-20210825-WA0028.jpg": "b1ccba463ce48712e5af3210fab41330",
"assets/assets/images/IMG-20220308-WA0005.jpg": "31eb54481592653915250475ec368bdd",
"assets/assets/images/IMG-20220310-WA0007.jpg": "f923ea385bd22c095596670590e6e398",
"assets/assets/images/IMG-20220316-WA0007.jpg": "bbb5cea2c6b295b5871c014e2a190a75",
"assets/assets/images/IMG-20220321-WA0013.jpg": "8f5b6654b5490356e4bf1e7969d7ad43",
"assets/assets/images/IMG-20220323-WA0004.jpg": "392c52187830dc1aae065b4b46b14091",
"assets/assets/images/IMG-20220323-WA0005.jpg": "5023788e91359221acc0c2f39e209c66",
"assets/assets/images/IMG-20220325-WA0006.jpg": "c454da75c2054b8af7d229707d3c624e",
"assets/assets/images/MdiGithub.svg": "113de71589aa84a0cbdea64fb22e9490",
"assets/assets/images/MdiInstagram%2520.svg": "7ab3ef38989b6ea84c0714801d917839",
"assets/assets/images/MdiTwitter.svg": "2d44e9c470aaa8bfde63e806ab858388",
"assets/assets/images/meal_monkey.jpg": "73b9045b7e5f543a111fb5a6058022d9",
"assets/assets/images/news.jpg": "dae84a928189f4151d3e92d8c466b9d1",
"assets/assets/images/Play%2520Store%25201.jpg": "bc97ffb2c2f3a3127d5c9f6bcce35864",
"assets/assets/images/Prijens-resume-png.png": "ed2b877704ee206946e70d8b86303b7a",
"assets/assets/images/prijens-resume.png": "0feab38c8c46d0fbc26e9abb02cfd0d6",
"assets/assets/images/prijens_nakrani.png": "3a455116d3952345530d0c4ab28e3199",
"assets/assets/images/profile2.jpg": "d6144845f6cfd427f82b64de54035bdb",
"assets/assets/images/Project%2520Thumb%2520App%252028.png": "57b84a88f50e38d6d7511ece6bf08d8d",
"assets/assets/images/RiTwitterFill.svg": "51e6a2ceae1c2bad7bedf4af46cd4cd8",
"assets/assets/images/test-mokup.png": "8ae3a72196d7791bde937088e3bdd5b6",
"assets/assets/images/tic_tac_toe.jpg": "65f989dc1eccccc45676e6015b0a0e14",
"assets/assets/images/whatsapp_ui.png": "cc9b64b127dc1a1eadba4505eb6ae12d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "6fa4fb6a7e20137ded1b639e80e5ffa6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "0dfe52e439abb625e5baeabe4e4e82bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d5e95833ae99c02fbe654a297c2b37a",
"/": "2d5e95833ae99c02fbe654a297c2b37a",
"main.dart.js": "ed335d2f9ff0aef304442310dfeec294",
"manifest.json": "1339496439b5e07373813a9730b66cab",
"version.json": "d379da8ff7a31387b42083ba44f24aad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
