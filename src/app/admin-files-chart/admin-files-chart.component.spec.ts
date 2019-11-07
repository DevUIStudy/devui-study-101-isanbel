import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFilesChartComponent } from './admin-files-chart.component';

describe('AdminFilesChartComponent', () => {
  let component: AdminFilesChartComponent;
  let fixture: ComponentFixture<AdminFilesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFilesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFilesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
