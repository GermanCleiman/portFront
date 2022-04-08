import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortAdminComponent } from './port-admin.component';

describe('PortAdminComponent', () => {
  let component: PortAdminComponent;
  let fixture: ComponentFixture<PortAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
