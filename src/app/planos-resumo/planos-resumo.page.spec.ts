import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanosResumoPage } from './planos-resumo.page';

describe('PlanosResumoPage', () => {
  let component: PlanosResumoPage;
  let fixture: ComponentFixture<PlanosResumoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanosResumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
