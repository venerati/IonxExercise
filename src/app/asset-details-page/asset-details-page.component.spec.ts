import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDetailsPAgeComponent } from './asset-details-page.component';

describe('AssetDetailsPAgeComponent', () => {
  let component: AssetDetailsPAgeComponent;
  let fixture: ComponentFixture<AssetDetailsPAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDetailsPAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDetailsPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
