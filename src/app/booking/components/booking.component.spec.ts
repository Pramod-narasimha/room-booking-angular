import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import { BookingService } from '../services';
import { By } from '../../../../node_modules/@angular/platform-browser';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingComponent ],
      providers: [ BookingService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TestCase 1', () => {
    let increaseRoomCount = fixture.debugElement.query(By.css("#increaseRoomCount"));
    let increaseAdultsCount = fixture.debugElement.query(By.css("#increaseAdultsCount"));
    let spanValue = fixture.debugElement.query(By.css("#roomValue"));
    let increasedRoomValue = spanValue.nativeElement; 

    increaseRoomCount.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    increaseRoomCount.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(increasedRoomValue.innerHTML).toEqual("3");
  });

  it('TestCase 2', () => {
    let increaseRoomCount = fixture.debugElement.query(By.css("#increaseRoomCount"));
    let decreaseRoomCount = fixture.debugElement.query(By.css("#decreaseRoomCount"));
    let increaseAdultsCount = fixture.debugElement.query(By.css("#increaseAdultsCount"));
    let increaseChildrenCount = fixture.debugElement.query(By.css("#increaseChildrenCount"));
    let spanValue = fixture.debugElement.query(By.css("#roomValue"));
    let increasedRoomValue = spanValue.nativeElement; 

    increaseRoomCount.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    increaseAdultsCount.triggerEventHandler('click', null);
    fixture.detectChanges();
      
    increaseAdultsCount.triggerEventHandler('click', null);
    fixture.detectChanges();
      
    increaseAdultsCount.triggerEventHandler('click', null);
    fixture.detectChanges();
      
    increaseAdultsCount.triggerEventHandler('click', null);
    fixture.detectChanges();
      
    increaseAdultsCount.triggerEventHandler('click', null);
    fixture.detectChanges();
      
    increaseChildrenCount.triggerEventHandler('click', null);
    fixture.detectChanges();

    decreaseRoomCount.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(increasedRoomValue.innerHTML).toEqual("1");
  });
    
});
