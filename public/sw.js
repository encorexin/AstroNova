const CACHE_NAME = 'astro-blog-v1';
const urlsToCache = [
  '/',
  '/offline',
  '/fonts/inter-var.woff2',
  '/favicon.svg',
  '/manifest.json',
];

// Install event - pre-cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - network first strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip API requests and external resources
  if (
    request.url.includes('/api/') ||
    request.url.includes('google-analytics.com') ||
    request.url.includes('giscus.app')
  ) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        // Check if response is valid
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone response
        const responseToCache = response.clone();

        // Cache response
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        // Get from cache when offline
        return caches.match(request).then((response) => {
          // If found in cache, return cached version
          if (response) {
            return response;
          }

          // Otherwise return offline page
          if (request.destination === 'document') {
            return caches.match('/offline');
          }

          // For other resources, return 404
          return new Response('Resource not available offline', {
            status: 404,
            statusText: 'Not Found',
          });
        });
      })
  );
});

// Background sync - handle offline operations
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle offline queue
      console.log('Background sync triggered')
    );
  }
});

// Push notification support
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192.svg',
      badge: '/icon-192.svg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1,
      },
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  console.log('Notification click received:', event.notification);
  event.notification.close();

  event.waitUntil(clients.openWindow('/'));
});
