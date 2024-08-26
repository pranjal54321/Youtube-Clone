export const API_KEY='AIzaSyBZcuXTC0FhfW770xtep6ycx5IGqZ5VWjs';

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}