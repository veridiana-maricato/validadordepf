const checkBtn = document.querySelector("#check-btn");
const input = document.querySelector("#cpf");
const result = document.querySelector(".result");
let cleanCpf;
let partialCpf;
let digit1;
let digit2;

// VALIDATING THE CPF
const ValidatesCpf = (e) => {
  e.preventDefault();
  cpfToNumbers();
  if (verifyInput() === false) return;
  checkNewCpf();
};

// REPLACING ANYTHING THAT IS NOT A NUMBER WITH EMPTY STRINGS
const cpfToNumbers = () => {
  cleanCpf = input.value.replace(/\D+/g, "");  
};

// VERIFYING INPUT VALUE
const verifyInput = () => {
  if (
    typeof cleanCpf === "undefined" ||
    cleanCpf.length !== 11 ||
    falseSequency()
  ) {
    console.log('"Insira um CPF válido"')
    result.innerText = "Insira um CPF válido";   
    return false 
  }
};
// VERIFYING FALSE SEQUENCY
const falseSequency = () => {
  const sequency = cleanCpf[0].repeat(cleanCpf.length);
  return sequency === cleanCpf;
};

// CREATING NEW CPF WITH MATH FUNCTION
const createsDigit = (partialCpf) => {
  const cpfArray = Array.from(partialCpf);

  let regressive = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += regressive * Number(val);
    regressive--;
    return ac;
  }, 0);

  const digit = 11 - (total % 11);
  return digit > 9 ? 0 : String(digit);
};

// SLICING CPF AND CHECKING IF NEW CPF MATCHES CLEAN CPF
const checkNewCpf = () => {
  partialCpf = cleanCpf.slice(0, -2);
  digit1 = createsDigit(partialCpf);
  digit2 = createsDigit(partialCpf + digit1);

  const newCpf = partialCpf + digit1 + digit2;
  if (newCpf === cleanCpf) {
    result.innerText = "CPF válido.";
  } else {
    result.innerText = "CPF inválido.";
  }
};

checkBtn.addEventListener("click", ValidatesCpf);
