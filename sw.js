const CACHE_NAME = 'uestx_cache';
 
const URLS = [                // Add URL you want to cache in this list.
  // '/',                     // If you have separate JS/CSS files, add path to those files here
  '/index.html',
  '/UESTX_files/animate.css',
  '/UESTX_files/jquery.js'
];
 
// Cache resources
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(URLS);
    }).then(_ => {
      return self.skipWaiting();
    });
  );
});