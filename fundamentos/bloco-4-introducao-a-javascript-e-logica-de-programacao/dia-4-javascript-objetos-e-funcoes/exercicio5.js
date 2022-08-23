// EXERCICIO 5 - OBJETOS E FOR/IN

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.personagem += ' e Tio Patinhas';
info.origem += " e Christmas on Bear Mountain, Dell's Four Color Comics #178"
info.nota += ' e O último MacPatinhas'
info.recorrente = 'Sim'

for (let key in info) {
    console.log(info[key]);
}