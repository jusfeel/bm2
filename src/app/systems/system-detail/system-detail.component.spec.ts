import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDetailComponent } from './system-detail.component';
import { LinksService } from '../../links.service';

describe('SystemDetailComponent', () => {
  let component: SystemDetailComponent;
  let fixture: ComponentFixture<SystemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemDetailComponent ],
      providers: [ LinksService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
