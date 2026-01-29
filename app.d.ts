interface playerInfo {
    score: number;
    button: HTMLButtonElement;
    display: Element;
}
declare const player1: playerInfo;
declare const player2: playerInfo;
declare const maxPoint: Element;
declare const resetButton: Element;
declare const winningScoreSelect: HTMLSelectElement;
declare let winningPoint: number;
declare let isGameOver: boolean;
declare const WINNER_STYLE: string;
declare const LOSER_STYLE: string;
declare function updateScores(player: playerInfo, opponent: playerInfo): void;
declare function reset(): void;
//# sourceMappingURL=app.d.ts.map