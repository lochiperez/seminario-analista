import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RepairsService } from '../../services/repairs.service';
import { SolutionsService } from '../../services/solutions.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup

  constructor(private loginService:AuthService,
    private repairsService:RepairsService,
    private solutionsService:SolutionsService,
    private fb:FormBuilder
  ){
    this.loginForm = this.fb.group({
      user:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  login(user:any){
    let login = this.loginForm.value
    console.log(login)
    this.loginService.getUsuarios().subscribe(response =>{
      console.log(response)
      let success = response[0]
      console.log(success)
      if(success){
        console.log(success, 'logra logearse')
      } else {
        console.log('no se loguea')
      }
    })
  }

  repairs(){
    this.repairsService.getRepairs().subscribe(response =>{
      console.log(response)
    })
  }

  solutions(){
    this.solutionsService.getSolutions().subscribe(response =>{
      console.log(response)
    })
  }
}
