"use client";
import { useEffect } from "react";

export default function Footer() {
    useEffect(() => {
        console.log(`
            ████████████            
        ████      ░░░░▒▒████        
      ██      ░░░░░░░░░░▒▒▒▒██      
    ██    ░░░░░░░░░░░░░░░░▒▒▒▒██    
  ██  ░░░░░░░░░░░░░░    ░░░░░░▒▒██  
  ██░░░░██████░░░░  ░░██████░░▒▒██  
██  ░░████████░░░░░░░░████████░░▒▒██
██  ██████████░░░░░░░░██████████▒▒██
██  ██████████░░░░░░░░██████████▒▒██
██  ░░██████░░░░░░░░░░░░██████░░▒▒██
██░░░░░░░░░░░░████████░░░░░░░░░░▒▒██
  ██░░░░░░░░░░░░████░░░░░░░░░░▒▒██  
  ██░░░░░░░░░░░░████░░░░░░░░░░▒▒██  
    ██  ░░░░░░░░░░░░░░░░░░░░▒▒██    
      ██  ░░░░░░░░░░░░░░░░▒▒██      
        ██░░░░██░░░░██░░░░██        
        ██░░░░██░░░░██░░░░██        
        ██░░▒▒██░░▒▒██░░▒▒██        
          ████  ████  ████ 

thanks for your checking out my portfolio
the site was made using react and typescript
it was deployed on vercel
consider hiring me
devin %c<3
      `, "color: red; font-weight: bold;");
      }, []);
  return (
    <footer className="pb-8 mt-16">
      <ul className="font-sm mt-8 flex flex-row space-x-4 space-y-0">
      <li>
          <a
            className="flex items-center transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:devohart@gmail.com"
          >
            <p className="h-7">email</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/devin-hart/"
          >
            <p className="h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/devin-hart/"
          >
            <p className="h-7">linkedin</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
