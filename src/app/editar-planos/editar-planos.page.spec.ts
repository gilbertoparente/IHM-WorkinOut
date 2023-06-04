import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPlanosPage } from './editar-planos.page';

describe('EditarPlanosPage', () => {
  let component: EditarPlanosPage;
  let fixture: ComponentFixture<EditarPlanosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarPlanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
