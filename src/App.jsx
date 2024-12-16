import React, { useEffect, useState } from 'react'
import Language from './components/Language';

function App() {
  //declaration of variables and states
  const [showLang,setShowLang]=useState(true);
  const [message,setMessage]= useState("");
  const [color,setColor]=useState("");
  const [language,setLanguage]= useState("");
  const [bgColor,setBGcolor]=useState("white");
  const [fails,setFails]=useState(0);
  const [attempts,setAttempts]= useState(0);
  const [score,setScore]= useState(0);
  const [gameOver,setGameOver]=useState(false);
  const database=
  [
    {language: "Java", 
      color1: "Blue", 
      color2: "#007bff",
      used:false},
    {language: "Python", 
      color1: "Yellow", 
      color2: "#ffff00",
      used:false
  },
    {language: "JavaScript", 
      color1: "Yellow", 
      color2: "#f7dc6f",
      used:false},
    {language: "C++", 
      color1: "Red", 
      color2: "#8b0a1a",
      used:false,  
    },
    {language: "C#", 
      color1: "Purple", 
      color2: "#6a5acd",
      used:false,
      },
    {language: "Ruby", 
      color1: "Red", 
      color2: "#cc0000",
      used:false,  
    },
    {language: "PHP", 
      color1: "Purple", 
      color2: "#6c5ce7",
      used:false,
    },
    {language: "Perl", 
      color1: "Green", 
      color2: "#34c759",
      used:false},
    {language: "Tcl", 
      color1: "Dark Blue", 
      color2: "#2f4f7f",
      used:false},
    {language: "Haskell", 
      color1: "Blue", 
      color2: "#4b8bbe",
      used:false},
    {language: "Lisp", 
      color1: "Pink", 
      color2: "#ff69b4",
      used:false},
    {language: "Scheme", 
      color1: "Dark Blue", 
      color2: "#2f4f7f",
      used:false},
    {language: "Scala", 
      color1: "Red", 
      color2: "#cc0000",
      used:false},
    {language: "HTML", 
      color1: "Red", 
      color2: "#ff0000",
      used:false},
    {language: "CSS", 
      color1: "Blue", 
      color2: "#0000ff",
      used:false},
    {language: "SQL", 
      color1: "Blue", 
      color2: "#007bff",
      used:false},
    {language: "TypeScript", 
      color1: "Blue", 
      color2: "#007bff",
      used:false
      },
    {language: "Swift", 
      color1: "Orange", 
      color2: "#ffa07a",
      used:false,  
    },
    {language: "Kotlin", 
      color1: "Green", 
      color2: "#34c759",
      used:false,  
    },
    {language: "React Native", 
      color1: "Blue", 
      color2: "#007bff",
      used:false  
    },
    {language: "Flutter", 
      color1: "Blue", 
      color2: "#007bff",
    used:false},
    {language: "Go", 
      color1: "Blue", 
      color2: "#00add8",
    used:false},
    {language: "Rust", 
      color1: "Orange", 
      color2: "#dea584",
    used:false},
    {language: "Julia", 
      color1: "Purple", 
      color2: "#a291ff",
    used:false},
    {language: "Kotlin Native", 
      color1: "Green", 
      color2: "#34c759",
    used:false},
    {language: "MATLAB", 
      color1: "Orange", 
      color2: "#ffa07a",
    used:false},
    {language: "Visual Basic", 
      color1: "Blue", 
      color2: "#007bff",
    used:false},
    {language: "Delphi", 
      color1: "Purple", 
      color2: "#6a5acd",
    used:false}
  ]
  

  useEffect(()=>{
    setTimeout(()=>{
      setShowLang(false)
    },4000)
    
  },[])

  //declaration of functions
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(language + " - " + color);
    setAttempts((prev) => prev + 1);
    
    const updatedDatabase = database.map(item => ({ ...item })); // Create a copy of the database
  
    const foundItem = updatedDatabase.find(item => language === item.language.toLowerCase());
  
    if (foundItem) {
      if (foundItem.used) {
        setMessage("INCORRECT, this language has already been used");
        setBGcolor("red");
        setFails((prev) => prev + 1);
      } else if (color === foundItem.color1.toLowerCase()) {
        setMessage("AWESOME!! CORRECT ANSWER");
        setBGcolor(foundItem.color2);
        setScore((prev) => prev + 1);
        foundItem.used = true; 
      } else {
        setMessage("INCORRECT, wrong color");
        setBGcolor("red");
        setFails((prev) => prev + 1);
      }
    } else {
      setMessage("INCORRECT, this programming language does not exist");
      setBGcolor('red');
      setFails((prev) => prev + 1);
    }
  
   
    setLanguage('');
    setColor('');
  
    // Check game over conditions
    if (fails >= 4) {
      setMessage("Game over !! You have failed 5 times.");
      setGameOver(true);
    } else if (attempts >= 19) {
      setMessage("Game over !! You have made 20 guesses.");
      setGameOver(true);
    }
  };

  return (
    <div className="container" style={{backgroundColor:bgColor}}>
        <h1>programming language game</h1>
      {showLang?(
        <div> 
          {database.map((item)=>{
            return(
              <div>
              <Language language={item.language} color={item.color1}/>
             </div>
            )
          })}
        </div>
        
      ):(
        <div>
        {gameOver?(
          <h1>{message}</h1>
        ):(

        <div>
              <form onSubmit={(e)=>handleSubmit(e)}>
                <input 
                placeholder="Enter programming language" 
                onChange={(e)=>setLanguage(e.target.value.toLowerCase())}
                />
                <input 
                  placeholder="Enter color" 
                  onChange={(e)=>setColor(e.target.value.toLowerCase())}
                />
                <button type="submit">SUBMIT</button>
              </form>
          <div>{message}</div>
          <div>
            <h2>Score: {score}</h2>
            <h2>Attempts: {attempts}</h2>
            <h2>Fails: {fails}</h2>
          </div>
        </div>
        )}
        </div>
      )}
      
    </div>
  )
}

export default App