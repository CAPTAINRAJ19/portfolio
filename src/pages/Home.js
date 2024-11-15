import image1 from './images/face.jpeg';
import d from './images/new.png';
import FadeInText from './FadeInText';
import texts from "./data";
import log from './images/navlogo.png';
import bgImage4 from './images/4.jpeg';
import edu from './images/Education.jpg';
import bgImage3 from './images/3.jpeg';
import kwbg from './images/kwbg.png';
import bgImage2 from './images/2.jpeg';
import bgImage1 from './images/1.jpeg';
import image2 from './images/colourimage.jpg'; 
import React, { useState ,useEffect,useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const animateWidth = keyframes`
  0%, 10% { width: 0; }
  70%, 90% { width: 100%; }
`;

const AnimatedSpan = styled.span`
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: #ffffff;
    -webkit-text-stroke: 0vw #383d52;
    border-right: 2px solid #ffffff;
    overflow: hidden;
    animation: ${animateWidth} 6s linear infinite;
  }
`;

const AnimatedHeading = ({ text, className = '' }) => {
  return (
    <h2 
      className={`relative text-5xl font-sync font-bold uppercase ${className}`}
      style={{
        color: '#8d99ae',
        WebkitTextStroke: '0.3vw #383d52',
      }}
    >
      <AnimatedSpan data-text={text}>{text}</AnimatedSpan>
    </h2>
  );
};


export const Home=()=>{
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrentIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); 

    
    return () => clearInterval(interval);
  }, []);
  

    const currentText = texts[currentIndex];
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const images = [bgImage1, bgImage2, bgImage3, bgImage4]; 
    const [currentImage, setCurrentImage] = useState(0); 
    const section1=useRef();
    const section2=useRef();
    const section3=useRef();
    const section4=useRef();
    const section5=useRef();
    const section6=useRef();
    const section7=useRef();

    const scrollHandler = (elmRef) => {
        setTimeout(() => {
          window.scrollTo({
            top: elmRef.current.offsetTop,
            behavior: 'smooth', 
          });
        }, 100);  
      };

  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length); 
      }, 1000);
  
      return () => clearInterval(interval); 
    }, []);
      
    const getImageSrc = () => (isHovered ? image2 : image1);



return(
    <div className="body ">
        <section ref={section1} className=' firstview h-screen'>

            <div className='font-bold  flex justify-between bg-transparent font-gruppo'> 
                <div class=" ">
                <button><img className="hover:opacity-40 w-12 px-1 mt-2" src={log}></img></button>
                    <button onClick={()=>scrollHandler(section1)} className='hover:border-b-black hover:border-4  px-1  border-4 border-white'><a class="text-black mx-2 " >Home</a></button>
                    <button onClick={()=>scrollHandler(section2)} className='hover:border-b-black hover:border-4  px-1  border-4 border-white'><a class="text-black mx-2 " >About</a></button>
                    <button onClick={()=>scrollHandler(section3)} className='hover:border-b-black hover:border-4  px-1  border-4 border-white'><a class="text-black mx-2 " >Work</a></button>
                    <button onClick={()=>scrollHandler(section4)} className='hover:border-b-black hover:border-4  px-1  border-4 border-white'><a class="text-black mx-2 " >Resume</a></button>
                    <button onClick={()=>scrollHandler(section5)} className='hover:border-b-black hover:border-4  px-1  border-4 border-white'><a class="text-black mx-2 " >Skills</a></button>
                    <button  className='hover:border-b-black hover:border-4  px-1  border-4 border-white'><a  onClick={()=>scrollHandler(section6)} class="text-black mx-2 " >Contact</a></button>

                </div>
                <div className='flex mr-4'>
                <a href="https://x.com/DhruvRa48929519" target="_blank"><button class=" px-3 block mt-2  hover:opacity-50 text-blue-500"><i class="fa-brands fa-twitter text-3xl  my-1"></i></button>  </a>              
                <a  href="https://github.com/CAPTAINRAJ19" target="_blank"><button class="   px-3 block  mt-2 hover:opacity-50 text-black"><i class="fa-brands fa-github text-3xl  my-1"></i></button></a>
                <a href="https://www.linkedin.com/in/dhruv-raj-singh-05b1a7248/" target="_blank"><button class=" hover:opacity-50 px-3 block mt-2  text-blue-800 "><i class="fa-brands fa-linkedin text-3xl my-1 "></i></button></a>
                <a  href="https://www.youtube.com/@dhruvrajsingh9055" target="_blank"><button class="   px-3 block  mt-2 hover:opacity-50 text-red-600"><i class="fa-brands fa-youtube text-3xl  my-1"></i></button></a>
                <a href="https://www.instagram.com/captainraj_19/" target="_blank"><button class="  px-3 block mt-2 hover:opacity-50 text-pink-600 "><i class="fa-brands fa-square-instagram text-3xl  my-1"></i></button></a>
                <a href="https://www.reddit.com/user/CaptainRaj_19/" target="_blank"><button class=" px-3 block mt-2 hover:opacity-50 text-orange-600 "><i class="fa-brands fa-square-reddit text-3xl  my-1"></i></button></a>    
                </div>
            </div>

            <div className="header   justify-center  items-center flex pt-24  ">
                <div className='heading text-center mr-2 '>
                    <div className='name flex  items-end'>
                        <img className="h-24 p-0  border-white"  style={{ backgroundImage: `url(${images[currentImage]})`, className:"w-36 ",backgroundSize: 'contain',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} src={d} alt="Logo"/>
                        <h1 className='text-4xl font-orbitron font-extrabold pb-1'>HRUV RAJ SINGH</h1> 
                    </div>
                    <div className="flex items-center justify-start rounded-3xl h-16 bg-black">
            <AnimatedHeading text="CaptainRaj_19" />
            </div>
            <div className='font-sync font-bold text-sm m-0 pt-1'>TURNING VISION INTO REALITY WITH </div>
            <div className='font-sync font-bold text-sm m-0 p-0'>CODE AND DESIGN</div>

                </div>
                <div className="h-80 w-80 border-8 ml-2 border-black rounded-full overflow-hidden">
                    <img src={getImageSrc()} alt="Hoverable"
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)} 
                        className={`w-full h-full transition-transform duration-500 ${
                            isHovered ? 'scale-110' : 'scale-100'
                          }`}
                  
                    />  
                </div>          
            </div>
            <div className='location flex pl-12 pt-16'>
            <i class="  text-red-600 text-5xl fa-solid fa-location-dot pr-4"> </i><h1 className=' pt-2 font-orbitron font-bold text-3xl'>PUNE/LUCKNOW</h1>

            </div>
        </section>





      <section ref={section2}className='about sticky top-0 z-10   bg-black  h-screen  justify-center    text-white'>
        <div className="  bg-black  h-full w-full justify-center">
        <FadeInText text="ABOUT " />
        <div className='w-auto h-screen justify-between flex '>
          <div className='memyselfandi w-1/2 ml-10 mt-5 rounded-2xl border-4 border-white px-8 pt-8 h-5/6'>
            <h1 className='text-3xl text-yellow-400 font-gruppo font-semibold '>Hey there, I'm</h1>
            <h1 className='text-4xl text-yellow-400  font-orbitron font-bold '> DHRUV RAJ SINGH</h1>

            <h1 className='mt-10 font-semibold'> A self taught fullstack developer currently pursuing Bachelor's in Computer Engineering  at Army Institute Of Technology, Pune. </h1>
            <h1 className='font-semibold '>As a skilled full-stack developer , I am dedicated to turning ideas into innovative web applications.</h1>
            <h1 className='font-semibold '>I hold more than 8 months of experience in front-end development and more than 2 months of experience in fullstack development</h1>
            <h1 className='font-semibold border-b-2 border-white pb-16'>Explore my latest projects and articles, showcasing my expertise in React.js and web development.</h1>
            <button className="bg-yellow-400 font-orbitron mt-10  text-black font-bold py-2 px-4 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_4px_rgba(234,255,0,0.8)] hover:scale-105">
      KNOW MORE
    </button>
    <button className="bg-white font-orbitron mt-10 ml-14 text-black font-bold py-2 px-4 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_4px_rgba(234,255,0,0.8)] hover:scale-105">
      HIRE ME
    </button>     
          </div>
          <div className=' overflow-hidden border-4 border-neon shadow-neon h-4/6 mr-20 mt-16 rounded-3xl'> 
            <img className=" h-auto " src={kwbg}></img></div>
          </div>
        
        </div>
  
      </section>


        <section ref={section3} className='work sticky top-0 z-10 bg-white h-screen text-center'>      <FadeInText text="MY WORKS" />
        </section>
        <section ref={section4} className='resume sticky top-0 z-10 h-screen text-center bg-black text-white'><FadeInText text="RESUME"/></section>
        <section ref={section5} className='skills sticky top-0 z-10 h-screen text-center bg-white'><FadeInText text="SKILLS"/>
        </section>
        <section ref={section6} className='contact sticky top-0 z-10 h-screen text-center items-center bg-black text-white'><FadeInText text="EDUCATION"/>
        <div className='items-center flex justify-center'></div>
        
        </section>
        <section  className='random sticky top-0 z-10 h-screen text-center bg-white'><FadeInText text="CONTACT ME"/>
        
        </section>

        <section className='sticky top-0 z-10' ref={section7}>
            <footer class="footer border-2 justify-center border-black h-auto bg-black py-1 pb-2">
            <div class="upper font-gruppo text-center text-white h-14 font-bold pt-2 text-2xl" >🙋🏻Thanks for stopping by! Here is more of me if you are interested : )</div>
            
            <div class="mainfooter font-gruppo ">
                <div class="leftfooter flex w-full justify-between  p-1 px-24  border-t-white border-t-2">
                    
                    <a  href="https://github.com/CAPTAINRAJ19" target="_blank"><button class="border-2 border-white rounded-full h-24 w-24 px-3 block mt-2 hover:bg-white hover:text-black text-white"><i class="fa-brands fa-github text-4xl  my-1"></i><h1 class=" text-sm  "> Github</h1></button></a>
                    <a href="https://www.linkedin.com/in/dhruv-raj-singh-05b1a7248/" target="_blank"><button class="border-2 flex-col border-white rounded-full h-24 w-24 px-3 block mt-2 hover:bg-white hover:text-blue-800 text-white"><i class="fa-brands fa-linkedin text-4xl my-1 "></i><h1 class=" text-sm  "> Linkedin</h1></button></a>
                    <a href="https://x.com/DhruvRa48929519" target="_blank"><button class="border-2  border-white rounded-full h-24 w-24 px-3 block mt-2 hover:bg-white hover:text-black text-white"><i class="fa-brands fa-x-twitter text-4xl  my-1"></i><h1 class=" tex-mtext-sml  ">Twitter</h1></button>  </a>              
                    <a href="https://www.instagram.com/captainraj_19/" target="_blank"><button class="border-2  border-white rounded-full h-24 w-24 px-3 block mt-2 hover:bg-white hover:text-pink-600 text-white"><i class="fa-brands fa-instagram text-4xl  my-1"></i><h1 class="text-wrap text-sm  "> Instagram</h1></button></a>
                    <a href="https://www.reddit.com/user/CaptainRaj_19/" target="_blank"><button class="border-2 border-white rounded-full h-24 w-24 px-3 block mt-2 hover:bg-white hover:text-orange-600 text-white"><i class="fa-brands fa-square-reddit text-4xl  my-1"></i><h1 class="text-sm text-wrap  "> Reddit  </h1></button></a>
                    <a href="https://discordapp.com/users/captainraj_19_60391/" target="_blank"><button class="border-2 border-white rounded-full h-24 w-24 px-3 block mt-2 hover:bg-white hover:text-blue-600 text-white"><i class="fa-brands fa-discord text-4xl  my-1"></i><h1 class="text-wrap text-sm  "> Discord</h1></button></a>
                    <a href="https://www.youtube.com/@dhruvrajsingh9055" target="_blank"><button class="border-2 border-white rounded-full h-24 w-24 px-3 block mt-2 hover:bg-white hover:text-red-600 text-white"><i class="fa-brands fa-youtube text-4xl  my-1"></i><h1 class="text-wrap text-sm  "> Youtube</h1></button></a>

                </div>
                <div className="text-white mx-16  justify-center flex">
                      <div style={{ textAlign: "center", marginTop: "2px" }}>
                                  <h1 className='text-orange-500 font-bold py-4'>" I have been working on my portfolio website for more than a month now and since i am still in the learning phase, I still have to add a lot of functionalities and components to the website. I am in a continuous process of learning and implementing and this is a never ending process. I hope you enjoyed and would appreciate the digital experience that i had crafted so far..."</h1>
                                  <h1 className='text-yellow-400 font-bold text-3xl'>{currentText.text}</h1>
                                  <p >Language: {currentText.language}</p>
                      </div>
                </div>
                <div className="text-white flex-col">
                    <CopyToClipboard  text={"7880558166"} onCopy={()=>alert("Text Copied")}><button onMouseEnter={() => setIsHovering1(true)} onMouseLeave={() => setIsHovering1(false)} className=" my-1 h-8  block text-xs border-white border-2 w-56 rounded-lg hover:bg-white hover:text-black"><i class="fa-solid fa-phone"></i> {isHovering1 ? "Click to Copy" : ": +91 7880558XXX"}</button></CopyToClipboard>
                    <CopyToClipboard  text={"dhruvrajsingh.1019@gmail.com"} onCopy={()=>alert("Text Copied")}><button onMouseEnter={() => setIsHovering2(true)} onMouseLeave={() => setIsHovering2(false)} className=" my-1 h-8 block text-xs border-white border-2 w-56 rounded-lg hover:bg-white hover:text-black"><i class="fa-solid fa-envelope"></i> {isHovering2 ? "Click to Copy" : ": dhruvrajsingh.1019@gmail.com"}</button></CopyToClipboard>
                    <CopyToClipboard  text={"dhruvrajsingh_22191@aitpune.edu.in"} onCopy={()=>alert("Text Copied")}><button onMouseEnter={() => setIsHovering3(true)} onMouseLeave={() => setIsHovering3(false)} className=" my-1 h-8 block text-xs border-white border-2 w-56 rounded-lg hover:bg-white hover:text-black"><i class="fa-solid fa-envelope"></i> {isHovering3 ? "Click to Copy" : ": dhruvrajsingh_22191@aitpune.edu.in"}</button></CopyToClipboard>

                </div>
            </div> 
            
        </footer>
        <div class="bottomfooter h-16 bg-black text-gray-400 border-t-2  text-sm text-center">
            <h1 class="block py-4"> © 2024 CaptainRaj_19. All rights reserved.</h1>

        </div>
    </section>
    </div>
)
}