import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule , NbOAuth2AuthStrategy, NbOAuth2ResponseType} from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import {NbAuthOAuth2Token} from '@nebular/auth/services/token/token';

// const socialLinks = [
//   {
//     url: 'https://github.com/akveo/nebular',
//     target: '_blank',
//     icon: 'socicon-github',
//   },
//   {
//     url: 'https://www.facebook.com/akveo/',
//     target: '_blank',
//     icon: 'socicon-facebook',
//   },
//   {
//     url: 'https://twitter.com/akveo_inc',
//     target: '_blank',
//     icon: 'socicon-twitter',
//   },
// ];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({

    strategies: [
      NbOAuth2AuthStrategy.setup({
        name: 'mquery',
        clientId: '2',
        clientSecret: 'gPijZjtFTQQdONzazl32wSc8Lbw6eZEnFcnlcBBv',
        authorize: {
          endpoint: 'http://mquery.test/oauth/token',
          responseType: NbOAuth2ResponseType.TOKEN,
          scope: '',
        },
        token: {
          endpoint: 'http://mquery.test/oauth/token',
          grantType: 'password',
          class: NbAuthOAuth2Token,
        },

      }),
    ],
    forms: {
      // Social Login deleted
      // login: {
      //   socialLinks: socialLinks,
      // },
      // Social Register deleted
      // register: {
      //   socialLinks: socialLinks,
      // },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
