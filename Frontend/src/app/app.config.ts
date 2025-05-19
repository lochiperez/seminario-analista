import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fixitpro-a0744',
        appId: '1:20191052050:web:424238142267ec33c733cb',
        storageBucket: 'fixitpro-a0744.firebasestorage.app',
        apiKey: 'AIzaSyCb_-GvXCqgLfSgC-dFsHAA_84gHPxuBGk',
        authDomain: 'fixitpro-a0744.firebaseapp.com',
        messagingSenderId: '20191052050',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
