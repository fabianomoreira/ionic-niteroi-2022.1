import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProximaPage } from './proxima.page';

describe('ProximaPage', () => {
  let component: ProximaPage;
  let fixture: ComponentFixture<ProximaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProximaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
