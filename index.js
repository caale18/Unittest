function determinarAprobacionPrestamo(tipoSolicitante, tieneDeudas) {
    if(tipoSolicitante === "E") {
        return "Prestamo NO aprovado";
    } else if (tipoSolicitante === "T") {
        return "Prestamo aprobado";
    } else if (tipoSolicitante === "R") {
        return tieneDeudas === "S" ? "Prestamo NO aprovado" : "Prestamo aprovado"
    } else {
        return "Entrada inválida";
    }
}

rl.question(
    "ingrese si tipo (E para estuidante, T para trabajador, R para retirado): ", 
    (tipoSolicitante) => {
        rl.question("¿Tiene deudas? (S para sí, N para No): ", (tieneDeudas) => {
            const resultado = determinarAprobacionPrestamo(
                tipoSolicitante,
                tieneDeudas
            );
            console.log(resultado);
            rl.close();
        });
    }
);

module.exports = determinarAprobacionPrestamo;
