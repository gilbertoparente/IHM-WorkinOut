import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreinarPage } from './treinar.page';

describe('TreinarPage', () => {
  let component: TreinarPage;
  let fixture: ComponentFixture<TreinarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TreinarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
