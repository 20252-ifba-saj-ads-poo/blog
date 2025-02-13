package code.taxonomialineu;

import java.util.Optional;

public class Especie {
    private String nome;
    private Genero genero;

    public Especie(String nome, Genero genero) {
        this.nome = nome;
        this.genero = genero;
    }

    @Override
    public String toString() {
        return Optional.ofNullable(genero).orElse(new Genero("", null)).toString()+"\nEspecie " + nome;
    }

}
