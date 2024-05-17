import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'Impressum', component: ImpressumComponent },
    { path: 'PrivacyPolicy', component: PrivacyPolicyComponent }
];
