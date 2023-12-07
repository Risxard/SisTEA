import * as Speech from 'expo-speech';


export const toString= (selectedInicial,selectedFiguras) => {

    const nomesInicial = selectedInicial.map((item) => item.name);
    const nomesFiguras = selectedFiguras.map((item) => item.name);
    const resultado = nomesInicial.concat(nomesFiguras).join(" ");

    return resultado
};

export const speak = (text) => {
    if (text) {
        const options = {
            voice: "pt-br-x-afs-network",
            language: "pt-BR",
            rate: 1.0,
        };
        Speech.speak(text, options);
    } else {
        console.error("Escolha um cartão!");
    }
}
