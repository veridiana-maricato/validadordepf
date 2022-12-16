// VALIDANDO CPF
function ValidatesCpf(sentCpf) {
  Object.defineProperty(this, "cleanCpf", {
    enumerable: true,
    get: function () {
      return sentCpf.replace(/\D+/g, "");
    },
  });
}
ValidatesCpf.prototype.validates = function () {
  if (typeof this.cleanCpf === "undefined") return false;
  if (this.cleanCpf.length !== 11) return false;
  if (this.falseSequency()) return false;

  const partialCpf = this.cleanCpf.slice(0, -2);
  const digit1 = this.createsDigit(partialCpf);
  const digit2 = this.createsDigit(partialCpf + digit1);

  const newCpf = partialCpf + digit1 + digit2;
  console.log(newCpf);
  return newCpf === this.cleanCpf;
};

ValidatesCpf.prototype.createsDigit = function (partialCpf) {
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

ValidatesCpf.prototype.falseSequency = function(){
    const sequency = this.cleanCpf[0].repeat(this.cleanCpf.length)
    return sequency === this.cleanCpf
}
const cpf = new ValidatesCpf("468.223.478-10");
console.log(cpf.validates());


if(cpf.validates()){
    console.log('cpf valido')
}else{
    console.log('cpf invalido')
    
}