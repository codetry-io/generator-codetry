import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaEditComponent } from './zona-edit.component';

describe('ZonaEditComponent', () => {
  let component: ZonaEditComponent;
  let fixture: ComponentFixture<ZonaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
