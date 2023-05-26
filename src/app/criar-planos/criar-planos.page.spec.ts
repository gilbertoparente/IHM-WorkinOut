import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarPlanosPage } from './criar-planos.page';

describe('CriarPlanosPage', () => {
  let component: CriarPlanosPage;
  let fixture: ComponentFixture<CriarPlanosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriarPlanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
