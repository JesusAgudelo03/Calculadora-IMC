let peso;
let estatura;

function calcularIMC() {
  peso = parseFloat(document.querySelector("#peso").value);
  estatura = parseFloat(document.querySelector("#estatura").value);

  if (peso <= 0 || estatura <= 0) {
    showModal("El peso y la estatura deben ser mayores que 0.");
    return;
  }
  if (isNaN(peso) || isNaN(estatura)) {
    showModal("Ingresa los datos de estatura y peso");
    return;
  }

  let imc = peso / (estatura * estatura);
  let resultado = document.querySelector(".resultado");
  let dieta = document.querySelector(".dieta");
  let resultado2 = document.querySelector(".resultado2");

  imc = imc.toFixed(2);

  if (imc < 18.5) {
    resultado.innerHTML =
      "Tu IMC es " + imc + ", te encuentras en un peso inferior al normal.";
    dieta.innerHTML =
      "<ul>" +
      "<li><strong>Recomendación alimenticia</strong> <br>Consulta a un nutricionista y considera aumentar la ingesta calórica.</li>" +
      "<li><strong>Carbohidratos:</strong> Espárragos, champiñones, berenjena.</li>" +
      "<li><strong>Proteínas:</strong> Pescado graso, pechuga de pavo, huevos.</li>" +
      "<li><strong>Grasas saludables:</strong> Nueces, semillas de lino, aceite de coco.</li>" +
      "</ul>";
    resultado2.innerHTML = `
    <div class="gap">
      <div class="">
        <div class="">
          <div class="flex flex-col items-center mr-52">
            <p class="text-center bg-sky-800 text-white rounded-md px-4 py-2">${imc}</p>
            <div style="clip-path: polygon(100% 0, 0 0, 50% 100%);" class="w-4 h-4 bg-sky-800 mt-[-4px]"></div>
          </div>
        </div>
        <img src="images/barramov.png" alt="" class="mx-auto p-2 shadow-md border-t border-sky-600 rounded-lg shadow-sky-900">
      </div>
    </div>
    `;
  } else if (imc >= 18.5 && imc < 24.9) {
    resultado.innerHTML =
      "<p>Tu IMC es <strong>" +
      imc +
      "</strong>, te encuentras en un peso normal.</p>";
    dieta.innerHTML =
      "<ul class=``>" +
      "<li><strong>Recomendación alimenticia:</strong> <br>Continúa manteniendo una dieta equilibrada.</li>" +
      "<li><strong>Carbohidratos:</strong> Avena, quinoa, frutas.</li>" +
      "<li><strong>Proteínas:</strong> Pollo, tofu, legumbres.</li>" +
      "<li><strong>Grasas saludables:</strong> Aguacate, aceite de oliva, almendras.</li>" +
      "</ul>";
    resultado2.innerHTML = `
      <div class="gap mt-8">
        <div class="">
          <div class="">
            <div class="flex flex-col items-center mr-20">
              <p class="text-center bg-sky-800 text-white rounded-md px-4 py-2">${imc}</p>
              <div style="clip-path: polygon(100% 0, 0 0, 50% 100%);" class="w-4 h-4 bg-sky-800 mt-[-4px]"></div>
            </div>
          </div>
          <img src="images/barramov.png" alt="" class="mx-auto p-2 shadow-md border-t border-sky-600 rounded-lg shadow-sky-900">
        </div>
      </div>
      `;
  } else if (imc >= 25 && imc < 29.9) {
    resultado.innerHTML = "Tu IMC es " + imc + ", te encuentras en sobrepeso.";
    dieta.innerHTML =
      "<ul>" +
      "<li><strong>Recomendación alimenticia:</strong> <br>Consulta a un nutricionista y considera reducir la ingesta calórica.</li>" +
      "<li><strong>Carbohidratos:</strong> Verduras de hoja verde, batatas, legumbres.</li>" +
      "<li><strong>Proteínas:</strong> Pechuga de pollo, pescado, frijoles.</li>" +
      "<li><strong>Grasas saludables:</strong> Aceite de oliva, aguacate, nueces.</li>" +
      "</ul>";
    resultado2.innerHTML = `
    <div class="gap">
      <div class="">
        <div class="">
          <div class="flex flex-col items-center ml-20">
            <p class="text-center bg-sky-800 text-white rounded-md px-4 py-2">${imc}</p>
            <div style="clip-path: polygon(100% 0, 0 0, 50% 100%);" class="w-4 h-4 bg-sky-800 mt-[-4px]"></div>
          </div>
        </div>
        <img src="images/barramov.png" alt="" class="mx-auto p-2 shadow-md border-t border-sky-600 rounded-lg shadow-sky-900">
      </div>
    </div>
    `;
  } else if (imc >= 30 && imc < 34.9) {
    resultado.innerHTML =
      "Tu IMC es " + imc + ", te encuentras en obesidad tipo I.";
    dieta.innerHTML =
      "<ul>" +
      "<li><strong>Recomendación alimenticia:</strong> <br>Consulta a un nutricionista para una dieta personalizada.</li>" +
      "<li><strong>Carbohidratos:</strong> Brócoli, col rizada, quinoa.</li>" +
      "<li><strong>Proteínas:</strong> Pollo al horno, pavo, pescado.</li>" +
      "<li><strong>Grasas saludables:</strong> Semillas de chía, nueces, aceite de aguacate.</li>" +
      "</ul>";
    resultado2.innerHTML = `
    <div class="gap">
      <div class="">
        <div class="">
          <div class="flex flex-col items-center ml-56">
            <p class="text-center bg-sky-800 text-white rounded-md px-4 py-2">${imc}</p>
            <div style="clip-path: polygon(100% 0, 0 0, 50% 100%);" class="w-4 h-4 bg-sky-800 mt-[-4px]"></div>
          </div>
        </div>
        <img src="images/barramov.png" alt="" class="mx-auto p-2 shadow-md border-t border-sky-600 rounded-lg shadow-sky-900">
      </div>
    </div>
    `;
  } else if (imc >= 35 && imc < 39.9) {
    resultado.innerHTML =
      "Tu IMC es " + imc + ", te encuentras en obesidad tipo II.";
    dieta.innerHTML =
      "<ul>" +
      "<li><strong>Recomendación alimenticia:</strong> <br>Consulta a un nutricionista y considera un plan de reducción de peso.</li>" +
      "<li><strong>Carbohidratos:</strong> Espinacas, judías verdes, arroz integral.</li>" +
      "<li><strong>Proteínas:</strong> Pescado, pollo, legumbres.</li>" +
      "<li><strong>Grasas saludables:</strong> Aceite de oliva, aguacate, nueces.</li>" +
      "</ul>";
    resultado2.innerHTML = `
    <div class="gap">
      <div class="">
        <div class="">
          <div class="flex flex-col items-center ml-56">
            <p class="text-center bg-sky-800 text-white rounded-md px-4 py-2">${imc}</p>
            <div style="clip-path: polygon(100% 0, 0 0, 50% 100%);" class="w-4 h-4 bg-sky-800 mt-[-4px]"></div>
          </div>
        </div>
        <img src="images/barramov.png" alt="" class="mx-auto p-2 shadow-md border-t border-sky-600 rounded-lg shadow-sky-900">
      </div>
    </div>
    `;
  } else {
    resultado.innerHTML =
      "Tu IMC es " + imc + ", te encuentras en obesidad tipo III.";
    dieta.innerHTML =
      "<ul>" +
      "<li><strong>Recomendación alimenticia:</strong> <br>Consulta a un nutricionista y considera un plan de tratamiento médico.</li>" +
      "<li><strong>Carbohidratos:</strong> Verduras de hoja verde, coliflor, calabacín.</li>" +
      "<li><strong>Proteínas:</strong> Carne magra, tofu, huevos.</li>" +
      "<li><strong>Grasas saludables:</strong> Aceite de oliva, semillas de girasol, aguacate.</li>" +
      "</ul>";
    resultado2.innerHTML = `
    <div class="gap">
      <div class="">
        <div class="">
          <div class="flex flex-col items-center ml-56">
            <p class="text-center bg-sky-800 text-white px-4 rounded-md py-2">${imc}</p>
            <div style="clip-path: polygon(100% 0, 0 0, 50% 100%);" class="w-4 h-4 bg-sky-800 mt-[-4px]"></div>
          </div>
        </div>
        <img src="images/barramov.png" alt="" class="mx-auto p-2 shadow-md border-t border-sky-600 rounded-lg shadow-sky-900">
      </div>
    </div>
    `;
  }
  document.getElementById("resultado").scrollIntoView({ behavior: "smooth" });
}

//  Funciones
function showModal(message) {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.innerText = message;
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}

function closeAllAccordions() {
  const contents = document.querySelectorAll('[id^="faqContent"]');
  contents.forEach((content) => {
    content.classList.add("max-h-0");
    content.classList.remove("max-h-40", "max-h-56", "pt-2", "max-h-[676px]");
  });
  const icons = document.querySelectorAll('[id^="toggleIcon"]');
  icons.forEach((icon) => {
    icon.classList.remove("rotate-180");
  });
}
function toggleAccordion(id) {
  const faqHeader = document.getElementById("faqHeader" + id);
  const faqContent = document.getElementById("faqContent" + id);
  const toggleIcon = document.getElementById("toggleIcon" + id);
  const img = document.getElementById("imcImage");

  faqHeader.addEventListener("click", () => {
    const isOpen = !faqContent.classList.contains("max-h-0");
    if (!isOpen) {
      closeAllAccordions();
    }
    faqContent.classList.toggle("max-h-0");
    faqContent.classList.toggle("pt-2");
    if (faqContent.id === "faqContent3") {
      const imgHeight = img.naturalHeight || 676;
      const padding = 8;
      const newMaxHeight = imgHeight + padding;
      faqContent.classList.toggle("max-h-[676px]");
      faqContent.classList.toggle("max-h-" + newMaxHeight);
    } else {
      faqContent.classList.toggle("max-h-[676px]");
    }
    toggleIcon.classList.toggle("rotate-180");
  });
}
toggleAccordion(1);
toggleAccordion(2);
toggleAccordion(3);
