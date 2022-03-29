import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { SplashPage } from './splash.page';

describe('SplashPage', () => {
  let component: SplashPage;
  let fixture: ComponentFixture<SplashPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SplashPage],
      imports: [IonicModule.forRoot(), AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SplashPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
  }));

  it('should go to the login page', fakeAsync(() => {
    spyOn(router, 'navigate');
    component.ngOnInit();
    tick(1500);
    expect(component).toBeTruthy();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
