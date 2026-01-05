let herois = [
    {nome: 'Homem de Ferro', experiencia: 11000},
    {nome: 'Capitão América', experiencia:10000},
    {nome: 'Thor', experiencia: 8900},
    {nome: 'Hulk', experiencia: 5000},
]
for (let heroi = 0; heroi < herois.length; heroi++){
    let nome = herois[heroi].nome
    let xp = herois[heroi].experiencia
    let nivel = '';

if (xp <= 1000){
    nivel = 'Ferro';
}else if(xp >= 1001 && xp <= 2000){
    nivel = 'Bronze';
}else if(xp >= 2001 && xp <= 5000){
    nivel = 'Prata';
}else if(xp >=5001 && xp <= 7000){
    nivel = 'Ouro';
}else if(xp >=7001 && xp <= 8000){
    nivel = 'Platina';
}else if(xp >=8001 && xp <= 9000){
    nivel = 'Ascendente';
}else if(xp >= 9001 && xp <=10000){
    nivel = 'Imortal';
}else{
    nivel = 'Radiante';
}
console.log(`O nivel da classificação do herói ${nome} é ${nivel}`);
}
