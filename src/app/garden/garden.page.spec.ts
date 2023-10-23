import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GardenPage } from './garden.page';

describe('GardenPage', () => {
  let component: GardenPage;
  let fixture: ComponentFixture<GardenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GardenPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GardenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
