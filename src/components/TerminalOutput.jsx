// Composant qui affiche l'historique du terminal
function TerminalOutput({ history }) {

  return (
    // Conteneur global de l'historique
    <div className="mb-4 space-y-2 text-sm md:text-base">

      {/* On parcourt chaque entrée de l'historique */}
      {history.map((entry, index) => (

        // Chaque ligne du terminal
        <div key={index}>

          {/* Si c'est une commande */}
          {entry.type === "command" ? (

            // Affichage avec le prompt 
            <div className="flex items-center gap-2">
              <span className="text-green-500">visitor</span>
              <span className="text-zinc-500">@</span>
              <span className="text-blue-400">portfolio</span>
              <span className="text-zinc-500">:</span>
              <span className="text-yellow-400">~</span>
              <span className="text-zinc-500">$</span>

              {/* La commande tapée */}
              <span className="text-green-300">{entry.content}</span>
            </div>

          ) : (

            // Sinon → c'est une sortie normale
            <p className="whitespace-pre-wrap break-words">
              {entry.content}
            </p>

          )}

        </div>
      ))}

    </div>
  )
}

export default TerminalOutput