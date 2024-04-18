export function isNew(fechaCreacion) {
  const SIETE_DIAS_EN_MILISEGUNDOS = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos
  const tiempoCreacion = new Date(fechaCreacion).getTime();
  const tiempoActual = new Date().getTime();
  return tiempoActual - tiempoCreacion < SIETE_DIAS_EN_MILISEGUNDOS;
}

export const extractIdsFromState = (state) => {
  // Verificar si el estado es un array
  if (!Array.isArray(state)) {
    console.error("El estado no es un array");
    return [];
  }
  // Extraer los IDs de los objetos en el estado
  const ids = state.map((item) => item.id);
  return ids;
};

export function obtenerObjetosMasRecientes(array) {
  // Ordenar el array de objetos por la fecha más reciente
  array.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Obtener los primeros 5 objetos del array (los más recientes)
  const objetosMasRecientes = array.slice(0, 5);

  return objetosMasRecientes;
}

export function formatPrice(price) {
  if (price < 1000) {
    return price.toString();
  } else if (price < 1000000) {
    return (price / 1000).toFixed(1) + "K";
  } else {
    return (price / 1000000).toFixed(1) + "M";
  }
}

export function calcularPorcentaje(valor) {
  const objetivo = 10000; // Valor objetivo
  const porcentaje = (valor / objetivo) * 100; // Cálculo del porcentaje
  return porcentaje;
}

export function calcularFaltaParaObjetivo(valor) {
  const objetivo = 10000; // Valor objetivo
  const falta = objetivo - valor; // Cálculo de la cantidad que falta
  return falta;
}
