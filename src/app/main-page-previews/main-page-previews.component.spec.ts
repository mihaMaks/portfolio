import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagePreviewsComponent } from './main-page-previews.component';

describe('MainPagePreviewsComponent', () => {
  let component: MainPagePreviewsComponent;
  let fixture: ComponentFixture<MainPagePreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPagePreviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPagePreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
