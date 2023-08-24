import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcaoPage } from './acao.page';

describe('AcaoPage', () => {
  let component: AcaoPage;
  let fixture: ComponentFixture<AcaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
