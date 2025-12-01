```Java
public class Filme {
    String nome;
    String categoria;
    float duracao;
}
```


```Java
public class AparelhoDVD {
    boolean ligado;
    int volume;
    Filme filme;
    boolean emPlay;

    AparelhoDVD() {
        ligado = false;
        volume = 2;
        filme = null;
        emPlay = false;
    }

    boolean ligar(){
        ligado = true;
        return ligado;
    }
    boolean desligar(){
        ligado = false;
        return ligado;
    }

    int aumentarVolume(){
        if (ligado) {
            if (volume < 5) {
                volume++;
            }            
        }
        return volume;
    }
    int diminuirVolume(){
        if ((volume > 1) && (ligado)) {
            volume--;
        }
        return volume;
    }

    void inserirFilme(Filme filme){
        if (ligado) {
            this.filme = filme;
        }            
    }

    Filme removerFilme(){
        Filme filmeQueEstava = null;
        if (ligado) {
            filmeQueEstava = this.filme;
            this.filme = null;
        }
        return filmeQueEstava;
    }

    String play(){
        if (ligado) {
            if(filme!= null){
                emPlay = true;
                //Ao dar play deve aparecer o nome e a duração do filme que está sendo exibido                
                return String.format("Filme: %s, Duração:%s", filme.nome,filme.duracao);
            }            
        }
        return null;
    }
    void stop(){
        if ((ligado) && (emPlay)) {
            emPlay = false;            
        }
    }
    
}

```


```Java
Filme f1 = new Filme();

f1.nome = "It";
f1.categoria = "Terror";
f1.duracao = 123000;
f1
```




    REPL.$JShell$12$Filme@46c7f237




```Java
AparelhoDVD dvd = new AparelhoDVD();
dvd.ligar();
dvd.inserirFilme(f1);
dvd.play();
```




    Filme: It, Duração:123000.0




```Java
Filme filmeRemovido = dvd.removerFilme();
String.format("Filme Removido: %s, Duração:%s", filmeRemovido.nome,filmeRemovido.duracao);
        
```




    Filme Removido: It, Duração:123000.0


