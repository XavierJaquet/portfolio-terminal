// Composant qui représente le header du terminal (barre du haut)
function TerminalHeader() {

  return (
    // Conteneur principal du header
    <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-3">

      {/* Partie gauche : boutons style macOS */}
      <div className="flex items-center gap-2">
        {/* Boutons */}
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
      </div>

      {/* Centre : nom du terminal */}
      <p className="text-sm text-zinc-400">
        xavier@portfolio: ~
      </p>

      {/* Partie droite vide (juste pour équilibrer le layout) */}
      <div className="w-14"></div>

    </div>
  )
}

export default TerminalHeader