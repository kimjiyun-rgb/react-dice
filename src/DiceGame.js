// src/components/DiceGame.js
import React, { useState } from 'react';
import './DiceGame.css';

const DiceGame = () =>
{
    const [diceValue, setDiceValue] = useState(1);
    const [rolling, setRolling] = useState(false);
    const [score, setScore] = useState(0);

    const rollDice = () =>
    {
        if (!rolling)
        {
            setRolling(true);

            // 1초 후에 주사위 값을 랜덤하게 변경하고 애니메이션을 멈춤
            setTimeout(() =>
            {
                const randomValue = Math.floor(Math.random() * 6) + 1;
                setDiceValue(randomValue);
                setScore(score + randomValue); // 주사위 값과 동일한 간단한 점수 계산
                setRolling(false);
            }, 1000);
        }
    };

    return (
        <div className="dice-game">
            <h1>Dice Game</h1>
            <div
                className={`dice-container ${rolling ? 'rolling' : ''}`}
                onClick={rollDice}
            >
                <div className={`dice dice-${diceValue}`}></div>
            </div>
            <p>Score: {score}</p>
            <button onClick={rollDice} disabled={rolling}>
                {rolling ? 'Rolling...' : 'Roll the Dice'}
            </button>
        </div>
    );
};

export default DiceGame;