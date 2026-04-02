// Import des composants enfants
import TerminalHeader from "./TerminalHeader"
import TerminalOutput from "./TerminalOutput"
import TerminalPrompt from "./TerminalPrompt"

// Import du hook React pour gérer le state
import { useState } from "react"

// Import de la fonction qui gère les commandes
import { runCommand } from "../utils/commands"

function Terminal() {
  // State pour stocker ce que l'utilisateur tape dans l'input
  const [input, setInput] = useState("")

  // State pour stocker l'historique du terminal
  const [history, setHistory] = useState([
    {
      type: "output",
      content: "Bienvenue dans le portfolio terminal."
    },
    {
      type: "output",
      content: 'Tape "help" pour afficher les commandes disponibles.'
    }
  ])

  // Fonction appelée quand l'utilisateur valide une commande
  function handleSubmit() {
    const trimmedInput = input.trim()

    if (!trimmedInput) return

    const commandEntry = {
      type: "command",
      content: trimmedInput
    }

    const result = runCommand(trimmedInput)

    if (result === "clear") {
      setHistory([])
      setInput("")
      return
    }

    setHistory((prev) => [...prev, commandEntry, result])
    setInput("")
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl min-h-[80vh] rounded-2xl border border-zinc-800 bg-black shadow-2xl overflow-hidden">
        <TerminalHeader />

        <div className="p-4 md:p-6">
          <TerminalOutput history={history} />

          <TerminalPrompt
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  )
}

export default Terminal