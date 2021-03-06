import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtfViewSeedComponent } from './ftf-view-seed.component';

describe('FtfViewSeedComponent', () => {
  let component: FtfViewSeedComponent;
  let fixture: ComponentFixture<FtfViewSeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtfViewSeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtfViewSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
