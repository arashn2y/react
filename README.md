# Repository del Corso di React

Benvenuto nel repository principale del **Corso di React**.

> 📂 **Nota:** Il ramo `main` è intenzionalmente vuoto.

## 📚 Come Funziona Questo Repository

Ogni sessione del corso ha un proprio ramo dedicato. Per accedere ai materiali, codice ed esercizi di una particolare sessione, è sufficiente passare al ramo corrispondente.

## 🛠️ Guida Passo-Passo per Iniziare

### 1️⃣ Verifica se Git è installato

Apri il terminale (o Prompt dei comandi su Windows) e digita:

```bash
git --version
```

Se vedi una risposta come `git version 2.35.1` (o simile), Git è già installato. Passa al punto 3.

### 2️⃣ Installa Git (se non è già installato)

#### Per Windows:

1. Scarica l'installer da [git-scm.com](https://git-scm.com/download/win)
2. Esegui l'installer e segui le istruzioni
3. Dopo l'installazione, riavvia il terminale

#### Per macOS:

1. Installa Git tramite Homebrew (se lo hai già):
   ```bash
   brew install git
   ```
2. Oppure scarica l'installer da [git-scm.com](https://git-scm.com/download/mac)

#### Per Linux (Ubuntu/Debian):

```bash
sudo apt update
sudo apt install git
```

### 3️⃣ Clona il Repository

```bash
git clone https://github.com/arashn2y/react.git
```

### 4️⃣ Entra nella Directory del Progetto

```bash
cd react
```

### 5️⃣ Visualizza i Rami Disponibili

```bash
git branch -a
```

### 6️⃣ Passa a un Ramo Specifico

Per esempio, per accedere alla **Sessione Uno**:

```bash
git checkout session-one
```

### 7️⃣ Apri il Progetto in Visual Studio Code

```bash
code .
```

Se il comando `code` non funziona, potrebbe essere necessario installare Visual Studio Code o configurare il comando dalla palette dei comandi all'interno di VS Code.

## 🔄 Esempio di Flusso Completo

```bash
# Verifica Git
git --version

# Clona il repository
git clone https://github.com/nome-utente/react-course.git

# Entra nella cartella
cd react-course

# Elenca i rami disponibili
git branch -a

# Passa alla sessione uno
git checkout session-one

# Apri in VS Code
code .
```

## 📚 Session One

In this session, we will cover the following topics:

- Quick review of ES6+ features (Arrow functions, Destructuring, Promises)
- DOM vs React approach
- Project Kickoff: Discuss Movie App features
