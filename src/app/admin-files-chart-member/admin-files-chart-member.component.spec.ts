import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFilesChartMemberComponent } from './admin-files-chart-member.component';

describe('AdminFilesChartMemberComponent', () => {
  let component: AdminFilesChartMemberComponent;
  let fixture: ComponentFixture<AdminFilesChartMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFilesChartMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFilesChartMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
