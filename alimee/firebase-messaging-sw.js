self.addEventListener('push', (Event) => {ThePush = Event.data.json().notification; Event.waitUntil(self.registration.showNotification(ThePush.title, {body: ThePush.body}));});
