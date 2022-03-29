import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3Page } from './tab3.page';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
  }));

  it('should redirect to settings page', () => {
    spyOn(router, 'navigate');
    component.settings();
    expect(router.navigate).toHaveBeenCalledOnceWith(['settings']);
  });
});
