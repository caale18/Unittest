
import isLoanApproved from './loanApproval.js';

test('No se aprueba préstamo para estudiantes', () => {
  expect(isLoanApproved('estudiante', false)).toBe(false);
  expect(isLoanApproved('estudiante', true)).toBe(false);
});

// Resto de las pruebas...
