// 3. Construir el algoritmo para determinar el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.

console.log(`Segun la ley de Ohm El voltaje es V = I * R => (voltaje) = (intensidad) * (resistencia)`);
let variableR = prompt(`Ingrese el valor de la resistencia en [Ohmios]: `);
let variableI = prompt(`Ingrese el valor de la intensidad de la corriente en [Amperios]: `);
let voltaje = variableI * variableR 
console.log(`El voltaje es ${voltaje} [Voltios]`)