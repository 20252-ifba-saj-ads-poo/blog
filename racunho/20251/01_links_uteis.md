---
icon: edit
date: 2024-11-14 17:41:00.00 -3
tag:
  - links
category:
  - multimidia
order: 1
star: true
---
# Montando Ambiente de trabalho



# SW utilizados

- [JDK](https://adoptium.net/temurin/releases/)
- [Maven](https://maven.apache.org/)
- Git
    - [Github Desktop (windows)](https://desktop.github.com/)
- Visual Studio Code
- [Scene Builder](https://gluonhq.com/products/scene-builder/)



# Links

- [Repl IT IDE Java Online](https://replit.com/languages/java10)

# PodCast

- [Zupcast no youtube](http://bit.ly/zupcastnoyoutube)

# Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/sZAxLRMxEUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- [Java // Dicionário do Programador](https://youtu.be/sZAxLRMxEUo)

<iframe width="560" height="315" src="https://www.youtube.com/embed/9yzMKaKcoC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- [Você ainda deve aprender Java em 2023?](https://youtu.be/9yzMKaKcoC0)

<iframe width="560" height="315" src="https://www.youtube.com/embed/jpuJ1qrluoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- [Orientação a objetos com Roberta Arcoverde](https://youtu.be/jpuJ1qrluoU)

<iframe width="560" height="315" src="https://www.youtube.com/embed/vX4ttJ5BDNk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- [Java 20 turbina a JVM [Cortes do Compilado]](https://youtu.be/vX4ttJ5BDNk)
- [Java no YouTube](https://www.youtube.com/@java)


## Windows Scoop


[Scoop](https://scoop.sh/) é um gerenciador de pacotes para Windows. Ele permite instalar e gerenciar softwares de forma eficiente, semelhante ao apt no Linux ou ao Homebrew no macOS.  Scoop simplifica a instalação de aplicativos, ferramentas de desenvolvimento e utilitários, automatizando o processo de download, instalação e atualização.  Ele oferece uma interface de linha de comando e integra-se bem com o PowerShell.  Usando Scoop, você pode instalar softwares de fontes confiáveis, mantendo seu sistema atualizado e organizado.

Para instalar o scoop abra o PowerShell e rode o seguinte comando:

```console
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```
Para instalar o scoop abra o PowerShell e rode o seguinte comando:

Add git

```console
scoop install main/git
```
Add maven

```console
scoop install main/maven
```

Add java
```console
scoop bucket add java
scoop install java/temurin-lts-jdk
```

Add Scene Builder
```console
scoop bucket add extras
scoop install extras/scene-builder
```

add github desktop
```console
scoop install extras/github
```

add gh
```console
scoop install main/gh
```


## Linux SDKman

O [SDKMAN!](https://sdkman.io/) (Software Development Kit Manager) é um gerenciador de kits de desenvolvimento de software (SDKs) para várias linguagens de programação, como Java, Groovy, Kotlin, Scala e muitas outras. Ele permite que você instale, gerencie e alterne entre diferentes versões de SDKs de forma fácil e eficiente, tudo através da linha de comando.  

para instalar

```console
curl -s "https://get.sdkman.io" | bash
```

Abrir um novo terminal e rodar:

```console
sdk install java 21-tem
```

```console
sdk install maven
```

Seguir o tutorial de [install Scene Builder](https://gist.github.com/raimonizard/81e5ff28dde067b9db6735ef4428a29c)


