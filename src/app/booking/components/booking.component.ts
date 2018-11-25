import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { BookingService } from '../services';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

    private rooms:number;
    private adults:number;
    private children:number;
    private minRooms:number;
    private minAdult:number;
    private minChildren:number;
    private maxRoomCapacity:number;
    private maxRoomsAvailable:number;
    private blockAddingPeople:boolean;
    
    constructor(private BookingService: BookingService) { }
    
    ngOnInit() {
        this.initialiseValues();
    }

//  Initialize all the values
    initialiseValues(): void{
        this.rooms = 1;
        this.adults = 1;
        this.children = 0;
        this.minRooms = 1;
        this.minAdult = 1;
        this.maxRoomCapacity = 4;
        this.maxRoomsAvailable = 5;
        this.blockAddingPeople = false;
        this.minChildren = 0;
    }
    
    /*Increase in Room Count*/
    increaseRoomCount(): void {
        this.rooms++;
        if((this.adults + this.children) < this.rooms){
            this.adults++;
        }
        if((this.adults + this.children) == this.maxRoomsAvailable * this.maxRoomCapacity){
            this.blockAddingPeople = true;
        }
    }

    /*Decrease in Room Count*/
    decreaseRoomCount(): void {
        if(this.rooms > this.minRooms){
            this.rooms--;
            while((this.adults + this.children) > this.rooms * this.maxRoomCapacity) {
                if(this.children > this.minChildren){
                    this.children--;
                }else{
                    this.adults--;
                }
            }
            if ((this.adults + this.children) != this.maxRoomsAvailable * this.maxRoomCapacity) {
                this.blockAddingPeople = false;
            }
        }
    }
    
    /*Decrease in Adult value Count*/
    increaseAdultsCount(): void {
        if(this.rooms <= this.maxRoomsAvailable) {
            this.adults++;
            if((this.adults + this.children) > this.rooms * this.maxRoomCapacity){
                this.rooms++;
            }
            if((this.adults + this.children) == this.maxRoomsAvailable * this.maxRoomCapacity){
                this.blockAddingPeople = true;
            }
        }

    }

    /*Increase in Children value Count*/
    increaseChildrenCount():void {
        if(this.rooms <= this.maxRoomsAvailable) {
            this.children++;
            if((this.adults + this.children) > this.rooms * this.maxRoomCapacity){
                this.rooms++;
            }
            if((this.adults + this.children) == this.maxRoomsAvailable * this.maxRoomCapacity){
                this.blockAddingPeople = true;
            }
        }
    }
    
    /*Decrease in Adult value Count*/
    decreaseAdultsCount():void {
        if(this.adults > this.minAdult) {
            this.adults--;
            if((this.adults + this.children) <= (this.rooms-1)){
                this.rooms--;
            }
            if((this.adults + this.children) != this.maxRoomsAvailable * this.maxRoomCapacity){
                this.blockAddingPeople = false;
            }
        }
    }
    
    /*Decrease in Decrease value Count*/
    decreaseChildrenCount():void {
        if(this.children > this.minChildren) {
            this.children--;
            if((this.adults + this.children) <= (this.rooms-1)){
                this.rooms--;
            }
            if((this.adults + this.children) != this.maxRoomsAvailable * this.maxRoomCapacity){
                this.blockAddingPeople = false;
            }
        }
    }
}
