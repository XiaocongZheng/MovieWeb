import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVitemComponent } from './tvitem.component';

describe('TVitemComponent', () => {
  let component: TVitemComponent;
  let fixture: ComponentFixture<TVitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TVitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
