import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginEffects } from 'src/app/pages/login/login.effects';
import { RegisterEffects } from 'src/app/pages/register/register.effects';
import { loadingReducer } from './loading/loading.reducers';
import { loginReducer } from './login/login.reducers';
import { registerReducer } from './register/register.reducers';

export const appStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature('loading', loadingReducer),
    StoreModule.forFeature('login', loginReducer),
    StoreModule.forFeature('register', registerReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
        LoginEffects,
        RegisterEffects
    ])
];
