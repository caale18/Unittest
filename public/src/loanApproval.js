// src/loanApproval.js
function isLoanApproved(personType, hasDebt) {
  if (personType === 'estudiante') {
    return false; // Los estudiantes no pueden recibir préstamos
  } else if (personType === 'empleado' || personType === 'trabajador') {
    return true; // Los empleados/trabajadores siempre pueden recibir préstamos
  } else if (personType === 'retirado') {
    return !hasDebt; // Los retirados solo pueden recibir préstamos si no tienen deudas
  } else {
    throw new Error('Tipo de persona no reconocido');
  }
}

export default isLoanApproved;
