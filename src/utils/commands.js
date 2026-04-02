import { filesystem } from "./filesystem"

// Fonction qui analyse la commande tapée
export function runCommand(trimmedInput) {
  // Si la commande est "help"
  if (trimmedInput === "help") {
    return {
      type: "output",
      content: `Commandes disponibles :
- help → afficher les commandes
- clear → vider le terminal
- ls`
    }
  }

  // Si la commande est "clear"
  if (trimmedInput === "clear") {
    return "clear"
  }

    // commande ls
  if (trimmedInput === "ls") {

    const currentDir = filesystem.home

    const items = Object.keys(currentDir)

    return {
      type: "output",
      content: items.join("  ")
    }
  }

  // Si la commande n'existe pas
  return {
    type: "output",
    content: `Commande inconnue : ${trimmedInput}`
  }
}