import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFormComponent } from './password-form.component';

describe('PasswordFormComponent', () => {
  let component: PasswordFormComponent;
  let fixture: ComponentFixture<PasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('resetForm should clear out every field', () => {
    component.generatedPassword = 'asf1234&^$*';
    component.includeLowerCase = true;
    component.includeNumbers = true;
    component.includeSymbols = true;
    component.includeUpperCase = true;
    component.passwordLength = 11;
    component.resetForm();
    expect(component.generatedPassword).toBe('');
    expect(component.includeLowerCase).toBe(false);
    expect(component.includeNumbers).toBe(false);
    expect(component.includeSymbols).toBe(false);
    expect(component.includeUpperCase).toBe(false);
    expect(component.passwordLength).toBe(0);
  });

  it('generatePassword with only numbers', () => {
    component.generatedPassword = '';
    component.includeLowerCase = false;
    component.includeNumbers = true;
    component.includeSymbols = false;
    component.includeUpperCase = false;
    component.passwordLength = 5;
    component.generatePassword();
    expect(component.generatedPassword.length).toBe(component.passwordLength);
    expect(component.generatedPassword).not.toBeNaN()
  })
});
