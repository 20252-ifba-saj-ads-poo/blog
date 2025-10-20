
void main() {
    ConverterExtenso ce = null;
    // ce = new ConverterExtenso4Digitos(9999);
    //IO.println(ce);
    // -> Nove Mil Novecentos e Noventa e Nove
    // ce = new ConverterExtenso3Digitos(999);
    //IO.println(ce);
    // -> Novecentos e Noventa e Nove
     ce = new ConverterExtenso2Digitos(23);
    IO.println(ce);
    // -> Noventa e Nove
    //ce = new ConverterExtenso1Digito(6);
    //IO.println(ce);
}