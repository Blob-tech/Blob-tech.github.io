import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteListComponent } from './institute-list.component';
import { MatTableModule } from '@angular/material/table';

describe('CreateInstituteComponent', () => {
  let component: InstituteListComponent;
  let fixture: ComponentFixture<InstituteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [MatTableModule],
      declarations: [ InstituteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
