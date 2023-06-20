function openModal(buttonIndex) {
    var modalImg = document.getElementById("modalImg");
    var modalText = document.getElementById("modalText");
  
  
    switch (buttonIndex) {
        case 1:
            modalImg.src = "./assets/img/process-circle.png";
            modalText.innerHTML = "Entenderás claramente quién eres y qué ofreces.";
            break;
        case 2:
            modalImg.src = "./assets/img/graduate-circle.png";
            modalText.innerHTML = "Alto sentido colaborativo, pensam iento crítico e inteligencia emocional.";
            break;
        case 3:
            modalImg.src = "./assets/img/rocket-circle.png";
            modalText.innerHTML = "Profesional con alta capacidad técnica.";
            break;
        case 4:
            modalImg.src = "./assets/img/person-circle.png";
            modalText.innerHTML = "Estarás en un ambiente conectado con empresas y personas.";
            break;
        case 5:
            modalImg.src = "./assets/img/comunication-circle.png";
            modalText.innerHTML = "Impulsaras tus oportunidades laborales";
            break;
      default:
        modal.style.display = "";
        break;
    }
  }