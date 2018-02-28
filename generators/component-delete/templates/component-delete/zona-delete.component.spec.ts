import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaDeleteComponent } from './zona-delete.component';

describe('ZonaDeleteComponent', () => {
  let component: ZonaDeleteComponent;
  let fixture: ComponentFixture<ZonaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
