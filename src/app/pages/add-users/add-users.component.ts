import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent {

  //#region Constructor

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {

    this.formGroup = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      function: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  //#endregion

  //#region Public Properties

  public formGroup!: FormGroup;
  
  //#endregion

  //#region Public Methods

  public async onSubmit(): Promise<void> {
    if (this.formGroup.valid)
      console.log('Resultado: ', this.formGroup.value)

    this.router.navigate(['/pages/users/'])
  }

  //#endregion

}
