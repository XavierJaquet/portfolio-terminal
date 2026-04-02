// Composant qui gère la ligne de commande (input utilisateur)
function TerminalPrompt({ input, setInput, handleSubmit }) {

  // Fonction appelée quand une touche est pressée
  function handleKeyDown(event) {

    // Si l'utilisateur appuie sur "Entrée"
    if (event.key === "Enter") {
      handleSubmit()
    }
  }

  return (
    // Ligne du terminal avec le prompt + input
    <div className="flex items-center gap-2 text-sm md:text-base">

      {/* Prompt (comme un terminal Linux) */}
      <span className="text-green-500">visitor</span>
      <span className="text-zinc-500">@</span>
      <span className="text-blue-400">portfolio</span>
      <span className="text-zinc-500">:</span>
      <span className="text-yellow-400">~</span>
      <span className="text-zinc-500">$</span>

      {/* Champ de saisie */}
      <input
        type="text"

        // Valeur contrôlée par React
        value={input}

        // Mise à jour du state à chaque frappe
        onChange={(event) => setInput(event.target.value)}

        // Détection de la touche Entrée
        onKeyDown={handleKeyDown}

        className="flex-1 bg-transparent outline-none text-green-300 placeholder:text-zinc-600"
        placeholder="Tape une commande..."
        autoFocus
      />

    </div>
  )
}

export default TerminalPrompt