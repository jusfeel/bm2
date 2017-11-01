import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemListComponent } from './system-list.component';
import { SystemDetailComponent } from '../system-detail/system-detail.component';
import { LinksService } from '../../links.service';
import { SystemService } from '../system.service';
import { SystemFakeService } from '../system-fake.service';

describe('SystemListComponent', () => {
  let component: SystemListComponent;
  let fixture: ComponentFixture<SystemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemListComponent, SystemDetailComponent ],
      providers: [ LinksService, { provide: SystemService, useClass: SystemService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should attach message from service to component', async(() => {
    expect(component.message).toBe('Welcome to Hong Kong');
  }));


});
