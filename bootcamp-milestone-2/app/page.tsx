import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
          <main>
              <h1 className="pagetitle">
                  ₊✩‧₊˚Emma&apos;s Website˚₊✩‧₊
              </h1>
              <div className="about">
                  <div className="aboutimage">
                    <Image 
                        src= "/dog.jpeg" 
                        alt = "dog handing you a beer" 
                        width = {250} 
                        height = {250}>
                    </Image>
                  </div>
                  <div className = "abouttext">
                      <p>Hi, I&apos;m Emma Walker!</p>
                      <br></br>
                      <p>I&apos;m currently a freshman at Cal Poly Slo studying Computer Science. I&apos;m originally from Pleasanton, California. Besides school, I like playing video games, eating food, solving word puzzles, and downloading silly dog pictures.</p>
                  </div>
              </div>
          </main>
  );
}
