import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe} from '../filter.pipe';

import { TestComponent } from './test.component';
import {MlbRepoService} from '../mlb-repo.service';
import {RouterTestingModule} from '@angular/router/testing'

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, FilterPipe],
      providers : [MlbRepoService],
      imports : [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
