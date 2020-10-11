import { Injectable } from '@angular/core';
import { Student } from './student.modal';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private student: Student[] =[
    {
      id:'201606100110030',
      marks1:'96',
      marks2:'98',
      marks3:'86',
      
    },
    {
      id:'201606100110026',
      marks1:'65',
      marks2:'75',
      marks3:'90',
      
    },
    {
      id:'201606100110027',
      marks1:'66',
      marks2:'96',
      marks3:'65',
      
    },  
  ];
  

  constructor() { }

  getAllStudent(){
    return [...this.student];
  }
  geteRecipe(enrollmentno:string){
    return{
      ...this.student.find(student => {
        return student.id === enrollmentno;
      }),
    }
  }
  deleteRecipe(enrollmentno:string){
    this.student=this.student.filter(student => {
      return student.id !==  enrollmentno;
    })
  }
}
