let team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        imgPath: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        imgPath: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        imgPath: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        imgPath: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        imgPath: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        imgPath: "barbara-ramos-graphic-designer.jpg"
    }
    
]



for (let i = 0; i < team.length; i++) {

    const imgHtml = document.createElement("img");
    imgHtml.setAttribute("src", team[i].imgPath);
    document.getElementById("team").appendChild(imgHtml).innerHTML = `${team[i].imgPath}`
    const pHtml =  document.createElement("p");
    document.getElementById("team").appendChild(pHtml).innerHTML = `${team[i].name} - ${team[i].role}`;



     /* console.log(teamHtml); */

    /*     for(let key in team[i]) {
            console.log( key, team[i][key] );
        } */

    
}


