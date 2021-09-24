import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoViewComponent } from './contato-view.component';

describe('ContatoViewComponent', () => {
  let component: ContatoViewComponent;
  let fixture: ComponentFixture<ContatoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
