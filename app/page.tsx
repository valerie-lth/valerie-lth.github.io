import Link from 'next/link'
import  { FaGithub, FaLinkedin, FaBookOpen, FaLocationArrow, 
          FaMailBulk, FaMapMarkerAlt, FaSave } 
  from "react-icons/fa"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <div className="flex my-10 flex-row sm:justify-center align-middle gap-4 text-black text-3xl lg:text-4xl">
            <a className="text-slate/90 hover:text-slate" href="malito:tianhuiliu17@gmail.com" target="_top">
                <FaMailBulk />
            </a>
            <Link className="text-slate/90 hover:text-slate" title="Email" href="https://www.linkedin.com/in/valerie-liu-2a4b33177/">
                <FaLinkedin />
            </Link>
            <Link className="text-slate/90 hover:text-slate" href="https://github.com/valerie-lth">
                <FaGithub />
            </Link>
            <Link className="text-slate/90 hover:text-slate" href="/resume/mycv.pdf">
                <FaSave />
            </Link>
      </div>
      <p className="mt-12 font-mono mx-40 mb-12 text-3xl text-center text-slate">
        Hello 🦦! My name is <span className="font-bold">Tianhui Liu</span>. 
        I am currently pursuing Master's at University of Alberta. 
        Luckily to be co-supervised by Prof. Lili Mou and Prof. Yan Yuan. 
        I am also an alumini of University of Waterloo.
      </p>
      
      
    </main>
  )
}
